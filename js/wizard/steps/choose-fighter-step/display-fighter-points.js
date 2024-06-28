import { fighterData } from '../../../data/fighter-data.js';

export const displayFighterPoints = (fighter) => {
   const pointsAttributes = document.createElement('div');
   pointsAttributes.classList.add('points-attributes');
   const healthPointGroup = document.createElement('div');
   healthPointGroup.classList.add('health-point-group');
   const healthTitle = document.createElement('span');
   healthTitle.innerText = 'HEALTH';
   const healthTitlePointValue = document.createElement('span');
   healthTitlePointValue.classList.add('health-title-point-value');
   healthTitlePointValue.innerText = fighter.health;
   healthPointGroup.append(healthTitle, healthTitlePointValue);
   const attackPointGroup = document.createElement('div');
   attackPointGroup.classList.add('attack-point');
   const attackPointGroupTitle = document.createElement('span');
   attackPointGroupTitle.classList.add('attack-point-group-title');
   attackPointGroupTitle.innerText = 'ATTACK';
   const displayMinMaxAttackPoints = document.createElement('span');
   displayMinMaxAttackPoints.classList.add('display-min-max-attack-points');
   displayMinMaxAttackPoints.innerText = `${fighter.attackMin} - ${fighter.attackMax}`;
   attackPointGroup.append(attackPointGroupTitle, displayMinMaxAttackPoints);
   pointsAttributes.append(healthPointGroup, attackPointGroup);

   return pointsAttributes;
};
