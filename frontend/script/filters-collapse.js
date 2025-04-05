
        // document.addEventListener('DOMContentLoaded', function() {
            // Toggle for the entire filters section
            const toggleFiltersBtn = document.getElementById('toggle-filters');
            const filtersSectionContent = document.querySelector('.filters-section-content');
            
            toggleFiltersBtn.addEventListener('click', function() {
                filtersSectionContent.classList.toggle('collapsed');
                this.querySelector('i').classList.toggle('rotated');
            });
            
            // Toggle for individual filter groups
            const filterToggles = document.querySelectorAll('.filter-toggle');
            
            filterToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const filterGroup = this.closest('.filter-group');
                    const filterContent = filterGroup.querySelector('.filter-group-content');
                    
                    filterContent.classList.toggle('collapsed');
                    this.querySelector('i').classList.toggle('rotated');
                });
            });
        // });
