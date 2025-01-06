import { initWizard } from '../wizard/wizard.js';
import { createMarginTop } from '../components/margins/margin-top.js';
import { createMarginBottom } from '../components/margins/margin-bottom.js';

export const wizardScreen = (appState) => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.classList.add('wizard-app-container');
   const marginTop = createMarginTop();
   const wizard = initWizard(appState);
   const marginBottom = createMarginBottom();
   wizardScreenWrapper.append(marginTop, wizard, marginBottom);
   return wizardScreenWrapper;
};
