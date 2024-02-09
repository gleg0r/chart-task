import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { jobsData } from '../../core/data/jobsData';

let newJobsData = jobsData;
let showJobIndexes = [];

export default function Jobs({ get, clickedSkill, jobs, skillIndex }) {
  const [jobIndex, setJobIndex] = useState(null);

  function handleClick(index, name) {
    showJobIndexes = [];
    setJobIndex(index);
    get(name, index);
  }
  function changeJobsPlace(jobIndexes, index) {
    console.log(jobIndexes);
    showJobIndexes = [];
    let avg = Math.ceil(index/2.8);
    let stepPlus;
    if(index > 8) {
      stepPlus = -1;
    } else {
      stepPlus = -2;
    }
    
    if (index > 12) stepPlus = -1;
    for(let i = 0; i < jobsData.length; i++) {
      if(jobIndexes.includes(i)) {
        if(avg+stepPlus > 9) {
          avg = 0;
          stepPlus = 0;
        }
        if(avg+stepPlus < 0) {
          avg = 9;
          stepPlus = 0;
        }
        showJobIndexes.push(avg+stepPlus);
        [newJobsData[i], newJobsData[avg+stepPlus]] = [newJobsData[avg+stepPlus],newJobsData[i]];
        stepPlus++;
      }
    }
    showJobIndexes.sort();
    if(!clickedSkill) {
      showJobIndexes = [];
    }
    console.log(showJobIndexes);

  }

  useEffect(() => {
    if(clickedSkill) {
      setJobIndex(null);
      showJobIndexes = [];
    }
    changeJobsPlace(jobs, skillIndex);
  }, [clickedSkill, jobsData, jobs, showJobIndexes]);

  return(
    <div className={s.jobs}>
      {
        newJobsData.map((item, index) => {
          return <ul key={index} className={s.jobs__circles}>
            <li
              onClick={() => handleClick(index, item)}
              className={cn(
                jobIndex === index || showJobIndexes.includes(index)
                  ? s.jobs__itemActive
                  : s.jobs__item
              )}></li>
            <li
              className={
                cn(
                  jobIndex === index
                    ? s.jobs__borderActive
                    : s.jobs_border
                )}></li>
            <li
              className={
                cn(
                  jobIndex === index 
                    ? s.jobs__textActive 
                    : s.jobs__text
                )}>{item}</li>
          </ul>;
        })
      }
    </div>
  );
}