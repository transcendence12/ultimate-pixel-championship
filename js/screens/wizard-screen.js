import { initWizard } from '../wizard/wizard.js';
import { createMarginTop } from '../components/margins/margin-top.js';
import { createMarginBottom } from '../components/margins/margin-bottom.js';

export const wizardScreen = () => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.classList.add('wizard-app-container');
   const marginTop = createMarginTop();
   const wizard = initWizard();
   const marginBottom = createMarginBottom();
   wizardScreenWrapper.append(marginTop, wizard, marginBottom);
   return wizardScreenWrapper;
};
