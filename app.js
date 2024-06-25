import { welcomeScreen } from './js/screens/welcome-screen.js';
import { wizardScreen } from './js/screens/wizard-screen.js';
import router from './js/router/router.js';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');
   const displayWelcomeScreen = welcomeScreen();
   const displayWizardScreen = wizardScreen();

   // Display welcome screen
   app.append(displayWelcomeScreen);

   // Display wizard screen
   // app.append(displayWizardScreen);

   // router.addRoute('/wizard', () => {
   //    if (app.firstChild) {
   //       app.firstChild.remove();
   //       app.firstChild.append(displayWizardScreen);
   //    }
   // });
   router.addRoute('/', () => {
      app.innerHTML = '';
      app.append(displayWelcomeScreen);
   });

   router.addRoute('/wizard', () => {
      app.innerHTML = '';
      app.append(displayWizardScreen);
   });
   const chooseBtn = document.querySelector('.button-primary');
   chooseBtn.addEventListener('click', () => {
      // console.log('CLICKED');
      router.navigateTo('/wizard');
   });
   router.navigateTo(location.pathname);
});
