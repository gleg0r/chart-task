/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { skillsData } from '../../core/data/skillsData';
import { data } from '../../core/data/db';
import Jobs from '../Jobs/Jobs';
import rotateLines from '../../core/helpers/rotateLines';
import { BundleCurve } from 'react-svg-curve';

let jobMainSkills = [];
let jobOtherSkills = [];
let newJobSkills = [];
let newSkillJobs = [];
export let newSkillsData = skillsData;

export default function Skills() {
  const [skillIndex, setSkillIndex] = useState(null);
  const [isJobChoosen, setIsJobChoosen] = useState(false);
  const [clickedSkill, setClickedSkill] = useState(false);

  function handleClick(index) {
    setSkillIndex(index);
    setClickedSkill(true);
    showJobs(index);
    newJobSkills = [];
  }
  function getJobIndex(name, index) {
    newJobSkills=[];
    setClickedSkill(false);
    setSkillIndex(null);
    jobMainSkills = [];
    jobOtherSkills = [];
    data.map((item) => {
      if(item.name === name) {
        item.mainSkills.map((item) => {
          jobMainSkills.push(newSkillsData.indexOf(item));
        });
        item.otherSkills.map((item) => {
          jobOtherSkills.push(newSkillsData.indexOf(item));
        });
      }
    });
    changeSkillsPlace(index, jobMainSkills, jobOtherSkills, name, index);
    setIsJobChoosen(true);
    setTimeout(() => {
      setIsJobChoosen(false);
    }, 100);
  }


  function changeSkillsPlace(number, mainIndex, otherIndex, name, index) {
    newJobSkills = [];
    let avg = 3 * number;
    let stepPlus = 0;
    let stepMinus = -1;
    if(avg < 14) {
      avg++;
    }
    if(avg > 14) {
      avg--;
    }
    if(avg > 21) {
      avg--;
    }
    for(let i = 0; i < newSkillsData.length; i++) {
      if(mainIndex.includes(i)) {
        if(avg+stepPlus > 27) {
          avg = 0;
          stepPlus = 0;
        }
        [newSkillsData[i], newSkillsData[avg+stepPlus]] = [newSkillsData[avg+stepPlus],newSkillsData[i]];
        newJobSkills.push(avg+stepPlus);
        stepPlus++;
      }
      if(otherIndex.includes(i)) {
        if(avg+stepMinus < 0) {
          avg = 27;
          stepMinus = 0;
        }
        [newSkillsData[i], newSkillsData[avg+stepMinus]] = [newSkillsData[avg+stepMinus],newSkillsData[i]];
        newJobSkills.push(avg+stepMinus);
        stepMinus--;
      }
    }

    newJobSkills = [...new Set(newJobSkills)];

    for (let i = 1, len = newJobSkills.length; i < len; i++) {
      let key = newJobSkills[i];
      let j = i - 1;
      while (j >= 0 && newJobSkills[j] > key) {
        newJobSkills[j + 1] = newJobSkills[j];
        j--;
      }
      newJobSkills[j + 1] = key;
    }
    if(newJobSkills[0] < 0) {
      newJobSkills.splice(0, 1);
    }
    rotateLines(newJobSkills, index, name);
  }

  function showJobs(index) {
    jobMainSkills = [];
    jobOtherSkills = [];
    newSkillJobs = [];
    
    data.map((item, i) => {
      if(item.mainSkills.includes(newSkillsData[index])) {
        jobMainSkills.push(i);
      }
      if(item.otherSkills.includes(newSkillsData[index])) {
       
        jobOtherSkills.push(i);
      }
    });
    newSkillJobs = jobMainSkills.concat(jobOtherSkills);
    
  }
  
  useEffect(() => {
    
  }, [isJobChoosen, jobMainSkills, ]);

  return(
    <div className={s.skills}>
      {
        newSkillsData.map((item, index) => {
          return <ul key={index} className={s.skills__circles}>
            <li
              onClick={() => handleClick(index)}
              className={
                cn(
                  newJobSkills.includes(index) || skillIndex === index
                    ? s.skills__itemActive
                    : s.skills__item
                )
              }></li>
            <li className={cn(skillIndex === index ? s.skills__border : s.blank)}></li>
            <li className={
              cn(
                skillIndex === index || newJobSkills.includes(index)
                  ? s.skills__textActive
                  : s.skills__text
              )}>
              {item}
            </li>
            <div className={cn(newJobSkills.includes(index) ? s.skills__line : s.blank)}>
              {jobMainSkills.lemgth !== 0 &&
                jobMainSkills.includes(index) 
                ? <hr id='line' className={s.skills__line_main} />
                : <hr id='line' className={s.skills__line_others} />
              } 
            </div>
          </ul>;

        })
      }

      <div className={s.skills__jobs}>
        <Jobs 
          jobs={newSkillJobs}
          get={getJobIndex}
          clickedSkill={clickedSkill}
          skillIndex={skillIndex}
        />
      </div>
    </div>
  );
}