// document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const searchBar = document.getElementById('search-bar');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                searchBar.classList.toggle('hidden');

                // Toggle between menu and close icons
                const icon = mobileMenuButton.querySelector('i');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.className = 'ri-menu-line';
                } else {
                    icon.className = 'ri-close-line';
                }
            });
        // });
