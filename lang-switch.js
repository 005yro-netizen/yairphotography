const hebrewBtn = document.getElementById('hebrew-btn');
const englishBtn = document.getElementById('english-btn');

hebrewBtn.addEventListener('click', () => {
    document.documentElement.lang = 'he';
    document.documentElement.dir = 'rtl';
    document.querySelector('.nav ul').innerHTML = `
        <li><a href="#home">בית</a></li>
        <li><a href="#gallery">גלריה</a></li>
        <li><a href="#contact">צור קשר</a></li>
    `;
    document.querySelector('.text-section h2').textContent = 'ברוכים הבאים לצילום יאיר רוזנברג';
    document.querySelector('.text-section p').textContent = 'הוסיפו כאן טקסט על השירותים שלכם, גלריה, או כל מידע שתרצו.';
    document.querySelector('.contact-section h2').textContent = 'צור קשר';
    document.querySelector('.contact-form input[name="name"]').placeholder = 'שם';
    document.querySelector('.contact-form input[name="phone"]').placeholder = 'טלפון';
    document.querySelector('.contact-form textarea').placeholder = 'הודעה';
    document.querySelector('.contact-form button').textContent = 'שלח';
    document.querySelector('.footer p').textContent = '© 2025 יאיר רוזנברג. כל הזכויות שמורות.';
});

englishBtn.addEventListener('click', () => {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.querySelector('.nav ul').innerHTML = `
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
    `;
    document.querySelector('.text-section h2').textContent = 'Welcome to yair rozenberg Photography';
    document.querySelector('.text-section p').textContent = 'Add your text about your services, gallery, or any info you want.';
    document.querySelector('.contact-section h2').textContent = 'Contact';
    document.querySelector('.contact-form input[name="name"]').placeholder = 'Name';
    document.querySelector('.contact-form input[name="phone"]').placeholder = 'Phone';
    document.querySelector('.contact-form textarea').placeholder = 'Message';
    document.querySelector('.contact-form button').textContent = 'Send';
    document.querySelector('.footer p').textContent = '© 2025 yair rozenberg Photography. All rights reserved.';
});
