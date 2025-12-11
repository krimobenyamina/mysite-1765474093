// Main JavaScript for AI Assistant Pro

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI Assistant Pro initialisé');
    
    // Add animation class to main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }

    // Handle feature buttons click
    const featureButtons = document.querySelectorAll('.bg-gray-100');
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureName = this.textContent.trim();
            showFeaturePreview(featureName);
        });
    });

    // Handle main enhancement button
    const enhanceButton = document.querySelector('.bg-blue-600');
    if (enhanceButton) {
        enhanceButton.addEventListener('click', function() {
            const inputField = document.querySelector('input[type="text"]');
            if (inputField && inputField.value.trim() !== '') {
                processEnhancement(inputField.value);
            } else {
                showNotification('Veuillez entrer une description ou du code à améliorer', 'warning');
            }
        });
    }

    // Auto-resize input field
    const inputField = document.querySelector('input[type="text"]');
    if (inputField) {
        inputField.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }
});

// Show feature preview
function showFeaturePreview(featureName) {
    const previewSection = document.querySelector('.bg-white.bg-opacity-10');
    if (previewSection) {
        const currentContent = previewSection.querySelector('p');
        if (currentContent) {
            currentContent.textContent = `Prévisualisation du composant: ${featureName}`;
        showNotification(`Composant ${featureName} sélectionné`, 'success');
    }
}

// Process enhancement request
function processEnhancement(request) {
    console.log('Traitement de la demande:', request);
    
    // Show loading state
    const button = document.querySelector('.bg-blue-600');
    const originalText = button.innerHTML;
    button.innerHTML = '<i data-feather="loader"></i> Traitement...';
    feather.replace();

    // Simulate AI processing
    setTimeout(() => {
        button.innerHTML = originalText;
        feather.replace();
        
        showNotification('Éléments ajoutés avec succès!', 'success');
        
        // Update preview
        const previewSection = document.querySelector('.bg-white.bg-opacity-10');
        if (previewSection) {
            const currentContent = previewSection.querySelector('p');
            if (currentContent) {
                currentContent.textContent = 'Nouveaux éléments intégrés: ' + request;
            }
        }
    }, 1500);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'warning' ? 'bg-yellow-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility function to generate random ID
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        generateId,
        processEnhancement
    };
}