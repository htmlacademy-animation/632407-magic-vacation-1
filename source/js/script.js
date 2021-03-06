// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import intro from './modules/intro.js';
import story from './modules/story.js';
import common from './modules/common';
import FullPageScroll from './modules/full-page-scroll';


// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
intro();
common();
story();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
