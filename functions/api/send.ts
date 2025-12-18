import { Resend } from 'resend';
import type { PagesFunction } from '@cloudflare/workers-types';

interface Env {
    RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    // Use the API key from the environment variables (Cloudflare Pages settings)
    const resend = new Resend(env.RESEND_API_KEY);

    try {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        const file = data.get('image');

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    message: 'Missing required fields',
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            ) as any;
        }

        let attachments: any[] = [];
        // Safer check for file upload: verify it's not a string (as formData returns string | File) and has size
        if (file && typeof file !== 'string') {
            const fileObj = file as unknown as File;
            if (fileObj.size > 0) {
                const arrayBuffer = await fileObj.arrayBuffer();
                // Use node:buffer (requires nodejs_compat flag in wrangler.toml/jsonc)
                const { Buffer } = await import('node:buffer');
                const buffer = Buffer.from(arrayBuffer);

                attachments.push({
                    filename: fileObj.name,
                    content: buffer,
                });
            }
        }

        const { data: emailData, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Consider using a verified domain
            to: ['info@shahramgholampoor.com'],
            subject: `New Message from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
            replyTo: email as string,
            attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (error) {
            return new Response(
                JSON.stringify({
                    message: error.message,
                }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            ) as any;
        }

        return new Response(
            JSON.stringify({
                message: 'Email sent successfully!',
                id: emailData?.id
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        ) as any;
    } catch (e: any) {
        return new Response(
            JSON.stringify({
                message: 'Internal server error: ' + (e.message || String(e)),
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        ) as any;
    }
};
