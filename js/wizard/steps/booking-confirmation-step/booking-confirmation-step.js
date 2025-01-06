import { createStepper } from '../../../components/stepper/stepper.js';

export const bookingConfirmationStep = (appState) => {
   if (!appState) {
      throw new Error('appState is required in bookingConfirmationStep');
   }

   const stepWrapper = document.createElement('div');
   stepWrapper.classList.add('general-fighters-step-wrapper'); // Use same wrapper class for consistent styling

   const title = document.createElement('h1');
   title.classList.add('fighters-title'); // Use same title class for consistent styling
   title.innerText = 'Confirmation';

   const stepper = createStepper(appState.currentStepIndex);

   // Confirmation content here
   const confirmationContent = document.createElement('div');
   confirmationContent.innerText = 'Confirmation content';

   stepWrapper.append(title, stepper, confirmationContent);
   return stepWrapper;
};
