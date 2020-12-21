export default () => {
  let bodyPage = document.querySelector('body');

  document.addEventListener('DOMContentLoaded', function(){
      bodyPage.classList.add('body-loaded');
  });
};
