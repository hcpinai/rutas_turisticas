const knowledgeBase = {
    general: `La Ruta Chinantla es un área próspera donde convergen la cultura, la naturaleza y las tradiciones de los pueblos chinantecos y mazatecos. Visitarla es hacer un recorrido por la diversidad biológica (jaguares, ocelotes, tucanes) y entender la cosmovisión de estos pueblos milenarios. Comprende 8 municipios en Tuxtepec e Ixtlán, integrando 11 comunidades lineales.`,
    comunidades: [
        {
            name: "Santiago Comaltepec",
            keywords: ["comaltepec", "cascada de niebla", "nubes", "cerro redondo", "cerro hormiga", "cerro pelón"],
            info: "Santiago Comaltepec (Cascada de Niebla) se encuentra entre un mar de nubes. Cuenta con tres picos montañosos de más de 3,000 msnm: Cerro Redondo, Cerro Hormiga y Cerro Pelón. Cerca de este último se ubica la empresa ecoturística 'Cascada de Niebla'."
        },
        {
            name: "Santa Cruz Tepetotutla",
            keywords: ["santa cruz", "tepetotutla", "museo vivo", "bosque mesófilo", "bosque de niebla", "senderos"],
            info: "Santa Cruz Tepetotutla es el sendero de un museo vivo. Está en las laderas del Golfo de México, donde el agua alimenta el bosque mesófilo de montaña (bosque de niebla), el cual puedes recorrer a través de hermosos senderos."
        },
        {
            name: "San Antonio del Barrio",
            keywords: ["san antonio", "barrio", "caldo de piedra", "río perfume", "tumba prehispánica", "selva mediana"],
            info: "En San Antonio del Barrio puedes saborear el delicioso Caldo de piedra preparado en los orificios del Río Perfume. Además, puedes conocer su tumba prehispánica y maravillarte con la flora y fauna de la selva mediana."
        },
        {
            name: "San Juan Bautista, Valle Nacional",
            keywords: ["valle nacional", "san juan bautista", "chinantla baja", "río papaloapan", "hospedaje"],
            info: "San Juan Bautista, Valle Nacional está ubicado en la Chinantla Baja, rodeado de grandes montañas a orillas del río Valle Nacional. Es ideal para encontrar variedad de alimentos, hospedaje y servicios."
        },
        {
            name: "San Mateo Yetla",
            keywords: ["san mateo", "yetla", "arrullo del río", "huipil", "árbol de la vida"],
            info: "En San Mateo Yetla puedes dormir con el arrullo del río y realizar actividades de aventura. Destaca por su rica gastronomía, sus tradiciones y la hermosa vestimenta tradicional: el huipil adornado con el árbol de la vida."
        },
        {
            name: "Rancho Grande",
            keywords: ["rancho grande", "café", "telar de cintura", "plantaciones"],
            info: "Rancho Grande está localizado en la parte alta del cerro en Valle Nacional. Destaca por sus plantaciones de café y el arte del telar de cintura heredado por generaciones, además de su deliciosa gastronomía."
        },
        {
            name: "Cerro Marín (Monte Flor)",
            keywords: ["cerro marín", "monte flor", "manantial", "ojos de agua", "caverna", "marín viejo"],
            info: "Cerro Marín (Monte Flor) es un manantial de vida a orillas del río Valle Nacional. Cuenta con manantiales, ojos de agua, senderos hacia la caverna y Marín Viejo. Perfecto para recorrer en bicicleta y conocer su museo local."
        },
        {
            name: "Vega del Sol",
            keywords: ["vega del sol", "zuzul", "perla", "color azul celeste", "manantial"],
            info: "Vega del Sol, también conocida como 'Zuzul, Perla de la Chinantla', es un pueblo chinanteco famoso por sus ríos y su fascinante manantial de color azul celeste."
        },
        {
            name: "San Pedro Ixcatlán",
            keywords: ["san pedro", "ixcatlán", "mazateca baja", "presa miguel alemán", "islas", "bordado", "pájaros"],
            info: "San Pedro Ixcatlán se sitúa en la región mazateca baja. La zona fue inundada para crear la presa 'Miguel Alemán', formando islas. Sus mujeres bordan a mano huipiles con figuras de pájaros y flores en un proceso que dura hasta seis meses."
        },
        {
            name: "Cerro Quemado 'Mil Islas'",
            keywords: ["cerro quemado", "mil islas", "canoas", "kayak", "caverna cabeza de tilpan", "cascada de temporal"],
            info: "Cerro Quemado 'Mil Islas' es el paraíso de la Mazateca Baja. Aquí puedes recorrer las islas en canoas o kayak, adentrarte en la Caverna Cabeza de Tilpan o visitar la Cascada de Temporal."
        },
        {
            name: "San Miguel Soyaltepec",
            keywords: ["san miguel", "soyaltepec", "temascal", "playa jícama", "río tonto"],
            info: "San Miguel Soyaltepec es una localidad mazateca en Tuxtepec. Se ubica cerca de la cortina de la presa Miguel Alemán, donde se forman parajes como 'Playa Jícama' y 'Río Tonto'. Sus islas y tradiciones son un tesoro por explorar."
        },
        {
            name: "San Juan Bautista Tuxtepec",
            keywords: ["tuxtepec", "papaloapan", "centro urbano", "comercial", "agrícola"],
            info: "San Juan Bautista Tuxtepec es la segunda ciudad más poblada de Oaxaca y el centro urbano de la Cuenca del Papaloapan. Tiene gran actividad agrícola, ganadera y comercial."
        }
    ]
};

// DOM Elements
const messagesContainer = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const typingIndicator = document.getElementById('typing-indicator');
const suggestionChips = document.querySelectorAll('.chip');
const themeToggle = document.getElementById('theme-toggle');

// Add Event Listeners
chatForm.addEventListener('submit', handleUserSubmit);

suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
        userInput.value = chip.textContent;
        handleUserSubmit(new Event('submit'));
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        document.documentElement.style.setProperty('--bg-main', '#F1F5F9');
        document.documentElement.style.setProperty('--bg-sidebar', '#FFFFFF');
        document.documentElement.style.setProperty('--bg-card', '#F8FAFC');
        document.documentElement.style.setProperty('--text-primary', '#0F172A');
        document.documentElement.style.setProperty('--text-secondary', '#475569');
        document.documentElement.style.setProperty('--chat-ai-bg', '#FFFFFF');
        document.documentElement.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        document.documentElement.style.setProperty('--bg-main', '#0B0F19');
        document.documentElement.style.setProperty('--bg-sidebar', '#131B2F');
        document.documentElement.style.setProperty('--bg-card', '#1A2235');
        document.documentElement.style.setProperty('--text-primary', '#E2E8F0');
        document.documentElement.style.setProperty('--text-secondary', '#94A3B8');
        document.documentElement.style.setProperty('--chat-ai-bg', '#1E293B');
        document.documentElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.05)');
    }
});

function handleUserSubmit(e) {
    e.preventDefault();
    const query = userInput.value.trim();
    if (!query) return;

    // Add user message
    addMessage(query, 'user');
    userInput.value = '';

    // Show typing indicator
    typingIndicator.classList.remove('hidden');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate LLM Processing Delay
    setTimeout(() => {
        const response = generateResponse(query.toLowerCase());
        typingIndicator.classList.add('hidden');
        addMessage(response, 'ai');
    }, 1500 + Math.random() * 1000);
}

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);

    const iconClass = sender === 'user' ? 'fa-user' : 'fa-robot';
    
    // For AI messages, render HTML directly. For user messages, escape it.
    const safeContent = sender === 'user' 
        ? content.replace(/</g, "&lt;").replace(/>/g, "&gt;") 
        : content;

    messageDiv.innerHTML = `
        <div class="avatar"><i class="fa-solid ${iconClass}"></i></div>
        <div class="message-content">
            <p>${safeContent}</p>
        </div>
    `;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(query) {
    let foundMatches = [];

    // Check specific communities
    knowledgeBase.comunidades.forEach(comunidad => {
        const match = comunidad.keywords.some(kw => query.includes(kw));
        if (match) {
            foundMatches.push(comunidad);
        }
    });

    if (foundMatches.length > 0) {
        if (foundMatches.length === 1) {
            return `<strong>${foundMatches[0].name}</strong>: ${foundMatches[0].info} <br><br>¿Te gustaría saber sobre alguna otra comunidad o actividad cercana?`;
        } else {
            let res = "He encontrado información sobre varios lugares que mencionas:<br><ul>";
            foundMatches.forEach(f => {
                res += \`<li><strong>\${f.name}</strong>: \${f.info}</li>\`;
            });
            res += "</ul><br>¿Cuál de estos te interesa más?";
            return res;
        }
    }

    // Keyword matching for categories
    if (query.includes('cascada') || query.includes('agua') || query.includes('río') || query.includes('manantial')) {
        return "Si buscas atractivos con agua, la Ruta Chinantla es ideal. Te recomiendo visitar <strong>Vega del Sol (Zuzul)</strong> por su manantial azul celeste, <strong>Cerro Quemado 'Mil Islas'</strong> si quieres ver la Cascada de Temporal y andar en kayak, o <strong>Santiago Comaltepec</strong> para conocer la Cascada de Niebla. ¿Qué tipo de paisaje prefieres?";
    }

    if (query.includes('comer') || query.includes('comida') || query.includes('gastronomía') || query.includes('caldo')) {
        return "La gastronomía es un pilar de la ruta. Tienes que ir a <strong>San Antonio del Barrio</strong> para probar el famoso <strong>Caldo de piedra</strong>, preparado directamente en el Río Perfume. También <strong>Rancho Grande</strong> ofrece exquisitos platillos típicos junto con excelentes plantaciones de café. ¡Te encantará!";
    }

    if (query.includes('cultura') || query.includes('etnia') || query.includes('huipil') || query.includes('bordado')) {
        return "La cultura de los pueblos Chinantecos y Mazatecos está viva en sus textiles y tradiciones. En <strong>San Mateo Yetla</strong> podrás ver el huipil adornado con el árbol de la vida. Mientras que en <strong>San Pedro Ixcatlán</strong>, las mujeres de la región mazateca bordan a mano huipiles con pájaros y flores, un proceso que les toma hasta seis meses. ¡Es un arte invaluable!";
    }

    if (query.includes('animal') || query.includes('fauna') || query.includes('jaguar') || query.includes('naturaleza')) {
        return "¡La biodiversidad aquí es increíble! Los mazatecos y chinantecos protegen un territorio donde viven en estado libre especies de gran belleza como el <strong>jaguar, ocelote, pericos y tucanes</strong>. Las comunidades han sacado adelante proyectos de conservación para mantener esto intacto.";
    }

    // Default to general info
    return \`\${knowledgeBase.general} <br><br>Puedo darte detalles específicos de lugares como San Antonio del Barrio, Valle Nacional, Mil Islas o decirte qué comer y dónde ver impresionantes paisajes naturales. ¿Qué te interesa explorar?\`;
}
