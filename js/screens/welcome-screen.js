import { createMarginTop } from '../components/margins/margin-top.js';
import { createMarginBottom } from '../components/margins/margin-bottom.js';
import { createButtonPrimary } from '../components/buttons/button-primary.js';

export const welcomeScreen = () => {
   const welcomeScreenWrapper = document.createElement('div');
   welcomeScreenWrapper.classList.add('welcome-app-container');

   const marginTop = createMarginTop();
   // welcomeScreenWrapper.innerText = 'Welcome screen';
   const welcomeTitle = document.createElement('h1');
   welcomeTitle.classList.add('welcome-title');
   welcomeTitle.innerText = 'Ultimate pixel';
   const welcomeTitleSpan = document.createElement('span');
   welcomeTitleSpan.classList.add('welcome-title-span');
   welcomeTitleSpan.innerText = 'Championships';
   const welcomeLogo = document.createElement('div');
   welcomeLogo.classList.add('welcome-logo');
   const welcomeTextParagraph = document.createElement('p');
   welcomeTextParagraph.classList.add('welcome-text-paragraph');
   welcomeTextParagraph.innerText = 'Fill out the form to sign up for upcoming tournee.';
   const buttonPrimary = createButtonPrimary();

   const marginBottom = createMarginBottom();
   welcomeScreenWrapper.append(
      marginTop,
      marginBottom,
      welcomeTitle,
      welcomeTitleSpan,
      welcomeLogo,
      welcomeTextParagraph,
      buttonPrimary,
   );
   return welcomeScreenWrapper;
};
