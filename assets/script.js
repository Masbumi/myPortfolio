const starsContainer = document.querySelector('.stars');
            const starCount = 100;
            const colors = ['#fff', '#f0ffab', '#ffe7ab']; // white, red, orange
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * 100}vh`;
                star.style.animationDelay = `${Math.random() * 2}s`;
                star.style.opacity = Math.random();
                star.style.background = colors[Math.floor(Math.random() * colors.length)];
                starsContainer.appendChild(star);
            }