const featuresData = [
    {
        imgSrc: "/assets/images/tune.png",
        altText: "tune icon",
        title: "Tailored to perfection",
        description: "A website crafted to reflect your vision"
    },
    {
        imgSrc: "/assets/images/palette.png",
        altText: "palette icon",
        title: "Effortless sophistication",
        description: "Striking design meets seamless functionality"
    },
    {
        imgSrc: "/assets/images/rocket.png",
        altText: "rocket icon",
        title: "Designed to last",
        description: "Scalable, built to grow with your business"
    },
    {
        imgSrc: "/assets/images/bolt.png",
        altText: "bolt icon",
        title: "Speed without compromise",
        description: "Fast, efficient, and reliable"
    },
    {
        imgSrc: "/assets/images/cog.png",
        altText: "cog icon",
        title: "Precision & Performance",
        description: "Expertly engineered for flawless deployment"
    },
    {
        imgSrc: "/assets/images/star.png",
        altText: "star icon",
        title: "Excellence, redefined",
        description: "Luxury web design without unnecessary costs"
    }
];

const portfolioData = [
    {
        imgSrc: "assets/images/land.jpeg",
        altText: "example landing page",
        title: "Roofing example 1",
        description: "Project Description of roofing business, Here we developed the front-end of the website for a roofing company. The website is designed to be responsive and user-friendly.",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land2.png",
        altText: "cafe example landing page",
        title: "Cafe example 1",
        description: "Project Description of cafe business, we designed and developed this in a short amount of time. The website is designed to be responsive and user-friendly.",
        link: "pages/website-portfolio.html"
    },
    {
        imgSrc: "assets/images/land3.jpg",
        altText: "example landing page",
        title: "Lazer tag example 1",
        description: "Project Description of lazer tag business, we designed and developed this in a short amount of time. The website is designed to be responsive and user-friendly.",
        link: "pages/website-portfolio.html"
    },
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
            <div class="features__grid-item-img-container flex-center transition">
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
                <h4 class="text-gradient">${item.title}</h4>
                <p class="transition">${item.description}</p>
                <a class="view-project" href="/pages/website-portfolio.html"><p>View project →</p></a>
            </div>
        `;

        portfolioContainer.appendChild(portfolioElement);
    });

    pricingData.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("pricing__card");
    
        // Add a specific class for the "Enterprise" card
        if (card.title === "Enterprise") {
            cardElement.classList.add("pricing__card--enterprise");
        }
    
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <h2 class="pricing__old-price">${card.oldPrice}</h2>
            <p class="pricing__pricing-plan">${card.description}</p>
            <a href="#contact" class="pricing__btn-a"><button class="pricing__card-btn transition">Get started</button></a>
            <div class="pricing__card-divider"></div>
            <h5>What's included</h5>
            ${card.features.map(feature => `
                <p class="pricing__card-included"><span class="pricing__card-tick">✓</span> ${feature}</p>
            `).join('')}
        `;
    
        pricingContainer.appendChild(cardElement);
    });
});