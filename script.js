// Menu toggle function
document.querySelector('.menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('active');
    document.querySelector('.nav ul').classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    if (!nav.contains(event.target)) {
        nav.querySelector('.menu-toggle').classList.remove('active');
        nav.querySelector('ul').classList.remove('active');
    }
});

// Scroll indicator function
window.onscroll = function() { scrollIndicator() };

function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + "%";
}

// Dark mode toggle function
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Language change function
const languageToggle = document.getElementById('language-toggle');
const content = {
    en: {
        title: "My Portfolio",
        name: "Nahid Hossain",
        profession: "Web Developer",
        welcome: "Welcome to My Portfolio",
        description: "I am a creative web developer. My profession is building attractive websites using modern technologies.",
        contactButton: "Contact Me",
        aboutTitle: "About Me",
        aboutContent1: "I am Nahid Hossain, a professional web developer. I have over 5 years of experience working with technologies like HTML, CSS, JavaScript, React, Node.js, etc., to build websites and web applications.",
        aboutContent2: "My primary goal is to create simple and attractive interfaces for users. I am always eager to learn new technologies and improve my skills.",
        projectsTitle: "My Projects",
        project1: "E-commerce Website",
        project1Desc: "A modern e-commerce platform built using React and Node.js.",
        project2: "Portfolio Theme",
        project2Desc: "A premium custom portfolio theme for WordPress.",
        project3: "Restaurant Website",
        project3Desc: "A modern responsive restaurant website.",
        contactTitle: "Contact",
        email: "Email",
        phone: "Phone",
        address: "Address",
        footerText: "© 2024 Nahid Hossain. All rights reserved.",
        darkMode: "Dark Mode",
        switchLanguage: "বাংলায় দেখুন"
    },
    bn: {
        title: "আমার পোর্টফোলিও",
        name: "নাহিদ হোসেন",
        profession: "ওয়েব ডেভেলপার",
        welcome: "আমার পোর্টফোলিওতে স্বাগতম",
        description: "আমি একজন ক্রিয়েটিভ ওয়েব ডেভেলপার। আধুনিক প্রযুক্তি ব্যবহার করে আকর্ষণীয় ওয়েবসাইট তৈরি করা আমার পেশা।",
        contactButton: "যোগাযোগ করুন",
        aboutTitle: "আমার সম্পর্কে",
        aboutContent1: "আমি নাহিদ হোসেন, একজন পেশাদার ওয়েব ডেভেলপার। আমি ৫ বছরেরও বেশি অভিজ্ঞতা নিয়ে কাজ করছি এবং বিভিন্ন প্রযুক্তি যেমন HTML, CSS, JavaScript, React, Node.js ইত্যাদি ব্যবহার করে ওয়েবসাইট ও ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
        aboutContent2: "আমার কাজের মূল লক্ষ্য হলো ব্যবহারকারীদের জন্য সহজ এবং আকর্ষণীয় ইন্টারফেস তৈরি করা। আমি সবসময় নতুন প্রযুক্তি শিখতে এবং আমার দক্ষতা উন্নত করতে আগ্রহী।",
        projectsTitle: "আমার প্রজেক্টস",
        project1: "ই-কমার্স ওয়েবসাইট",
        project1Desc: "React এবং Node.js ব্যবহার করে তৈরি একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম।",
        project2: "পোর্টফোলিও থিম",
        project2Desc: "WordPress এর জন্য একটি প্রিমিয়াম কাস্টম পোর্টফোলিও থিম।",
        project3: "রেস্টুরেন্ট ওয়েবসাইট",
        project3Desc: "একটি আধুনিক রেস্পন্সিভ রেস্টুরেন্ট ওয়েবসাইট।",
        contactTitle: "যোগাযোগ",
        email: "ইমেইল",
        phone: "ফোন",
        address: "ঠিকানা",
        footerText: "© ২০২৪ নাহিদ হোসেন। সর্বস্বত্ব সংরক্ষিত।",
        darkMode: "ডার্ক মোড",
        switchLanguage: "Switch to English"
    }
};

let currentLanguage = 'bn';
let isAdmin = false;

function updateContent(lang) {
    const c = content[lang];
    
    // Update title
    document.title = c.title;
    
    // Update header
    document.querySelector('.logo h1').textContent = c.name;
    document.querySelector('.logo p').textContent = c.profession;
    
    // Update hero section
    document.querySelector('.hero h2').textContent = c.welcome;
    document.querySelector('.hero p').textContent = c.description;
    document.querySelector('.cta-button').textContent = c.contactButton;
    
    // Update about section
    document.querySelector('#about .section-title').textContent = c.aboutTitle;
    const aboutParagraphs = document.querySelectorAll('#about .about-content p');
    aboutParagraphs[0].textContent = c.aboutContent1;
    aboutParagraphs[1].textContent = c.aboutContent2;
    
    // Update projects section
    document.querySelector('#projects .section-title').textContent = c.projectsTitle;
    const projectTitles = document.querySelectorAll('.project-content h3');
    const projectDescriptions = document.querySelectorAll('.project-content p');
    projectTitles[0].textContent = c.project1;
    projectDescriptions[0].textContent = c.project1Desc;
    projectTitles[1].textContent = c.project2;
    projectDescriptions[1].textContent = c.project2Desc;
    projectTitles[2].textContent = c.project3;
    projectDescriptions[2].textContent = c.project3Desc;
    
    // Update contact section
    document.querySelector('#contact .section-title').textContent = c.contactTitle;
    const contactLabels = document.querySelectorAll('.contact-item label');
    contactLabels[0].textContent = c.name;
    contactLabels[1].textContent = c.email;
    contactLabels[2].textContent = c.message;
    
    // Update footer
    document.querySelector('.footer p').textContent = c.footerText;
    document.querySelector('.theme-switch label').textContent = c.darkMode;
    document.querySelector('#language-toggle').textContent = c.switchLanguage;
}

languageToggle.addEventListener('click', function() {
    currentLanguage = currentLanguage === 'bn' ? 'en' : 'bn';
    updateContent(currentLanguage);
});

// Handle log in form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;

    const storedUser = { phone: '01825620497', password: '3012024' };

    if (storedUser.phone === phone && storedUser.password === password) {
        alert('Log In successful.');
        document.getElementById('admin-link').innerHTML = '<a href="#admin">নাহিদ (লগইন)</a>'; // Admin name displayed after login
        document.body.classList.remove('blur-background'); // Remove blur
        document.getElementById('auth-modal').style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('product-form').style.display = 'block';
        isAdmin = true; // Set admin status
        displayProducts(); // Refresh products to show admin options
    } else {
        alert('Log In failed. Please check your credentials.');
    }
});

// Handle product form submission
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const link = document.getElementById('product-link').value;
    const imageFile = document.getElementById('product-image').files[0];
    const description = document.getElementById('product-description').value;

    const reader = new FileReader();
    reader.onloadend = function() {
        const image = reader.result;
        const product = { id: Date.now(), name, price, link, image, description };

        // Save product to local storage
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product saved successfully.');
        document.getElementById('product-form').reset();
        displayProducts();
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});

// Function to display products
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>৳ ${product.price}</p>
                <a href="${product.link}" class="buy-button" target="_blank">Buy</a> <!-- Buy button -->
                ${isAdmin ? `<button class="edit-button" onclick="editProduct(${product.id})">Edit</button><button class="delete-button" onclick="deleteProduct(${product.id})">Delete</button>` : ''}
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Function to delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(product => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product deleted successfully.');
        displayProducts();
    }
}

// Function to edit product
function editProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(product => product.id === productId);

    if (product) {
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-link').value = product.link;
        document.getElementById('product-description').value = product.description;
        
        // Simulate file upload preview
        const productImage = document.getElementById('product-image');
        productImage.files = null;
        const preview = document.createElement('img');
        preview.src = product.image;
        preview.style.maxWidth = '200px';
        productImage.insertAdjacentElement('afterend', preview);

        document.getElementById('product-form').addEventListener('submit', function updateProduct(event) {
            event.preventDefault();

            product.name = document.getElementById('product-name').value;
            product.price = document.getElementById('product-price').value;
            product.link = document.getElementById('product-link').value;
            product.description = document.getElementById('product-description').value;

            const reader = new FileReader();
            reader.onloadend = function() {
                product.image = reader.result;

                localStorage.setItem('products', JSON.stringify(products));
                alert('Product updated successfully.');
                document.getElementById('product-form').reset();
                preview.remove(); // Remove preview image
                displayProducts();
            };

            const imageFile = document.getElementById('product-image').files[0];
            if (imageFile) {
                reader.readAsDataURL(imageFile);
            } else {
                localStorage.setItem('products', JSON.stringify(products));
                alert('Product updated successfully.');
                document.getElementById('product-form').reset();
                preview.remove(); // Remove preview image
                displayProducts();
            }

            // Remove the update event listener to prevent duplication
            document.getElementById('product-form').removeEventListener('submit', updateProduct);
        });
    }
}

// Initial call to display products when page loads
document.addEventListener('DOMContentLoaded', displayProducts);

// Show login modal on admin link click
document.getElementById('admin-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('blur-background'); // Blur background
    document.getElementById('auth-modal').style.display = 'flex';
});

// Close modal
document.querySelector('.close').addEventListener('click', function() {
    document.body.classList.remove('blur-background'); // Remove blur
    document.getElementById('auth-modal').style.display = 'none';
});