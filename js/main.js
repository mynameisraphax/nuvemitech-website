document.addEventListener('DOMContentLoaded', () => {
    // Traduções
    const translations = {
      'pt-BR': {
        'title.home': 'NuvemITech - Soluções em TI e Desenvolvimento',
        'title.services': 'Serviços - NuvemITech',
        'title.about': 'Sobre - NuvemITech',
        'title.contact': 'Contato - NuvemITech',
        'nav.home': 'Home',
        'nav.services': 'Serviços',
        'nav.about': 'Sobre',
        'nav.contact': 'Contato',
        'hero.title': 'Inovação em TI com a NuvemITech 🚀',
        'hero.subtitle': 'Soluções personalizadas em TI, redes e desenvolvimento para impulsionar seu negócio.',
        'hero.cta': 'Conheça Nossos Serviços',
        'services.title': 'Serviços em Destaque 💻',
        'services.computers.title': 'Manutenção de Computadores',
        'services.computers.description': 'Formatação, upgrades, diagnósticos e recuperação de dados.',
        'services.networks.title': 'Redes Empresariais',
        'services.networks.description': 'Projetos, configuração de servidores, VPNs e monitoramento.',
        'services.development.title': 'Desenvolvimento',
        'services.development.description': 'Sites, chatbots, automações e APIs sob medida.',
        'services.cta': 'Saiba Mais',
        'services.details': 'Ver Detalhes',
        'services.computers.maintenance.title': 'Manutenção e Upgrades',
        'services.computers.maintenance.description': 'Formatação, reinstalação de sistemas, limpeza, upgrades de hardware (SSD, RAM).',
        'services.computers.diagnostics.title': 'Diagnósticos e Recuperação',
        'services.computers.diagnostics.description': 'Diagnósticos avançados, recuperação de dados, configuração de backups.',
        'services.computers.security.title': 'Segurança e Otimização',
        'services.computers.security.description': 'Instalação de antivírus, otimização para gamers/designers.',
        'services.networks.projects.title': 'Projetos de Rede',
        'services.networks.projects.description': 'Estruturação, instalação de roteadores e cabos.',
        'services.networks.servers.title': 'Servidores e VPNs',
        'services.networks.servers.description': 'Configuração de servidores, VPNs e firewalls.',
        'services.networks.monitoring.title': 'Monitoramento e Consultoria',
        'services.networks.monitoring.description': 'Sistemas de monitoramento e consultoria de conexões.',
        'services.development.websites.title': 'Sites e APIs',
        'services.development.websites.description': 'Sites completos, landing pages, APIs de consulta.',
        'services.development.automation.title': 'Automação e IA',
        'services.development.automation.description': 'Chatbots, automações de análise de dados (Python).',
        'services.development.databases.title': 'Banco de Dados',
        'services.development.databases.description': 'Configuração e otimização de bancos de dados.',
        'about.title': 'Sobre a NuvemITech 🌐',
        'about.description': 'A NuvemITech é uma empresa de São Paulo que combina inovação e expertise técnica para oferecer soluções em TI, redes e desenvolvimento. Com uma equipe apaixonada e anos de experiência, entregamos serviços personalizados que otimizam sua tecnologia e impulsionam seu negócio.',
        'about.me.title': 'Sobre Mim',
        'about.me.description': 'Sou Raphax, fundador da NuvemITech, apaixonado por tecnologia e inovação. Com mais de 10 anos de experiência em TI, redes e desenvolvimento, lidero uma equipe dedicada a transformar ideias em soluções práticas. Nosso objetivo é simplificar a tecnologia para que seu negócio prospere, oferecendo serviços personalizados com excelência e criatividade.',
        'about.cta': 'Entre em Contato',
        'contact.title': 'Entre em Contato 📞',
        'contact.form.title': 'Envie sua Mensagem',
        'contact.form.legend': 'Formulário de Contato',
        'contact.form.name': 'Nome',
        'contact.form.name_placeholder': 'Seu nome',
        'contact.form.email': 'E-mail',
        'contact.form.email_placeholder': 'seu@email.com',
        'contact.form.message': 'Mensagem',
        'contact.form.message_placeholder': 'Sua mensagem',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.info.title': 'Informações de Contato',
        'contact.info.location': 'São Paulo, SP',
        'contact.tech.title': 'Tecnologias que Dominamos 🌐',
        'footer.company': 'NuvemITech - Soluções em TI, Redes e Desenvolvimento',
        'footer.copyright': 'São Paulo, SP | © 2025 NuvemITech. Todos os direitos reservados.'
      },
      'en': {
        'title.home': 'NuvemITech - IT and Development Solutions',
        'title.services': 'Services - NuvemITech',
        'title.about': 'About - NuvemITech',
        'title.contact': 'Contact - NuvemITech',
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'Innovation in IT with NuvemITech 🚀',
        'hero.subtitle': 'Customized IT, networking, and development solutions to boost your business.',
        'hero.cta': 'Explore Our Services',
        'services.title': 'Featured Services 💻',
        'services.computers.title': 'Computer Maintenance',
        'services.computers.description': 'Formatting, upgrades, diagnostics, and data recovery.',
        'services.networks.title': 'Business Networks',
        'services.networks.description': 'Projects, server configuration, VPNs, and monitoring.',
        'services.development.title': 'Development',
        'services.development.description': 'Websites, chatbots, automations, and custom APIs.',
        'services.cta': 'Learn More',
        'services.details': 'View Details',
        'services.computers.maintenance.title': 'Maintenance and Upgrades',
        'services.computers.maintenance.description': 'Formatting and reinstallation of operating systems, internal/external cleaning, SSD, RAM, and processor upgrades for maximum performance.',
        'services.computers.diagnostics.title': 'Diagnostics and Recovery',
        'services.computers.diagnostics.description': 'Advanced diagnostics, data recovery, local and cloud backup configuration.',
        'services.computers.security.title': 'Security and Optimization',
        'services.computers.security.description': 'Antivirus installation, optimization for gamers/designers.',
        'services.networks.projects.title': 'Network Projects',
        'services.networks.projects.description': 'Structuring, router and cable installation.',
        'services.networks.servers.title': 'Servers and VPNs',
        'services.networks.servers.description': 'Server configuration, VPNs, and firewalls.',
        'services.networks.monitoring.title': 'Monitoring and Consulting',
        'services.networks.monitoring.description': 'Remote monitoring systems and connection consulting.',
        'services.development.websites.title': 'Websites and APIs',
        'services.development.websites.description': 'Complete websites, landing pages, query APIs.',
        'services.development.automation.title': 'Automation and AI',
        'services.development.automation.description': 'Chatbots, data analysis automations (Python).',
        'services.development.databases.title': 'Databases',
        'services.development.databases.description': 'Database configuration and optimization.',
        'about.title': 'About NuvemITech 🌐',
        'about.description': 'NuvemITech is a São Paulo-based company that combines innovation and technical expertise to deliver IT, networking, and development solutions. With a passionate team and years of experience, we provide customized services that optimize your technology and drive your business forward.',
        'about.me.title': 'About Me',
        'about.me.description': 'I’m Raphax, founder of NuvemITech, passionate about technology and innovation. With over 10 years of experience in IT, networking, and development, I lead a dedicated team to turn ideas into practical solutions. Our goal is to simplify technology so your business thrives, offering personalized services with excellence and creativity.',
        'about.cta': 'Get in Touch',
        'contact.title': 'Get in Touch 📞',
        'contact.form.title': 'Send Your Message',
        'contact.form.legend': 'Contact Form',
        'contact.form.name': 'Name',
        'contact.form.name_placeholder': 'Your name',
        'contact.form.email': 'Email',
        'contact.form.email_placeholder': 'your@email.com',
        'contact.form.message': 'Message',
        'contact.form.message_placeholder': 'Your message',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Information',
        'contact.info.location': 'São Paulo, SP',
        'contact.tech.title': 'Technologies We Master 🌐',
        'footer.company': 'NuvemITech - IT, Networking, and Development Solutions',
        'footer.copyright': 'São Paulo, SP | © 2025 NuvemITech. All rights reserved.'
      }
    };
  
    // Função para atualizar textos com base no idioma
    function updateLanguage(lang) {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
          element.placeholder = translations[lang][key];
        }
      });
      document.querySelectorAll('.toggle-details').forEach(button => {
        const isVisible = !button.nextElementSibling.classList.contains('d-none');
        const detailsKey = isVisible ? 'data-details-' + (lang === 'pt-BR' ? 'pt' : 'en') : '';
        if (isVisible && button.nextElementSibling.textContent) {
          button.nextElementSibling.textContent = button.getAttribute(detailsKey);
        }
        button.textContent = isVisible ? (lang === 'pt-BR' ? 'Ocultar Detalhes' : 'Hide Details') : translations[lang]['services.details'];
      });
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
      localStorage.setItem('language', lang);
    }
  
    // Inicializar idioma
    const savedLanguage = localStorage.getItem('language') || 'pt-BR';
    updateLanguage(savedLanguage);
  
    // Alternador de Idioma
    document.querySelectorAll('.lang-btn').forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
      });
    });
  
    // Persistência de Tema com localStorage
    const themeButton = document.querySelector('[data-theme-btn]');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    if (themeButton) {
      themeButton.setAttribute('data-theme-btn', savedTheme);
      themeButton.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        themeButton.setAttribute('data-theme-btn', newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  
    // Efeito de Partículas (Canvas)
    const canvas = document.createElement('canvas');
    canvas.className = 'canvas-particles';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particles = [];
    const particleCount = 50;
  
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
  
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
  
      draw() {
        ctx.fillStyle = document.body.getAttribute('data-theme') === 'dark' ? 'rgba(211, 211, 211, 0.6)' : 'rgba(169, 169, 169, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  
    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });
      requestAnimationFrame(animateParticles);
    }
  
    initParticles();
    animateParticles();
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
    // Formulário de Contato com API Fictícia
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name && email && message) {
          try {
            // Simulação de API (substitua por API real, ex.: EmailJS, Formspree)
            const response = await fetch('https://api.example.com/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, message }),
            });
            if (response.ok) {
              alert(savedLanguage === 'pt-BR' ? 'Mensagem enviada com sucesso! Entraremos em contato em breve.' : 'Message sent successfully! We will contact you soon.');
              contactForm.reset();
            } else {
              alert(savedLanguage === 'pt-BR' ? 'Erro ao enviar a mensagem. Tente novamente.' : 'Error sending message. Please try again.');
            }
          } catch (error) {
            console.error('Erro na API:', error);
            alert(savedLanguage === 'pt-BR' ? 'Erro ao enviar a mensagem. Verifique sua conexão.' : 'Error sending message. Check your connection.');
          }
        } else {
          alert(savedLanguage === 'pt-BR' ? 'Por favor, preencha todos os campos.' : 'Please fill in all fields.');
        }
      });
    }
  
    // Toggles de Detalhes nos Cards de Serviços
    document.querySelectorAll('.toggle-details').forEach(button => {
      button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const isVisible = !details.classList.contains('d-none');
        details.classList.toggle('d-none');
        const lang = localStorage.getItem('language') || 'pt-BR';
        details.textContent = isVisible ? '' : button.getAttribute('data-details-' + (lang === 'pt-BR' ? 'pt' : 'en'));
        button.textContent = isVisible ? translations[lang]['services.details'] : (lang === 'pt-BR' ? 'Ocultar Detalhes' : 'Hide Details');
      });
    });
  
    // Carrossel Infinito de Tecnologias
    const track = document.querySelector('.carousel-track');
    if (track) {
      const icons = track.innerHTML;
      track.innerHTML += icons; // Duplica os ícones para loop infinito
    }
  });