import { data } from '../data/db';

let mainSkills = [];
let otherSkills = [];

export default function arrayMapHelper(arr, lines, deg, i, skillsData, name) {
  // console.log(skillsData);
  // console.log(data);
  getTypeOfSkills(skillsData, name);
  arr.map((item) => {
    lines[item].style.transform = `rotate(${deg}deg)`;
    lines[item].style.height = '50%';
    if(deg+i > 30) {
      deg = 33;
    } else {
      deg+=i;
    }
  });
}

function getTypeOfSkills(skills, name) {
  data.map((item) => {
    if(item.name === name) {
      mainSkills.push(item.mainSkills);
      otherSkills.push(item.otherSkills);
      // console.log(mainSkills);
      // console.log(otherSkills);
    }
  });
}