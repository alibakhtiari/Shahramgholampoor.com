export function initContactForm() {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const successMsg = document.getElementById("success_message");
    const errorMsg = document.getElementById("error_message");
    const errorText = document.getElementById("error_text");
    const btn = form?.querySelector(".btn-send") as HTMLButtonElement;

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            if (!successMsg || !errorMsg || !btn) return;

            // Reset state
            successMsg.style.display = "none";
            errorMsg.style.display = "none";
            btn.disabled = true;
            btn.textContent = "Sending...";

            const formData = new FormData(form);

            try {
                const response = await fetch("/api/send", {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();

                if (response.ok) {
                    form.style.display = "none";
                    successMsg.style.display = "block";
                    form.reset();
                } else {
                    throw new Error(data.message || "Failed to send message");
                }
            } catch (error) {
                errorMsg.style.display = "block";
                if (errorText && error instanceof Error) {
                    errorText.textContent = error.message;
                }
            } finally {
                btn.disabled = false;
                btn.textContent = "Submit";
            }
        });
    }
}
