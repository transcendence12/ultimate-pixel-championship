import { createStepper } from '../../../components/stepper/stepper.js';
import { createFighter } from './create-fighter.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary.js';

export const chooseFighterStep = (appState) => {
   if (!appState) {
      throw new Error('appState is required in chooseFighterStep');
   }

   const stepWrapper = document.createElement('div');
   stepWrapper.classList.add('general-fighters-step-wrapper');

   const title = document.createElement('h1');
   title.classList.add('fighters-title');
   title.innerText = 'Choose your fighter';

   const stepper = createStepper(appState.currentStepIndex);
   const fighterComponent = createFighter(appState);
   const chooseButton = createButtonPrimary();

   stepWrapper.append(title, stepper, fighterComponent, chooseButton);
   return stepWrapper;
};
