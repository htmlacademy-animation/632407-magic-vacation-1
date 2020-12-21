export default () => {
  let introMessage = document.querySelector('.intro__message');
  let introInfo = document.querySelector('.intro__info');

  setTimeout(function(){
    introMessage.style.transform = 'translateY(0)';
    introMessage.style.opacity = '1';
    introInfo.style.opacity = '1';
  }, 200);
};
