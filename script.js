// --- Configuration ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPPeRKscYFjfj9lQva3FJ1-NioG2zN4v2p_UMkIOmlY_tBYleTYcIYt9PBwANXnxyvWw/exec";

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Year in Footer ---
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- 2. Scroll Reveal Animation (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));


    // --- 3. Phone Masking Logic ---
    const phoneInput = document.getElementById('whatsapp');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric
            
            if (value.length > 11) value = value.slice(0, 11); // Limit length

            if (value.length > 2) {
                if (value.length <= 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                }
            }
            
            e.target.value = value;
        });
    }

    // --- 4. Form Submission Logic ---
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');
    const submitButton = document.getElementById('submitButton');
    const btnSpinner = document.getElementById('btnSpinner');
    const btnText = document.getElementById('btnText');
    const errorMessage = document.getElementById('errorMessage');
    const resetButton = document.getElementById('resetButton');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Reset States
            errorMessage.classList.add('hidden');
            
            // Validate Phone Length
            const phoneVal = phoneInput.value.replace(/\D/g, '');
            if (phoneVal.length < 10) {
                alert("Por favor, insira um número de WhatsApp válido.");
                return;
            }

            // Set Loading State
            submitButton.disabled = true;
            btnSpinner.classList.remove('hidden');
            btnText.textContent = "Processando...";
            submitButton.classList.add('opacity-75', 'cursor-not-allowed');

            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                whatsapp: document.getElementById('whatsapp').value,
                date: new Date().toLocaleString('pt-BR')
            };

            try {
                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                // Success Handling (Assuming success since 'no-cors' returns opaque response)
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
                
            } catch (error) {
                console.error('Erro ao enviar:', error);
                errorMessage.classList.remove('hidden');
                
                // Reset Button State
                submitButton.disabled = false;
                btnSpinner.classList.add('hidden');
                btnText.textContent = "RECEBER CONSULTORIA GRATUITA";
                submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
            }
        });
    }

    // Reset Form Listener
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            successMessage.classList.add('hidden');
            form.classList.remove('hidden');
            form.reset();
            
            // Reset Button State
            submitButton.disabled = false;
            btnSpinner.classList.add('hidden');
            btnText.textContent = "RECEBER CONSULTORIA GRATUITA";
            submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
        });
    }
});