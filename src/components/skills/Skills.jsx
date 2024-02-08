import { React, useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { skillsData } from '../../core/data/skillsData';
import { data } from '../../core/data/db';
import Jobs from '../Jobs/Jobs';

let jobSkills = [];
let newJobSkills = [];
let newSkillsData = skillsData;

export default function Skills() {
  const [skillIndex, setSkillIndex] = useState(null);
  const [isJobChoosen, setIsJobChoosen] = useState(false);
  const [clickedSkill, setClickedSkill] = useState(false);

  function handleClick(index) {
    newJobSkills = [];
    setSkillIndex(index);
    setClickedSkill(true);
  }
  function getJobIndex(name, index) {
    setClickedSkill(false);
    setSkillIndex(null);
    jobSkills = [];
    data.map((item) => {
      if(item.name === name) {
        item.mainSkills.map((item) => {
          jobSkills.push(newSkillsData.indexOf(item));
        });
        item.otherSkills.map((item) => {
          jobSkills.push(newSkillsData.indexOf(item));
        });
      }
    });
    changeSkillsPlace(index);
    setIsJobChoosen(true);
    setTimeout(() => {
      setIsJobChoosen(false);
    }, 100);
  }

  function changeSkillsPlace(number) {
    newJobSkills = [];
    let avg = 2.5 * number;
    avg = Math.ceil(avg);
    let step = 0;
    for(let i = 0; i < newSkillsData.length; i++) {
      let temp;
      if(jobSkills.includes(i)) {
        temp = newSkillsData[avg+step];
        newSkillsData[avg+step] = newSkillsData[i];
        newSkillsData[i] = temp;
        newJobSkills.push(avg+step);
        if(step >= 0) {
          step = (step*-1) - 1;
        } else {
          step = (step*-1);
        }
      }
    }    
  }

  useEffect(() => {
    
  }, [isJobChoosen]);

  return(
    <div className={s.skills}>
      {
        newSkillsData.map((item, index) => {
          return <div key={index} className={s.skills__circles}>
            <div onClick={() => handleClick(index)} className={cn(newJobSkills.includes(index) || skillIndex === index? s.skills__itemActive : s.skills__item)}></div>
            <p className={cn(skillIndex === index ? s.skills__textActive : s.skills__text)}>{item}</p>
          </div>;
        })
      }
      <div className={s.skills__jobs}>
        <Jobs get={getJobIndex} clickedSkill={clickedSkill}/>
      </div>
    </div>
  );
}