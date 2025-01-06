export const createStepper = (currentStep = 1) => {
   const createStepperElement = document.createElement('div');
   createStepperElement.classList.add('stepper-element');
   
   // Set the background image based on current step
   createStepperElement.style.background = `url('../assets/images/step${currentStep}.png')`;
   
   return createStepperElement;
};
