export const createButtonPrimary = () => {
   const buttonPrimary = document.createElement('button');
   buttonPrimary.classList.add('button-primary');
   buttonPrimary.innerText = 'Choose';
   return buttonPrimary;
};
