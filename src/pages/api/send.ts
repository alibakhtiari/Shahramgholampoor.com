export const prerender = false;

import { Buffer } from 'node:buffer';

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const file = data.get('image') as File | null;

    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({
                message: 'Missing required fields',
            }),
            { status: 400 }
        );
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    let attachments = [];
    if (file && file.size > 0) {
        // Convert File to ArrayBuffer and then to Buffer (if needed by Resend node SDK)
        // In Cloudflare Workers, Resend SDK might handle ArrayBuffer or we pass content as Buffer.
        // Resend 'content' expects Buffer | string.
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        attachments.push({
            filename: file.name,
            content: buffer,
        });
    }

    try {
        const { data: emailData, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Update this to a verified domain if available
            to: ['info@shahramgholampoor.com'], // Or the user's email
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
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({
                message: 'Email sent successfully!',
                id: emailData?.id
            }),
            { status: 200 }
        );
    } catch (e) {
        return new Response(
            JSON.stringify({
                message: 'Internal server error: ' + (e instanceof Error ? e.message : String(e)),
            }),
            { status: 500 }
        );
    }
};
