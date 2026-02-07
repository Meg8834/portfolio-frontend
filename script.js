
const projects = [
  {
    id: 1,
    title: "Stock Market Analysis Tracker",
    description: "Developed a data-driven stock market analysis tool to study market trends, price movements, and historical patterns using Python and data visualization libraries.",
    fullDescription: "Implemented technical indicators and charting to assist in investment decision-making. Applied statistical analysis and moving average techniques to identify trends and created visual dashboards for better market insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "yFinance API", "Jupyter Notebook"],
    category: "data-science",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    github: "https://github.com/Meg8834/Stock-Market-Analysis-",
    demo: null,
    features: [
      "Real-time and historical stock data collection",
      "Statistical analysis with moving averages",
      "Interactive visual dashboards",
      "Actionable investment strategies"
    ]
  },
  {
    id: 2,
    title: "Object Detection Using YOLO",
    description: "Implemented real-time object detection system using YOLO (You Only Look Once) algorithm for computer vision applications.",
    fullDescription: "Built a robust computer vision system capable of detecting multiple objects simultaneously with bounding boxes and labels. Gained hands-on experience in deep learning and real-time processing.",
    technologies: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    github: "https://github.com/megarajm/yolo-detection",
    demo: null,
    features: [
      "Real-time object detection",
      "Multiple object tracking",
      "Bounding box visualization",
      "High accuracy classification"
    ]
  },
  {
    id: 3,
    title: "House Price Prediction Model",
    description: "Built a machine learning model to predict house prices based on various features using regression algorithms.",
    fullDescription: "Performed comprehensive data preprocessing and feature engineering. Implemented Linear Regression and evaluated model performance using MAE and RMSE metrics.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    github: "https://github.com/megarajm/house-price-prediction",
    demo: null,
    features: [
      "Data preprocessing pipeline",
      "Feature engineering",
      "Linear regression implementation",
      "Model evaluation with MAE/RMSE"
    ]
  },
  {
    id: 4,
    title: "Full-Stack Portfolio Website",
    description: "Designed and developed a responsive personal portfolio website with backend integration for contact form management.",
    fullDescription: "Built with Flask backend for handling contact forms and MySQL database for storing user messages. Implemented responsive design and version control using Git/GitHub.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "MySQL", "Git"],
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "https://github.com/Meg8834/personal-portfolio-",
    demo: "https://megarajm.dev",
    features: [
      "Responsive design",
      "Contact form with backend",
      "Database integration",
      "Version control"
    ]
  }
];

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('.highlight-card, .skill-category, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            entry.target.classList.add('filled');
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));


function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        const techTags = project.technologies.slice(0, 4).map(tech => 
            `<span class=\"tech-tag\">${tech}</span>`
        ).join('');
        
        const moreCount = project.technologies.length > 4 
            ? `<span class=\"tech-tag\">+${project.technologies.length - 4} more</span>` 
            : '';
        
        projectCard.innerHTML = `
            <div class=\"project-image\">
                <img src=\"${project.image}\" alt=\"${project.title}\" loading=\"lazy\">
                <div class=\"project-overlay\"></div>
                <div class=\"project-hover-overlay\">
                    <button class=\"view-details-btn\" onclick=\"openProjectModal(${project.id})\">
                        View Details
                    </button>
                </div>
            </div>
            <div class=\"project-info\">
                <span class=\"project-category\">${getCategoryName(project.category)}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class=\"project-tech\">
                    ${techTags}
                    ${moreCount}
                </div>
                <div class=\"project-links\">
                    ${project.github ? `
                        <a href=\"${project.github}\" target=\"_blank\" rel=\"noopener\">
                            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                                <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>
                            </svg>
                            Code
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href=\"${project.demo}\" target=\"_blank\" rel=\"noopener\">
                            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                                <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>
                                <polyline points=\"15 3 21 3 21 9\"></polyline>
                                <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    
    document.querySelectorAll('.project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function getCategoryName(category) {
    const categoryNames = {
        'ai-ml': 'AI/ML',
        'data-science': 'Data Science',
        'web-dev': 'Web Development'
    };
    return categoryNames[category] || category;
}


const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});


const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const techTags = project.technologies.map(tech => 
        `<span class=\"modal-tech-tag\">${tech}</span>`
    ).join('');
    
    const featuresList = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class=\"modal-image\">
            <img src=\"${project.image}\" alt=\"${project.title}\">
        </div>
        <span class=\"modal-category\">${getCategoryName(project.category)}</span>
        <h3>${project.title}</h3>
        <p class=\"modal-description\">${project.fullDescription}</p>
        
        ${project.features ? `
            <div>
                <h4>Key Features</h4>
                <ul>${featuresList}</ul>
            </div>
        ` : ''}
        
        <div>
            <h4>Technologies Used</h4>
            <div class=\"modal-tech\">${techTags}</div>
        </div>
        
        <div class=\"modal-links\">
            ${project.github ? `
                <a href=\"${project.github}\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-primary\">
                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                        <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>
                    </svg>
                    View on GitHub
                </a>
            ` : ''}
            ${project.demo ? `
                <a href=\"${project.demo}\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-secondary\">
                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                        <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>
                        <polyline points=\"15 3 21 3 21 9\"></polyline>
                        <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>
                    </svg>
                    Live Demo
                </a>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});


const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            formMessage.textContent = result.message;
            formMessage.className = 'form-message success';
            contactForm.reset();
        } else {
            throw new Error('Failed');
        }

    } catch (error) {
        formMessage.textContent = 'Something went wrong. Please try again.';
        formMessage.className = 'form-message error';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});