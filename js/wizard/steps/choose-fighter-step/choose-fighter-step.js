import { createStepper } from '../../../components/stepper/stepper.js';
import { createFighter } from './create-fighter.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary.js';

export const chooseFighterStep = () => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.classList.add('general-fighters-step-wrapper');
   // chooseFighterStepWrapper.innerText = 'Choose fighter';
   const fightersTitle = document.createElement('h1');
   fightersTitle.classList.add('fighters-title');
   fightersTitle.innerText = 'Choose your fighter';
   // const stepperFirstStepWrapper = document.createElement("div");
   // stepperFirstStepWrapper.classList.add("stepper-fighter-step-wrapper");
   const step1 = createStepper();
   // stepperFirstStepWrapper.append(step1)
   const fighterItem = createFighter();
   const btnPrimary = createButtonPrimary();
   chooseFighterStepWrapper.append(fightersTitle, step1, fighterItem, btnPrimary);
   return chooseFighterStepWrapper;
};
