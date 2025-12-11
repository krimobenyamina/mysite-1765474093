class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                .navbar {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    padding: 1rem 0;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #1f2937;
                    text-decoration: none;
                }
                
                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #3b82f6;
                }
                
                .nav-button {
                    background: #3b82f6;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .nav-button:hover {
                    background: #2563eb;
                    transform: translateY(-1px);
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: #4b5563;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-button {
                        display: block;
                    }
                    
                    .nav-menu {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 1rem;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    
                    .nav-menu.active {
                        display: flex;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="nav-container">
                    <a href="/" class="logo">
                        <i data-feather="zap"></i>
                        AI Assistant Pro
                    </a>
                    
                    <button class="mobile-menu-button">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <ul class="nav-menu">
                        <li><a href="/" class="nav-link">Accueil</a></li>
                        <li><a href="/features" class="nav-link">Fonctionnalités</a></li>
                        <li><a href="/components" class="nav-link">Composants</a></li>
                        <li><a href="/about" class="nav-link">À propos</a></li>
                        <li><a href="/contact" class="nav-button">Commencer</a></li>
                    </ul>
                </div>
            </nav>
        `;
        
        // Add mobile menu functionality
        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navMenu = this.shadowRoot.querySelector('.nav-menu');
        
        if (mobileMenuButton && navMenu) {
            mobileMenuButton.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                feather.replace();
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target)) {
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);