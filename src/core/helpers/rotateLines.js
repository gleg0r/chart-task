import arrayMapHelper from './arrayMapHelper';
import { newSkillsData } from '../../components/skills/Skills';

export default function rotateLines(arr, jobIndex, name) {
  jobIndex+= '';
  let deg = 0;
  let i = 10;
  let minusDeg;
  const lines = document.querySelectorAll('#line');
  for(let j = 0; j < jobIndex.length; j++) {
    switch(jobIndex[j]) {
    case '0': 
      minusDeg = -15;
      arr.map((item) => {
        lines[item].style.transform = `rotate(${deg}deg)`;
        lines[item].style.height = '50%';
        deg+=i;
      });
      lines[lines.length-1].style.transform = `rotate(${minusDeg}deg)`;
      lines[arr.length-2].style.transform = `rotate(${32}deg)`;
      lines[arr.length-1].style.height = '40%';
      lines[arr.length-2].style.height = '70%';
      lines[arr.length-3].style.height = '60%';
      break;
    case '1':
      minusDeg = -28;
      i = 11;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[0].style.transform = `rotate(${minusDeg+3}deg)`;
      lines[lines.length-1].style.transform = `rotate(${minusDeg}deg)`;
      lines[0].style.height = '70%';
      lines[lines.length-1].style.height = '70%';
      lines[arr[arr.length-2]].style.height = '60%';
      break;
    case '2':
      i = 11;
      minusDeg = -18;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[arr.length-1]].style.height = '100%';
      lines[arr[arr.length-2]].style.height = '90%';
      lines[arr[arr.length-3]].style.height = '80%';
      lines[arr[arr.length-4]].style.height = '70%';
      break;
    case '3':
      minusDeg = -12;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[arr.length-1]].style.transform = `rotate(${30}deg)`;
      lines[arr[arr.length-1]].style.height = '110%';
      lines[arr[arr.length-2]].style.height = '100%';
      lines[arr[arr.length-3]].style.height = '90%';
      lines[arr[arr.length-4]].style.height = '80%';
      lines[arr[arr.length-5]].style.height = '70%';
      lines[arr[arr.length-6]].style.height = '55%';
      break;
    case '4':
      i = 10;
      minusDeg = 12;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[arr.length-1]].style.height = '70%';
      lines[arr[arr.length-2]].style.height = '60%';
      break;
    case '5':
      minusDeg = -18;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[0]].style.height = '60%';
      break;
    case '6':
      minusDeg = -36;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[0]].style.transform = `rotate(${-26}deg)`;
      lines[arr[0]].style.height = '70%';
      lines[arr[1]].style.height = '60%';
      lines[arr[arr.length-1]].style.height = '80%';
      lines[arr[arr.length-2]].style.height = '70%';
      lines[arr[arr.length-3]].style.height = '60%';
      break;
    case '7':
      minusDeg = -7;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      break;
    case '8':
      minusDeg = -40 ;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[0]].style.transform = `rotate(${-26}deg)`;
      lines[arr[1]].style.transform = `rotate(${-27}deg)`;
      lines[arr[0]].style.height = '80%';
      lines[arr[1]].style.height = '70%';
      lines[arr[2]].style.height = '60%';
      lines[arr[arr.length-1]].style.height = '80%';
      lines[arr[arr.length-2]].style.height = '70%';
      break;
    case '9':
      minusDeg = -60;
      arrayMapHelper(arr, lines, minusDeg, i, newSkillsData, name);
      lines[arr[0]].style.transform = `rotate(${27}deg)`;
      lines[arr[1]].style.transform = `rotate(${31}deg)`;
      lines[arr[2]].style.transform = `rotate(${33}deg)`;
      lines[arr[3]].style.transform = `rotate(${-24}deg)`;
      lines[arr[0]].style.height = '60%';
      lines[arr[1]].style.height = '70%';
      lines[arr[2]].style.height = '80%';
      lines[arr[3]].style.height = '70%';
      lines[arr[4]].style.height = '60%';
      break;
    case 'default':
      break;
    }
  }
}