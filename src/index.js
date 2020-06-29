import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import TutorialBtn from './components/tutorial-btn/tutorial-btn';
import Heading from './components/heading/heading';

library.add(faSpinner);
dom.watch();

const heading = new Heading();
heading.render('Tutorial Btn');

const tutorialBtn = new TutorialBtn();
tutorialBtn.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
