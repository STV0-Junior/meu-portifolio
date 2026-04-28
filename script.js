// Adicione isso no início do seu script.js
const i18nextConfig = {
  lng: 'pt', // idioma padrão
  fallbackLng: 'pt',
  debug: false,
  resources: {
    pt: {
        translation: {
            // Seção Início
            // Seção Início
            "ola_eu_sou": "OLÁ, EU SOU ESTEVÃO JUNIOR",
            "desenvolvedor_full_stack": "Engenheiro de Computação | Desenvolvedor & Sistemas Embarcados",
            "descricao_sobre_mim": "Especialista em unir hardware e software com projetos premiados em IoT. Desenvolvo desde sistemas embarcados (Arduino, C/C++) até automações em Python e aplicações web completas. Conecto o mundo físico ao digital para criar soluções inovadoras e escaláveis.",
            
            // Seção Diferencial
            "meu_diferencial": "Meu diferencial:",
            "texto_diferencial": "Ponte entre Hardware e Software com visão integrada de sistemas. Combino expertise em tecnologia embarcada (com projeto premiado em IoT) com desenvolvimento full-stack para criar soluções completas. Com foco em otimização de performance desde o circuito até a interface do usuário, com foco em sustentabilidade e escalabilidade. Além de alto conhecimento em Hardware.",
            
            // Seção Habilidades
            "minhas_tecnologias": "Minhas tecnologias:",
            "front_end": "Front-end",
            "back_end": "Back-end",
            "banco_dados": "Banco de Dados",
            
            // Descrições de tecnologias
            "html_desc": "",
            "css_desc": "(Flexbox, Grid, Animations)",
            "js_desc": "(React/Vue)",
            "python_desc": "(Para automações)",
            "php_desc": "",
            "sql_desc": "(MySQL, PostgreSQL)",

            //projetos

            // Cabeçalho e busca
            "meus_projetos": "MEUS PROJETOS",
            "buscar_projetos": "Buscar projetos...",
            "sugestoes": "Sugestões:",
            "Inicio": "Início",
            "Projetos": "Projetos",
            "Formação": "Formação",
            "mensagem_contato": "Me mande uma mensagem!",

            // Títulos e seções comuns
            "funcionalidades_principais": "⚡ Funcionalidades Principais",
            "features_principais": "📋 Features Principais",
            "tecnologias": "🛠️ Tecnologias",
            "impacto": "📈 Impacto",
            "mecanismos_seguranca": "🔒 Mecanismos de Segurança",

            // HydroGuard
            "monitoramento_tempo_real": "Monitoramento em tempo real de vazão e consumo",
            "detecao_vazamentos": "Detecção proativa de vazamentos (95% precisão)",
            "dualidade_interfaces": "Dualidade de interfaces: LCD + Serial",
            "simulacao_cenarios": "Simulação adaptável de cenários (12h/24h)",
            "reducao_agua": "Redução de 40% no desperdício de água",
            "adaptavel_cenarios": "Adaptável para múltiplos cenários",
            "autonomia_bateria": "Autonomia de 72h em bateria 9V",

            // E-commerce
            "gerenciamento_produtos": "Gerenciamento de produtos com categorização",
            "upload_imagens": "Upload de imagens via drag-and-drop",
            "controle_estoque": "Controle de estoque por tamanhos",
            "painel_admin": "Painel administrativo intuitivo",
            "exportacao_dados": "Exportação de dados para CSV",
            "autenticacao_criptografada": "Autenticação com sessões criptografadas",
            "protecao_injection": "Proteção contra SQL injection/XSS",
            "sanitizacao_inputs": "Sanitização de inputs em tempo real",
            "painel_admin_completo": "Painel de administrador (adição, exclusão e modificação de produtos)",

            //formação

            // Cabeçalho
            "minha_formacao": "MINHA FORMAÇÃO",
            
            // Termos gerais
            "hardware": "Hardware",
            "programacao": "Programação",
            "sistemas_embarcados": "Sistemas Embarcados",
            "analises_quimicas": "Análises Químicas",
            "controle_qualidade": "Controle de Qualidade",
            "estagio_nutec": "Estágio no Nutec/UFC",
            "estagio": "Estágio:",
            "cursos_complementares": "Cursos Complementares",

            //contato

            "contato_titulo": "ENTRE EM CONTATO",
            "contato_texto": "Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através dos canais abaixo:"
        }
    },
    en: {
        translation: {

            // Seção Início
            "ola_eu_sou": "HELLO, I'M ESTEVÃO JUNIOR",
            "desenvolvedor_full_stack": "Computer Engineering | Developer & System Embedded",
            "descricao_sobre_mim": "Specialist in bridging hardware and software with award-winning IoT projects. I develop everything from embedded systems (Arduino, C/C++) to Python automations and full-stack web applications. I connect the physical to the digital to create innovative and scalable solutions.",
            
            // Seção Diferencial
            "meu_diferencial": "My differential:",
            "texto_diferencial": "Bridge between Hardware and Software with an integrated systems vision. I combine expertise in embedded technology (with an award-winning IoT project) with full-stack development to create complete solutions. Focused on performance optimization from the circuit to the user interface, with an emphasis on sustainability and scalability. Plus deep hardware knowledge.",
            
            // Seção Habilidades
            "minhas_tecnologias": "My technologies:",
            "front_end": "Front-end",
            "back_end": "Back-end",
            "banco_dados": "Database",
            
            // Descrições de tecnologias
            "html_desc": "",
            "css_desc": "(Flexbox, Grid, Animations)",
            "js_desc": "(React/Vue)",
            "python_desc": "(For automations)",
            "php_desc": "",
            "sql_desc": "(MySQL, PostgreSQL)",

            //projetos

            // Cabeçalho e busca
            "meus_projetos": "MY PROJECTS",
            "buscar_projetos": "Search projects...",
            "sugestoes": "Suggestions:",
            "Inicio": "Home",
            "Projetos": "Projects",
            "Formação": "Education",
            "mensagem_contato": "Send me a message!",

            // Títulos e seções comuns
            "funcionalidades_principais": "⚡ Main Features",
            "features_principais": "📋 Key Features",
            "tecnologias": "🛠️ Technologies",
            "impacto": "📈 Impact",
            "mecanismos_seguranca": "🔒 Security Mechanisms",

            // HydroGuard
            "monitoramento_tempo_real": "Real-time flow and consumption monitoring",
            "detecao_vazamentos": "Proactive leak detection (95% accuracy)",
            "dualidade_interfaces": "Dual interfaces: LCD + Serial",
            "simulacao_cenarios": "Adaptable scenario simulation (12h/24h)",
            "reducao_agua": "40% reduction in water waste",
            "adaptavel_cenarios": "Adaptable to multiple scenarios",
            "autonomia_bateria": "72h autonomy on 9V battery",

            // E-commerce
            "gerenciamento_produtos": "Product management with categorization",
            "upload_imagens": "Image upload via drag-and-drop",
            "controle_estoque": "Inventory control by sizes",
            "painel_admin": "Intuitive admin panel",
            "exportacao_dados": "Data export to CSV",
            "autenticacao_criptografada": "Encrypted session authentication",
            "protecao_injection": "Protection against SQL injection/XSS",
            "sanitizacao_inputs": "Real-time input sanitization",
            "painel_admin_completo": "Admin panel (add, delete and modify products)",

            //formação

            // Cabeçalho
            "minha_formacao": "MY EDUCATION",
            
            // Termos gerais
            "hardware": "Hardware",
            "programacao": "Programming",
            "sistemas_embarcados": "Embedded Systems",
            "analises_quimicas": "Chemical Analysis",
            "controle_qualidade": "Quality Control",
            "estagio_nutec": "Internship at Nutec/UFC",
            "estagio": "Internship:",
            "cursos_complementares": "Additional Courses",

            // Dentro do objeto de tradução en
            "contato_titulo": "CONTACT ME",
            "contato_texto": "I'm open to new opportunities and collaborations. Feel free to contact me through the channels below:",
        
            // 🔽 NOVA CHAVE ADICIONADA PARA O CONTADOR DE VISITAS (EN)
            "Total de visitas": "Total visits"
        }
    }
}
};

// Inicialize o i18next
i18next
  .use(i18nextBrowserLanguageDetector)
  .init(i18nextConfig, function(err, t) {
    // Inicialização concluída, agora podemos usar a tradução
    updateContent();
    updatePlaceholders();
    document.documentElement.lang = i18next.language || 'pt';
  });

// Função para atualizar todo o conteúdo com as traduções
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });

  // Atualiza os atributos com tradução
  document.querySelectorAll('[data-pt], [data-en]').forEach(element => {
    if (element.hasAttribute('data-pt') && element.hasAttribute('data-en')) {
      element.textContent = i18next.language === 'pt' 
        ? element.getAttribute('data-pt') 
        : element.getAttribute('data-en');
    }
  });

  // Atualiza o texto do botão de tradução
  const translateText = document.querySelector('.translate-text');
  if (translateText) {
    translateText.textContent = i18next.language === 'pt' ? 'EN' : 'PT';
  }
}

function updatePlaceholders() {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = i18next.t(key);
    });
}

// Adicione um evento de clique para o botão de tradução
document.querySelector('.translate-toggle').addEventListener('click', () => {
  const newLang = i18next.language === 'pt' ? 'en' : 'pt';
  i18next.changeLanguage(newLang, (err, t) => {
    if (err) return console.error('something went wrong loading', err);
    updateContent();
    updatePlaceholders();
    document.documentElement.lang = newLang;
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const balaoContato = document.querySelector('.balao-contato');
    
    // Verifica o tema salvo ou usa 'light' como padrão
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateToggle(savedTheme);
    
    // Alternar tema
    toggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggle(newTheme);
    });
    
    function updateToggle(theme) {
        const icon = document.querySelector('.toggle-icon');
        const text = document.querySelector('.toggle-text');
        
        if (theme === 'dark') {
            icon.textContent = '🌙';
            text.textContent = 'dark';
        } else {
            icon.textContent = '☀️';
            text.textContent = 'light';
        }
    }

    // Navegação entre seções
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class de todos os links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            // Adiciona active no link clicado
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const allSections = document.querySelectorAll('section');
            
            // Esconde todas as seções
            allSections.forEach(section => {
                section.classList.add('esconder');
                section.classList.remove('mostrar');
            });
            
            // Mostra apenas a seção alvo
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                targetSection.classList.add('mostrar');
                targetSection.classList.remove('esconder');
                
                // Scroll suave apenas para ajuste de posição
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    

    // Garanta que a seção inicial esteja visível ao carregar
    document.querySelector('#inicio').classList.add('mostrar');

    if (balaoContato) {
        balaoContato.addEventListener('click', function (e) {
            e.stopPropagation();
            balaoContato.classList.toggle('aberto');
        });

        document.addEventListener('click', function (e) {
            if (!balaoContato.contains(e.target)) {
                balaoContato.classList.remove('aberto');
            }
        });
    }
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Função modificada para trabalhar com múltiplos carrosséis
function initCarrossel(carrosselContainer) {
    const carrossel = carrosselContainer.querySelector('.carrossel');
    const slides = carrosselContainer.querySelectorAll('.carrossel-slide');
    const btnAnterior = carrosselContainer.querySelector('.anterior');
    const btnProximo = carrosselContainer.querySelector('.proximo');
    const indicadores = carrosselContainer.querySelectorAll('.indicador');
    let currentIndex = 0;
    
    function updateCarrossel() {
        carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualiza indicadores
        indicadores.forEach((ind, index) => {
            ind.classList.toggle('ativo', index === currentIndex);
        });
    }
    
    btnProximo.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarrossel();
    });
    
    btnAnterior.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarrossel();
    });
    
    
// Navegação por indicadores
indicadores.forEach((ind, index) => {
    ind.addEventListener('click', () => {
        currentIndex = index;
        updateCarrossel();
    });
});
}

// Inicializa todos os carrosséis na página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carrossel-container').forEach(container => {
        initCarrossel(container);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const buscaInput = document.getElementById('busca-projetos');
    const btnBuscar = document.getElementById('btn-buscar');
    const sugestoesTags = document.querySelectorAll('.sugestao-tag');
    
    // Função principal de filtro
    function filtrarProjetos() {
        const termo = buscaInput.value.trim().toLowerCase();
        const projetos = document.querySelectorAll('.projeto-card');
        
        if (termo === '') {
            // Mostra todos os projetos se a busca estiver vazia
            projetos.forEach(projeto => {
                projeto.style.display = 'block';
            });
            return;
        }
        
        projetos.forEach(projeto => {
            const titulo = projeto.querySelector('.projeto-header h3').textContent.toLowerCase();
            const descricao = projeto.querySelector('.projeto-descricao')?.textContent.toLowerCase() || '';
            const tecnologias = Array.from(projeto.querySelectorAll('.tech-badge'))
                                   .map(tech => tech.textContent.toLowerCase())
                                   .join(' ');
            
            // Verifica se o termo existe em qualquer campo
            const corresponde = 
                titulo.includes(termo) || 
                descricao.includes(termo) || 
                tecnologias.includes(termo);
            
            projeto.style.display = corresponde ? 'block' : 'none';
        });
    }
    
    // Event Listeners
    buscaInput.addEventListener('input', filtrarProjetos);
    btnBuscar.addEventListener('click', filtrarProjetos);
    
    // Tecla ESC para limpar
    buscaInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            filtrarProjetos();
            this.focus();
        }
    });
    
    // Evento para as tags de sugestão (versão simplificada)
    sugestoesTags.forEach(tag => {
        tag.addEventListener('click', function() {
            buscaInput.value = this.textContent;
            filtrarProjetos();
            buscaInput.focus();
        });
    });
    
    // Mantém o foco apenas após interação do usuário.
});



    
// Função para tela cheia
function setupFullscreen() {
    const carrosselSlides = document.querySelectorAll('.carrossel-slide');
    
    carrosselSlides.forEach(slide => {
        const media = slide.querySelector('img, video');
        if (!media) return;
        
        media.style.cursor = 'zoom-in';
        media.addEventListener('click', (e) => {
            e.stopPropagation();
            openFullscreen(media);
        });
    });
}

function openFullscreen(media) {
    // Cria overlay
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    
    // Clonagem do elemento de mídia
    const mediaClone = media.cloneNode(true);
    mediaClone.className = media.tagName === 'IMG' ? 'fullscreen-image' : 'fullscreen-video';
    mediaClone.controls = true; // Para vídeos
    
    // Botão de fechar
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-fullscreen';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Monta a estrutura
    overlay.appendChild(mediaClone);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    
    // Fecha ao clicar fora
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    // Fecha com ESC
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setupFullscreen();
});

    






// ========== CHATBOT COM FAQ CORRIGIDO ==========
// Objeto FAQ global (para ser acessado pelas funções)
const faqBot = {
  pt: {
    nome: "Meu nome é Estevão M. Junior, tenho 25 anos.",
    idade: "Tenho 25 anos.",
    profissao: "Sou Engenheiro de Computação (em formação) e Desenvolvedor Full-Stack, com foco em IoT e sistemas embarcados.",
    tecnologias: "Trabalho com: HTML5, CSS3, JavaScript, PHP, Python, C, Flutter, MySQL/PostgreSQL, Arduino.",
    experiencia: "Trabalho como freelancer desde 2022. Principais projetos: loja infantil Dicazo (e-commerce completo) e site para empresa de conserto de eletrodomésticos (catálogo, avaliações e localização).",
    site_assistencia: "O site para assistência técnica foi desenvolvido para uma empresa de conserto de máquinas de lavar e eletrodomésticos. O objetivo era centralizar todas as informações em um só lugar. Principais funcionalidades: catálogo de serviços, avaliações de clientes, localização da empresa via Google Maps, formulário de contato e orçamento rápido. Tecnologias: HTML5, CSS3, JavaScript, PHP (para envio de formulários) e integração com APIs de geolocalização.",
    dicazo_detalhes: "A Dicazo é um e-commerce de roupas infantis completo. Funcionalidades: gerenciamento de produtos com categorias, upload de imagens drag-and-drop, controle de estoque por tamanhos (só permite comprar se houver no banco), carrinho de compras com sessões criptografadas, painel administrativo para adicionar/editar/excluir produtos, exportação de dados para CSV, proteção contra SQL injection e XSS. Tecnologias: PHP, MySQL, JavaScript, HTML5, CSS3.",
    agua_express: "Água Express é um sistema inteligente de pedidos de garrafões de água. Funcionalidades: formulário interativo com validação em tempo real, calculadora automática de preço (R$ 5,00 por garrafão), integração com pagamento via PIX, envio automático do pedido pelo WhatsApp, efeito de digitação para demonstração e transições fluidas. Tecnologias: HTML5, CSS3, JavaScript, WhatsApp API, UI/UX Design.",
    pizzaria_deep: "Pizzaria Deep é um sistema de pedidos online para pizzaria, atualmente em desenvolvimento. Funcionalidades: tela de boas-vindas animada com loader personalizado, carrossel de promoções, categorias interativas, sistema de busca com sugestões, carrinho funcional e design responsivo. Tecnologias: HTML5, CSS3, JavaScript, CSS Grid, Flexbox.",
    conversor_moedas: "Conversor de Moedas Inteligente permite conversão entre mais de 20 moedas internacionais com taxas atualizadas em tempo real via API. Funcionalidades: interface intuitiva, autocompletar para seleção de moedas, validação automática, animações fluidas e design responsivo. Tecnologias: HTML5, CSS3, JavaScript, ExchangeRate-API.",
    fileorganizer: "FileOrganizer é uma ferramenta desktop para organização automática de arquivos. Funcionalidades: interface amigável com seleção de pasta, organização por tipo de arquivo (imagens, vídeos, documentos, etc.), suporte a 10+ categorias, prevenção de sobrescrita. Tecnologias: Python, Tkinter, PyInstaller, sistema de arquivos.",
    calculadora_3d: "Calculadora 3D é uma ferramenta para precificação de impressões 3D. Funcionalidades: cálculo baseado em tempo (horas/minutos), material (kg) e margem de lucro, conversão automática, histórico completo de cálculos, configurações personalizáveis de custos. Tecnologias: Python, Tkinter, JSON, PyInstaller.",
    hydroguard: "HydroGuard é meu projeto de IoT premiado (Melhor Projeto de Sustentabilidade em Hardware). Funcionalidades: monitoramento em tempo real de vazão e consumo, detecção proativa de vazamentos com 95% de precisão, dualidade de interfaces (LCD + Serial), simulação adaptável de cenários (12h/24h). Impacto: redução de 40% no desperdício de água, autonomia de 72h em bateria 9V, adaptável para múltiplos cenários. Tecnologias: Arduino UNO, C/C++ embarcado, LoRaWAN, sensores de fluxo, ISO 9001.",
    eletrodomesticos: "Desenvolvi um site para uma empresa de conserto de máquinas de lavar e eletrodomésticos. Ele reúne informações dos serviços, avaliações de clientes, localização da empresa e formulário de contato, tudo em um só lugar.",
    hydroguard: "HydroGuard é meu projeto de IoT premiado que monitora vazão de água, detecta vazamentos e reduz desperdício em até 40%. Usa Arduino, C++ e LoRaWAN.",
    jogo: "Meu jogo favorito é a franquia Dark Souls 2 e 3. Adoro desafios e a ambientação sombria.",
    contato: "Você pode me enviar e-mail para j.estevao.m.junior@gmail.com, WhatsApp (85) 99206-9495 ou pelo LinkedIn/GitHub no rodapé.",
    curriculo: "Meu currículo está disponível no topo da página, nos botões 'Currículo Português' e 'Resume English'.",
    projetos: "Meus principais projetos são: HydroGuard (IoT premiado), Dicazo (e-commerce infantil), site para assistência técnica de eletrodomésticos, Água Express (pedidos de água), Pizzaria Deep, Conversor de Moedas, FileOrganizer e Calculadora 3D. Todos estão na seção #projetos.",
    formacao: "Faço Engenharia de Computação na UNILAB (Universidade da Integração Internacional da Lusofonia Afro-Brasileira) desde 2023. Também sou Técnico em Química e tenho cursos complementares em Nuvem, Negociação, Redes Neurais e Flutter.",
    unilab: "UNILAB é a Universidade da Integração Internacional da Lusofonia Afro-Brasileira. Lá curso Engenharia de Computação desde 2023."
  },
  en: {
    nome: "My name is Estevão M. Junior, I'm 25 years old.",
    idade: "I'm 25 years old.",
    profissao: "I'm a Computer Engineering student (ongoing) and Full-Stack Developer, focusing on IoT and embedded systems.",
    tecnologias: "I work with: HTML5, CSS3, JavaScript, PHP, Python, C, Flutter, MySQL/PostgreSQL, Arduino.",
    experiencia: "I've been freelancing since 2022. Main projects: Dicazo kids clothing store (full e-commerce) and website for appliance repair company (catalog, reviews, location).",
    site_assistencia: "The appliance repair website was developed for a washing machine and appliance repair company. The goal was to centralize all information in one place. Main features: service catalog, customer reviews, company location via Google Maps, contact form, and quick quote. Technologies: HTML5, CSS3, JavaScript, PHP (form handling), and geolocation APIs.",
    dicazo_detalhes: "Dicazo is a complete kids clothing e-commerce. Features: product management with categories, drag-and-drop image upload, size-based stock control (purchase only if in DB), encrypted session shopping cart, admin panel (add/edit/delete products), CSV export, SQL injection/XSS protection. Technologies: PHP, MySQL, JavaScript, HTML5, CSS3.",
    agua_express: "Water Express is an intelligent water jug ordering system. Features: interactive form with real-time validation, automatic price calculator ($5.00/jug), PIX payment integration, automatic WhatsApp order sending, auto-typing effect for demos, smooth transitions. Technologies: HTML5, CSS3, JavaScript, WhatsApp API, UI/UX Design.",
    pizzaria_deep: "Pizzaria Deep is an online pizza ordering system (under development). Features: animated welcome screen with custom loader, promotions carousel, interactive categories, search with suggestions, functional shopping cart, responsive design. Technologies: HTML5, CSS3, JavaScript, CSS Grid, Flexbox.",
    conversor_moedas: "Smart Currency Converter allows conversion between 20+ international currencies with real-time updated rates via API. Features: intuitive interface, autocomplete for currency selection, automatic validation, smooth animations, responsive design. Technologies: HTML5, CSS3, JavaScript, ExchangeRate-API.",
    fileorganizer: "FileOrganizer is a desktop tool for automatic file organization. Features: user-friendly folder selection, organization by file type (images, videos, documents, etc.), support for 10+ categories, file overwrite prevention. Technologies: Python, Tkinter, PyInstaller, file system.",
    calculadora_3d: "3D Calculator is a pricing tool for 3D printing. Features: calculation based on time (hours/minutes), material (kg), profit margin, automatic time conversion, complete calculation history, customizable cost settings. Technologies: Python, Tkinter, JSON, PyInstaller.",
    hydroguard: "HydroGuard is my award-winning IoT project (Best Sustainability Project in Hardware). Features: real-time flow and consumption monitoring, proactive leak detection (95% accuracy), dual interfaces (LCD + Serial), adaptable scenario simulation (12h/24h). Impact: 40% reduction in water waste, 72h battery autonomy, adaptable to multiple scenarios. Technologies: Arduino UNO, Embedded C/C++, LoRaWAN, flow sensors, ISO 9001.",
    eletrodomesticos: "I built a website for a washing machine & appliance repair company. It brings together service info, customer reviews, company location, and a contact form in one place.",
    hydroguard: "HydroGuard is my award-winning IoT project that monitors water flow, detects leaks, and reduces waste by up to 40%. Built with Arduino, C++ and LoRaWAN.",
    jogo: "My favorite game franchise is Dark Souls 2 and 3. I love challenges and the dark atmosphere.",
    contato: "You can reach me at j.estevao.m.junior@gmail.com, WhatsApp +55 85 99206-9495, or via LinkedIn/GitHub in the footer.",
    curriculo: "My resume is available at the top of the page – buttons 'Currículo Português' and 'Resume English'.",
    projetos: "My main projects are: HydroGuard (award-winning IoT), Dicazo (kids e-commerce), website for appliance repair service, Água Express (water delivery), Pizzaria Deep, Currency Converter, FileOrganizer, and 3D Calculator. All of them are in the #projects section.",
    formacao: "I'm studying Computer Engineering at UNILAB (University of International Integration of Afro-Brazilian Lusophony) since 2023. Also a Chemistry Technician with extra courses in Cloud, Negotiation, Neural Networks and Flutter.",
    unilab: "UNILAB is the University of International Integration of Afro-Brazilian Lusophony. I study Computer Engineering there since 2023."
  }
};

// Função para remover acentos e normalizar
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Palavras-chave (já normalizadas)
const keywordsBot = {
  nome: [
    "nome", "chamar", "qual o seu nome", "seu nome", "teu nome", "quem e voce", "quem é você", "idade",
    "what is your name", "your name", "who are you", "name"
  ],
  idade: [
    "idade", "quantos anos", "anos", "25 anos",
    "how old are you", "age", "years old", "what is your age"
  ],
  profissao: [
    "profissao", "trabalha", "o que voce faz", "oque voce faz", "oq voce faz", "o q voce faz", "oq você faz", "sua area", "engenheiro", "desenvolvedor", "o que você faz", "sua profissao", "qual sua profissao", "qual sua profissão",
    "what do you do", "your job", "profession", "occupation"
  ],
  tecnologias: [
    "tecnologias", "tech", "stack", "linguagens", "ferramentas", "programa", "desenvolvimento", "tecnologia",
    "technologies", "tech stack", "tools", "programming languages"
  ],
  experiencia: [
    "experiencia", "carreira", "ja trabalhou", "trajetoria", "experiências", "serviços já prestou", "já fez",
    "experience", "work history", "freelance projects", "what have you done"
  ],
  sobre_mim: [
    "fale sobre voce", "conte mais sobre voce", "quem é voce", "se apresente", "me fale de voce", "resumo", "bio", "biografia",
    "tell me about yourself", "about you", "introduce yourself", "bio", "who are you"
  ],
  hobbies: [
    "hobby", "hobbies", "gosta de fazer", "tempo livre", "lazer", "diversao", "joga", "videogame",
    "what do you like to do", "free time", "games", "dark souls"
  ],
  soft_skills: [
    "qualidades", "comportamento", "habilidades sociais", "trabalho em equipe", "comunicacao", "soft skills",
    "soft skills", "qualities", "teamwork", "communication"
  ],
  objetivo: [
    "objetivo profissional", "plano de carreira", "futuro", "o que quer fazer", "onde se ve", "almeja",
    "goal", "career goal", "future plans", "what do you want"
  ],
  idiomas: [
    "idiomas", "linguas", "ingles", "fala ingles", "sabe ingles",
    "languages", "english", "do you speak english"
  ],
  localizacao: [
    "onde mora", "localizacao", "cidade", "estado", "ceara", "brasil",
    "location", "where do you live", "city", "brazil"
  ],
  saudacao: [
    "oi", "ola", "bom dia", "boa tarde", "e ai", "olá",
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening", "hola"
  ],
  agradecimento: [
    "obrigado", "valeu", "agradeço",
    "thank", "thanks", "thx", "awesome", "great", "helpful", "you helped"
  ],
  site_assistencia: [
    "assistencia tecnica", "conserto de maquinas", "maquinas de lavar", "site da empresa", "reparo", "eletrodomesticos", "fale mais sobre o site", "me detalhe o site de assistencia", "conte sobre o site de concerto",
    "appliance website", "repair site", "washing machine site"
  ],
  dicazo_detalhes: [
    "dicazo", "loja infantil", "roupas infantis", "e-commerce infantil", "fale mais sobre a dicazo", "como funciona a dicazo",
    "dicazo", "kids ecommerce", "kids store"
  ],
  agua_express: [
    "agua express", "sistema de pedidos de agua", "whatsapp agua", "entrega de agua", "garrafao de agua",
    "water express", "water delivery", "agua express"
  ],
  pizzaria_deep: [
    "pizzaria", "pizzaria deep", "sistema de pizzaria", "pedidos de pizza",
    "pizzaria deep", "pizza system", "pizza ordering"
  ],
  conversor_moedas: [
    "conversor de moedas", "conversor", "moedas", "cambio", "taxa de cambio",
    "currency converter", "converter", "exchange rate"
  ],
  fileorganizer: [
    "fileorganizer", "organizador de arquivos", "organizar arquivos", "limpar pastas",
    "file organizer", "organize files", "clean folders"
  ],
  calculadora_3d: [
    "calculadora 3d", "impressao 3d", "precificar impressao", "custo de impressao 3d", "calculadora de impressao",
    "3d calculator", "3d printing cost", "pricing 3d print"
  ],
  projetos: [
    "projetos", "trabalhou", "fez", "desenvolveu", "já fez", "já desenvolveu", "quais projetos", "me fala dos projetos", "quais seus projetos", "projetos que trabalhou", "liste seus projetos", "conte sobre seus projetos", "seus trabalhos",
    "projects", "portfolio", "what projects", "tell me about your projects"
  ],
  dicazo: [
    "dicazo", "loja infantil", "roupas infantis", "carrinho", "estoque por tamanho",
    "dicazo", "kids store", "children's clothing", "stock by size"
  ],
  eletrodomesticos: [
    "eletrodomestico", "conserto de maquinas", "maquinas de lavar", "site da empresa", "reparo", "assistencia tecnica",
    "appliance", "machine repair", "washing machine"
  ],
  hydroguard: [
    "hydroguard", "projeto iot", "monitoramento de agua", "vazamento", "hidraulico", "agua", "hydro guard",
    "hydroguard", "iot project", "water monitoring", "leak detection"
  ],
  jogo: [
    "jogo", "jogos", "darksouls", "dark souls", "favorito", "video game", "franquia",
    "game", "games", "dark souls", "favorite game"
  ],
  contato: [
    "contato", "email", "whatsapp", "telefone", "falar com voce", "me ligar", "contatar",
    "contact", "email", "whatsapp", "phone", "how to reach you"
  ],
  curriculo: [
    "curriculo", "resume", "download", "cv", "baixar curriculo", "currículo",
    "resume", "cv", "download resume"
  ],
  formacao: [
    "formacao", "faculdade", "estudo", "universidade", "curso", "graduacao", "onde voce estuda", "onde estuda", "onde você estuda", "estuda onde", "unilab",
    "education", "college", "unilab", "university", "what do you study"
  ]
};

function detectLanguage(questionLower) {
  const enIndicators = [
    "what", "who", "where", "when", "why", "how", "is", "are", "do", "does",
    "your", "you", "me", "tell", "about", "project", "technologies", "experience",
    "work", "freelance", "contact", "email", "resume", "education", "college",
    "name", "age", "years", "old", "profession", "job", "stack", "tools"
  ];
  const ptIndicators = [
    "o que", "quem", "onde", "quando", "por que", "como", "é", "são", "faz",
    "seu", "sua", "você", "me", "conte", "sobre", "projeto", "tecnologias", "experiência",
    "trabalho", "freela", "contato", "email", "currículo", "formação", "faculdade",
    "nome", "idade", "anos", "profissão", "trabalha", "ferramentas"
  ];

  let enScore = 0, ptScore = 0;
  enIndicators.forEach(word => { if (questionLower.includes(word)) enScore++; });
  ptIndicators.forEach(word => { if (questionLower.includes(word)) ptScore++; });

  return enScore > ptScore ? 'en' : 'pt';
}
function initChatbot() {
  const widget = document.getElementById('chatbot-widget');
  const toggleBtn = document.getElementById('chat-toggle');
  const closeBtn = document.querySelector('.chat-close');
  const sendBtn = document.getElementById('chat-send');
  const chatInput = document.getElementById('chat-input');
  const messagesDiv = document.querySelector('.chat-messages');

  if (!widget || !toggleBtn || !closeBtn || !sendBtn || !chatInput || !messagesDiv) return;

  toggleBtn.addEventListener('click', () => {
    widget.style.display = 'block';
  });
  closeBtn.addEventListener('click', () => {
    widget.style.display = 'none';
  });

function getBotReply(question) {
  // Remove pontuação e normaliza
  let cleanQuestion = question.replace(/[^\w\s]/g, '');
  let lower = normalizeString(cleanQuestion.toLowerCase().trim());

  // Detecta idioma com base nas palavras da pergunta
  let lang = detectLanguage(lower);

  const faqLang = faqBot[lang];

  // Verifica palavras-chave (que já estão em PT/EN)
  for (const [key, words] of Object.entries(keywordsBot)) {
    for (const word of words) {
      if (lower.includes(normalizeString(word))) {
        return faqLang[key] || `[${key}] não definido em ${lang.toUpperCase()}`;
      }
    }
  }

  // Resposta padrão no idioma detectado
  return lang === 'pt'
    ? "Ainda não aprendi essa pergunta. Pode perguntar sobre: nome, profissão, tecnologias, experiência, HydroGuard, contato, currículo ou formação."
    : "I haven't learned that yet. You can ask about: name, profession, tech stack, experience, HydroGuard, contact, resume or education.";
}

  function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser ? 'user-msg' : 'bot-msg';
    msgDiv.textContent = text;
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  function handleSend() {
    const question = chatInput.value.trim();
    if (!question) return;
    addMessage(question, true);
    const reply = getBotReply(question);
    setTimeout(() => addMessage(reply, false), 300);
    chatInput.value = '';
  }

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

// ========== INICIALIZAÇÃO SEGURA ==========
// Aguarda o i18next carregar antes de iniciar o chat
if (typeof i18next !== 'undefined') {
  if (i18next.isInitialized) {
    initChatbot();
  } else {
    // Se ainda não inicializou, aguarda o callback do i18next
    const originalInit = i18next.init;
    // Não sobrescreva, apenas adicione um listener
    document.addEventListener('DOMContentLoaded', function() {
      // Pequeno delay para garantir que o i18next já foi chamado
      setTimeout(() => {
        if (typeof i18next !== 'undefined' && i18next.language) {
          initChatbot();
        }
      }, 300);
    });
  }
} else {
  // Fallback: inicia depois de carregar a página
  document.addEventListener('DOMContentLoaded', initChatbot);
}