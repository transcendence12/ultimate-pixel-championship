import { createStepper } from '../../../components/stepper/stepper.js';

export const bookingDetailsStep = (appState) => {
   if (!appState) {
      throw new Error('appState is required in bookingDetailsStep');
   }

   const stepWrapper = document.createElement('div');
   stepWrapper.classList.add('general-fighters-step-wrapper');

   const title = document.createElement('h1');
   title.classList.add('fighters-title');
   title.innerText = 'Booking details';

   const stepper = createStepper(appState.currentStepIndex);

   const bookingDetailsContent = document.createElement('div');
   
   // Show selected fighter info
   const selectedFighterInfo = document.createElement('div');
   selectedFighterInfo.classList.add('selected-fighter-info');
   selectedFighterInfo.innerHTML = `
      <p>Selected Fighter: <strong>${appState.selectedFighter?.name || 'None'}</strong></p>
   `;

   bookingDetailsContent.append(selectedFighterInfo);

   stepWrapper.append(title, stepper, bookingDetailsContent);
   return stepWrapper;
};
