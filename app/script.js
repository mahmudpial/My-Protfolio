//  SCRIPT.JS FILE

      
        // Reveal Animation
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                reveals.forEach(el => {
                    const elementTop = el.getBoundingClientRect().top;
                    const elementBottom = el.getBoundingClientRect().bottom;
                    if (elementTop < windowHeight && elementBottom > 0) {
                        el.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
        });


        // BACK TO TOP BUTTON
        const backToTop = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        // Chat Widget
        const chatBtn = document.getElementById('chatBtn');
        const chatPopup = document.getElementById('chatPopup');
        const closeChat = document.getElementById('closeChat');
        const sendChat = document.getElementById('sendChat');
        const chatInput = document.getElementById('chatInput');
        const chatBody = document.getElementById('chatBody');

        chatBtn.addEventListener('click', () => {
            chatPopup.style.display = 'flex';
            chatBtn.style.display = 'none';
        });

        closeChat.addEventListener('click', () => {
            chatPopup.style.display = 'none';
            chatBtn.style.display = 'block';
        });

        sendChat.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message !== '') {
                // User message
                const userMsg = document.createElement('div');
                userMsg.classList.add('message', 'user');
                userMsg.textContent = message;
                chatBody.appendChild(userMsg);
                chatInput.value = '';
                chatBody.scrollTop = chatBody.scrollHeight;

                // Bot response with emojis
                setTimeout(() => {
                    const botMsg = document.createElement('div');
                    botMsg.classList.add('message', 'bot');
                    botMsg.innerHTML = "Thanks for your message! 😊 I'll get back to you soon. 🚀";
                    chatBody.appendChild(botMsg);
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 800);
            }
        });

        // Allow Enter key to send message
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendChat.click();
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById("menuToggle");
            const navMenu = document.getElementById("navMenu");

            menuToggle.addEventListener("click", () => {
                navMenu.classList.toggle("active");
            });

    