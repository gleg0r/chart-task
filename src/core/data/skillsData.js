import { data } from './db';

let skillsOnly = [...new Set(data.map(skill => ',' + skill.mainSkills + ',' + skill.otherSkills))];
let temp = [];

for(let i = 0; i < skillsOnly.length; i++) {
  temp += skillsOnly[i].split(',');
}
temp = temp.split(',');

const uniqueSkills = [...new Set(temp)];

const indexOfBlank = uniqueSkills.indexOf('');
if(indexOfBlank > -1) {
  uniqueSkills.splice(indexOfBlank, 1);
}

export const skillsData = uniqueSkills;