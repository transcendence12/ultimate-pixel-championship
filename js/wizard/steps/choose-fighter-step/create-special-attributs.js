import { fighterData } from '../../../data/fighter-data.js';

export const createSpecialAttributs = () => {
   const specialAttributs = document.createElement('div');
   specialAttributs.classList.add('special-attributs');
   const specialAttributsaAttackTitle = document.createElement('span');
   specialAttributsaAttackTitle.classList.add('special-attributs-attack-title');
   specialAttributsaAttackTitle.innerText = 'SPECIAL ATTACK';
   const specialAttributsAttackDescription = document.createElement('span');
   specialAttributsAttackDescription.classList.add('special-attributs-attack-description');
   specialAttributsAttackDescription.innerText = `${fighterData[0].specialAttack}`;

   const specialAttributsWeaknessTitle = document.createElement('span');
   specialAttributsWeaknessTitle.classList.add('special-attributs-weakness-title');
   specialAttributsWeaknessTitle.innerText = 'WEAKNESS';

   const specialAttributsWeaknessDescription = document.createElement('span');
   specialAttributsWeaknessDescription.classList.add('special-attributs-weakness-description');
   specialAttributsWeaknessDescription.innerText = `${fighterData[0].weakness}`;

   specialAttributs.append(
      specialAttributsaAttackTitle,
      specialAttributsAttackDescription,
      specialAttributsWeaknessTitle,
      specialAttributsWeaknessDescription,
   );

   return specialAttributs;
};
