export const createStepper = (currentStep = 0) => {
   const createStepperElement = document.createElement('div');
   createStepperElement.classList.add('stepper-element');
   
   // Add 1 to currentStep for image names since they start from 1
   createStepperElement.style.background = `url('../assets/images/step${currentStep + 1}.png')`;
   
   return createStepperElement;
};
