import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { jobsData } from '../../core/data/jobsData';

const newJobsSkill = [];

export default function Jobs({ get, clickedSkill, jobs }) {
  const [jobIndex, setJobIndex] = useState(null);

  function handleClick(index, name) {
    setJobIndex(index);
    get(name, index);
  }
  function changeJobsPlace() {
    newJobsSkill = [];
    

  }

  useEffect(() => {
    if(clickedSkill) {
      setJobIndex(null);
    }
  }, [clickedSkill, jobs]);

  return(
    <div className={s.jobs}>
      {
        jobsData.map((item, index) => {
          return <ul key={index} className={s.jobs__circles}>
            <li onClick={() => handleClick(index, item)} className={cn(jobIndex === index ? s.jobs__itemActive : s.jobs__item)}></li>
            <li className={cn(jobIndex === index ? s.jobs__borderActive : s.jobs_border)}></li>
            <li className={cn(jobIndex === index ? s.jobs__textActive : s.jobs__text)}>{item}</li>
          </ul>;
        })
      }
    </div>
  );
}