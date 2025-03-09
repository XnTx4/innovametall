const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const progressBar = document.querySelector('.carousel-progress-bar');
            let currentIndex = 0;
            let intervalId;

            function showCarouselItem(index) {
                carouselItems.forEach((item, i) => {
                    if (i === index) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                updateProgressBar();
            }

            function updateProgressBar() {
                const progressWidth = (currentIndex + 1) / carouselItems.length * 100;
                progressBar.style.width = `${progressWidth}%`;
            }

            function autoScroll() {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                showCarouselItem(currentIndex);
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
                showCarouselItem(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                showCarouselItem(currentIndex);
            });

            intervalId = setInterval(autoScroll, 5000);

            showCarouselItem(currentIndex);