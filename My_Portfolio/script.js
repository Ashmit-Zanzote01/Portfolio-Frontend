const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// Set the initial transform to hide the menu off-screen
// sideMenu.style.transform = 'translateX(100%)';

function openMenu() {
    sideMenu.classList.remove('translate-x-full'); // Or remove 'translate-x-full' if sliding from right
}

function closeMenu() {
    sideMenu.classList.add('translate-x-full'); // Or add 'translate-x-full' if sliding from right
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-gray-80', 'bg-opacity-50', 'backdrop-blur', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    } else {
        navBar.classList.remove('shadow-sm'); // Keep blur effect instead of completely removing
        navBar.classList.add('bg-transparent', 'backdrop-blur', 'bg-opacity-50');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
});

// Dark mode theme toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

// **Contact Form Submission**
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get input values
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if fields are empty
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Create form data object
        const formData = {
            fullName: name,
            email: email,
            message: message
        };

        try {
            // Send form data to the backend
            const response = await fetch("http://localhost:8080/api/contact/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.emailSent === false) {
                    alert("Message saved! Email confirmation failed.");
                } else {
                    alert("Message sent successfully!");
                }
                contactForm.reset();
            } else {
                alert("Error sending message. Please try again.");
            }
            
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message. Please check your connection.");
        }
    });
});


// window.addEventListener('scroll', ()=>{
//     if(scrollY > 50){
//         navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
//         navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
//     }

//     else{

//         navBar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
//         navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
//     }
// })


