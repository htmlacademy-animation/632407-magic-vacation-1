export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let socialList = document.querySelectorAll(`.social-block__list > li`);
  let stepTime = 0;

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);

  });

  socialList.forEach(element => {
    element.style.transitionDelay = stepTime+'s';
    stepTime += 0.15;
  });

};
