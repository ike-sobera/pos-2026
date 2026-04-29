const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace standard links
content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-secondary">Matricule-se agora!<\/a>/g,
    '<a href="#reserva" class="btn-secondary">Reservar Vaga</a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary">Matricule-se agora!<\/a>/g,
    '<a href="#reserva" class="btn-primary mobile-link">Reservar Vaga</a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary shadow-2xl shadow-brand-gold\/20">\s*Faça agora mesmo a sua matrícula\s*<\/a>/g,
    '<a href="#reserva" class="btn-primary shadow-2xl shadow-brand-gold/20">\n                        Quero reservar minha vaga\n                    </a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary px-12 py-4">\s*Quero me especializar agora!\s*<\/a>/g,
    '<a href="#reserva" class="btn-primary px-12 py-4">\n                        Quero reservar minha vaga\n                    </a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary">\s*Garantir domínio técnico\s*<\/a>/g,
    '<a href="#reserva" class="btn-primary">\n                        Reservar minha vaga\n                    </a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary text-base md:text-xl shadow-xl shadow-brand-gold\/20 leading-tight">\s*Quero garantir minha vaga!\s*<\/a>/g,
    '<a href="#reserva" class="btn-primary text-base md:text-xl shadow-xl shadow-brand-gold/20 leading-tight">\n                            Quero reservar minha vaga!\n                        </a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary text-lg">\s*Matricule-se agora!\s*<\/a>/g,
    '<a href="#reserva" class="btn-primary text-lg">\n                        Reservar minha vaga!\n                    </a>'
);

content = content.replace(
    /<a href="https:\/\/saberdigital\.site\.engaged\.com\.br\/p\/checkout\/58n5d65unc" target="_blank"\s*class="btn-primary">\s*Tem alguma dúvida\? Fale conosco!\s*<\/a>/g,
    '<a href="#reserva" class="btn-primary">\n                        Quero reservar minha vaga!\n                    </a>'
);

// Replace the #oferta section with #reserva section
const ofertaSectionStart = content.indexOf('<!-- Conversion Section (Oferta) -->');
const faqSectionStart = content.indexOf('<!-- FAQ Section - Section 8 -->');

if (ofertaSectionStart !== -1 && faqSectionStart !== -1) {
    const reservaSection = `<!-- Reserva Section -->
        <section id="reserva" class="py-24 relative overflow-hidden">
            <!-- Background Glow -->
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <div class="section-container relative z-10 flex justify-center">
                <!-- Glassmorphism Card -->
                <div
                    class="w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-brand-gold/30 rounded-[32px] p-6 md:p-12 space-y-8 shadow-2xl relative overflow-hidden">

                    <!-- Header -->
                    <div class="text-center space-y-4">
                        <h2 class="text-3xl md:text-5xl font-extrabold text-brand-gold">Reserva de Vaga</h2>
                        <p class="text-white/70 text-base md:text-lg">Preencha seus dados abaixo para reservar sua vaga com condições exclusivas e garantir prioridade.</p>
                    </div>

                    <!-- Form -->
                    <form class="space-y-5" action="#" method="POST" onsubmit="event.preventDefault(); alert('Sua reserva foi realizada com sucesso! Entraremos em contato em breve.'); this.reset();">
                        <div class="space-y-2 text-left">
                            <label class="text-sm font-bold text-white/80" for="nome">Nome Completo</label>
                            <input type="text" id="nome" name="nome" required class="w-full bg-[#0B111A]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all" placeholder="Como você gostaria de ser chamado(a)">
                        </div>
                        <div class="space-y-2 text-left">
                            <label class="text-sm font-bold text-white/80" for="email">E-mail Profissional</label>
                            <input type="email" id="email" name="email" required class="w-full bg-[#0B111A]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all" placeholder="Seu melhor e-mail">
                        </div>
                        <div class="space-y-2 text-left">
                            <label class="text-sm font-bold text-white/80" for="whatsapp">WhatsApp</label>
                            <input type="tel" id="whatsapp" name="whatsapp" required class="w-full bg-[#0B111A]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all" placeholder="(00) 00000-0000">
                        </div>
                        
                        <div class="pt-4">
                            <button type="submit" class="btn-primary w-full text-lg md:text-xl py-5 rounded-2xl shadow-[0_0_30px_rgba(206,161,98,0.2)] !bg-brand-gold active:scale-95 transition-all text-white font-extrabold uppercase">
                                GARANTIR MINHA RESERVA
                            </button>
                        </div>
                        
                        <p class="text-[11px] text-white/40 text-center mt-4">
                            Seus dados estão seguros. Não enviamos spam.
                        </p>
                    </form>
                </div>
            </div>
        </section>

        `;
    content = content.substring(0, ofertaSectionStart) + reservaSection + content.substring(faqSectionStart);
} else {
    console.log("Could not find section borders");
}

// Comment out the countdown timer logic using string splitting
const timerLogicStart = content.indexOf('/**\\n         * COUNTDOWN TIMER LOGIC');
if (timerLogicStart !== -1) {
    const timerLogicEnd = content.indexOf('}', content.indexOf('}, 1000);')) + 1;
    if (timerLogicEnd > 0) {
        content = content.substring(0, timerLogicStart) + '/** COUNTDOWN TIMER LOGIC (Removed) */' + content.substring(timerLogicEnd);
    }
}

content = content.replace(/window\.addEventListener\('load', startCountdown\);/g, '// window.addEventListener(\'load\', startCountdown);');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete.');
