const featuresData = [
    {
        imgSrc: "/assets/images/tune.svg",
        altText: "tune icon",
        title: "Tailored to perfection",
        description: "A website crafted to reflect your vision"
    },
    {
        imgSrc: "/assets/images/palette.svg",
        altText: "palette icon",
        title: "Effortless sophistication",
        description: "Striking design meets seamless functionality"
    },
    {
        imgSrc: "/assets/images/rocket.svg",
        altText: "rocket icon",
        title: "Future-proof by design",
        description: "Scalable, built to grow with your brands"
    },
    {
        imgSrc: "/assets/images/bolt.svg",
        altText: "bolt icon",
        title: "Speed without compromise",
        description: "Fast, efficient, and built to last"
    },
    {
        imgSrc: "/assets/images/cog.svg",
        altText: "cog icon",
        title: "Precision & Performance",
        description: "Expertly engineered for flawless execution"
    },
    {
        imgSrc: "/assets/images/star.svg",
        altText: "star icon",
        title: "Excellence, redefined",
        description: "Luxury web design without unnecessary costs"
    }
];

const portfolioData = [
    {
        imgSrc: "assets/images/land.jpeg",
        altText: "example landing page",
        title: "Ohio roofing",
        description: "Project Description Project Description Project Description Project Description",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land2.png",
        altText: "example landing page",
        title: "Skibid cafe",
        description: "Project Description Project Description Project Description Project Description",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land3.jpg",
        altText: "example landing page",
        title: "Big chungus den",
        description: "Project Description Project Description Project Description Project Description",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land4.jpg",
        altText: "example landing page",
        title: "Lazer shag",
        description: "Project Description Project Description Project Description Project Description",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land5.jpg",
        altText: "example landing page",
        title: "Bin weevils",
        description: "Project Description Project Description Project Description Project Description",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land6.avif",
        altText: "example landing page",
        title: "Joe mumma",
        description: "Project Description Project Description Project Description Project Description",
        link: "pages/website-portfolio.html"
    }
];

const pricingData = [
    {
        title: "Core",
        oldPrice: "£150",
        description: "One time payment",
        features: [
            "Responsive Design",
            "Fast, Lightweight, and Optimised",
            "Basic SEO Setup",
            "1 Round Of Revision"
        ]
    },
    {
        title: "Luxe",
        oldPrice: "£300",
        description: "One time payment",
        features: [
            "Responsive Design",
            "Fast, Lightweight, and Optimised",
            "Basic SEO Setup",
            "1 Round Of Revision"
        ]
    },
    {
        title: "Enterprise",
        oldPrice: "Pricing on quote",
        description: "Custom payment plans",
        features: [
            "Responsive Design",
            "Fast, Lightweight, and Optimised",
            "Basic SEO Setup",
            "1 Round Of Revision"
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const featuresContainer = document.querySelector(".features__grid");
    const portfolioContainer = document.querySelector(".portfolio__grid");
    const pricingContainer = document.querySelector(".pricing__card-container");

    featuresData.forEach(feature => {
        const featureElement = document.createElement("div");
        featureElement.classList.add("features__grid-item");

        featureElement.innerHTML = `
            <div class="features__grid-item-img-container flex-center">
                <img src="${feature.imgSrc}" alt="${feature.altText}">
            </div>
            <div class="features__grid-item-text">
                <h5>${feature.title}</h5>
                <p>${feature.description}</p>
            </div>
        `;

        featuresContainer.appendChild(featureElement);
    });

    portfolioData.forEach(item => {
        const portfolioElement = document.createElement("div");
        portfolioElement.classList.add("portfolio__grid-item");
        portfolioElement.classList.add("transition");

        portfolioElement.innerHTML = `
            <div class="portfolio__grid-item-img-container transition">
                <img src="${item.imgSrc}" alt="${item.altText}" class="portfolio__grid-item-img">
            </div>
            <div class="portfolio__grid-item-text">
                <h5 class="text-gradient">${item.title}</h5>
                <p class="transition">${item.description}</p>
                <a class="view-project" href="${item.link}">View project →</a>
            </div>
        `;

        portfolioContainer.appendChild(portfolioElement);
    });

    pricingData.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("pricing__card");

        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <h2 class="pricing__old-price">${card.oldPrice}</h2>
            <p>${card.description}</p>
            <a href="#contact"><button class="pricing__card-btn transition">Get started</button></a>
            <div class="pricing__card-divider"></div>
            <h5>What's included</h5>
            ${card.features.map(feature => `
                <h5 class="pricing__card-included"><span class="pricing__card-tick">✓</span> ${feature}</h5>
            `).join('')}
        `;

        pricingContainer.appendChild(cardElement);
    });
});