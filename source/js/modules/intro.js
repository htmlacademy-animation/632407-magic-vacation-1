export default () => {
  let introMessage = document.querySelector(`.intro__message`);

  setTimeout(function(){
    introMessage.style.transform = 'translateY(0)';
    introMessage.style.opacity = '1';
  }, 200);
};
