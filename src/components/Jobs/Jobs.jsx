import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { jobsData } from '../../core/data/jobsData';

export default function Jobs({ get, clickedSkill }) {
  const [jobIndex, setJobIndex] = useState(null);

  function handleClick(index, name) {
    setJobIndex(index);
    get(name, index);
  }

  useEffect(() => {
    if(clickedSkill) {
      setJobIndex(null);
    }
  }, [clickedSkill]);

  return(
    <div className={s.jobs}>
      {
        jobsData.map((item, index) => {
          return <div key={index} className={s.jobs__circles}>
            <div onClick={() => handleClick(index, item)} className={cn(jobIndex === index ? s.jobs__itemActive : s.jobs__item)}></div>
            <div className={cn(jobIndex === index ? s.jobs__borderActive : s.jobs_border)}></div>
            <p className={cn(jobIndex === index ? s.jobs__textActive : s.jobs__text)}>{item}</p>
          </div>;
        })
      }
    </div>
  );
}