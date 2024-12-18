/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background-color: #000000;
}

/* Header styles */
header {
    position: fixed;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 1rem;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
}

/* Hero section styles */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background-color: #ffffff;
    color: #000000;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #e0e0e0;
}

/* Featured Work section styles */
#featured-work {
    padding: 4rem 1rem;
}

#featured-work h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.video-item {
    position: relative;
    cursor: pointer;
}

.video-item img {
    width: 100%;
    height: auto;
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.video-item:hover .overlay {
    opacity: 1;
}

/* Testimonial section styles */
#testimonial {
    background-color: #1a1a1a;
    padding: 4rem 1rem;
    text-align: center;
}

#testimonial h2 {
    margin-bottom: 2rem;
}

blockquote {
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.client {
    font-weight: bold;
}

/* About section styles */
#about {
    padding: 4rem 1rem;
}

#about h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.about-content img {
    width: 100%;
    max-width: 500px;
    height: auto;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-text p {
    margin-bottom: 1rem;
}

/* Contact section styles */
#contact {
    padding: 4rem 1rem;
}

#contact h2 {
    text-align: center;
    margin-bottom: 2rem;
}

#contact-form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
}

#contact-form input,
#contact-form textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
}

#contact-form button {
    padding: 0.8rem;
    background-color: #ffffff;
    color: #000000;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

#contact-form button:hover {
    background-color: #e0e0e0;
}

/* Footer styles */
footer {
    text-align: center;
    padding: 1rem;
    background-color: #1a1a1a;
}

/* Responsive design */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
    }

    nav ul {
        margin-top: 1rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }
}