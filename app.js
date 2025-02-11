// nav toggler

let toggleBtn =  document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('active');
})


// about us review container

let reviews = document.querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {
    setTimeout(() => {

        cards.forEach(card_index => {
            reviews[card_index].classList.add('active');
        })

    }, 250);
}

setInterval(() => {
    
    currentReviews.forEach((current_review_card_index, i) => {
        reviews[current_review_card_index].classList.remove('active');

        currentReviews[i] = current_review_card_index >= reviews.length - 1 ? 0 : current_review_card_index + 1;
    })

    updateReviewSlider(currentReviews)
    
}, 5000)

updateReviewSlider(currentReviews);

// faq

let faqs = [...document.querySelectorAll('.faq')];

faqs.map( faq => {

    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
    
})


// dish slider

let dishSlider = document.querySelector('.dish-slider');

let rotationVal = 0;

setInterval(() => {

    rotationVal += 120;

    dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;

}, 3000)

AOS.init();