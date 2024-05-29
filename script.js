document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        {
            title: 'EcoVuelo Solar',
            content: 'Imagina una bicicleta que no solo puede moverse por las calles, sino también elevarse por los cielos como un dron. EcoVuelo Solar utiliza paneles solares ultraligeros. Cuando el ciclista quiere volar, las alas se despliegan y un sistema de hélices se activa, permitiendo al usuario desplazarse por el aire. Este increíble invento promete revolucionar el transporte urbano, reduciendo el tráfico y la contaminación al mismo tiempo. Además, cuenta con un sistema de navegación por GPS que facilita la planificación de rutas aéreas seguras.',
            image: '/home/nicolas/Escritorio/appsimple/foto2.jpg' // URL de la imagen de ejemplo
        },
        {
            title: 'Libro Interactivo Cuentacuentos',
            content: '¿Alguna vez has deseado un libro que se adapte a tus gustos y preferencias de lectura? El Libro Interactivo Cuentacuentos es la respuesta a tus deseos. Equipado con una inteligencia artificial avanzada, este libro cambia su contenido en tiempo real según los intereses del lector. Al abrir el libro, este escanea las emociones y reacciones del lector a través de sensores táctiles y visuales integrados en las páginas. A partir de esta información, la historia se desarrolla de manera única y personalizada. Cada lectura es una nueva aventura, haciendo de este libro una experiencia infinita y única.',
            image: '/home/nicolas/Escritorio/appsimple/foto1.jpeg' // URL de la imagen de ejemplo
        },
        {
            title: 'Pixel Garden',
            content: 'La jardinería ha dado un salto cuántico hacia el futuro con el Pixel Garden. Este dispositivo compacto proyecta un jardín virtual en cualquier superficie, permitiendo a los usuarios cultivar plantas y flores holográficas en sus hogares. Las plantas holográficas no solo son visualmente impresionantes, sino que también interactúan con el entorno. A través de sensores de movimiento, las flores se abren y cierran en respuesta al tacto, y los árboles cambian de color según la hora del día. Además, el sistema incluye una base de datos de plantas reales, ofreciendo información educativa sobre botánica mientras disfrutas de tu jardín holográfico.',
            image: '/home/nicolas/Escritorio/appsimple/foto3.jpg' // URL de la imagen de ejemplo
        }
    ];

    const articleTitles = document.getElementById('article-titles');
    const articleTitle = document.getElementById('article-title');
    const articleText = document.getElementById('article-text');
    const articleImage = document.getElementById('article-image');

    // Agregar títulos de artículos a la lista
    articles.forEach((article, index) => {
        const li = document.createElement('li');
        li.textContent = article.title;
        li.addEventListener('click', () => {
            displayArticle(index);
        });
        articleTitles.appendChild(li);
    });

    // Función para mostrar el contenido del artículo seleccionado
    function displayArticle(index) {
        articleTitle.textContent = articles[index].title;
        articleText.textContent = articles[index].content;
        articleImage.src = articles[index].image;
        articleImage.style.display = 'block';
    }
});
