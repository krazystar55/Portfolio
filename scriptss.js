document.addEventListener("DOMContentLoaded", () => {
    /**
     * Sticky Header Effect
     */
    const initStickyHeader = () => {
        const header = document.getElementById("header");

        window.addEventListener("scroll", () => {
            const isScrolled = window.scrollY > 50;
            header.style.background = isScrolled
                ? "rgba(0, 0, 0, 0.95)"
                : "rgba(0, 0, 0, 0.9)";
            header.style.boxShadow = isScrolled
                ? "0 4px 15px rgba(0, 0, 0, 0.5)"
                : "none";
        });
    };

    /**
     * Smooth Scroll to Sections
     */
    const initSmoothScroll = () => {
        const navLinks = document.querySelectorAll("nav ul li a");
        const header = document.getElementById("header");

        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight,
                    behavior: "smooth",
                });
            });
        });
    };

    /**
     * Typing Effect for Hero Section
     */
    const initTypingEffect = () => {
        const heroText = document.querySelector(".hero-text h2");
        const textArray = [
            "Welcome to My Portfolio",
            "Your Trusted Ethical Hacker",
            "Protecting Your Digital World",
        ];
        let arrayIndex = 0;
        let charIndex = 0;

        const type = () => {
            if (charIndex < textArray[arrayIndex].length) {
                heroText.textContent += textArray[arrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        };

        const erase = () => {
            if (charIndex > 0) {
                heroText.textContent = textArray[arrayIndex].substring(
                    0,
                    charIndex - 1
                );
                charIndex--;
                setTimeout(erase, 50);
            } else {
                arrayIndex = (arrayIndex + 1) % textArray.length;
                setTimeout(type, 500);
            }
        };

        type();
    };

    /**
     * Section Animation on Scroll
     */
    const initScrollAnimations = () => {
        const animateOnScroll = (elements, animationClass) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(animationClass);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            elements.forEach((el) => observer.observe(el));
        };

        animateOnScroll(document.querySelectorAll(".about-text"), "fade-in");
        animateOnScroll(document.querySelectorAll(".skill"), "scale-in");
        animateOnScroll(document.querySelectorAll(".certification"), "fade-in");
        animateOnScroll(
            document.querySelectorAll(".experience-item"),
            "fade-up"
        );
    };

    /**
     * Resume and Cover Letter Popup
     */
    const initPopup = () => {
        const popupModal = document.getElementById("popup-modal");
        const popupText = document.getElementById("popup-text");
        const downloadLink = document.getElementById("download-link");

        const showPopup = (type) => {
            if (type === "resume") {
                popupText.textContent = "You are about to download my resume.";
                downloadLink.href = "path/to/resume.pdf"; // Replace with actual resume file path
            } else if (type === "cover") {
                popupText.textContent =
                    "You are about to download my cover letter.";
                downloadLink.href = "path/to/cover_letter.pdf"; // Replace with actual cover letter file path
            }

            popupModal.style.display = "flex";
        };

        const closePopup = () => {
            popupModal.style.display = "none";
        };

        document.querySelectorAll(".download-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const type = e.target.getAttribute("data-type");
                showPopup(type);
            });
        });

        document
            .querySelector(".close-btn")
            .addEventListener("click", closePopup);

        window.addEventListener("click", (e) => {
            if (e.target === popupModal) {
                closePopup();
            }
        });
    };

    /**
     * Contact Form Submission with Thank You Message
     */
    const initContactForm = () => {
        const form = document.getElementById("contact-form");
        const thankYouMessage = document.getElementById("thank-you-message");

        form?.addEventListener("submit", (e) => {
            e.preventDefault();

            form.style.animation = "fadeOut 0.5s forwards";
            setTimeout(() => {
                form.style.display = "none";
                thankYouMessage.style.display = "block";
                thankYouMessage.style.animation = "fadeIn 1s forwards";
            }, 500);
        });
    };

    /**
     * Social Link Interactive Effects
     */
    const initSocialLinkEffects = () => {
        const socialLinks = document.querySelectorAll(".social-link");

        socialLinks.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                link.style.animation = "float 1.5s ease-in-out infinite";
            });

            link.addEventListener("mouseleave", () => {
                link.style.animation = "";
            });

            link.addEventListener("click", (e) => {
                const ripple = document.createElement("span");
                ripple.classList.add("ripple");
                ripple.style.left = `${e.clientX - link.offsetLeft}px`;
                ripple.style.top = `${e.clientY - link.offsetTop}px`;
                link.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    };

    /**
     * Initialize All Features
     */
    initStickyHeader();
    initSmoothScroll();
    initTypingEffect();
    initScrollAnimations();
    initPopup();
    initContactForm();
    initSocialLinkEffects();
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Sticky Header Effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Toggle Hamburger Menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
// JavaScript for Resume Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
    const popupModal = document.getElementById("popup-modal");
    const popupText = document.getElementById("popup-text");
    const downloadLink = document.getElementById("download-link");
    const closeBtn = document.querySelector(".close-btn");

    // Show Modal
    const showPopup = (type) => {
        if (type === "resume") {
            popupText.textContent = "You are about to download my Resume.";
            downloadLink.href = "GAUTAM SOOD RESUME.pdf"; // Replace with the actual path
        } else if (type === "cover") {
            popupText.textContent = "You are about to download my Cover Letter.";
            downloadLink.href = "COVER LETTER.pdf"; // Replace with the actual path
        }
        popupModal.style.display = "flex";
    };

    // Close Modal
    const closePopup = () => {
        popupModal.style.display = "none";
    };

    // Attach Event Listeners
    document.querySelectorAll(".download-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const type = e.target.textContent.includes("Resume") ? "resume" : "cover";
            showPopup(type);
        });
    });

    closeBtn.addEventListener("click", closePopup);

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === popupModal) {
            closePopup();
        }
    });
});
