import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { createStepper } from '../components/stepper/stepper.js';

export const initWizard = (appState) => {
   if (!appState) {
      throw new Error('appState is required in initWizard');
   }

   const wizardWrapper = document.createElement('div');
   wizardWrapper.classList.add('general-wizard-wrapper');

   let currentStep = 0;
   let currentContent = null;

   const updateStepContent = () => {
      if (currentContent) {
         currentContent.remove();
      }

      appState.currentStepIndex = currentStep;

      switch(currentStep) {
         case 0:
            currentContent = chooseFighterStep(appState);
            break;
         case 1:
            currentContent = bookingDetailsStep(appState);
            break;
         case 2:
            currentContent = bookingConfirmationStep(appState);
            break;
      }

      wizardWrapper.innerHTML = '';
      wizardWrapper.append(currentContent);

      if (currentStep === 0) {
         const chooseButton = wizardWrapper.querySelector('.button-primary');
         if (chooseButton) {
            chooseButton.addEventListener('click', () => {
               if (!appState.currentFighter) {
                  console.warn('Please select a fighter first');
                  return;
               }
               
               // Store complete fighter data
               appState.selectedFighter = {
                  ...appState.currentFighter,
                  selectedAt: new Date().toISOString()
               };
               
               currentStep = 1;
               updateStepContent();
            });
         }
      }
   };

   updateStepContent();
   return wizardWrapper;
};
