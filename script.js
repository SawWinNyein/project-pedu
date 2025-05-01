document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // CTA button functionality
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('nav a[href="#services"]').click();
        });
    }

    // Sample Wikipedia articles data
    const sampleArticles = [
        {
            title: "The History of Modern Education",
            description: "An overview of how modern education systems developed from the 18th century to present day.",
            link: "#",
            date: "2023-05-15"
        },
        {
            title: "Digital Learning Platforms",
            description: "A comprehensive guide to the most popular digital learning platforms and their features.",
            link: "#",
            date: "2023-06-02"
        },
        {
            title: "Education in Developing Countries",
            description: "Challenges and innovations in education systems across developing nations.",
            link: "#",
            date: "2023-04-28"
        }
    ];

    // Display sample articles
    const articlesList = document.getElementById('articles-list');
    
    function displayArticles() {
        articlesList.innerHTML = '';
        
        sampleArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            
            articleCard.innerHTML = `
                <h4><a href="${article.link}" target="_blank">${article.title}</a></h4>
                <p>${article.description}</p>
                <small>Published: ${article.date}</small>
            `;
            
            articlesList.appendChild(articleCard);
        });
    }
    
    displayArticles();

    // Form submission for Wikipedia article requests
    const articleRequestForm = document.getElementById('article-request-form');
    if (articleRequestForm) {
        articleRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const topic = document.getElementById('topic').value;
            const description = document.getElementById('description').value;
            const references = document.getElementById('references').value;
            
            // In a real application, you would send this data to a server
            console.log('Article Request Submitted:', {
                topic,
                description,
                references
            });
            
            // Show success message
            alert('Your article request has been submitted successfully! We will review it and get back to you soon.');
            
            // Reset form
            articleRequestForm.reset();
        });
    }

    // Form submission for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Contact Form Submitted:', {
                name,
                email,
                message
            });
            
            // Show success message
            alert('Thank you for your message! We will get back to you as soon as possible.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .about-content, .wikipedia-form, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    document.querySelectorAll('.service-card, .about-content, .wikipedia-form, .contact-container').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});