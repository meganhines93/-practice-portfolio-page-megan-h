/* Submit Button Banner */

            const form = document.getElementById('form');
            const banner = document.getElementById('success-banner');

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                banner.classList.add('show');
            });