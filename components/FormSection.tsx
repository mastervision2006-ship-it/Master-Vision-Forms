import React, { useState } from 'react';
import { formatPhone } from '../utils/validators';

// URL de produção do Google Apps Script fornecida
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPPeRKscYFjfj9lQva3FJ1-NioG2zN4v2p_UMkIOmlY_tBYleTYcIYt9PBwANXnxyvWw/exec";

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let finalValue = value;
    
    if (name === 'whatsapp') {
      finalValue = formatPhone(value);
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Validação básica
    if (formData.whatsapp.length < 14) {
      alert("Por favor, insira um número de WhatsApp válido.");
      setStatus('idle');
      return;
    }

    try {
      // O modo 'no-cors' é necessário para envios diretos do navegador para o Google Apps Script
      // Isso significa que não conseguimos ler a resposta JSON, mas o envio funciona.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          nome: formData.nome,
          email: formData.email,
          whatsapp: formData.whatsapp,
          date: new Date().toLocaleString('pt-BR') // Data formatada para facilitar leitura na planilha
        })
      });

      // Assumimos sucesso se não houver erro de rede, pois 'no-cors' retorna uma resposta opaca
      setStatus('success');
      setFormData({ nome: '', email: '', whatsapp: '' });
      
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    }
  };

  return (
    <section id="cadastro" className="py-24 px-6 relative flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>

      <div className="w-full max-w-lg relative z-10">
        <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_0_60px_-20px_rgba(255,28,28,0.15)] relative overflow-hidden">
           
           {/* Top Border Glow */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Consultoria <span className="text-brand-red">Gratuita</span></h3>
            <p className="text-neutral-400">Preencha seus dados para receber o contato de um assessor oficial.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Cadastro Confirmado!</h4>
              <p className="text-neutral-400">Nossa equipe entrará em contato pelo WhatsApp em breve.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-brand-red hover:text-red-400 text-sm font-semibold tracking-wide uppercase border-b border-transparent hover:border-red-400 transition-all"
              >
                Cadastrar outro número
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="nome" className="text-xs font-bold text-neutral-500 ml-1 uppercase tracking-widest">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all shadow-inner"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-neutral-500 ml-1 uppercase tracking-widest">Email Principal</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all shadow-inner"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-xs font-bold text-neutral-500 ml-1 uppercase tracking-widest">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  id="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all shadow-inner"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 mt-6 bg-brand-red hover:bg-[#ff0000] text-white font-bold rounded-xl shadow-lg shadow-brand-red/20 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center tracking-wide"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </>
                ) : (
                  "RECEBER CONSULTORIA GRATUITA"
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Ocorreu um erro ao enviar. Tente novamente ou chame no WhatsApp.
                </p>
              )}
              
              <div className="flex items-center justify-center gap-2 mt-6 opacity-60">
                <svg className="w-3 h-3 text-neutral-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <p className="text-xs text-neutral-500">
                  Seus dados estão criptografados e 100% seguros.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;