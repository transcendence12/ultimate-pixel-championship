import { fighterData } from '../../../data/fighter-data.js';
import { displayFighterPoints } from './display-fighter-points.js';
import { createSpecialAttributs } from './create-special-attributs.js';

export const createFighter = () => {
   const fighterProfileElement = document.createElement('div');
   fighterProfileElement.classList.add('fighter-profile-element');
   const fighterAvatar = document.createElement('div');
   fighterAvatar.classList.add('fighter-avatar');
   fighterAvatar.style.backgroundImage = `url(${fighterData[0].imageUrl})`;
   const fighterFloor = document.createElement('div');
   fighterFloor.classList.add('fighter-floor');
   const boxWithArrowsAndName = document.createElement('div');
   boxWithArrowsAndName.classList.add('box-with-arrows-and-name');
   const displayArrowPrev = document.createElement('button');
   displayArrowPrev.classList.add('arrow-prev');
   const fighterName = document.createElement('p');
   fighterName.classList.add('fighter-name');
   fighterName.innerText = `${fighterData[0].name}`;
   const displayArrowNext = document.createElement('button');
   displayArrowNext.classList.add('arrow-next');
   boxWithArrowsAndName.append(displayArrowPrev, fighterName, displayArrowNext);
   const displayFighterPointsElements = displayFighterPoints();
   const createFighterSpecialAttributsElement = createSpecialAttributs();
   fighterProfileElement.append(
      fighterAvatar,
      fighterFloor,
      boxWithArrowsAndName,
      displayFighterPointsElements,
      createFighterSpecialAttributsElement,
   );
   return fighterProfileElement;
};
