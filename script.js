// --- CONFIGURAÇÃO OBRIGATÓRIA ---
// URL DO GOOGLE APPS SCRIPT (Web App URL)
// Atualizado para implantação: AKfycbzNnLWQyFQgBpH53kfUq9hWR3QI6cNUakRlfatoUo1Z3Uybbwy1-r_5uLU7RbDa91LBcg
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNnLWQyFQgBpH53kfUq9hWR3QI6cNUakRlfatoUo1Z3Uybbwy1-r_5uLU7RbDa91LBcg/exec"; 

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Year in Footer ---
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- 2. Scroll Reveal Animation (Fail-Safe Version) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('js-reveal');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.classList.add('js-reveal'); 
        revealObserver.observe(el);    
    });


    // --- 3. Phone Masking Logic ---
    const phoneInput = document.getElementById('whatsapp');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); 
            
            if (value.length > 11) value = value.slice(0, 11); 

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

            // Verificação de URL configurada
            if (SCRIPT_URL.includes("COLE_SUA_URL")) {
                alert("ERRO DE CONFIGURAÇÃO: A URL do script não foi configurada corretamente.");
                return;
            }

            // Reset States
            if (errorMessage) errorMessage.classList.add('hidden');
            
            // Validate Phone Length
            const phoneVal = phoneInput.value.replace(/\D/g, '');
            if (phoneVal.length < 10) {
                alert("Por favor, insira um número de WhatsApp válido.");
                return;
            }

            // Set Loading State
            submitButton.disabled = true;
            if (btnSpinner) btnSpinner.classList.remove('hidden');
            if (btnText) btnText.textContent = "Processando...";
            submitButton.classList.add('opacity-75', 'cursor-not-allowed');

            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                whatsapp: document.getElementById('whatsapp').value,
                date: new Date().toLocaleString('pt-BR')
            };

            try {
                // MUDANÇA CRÍTICA: Content-Type text/plain evita o bloqueio de CORS do Google
                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: JSON.stringify(formData)
                });

                // Success Handling
                // Como usamos no-cors, não recebemos resposta legível, assumimos sucesso se não der erro de rede.
                form.classList.add('hidden');
                if (successMessage) successMessage.classList.remove('hidden');
                
            } catch (error) {
                console.error('Erro ao enviar:', error);
                if (errorMessage) errorMessage.classList.remove('hidden');
                
                // Reset Button State
                submitButton.disabled = false;
                if (btnSpinner) btnSpinner.classList.add('hidden');
                if (btnText) btnText.textContent = "RECEBER CONSULTORIA GRATUITA";
                submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
            }
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (successMessage) successMessage.classList.add('hidden');
            if (form) {
                form.classList.remove('hidden');
                form.reset();
            }
            
            // Reset Button State
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
            }
            if (btnSpinner) btnSpinner.classList.add('hidden');
            if (btnText) btnText.textContent = "RECEBER CONSULTORIA GRATUITA";
        });
    }
});