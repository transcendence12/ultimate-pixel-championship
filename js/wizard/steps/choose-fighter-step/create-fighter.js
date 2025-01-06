import { fighterData } from '../../../data/fighter-data.js';
import { displayFighterPoints } from './display-fighter-points.js';
import { createSpecialAttributs } from './create-special-attributs.js';

export const createFighter = (appState) => {
   if (!appState) {
      throw new Error('appState is required in createFighter');
   }

   let currentIndex = 0;

   const fighterContainer = document.createElement('div');
   fighterContainer.classList.add('fighter-container');

   function updateFighterProfile(index) {
      // Update all elements with data from fighterData[index]
      fighterContainer.innerHTML = '';
      const fighter = fighterData[index];

      const fighterProfileElement = document.createElement('div');
      fighterProfileElement.classList.add('fighter-profile-element');
      const fighterAvatar = document.createElement('div');
      fighterAvatar.classList.add('fighter-avatar');
      fighterAvatar.style.backgroundImage = `url(${fighter.imageUrl})`;
      const fighterFloor = document.createElement('div');
      fighterFloor.classList.add('fighter-floor');
      const boxWithArrowsAndName = document.createElement('div');
      boxWithArrowsAndName.classList.add('box-with-arrows-and-name');
      const displayArrowPrev = document.createElement('button');
      displayArrowPrev.classList.add('arrow-prev');
      displayArrowPrev.disabled = currentIndex === 0;

      const fighterName = document.createElement('p');
      fighterName.classList.add('fighter-name');
      fighterName.innerText = fighter.name;
      const displayArrowNext = document.createElement('button');
      displayArrowNext.classList.add('arrow-next');
      displayArrowNext.disabled = currentIndex === fighterData.length - 1;

      if (currentIndex === 0) {
         displayArrowPrev.style.display = 'none';
      } else {
         displayArrowPrev.style.display = 'inline-block';
      }

      if (currentIndex === fighterData.length - 1) {
         displayArrowNext.style.display = 'none';
      } else {
         displayArrowNext.style.display = 'inline-block';
      }

      boxWithArrowsAndName.append(displayArrowPrev, fighterName, displayArrowNext);
      const displayFighterPointsElements = displayFighterPoints(fighter);
      const createFighterSpecialAttributsElement = createSpecialAttributs(fighter);
      fighterProfileElement.append(
         fighterAvatar,
         fighterFloor,
         boxWithArrowsAndName,
         displayFighterPointsElements,
         createFighterSpecialAttributsElement,
      );

      fighterContainer.append(fighterProfileElement);
      displayArrowPrev.addEventListener('click', () => {
         console.log('ARROW prev');
         if (currentIndex > 0) {
            currentIndex--;
            updateFighterProfile(currentIndex);
         }
         // currentIndex = (currentIndex - 1 + fighterData.length) % fighterData.length;
         console.log('Previous fighter:', currentIndex);
         // updateFighterProfile(currentIndex);
      });

      displayArrowNext.addEventListener('click', () => {
         console.log('ARROW NEXT');
         if (currentIndex < fighterData.length - 1) {
            currentIndex++;
            updateFighterProfile(currentIndex);
         }
      });

      // Fighter is stored in appState when arrows are clicked or initially loaded
      appState.currentFighter = fighter;
   }

   updateFighterProfile(currentIndex);
   return fighterContainer;
};
