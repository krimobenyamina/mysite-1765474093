class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                .footer {
                    background: #1f2937;
                    color: white;
                    padding: 3rem 0 2rem;
                    margin-top: auto;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #f3f4f6;
                }
                
                .footer-links {
                    list-style: none;
                }
                
                .footer-links li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-link {
                    color: #d1d5db;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #3b82f6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    color: #d1d5db;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .social-link:hover {
                    color: #3b82f6;
                }
                
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    text-align: center;
                    color: #9ca3af;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>AI Assistant Pro</h3>
                            <p style="color: #d1d5db; line-height: 1.6;">
                            Votre assistant IA pour le développement web. Créez des sites web étonnants avec des composants réutilisables et du code optimisé.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <i data-feather="github"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="linkedin"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="mail"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Navigation</h3>
                            <ul class="footer-links">
                                <li><a href="/" class="footer-link">Accueil</a></li>
                                <li><a href="/features" class="footer-link">Fonctionnalités</a></li>
                                <li><a href="/components" class="footer-link">Composants</a></li>
                                <li><a href="/about" class="footer-link">À propos</a></li>
                                <li><a href="/contact" class="footer-link">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Ressources</h3>
                            <ul class="footer-links">
                                <li><a href="/docs" class="footer-link">Documentation</a></li>
                                <li><a href="/tutorials" class="footer-link">Tutoriels</a></li>
                                <li><a href="/examples" class="footer-link">Exemples</a></li>
                                <li><a href="/api" class="footer-link">API</a></li>
                                <li><a href="/support" class="footer-link">Support</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Légal</h3>
                            <ul class="footer-links">
                                <li><a href="/privacy" class="footer-link">Confidentialité</a></li>
                                <li><a href="/terms" class="footer-link">Conditions</a></li>
                                <li><a href="/cookies" class="footer-link">Cookies</a></li>
                                <li><a href="/security" class="footer-link">Sécurité</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2024 AI Assistant Pro. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);