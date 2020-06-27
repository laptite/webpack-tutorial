import TutorialBtn from './components/tutorial-btn/tutorial-btn';
import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';

const heading = new Heading();
heading.render();

const kiwiImage = new KiwiImage();
kiwiImage.render();

const tutorialBtn = new TutorialBtn();
tutorialBtn.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
