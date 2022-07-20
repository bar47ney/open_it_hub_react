const mainScript = () => {
  //main-slider
  const btnSlider = document.querySelector(".btn-slider");
  const slider = document.querySelector(".main-slider");
  const sliderNav = document.querySelectorAll(".slider-nav img");

  const timeSliderAll = 12000;
  const valueSlider = 3;
  const timeOneSlider = timeSliderAll / valueSlider;

  const sliderLogic = () => {
    slider.classList.remove("main-slider-to-start");
    slider.classList.add("main-slider-to-right");
    sliderNav[0].classList.remove("slider-nav-active");
    sliderNav[1].classList.add("slider-nav-active");
    setTimeout(() => {
      slider.classList.add("main-slider-to-right-right");
      sliderNav[1].classList.remove("slider-nav-active");
      sliderNav[2].classList.add("slider-nav-active");
      setTimeout(() => {
        slider.classList.remove("main-slider-to-right");
        slider.classList.remove("main-slider-to-right-right");
        slider.classList.add("main-slider-to-start");
        sliderNav[2].classList.remove("slider-nav-active");
        sliderNav[0].classList.add("slider-nav-active");
      }, timeOneSlider);
    }, timeOneSlider);
  };

  setTimeout(() => sliderLogic(), timeOneSlider);
  setInterval(() => sliderLogic(), timeSliderAll + timeOneSlider * 2);

  //events-slider

  const eventsSlider = document.querySelector(".events-block-slider");
  const leftArrow = document.querySelector(".arrow-slider-left");
  const rightArrow = document.querySelector(".arrow-slider-right");
  const eventsSliderGrayBlockLeft = document.querySelector(
    ".events-slider-gray-block-item-left"
  );
  const eventsSliderGrayBlockRight = document.querySelector(
    ".events-slider-gray-block-item-right"
  );
  console.log(eventsSliderGrayBlockRight);
  const masEventsSliderItems = document.querySelectorAll(
    ".events-block-slider-item"
  );
  let eventsSliderStep = 554;
  let grayBorder = 350;
  if (document.documentElement.clientWidth <= 480) {
    eventsSliderStep = 206;
    grayBorder = 99;
  }

  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth <= 480) {
      eventsSliderStep = 206;
      grayBorder = 99;
    }
    if (document.documentElement.clientWidth > 480) {
      eventsSliderStep = 554;
      grayBorder = 350;
    }
    centerEventsSlider();
    checkToGray();
  });

  let eventsSliderPositionChange = 0;
  const eventsSliderCenterItem = Math.round(masEventsSliderItems.length / 2);
  let eventsSliderCurrentItem = eventsSliderCenterItem;
  console.log(masEventsSliderItems.length);

  const centerEventsSlider = () => {
    eventsSliderPositionChange =
      -eventsSliderStep * (eventsSliderCenterItem - 1);
    eventsSlider.style = `left: ${eventsSliderPositionChange}px`;
    eventsSliderCurrentItem = eventsSliderCenterItem;
    return eventsSliderPositionChange;
  };

  eventsSliderPositionChange = centerEventsSlider();

  const checkToGray = () => {
    console.log(
      `левый серый - ${
        eventsSliderGrayBlockLeft.getBoundingClientRect().x +
        eventsSliderGrayBlockLeft.getBoundingClientRect().width
      }`
    );
    console.log(
      `слайдер - ${masEventsSliderItems[0].getBoundingClientRect().left}`
    );

    if (
      masEventsSliderItems[0].getBoundingClientRect().left <
      eventsSliderGrayBlockLeft.getBoundingClientRect().x +
        eventsSliderGrayBlockLeft.getBoundingClientRect().width -
        grayBorder
    ) {
      eventsSliderGrayBlockLeft.classList.add(
        "events-slider-gray-block-item-visible"
      );
    }
    if (
      masEventsSliderItems[0].getBoundingClientRect().left >
      eventsSliderGrayBlockLeft.getBoundingClientRect().x +
        eventsSliderGrayBlockLeft.getBoundingClientRect().width -
        grayBorder
    ) {
      eventsSliderGrayBlockLeft.classList.remove(
        "events-slider-gray-block-item-visible"
      );
    }

    if (
      masEventsSliderItems[
        masEventsSliderItems.length - 1
      ].getBoundingClientRect().right >
      eventsSliderGrayBlockRight.getBoundingClientRect().x + grayBorder
    ) {
      eventsSliderGrayBlockRight.classList.add(
        "events-slider-gray-block-item-visible"
      );
    }
    if (
      masEventsSliderItems[
        masEventsSliderItems.length - 1
      ].getBoundingClientRect().right <
      eventsSliderGrayBlockRight.getBoundingClientRect().x + grayBorder
    ) {
      eventsSliderGrayBlockRight.classList.remove(
        "events-slider-gray-block-item-visible"
      );
    }
  };

  setTimeout(checkToGray, 400);

  leftArrow.addEventListener("click", () => {
    eventsSliderPositionChange += eventsSliderStep;
    eventsSlider.style = `left: ${eventsSliderPositionChange}px`;
    eventsSliderCurrentItem--;
    console.log(eventsSliderPositionChange);
    if (
      eventsSliderCurrentItem > masEventsSliderItems.length ||
      eventsSliderCurrentItem < 1
    ) {
      centerEventsSlider();
    }
    setTimeout(checkToGray, 400);
  });

  rightArrow.addEventListener("click", () => {
    eventsSliderPositionChange -= eventsSliderStep;
    eventsSlider.style = `left: ${eventsSliderPositionChange}px`;
    eventsSliderCurrentItem++;
    console.log(eventsSliderPositionChange);
    if (
      eventsSliderCurrentItem > masEventsSliderItems.length ||
      eventsSliderCurrentItem < 1
    ) {
      centerEventsSlider();
    }
    setTimeout(checkToGray, 400);
  });

  //reviews-slider
  const reviewsSlider = document.querySelector(".reviews-slider");
  const masReviewsSliderItems = document.querySelectorAll(
    ".reviews-slider-item"
  );
  let reviewsSliderArrowLeft = document.querySelector(".reviews-nav-left");
  let reviewsSliderArrowRight = document.querySelector(".reviews-nav-right");

  if (document.documentElement.clientWidth <= 480) {
    reviewsSliderArrowLeft = document.querySelector(
      ".mobile-flex .reviews-nav-left"
    );
    reviewsSliderArrowRight = document.querySelector(
      ".mobile-flex .reviews-nav-right"
    );
  }

  const reviewsSliderStep = 100;
  let reviewsSliderPositionChange = 0;
  let reviewsSliderCurrentItem = 1;

  const startReviewsSlider = () => {
    if (reviewsSliderCurrentItem > masReviewsSliderItems.length) {
      reviewsSliderPositionChange = 0;
      reviewsSliderCurrentItem = 1;
      reviewsSlider.style = `left: ${reviewsSliderPositionChange}%; width: ${
        masReviewsSliderItems.length * 100
      }%`;
    }

    if (reviewsSliderCurrentItem < 1) {
      reviewsSliderPositionChange = (-masReviewsSliderItems.length + 1) * 100;
      reviewsSliderCurrentItem = masReviewsSliderItems.length;
      reviewsSlider.style = `left: ${reviewsSliderPositionChange}%; width: ${
        masReviewsSliderItems.length * 100
      }%`;
    }
  };

  reviewsSlider.style = `left: ${reviewsSliderPositionChange}%; width: ${
    masReviewsSliderItems.length * 100
  }%`;
  startReviewsSlider();

  reviewsSliderArrowLeft.addEventListener("click", () => {
    reviewsSliderPositionChange += reviewsSliderStep;
    reviewsSlider.style = `left: ${reviewsSliderPositionChange}%; width: ${
      masReviewsSliderItems.length * 100
    }%`;
    reviewsSliderCurrentItem--;
    startReviewsSlider();
    console.log(`${reviewsSliderPositionChange} - reviewsSliderPositionChange`);
    console.log(reviewsSliderCurrentItem);
    console.log(masReviewsSliderItems.length);
  });
  reviewsSliderArrowRight.addEventListener("click", () => {
    reviewsSliderPositionChange -= reviewsSliderStep;
    reviewsSlider.style = `left: ${reviewsSliderPositionChange}%; width: ${
      masReviewsSliderItems.length * 100
    }%`;
    reviewsSliderCurrentItem++;
    startReviewsSlider();
    console.log(`${reviewsSliderPositionChange} - reviewsSliderPositionChange`);
    console.log(reviewsSliderCurrentItem);
    console.log(masReviewsSliderItems.length);
  });
};

export default mainScript;
