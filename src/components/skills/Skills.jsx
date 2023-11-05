import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import styles from "./Skills.module.scss";

const Skills = () => {
  const skillsData = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 80 },
    { name: "NextJS", percentage: 75 },
    { name: "NodeJS", percentage: 65 },
    { name: "Express", percentage: 60 },
    { name: "MongoDB", percentage: 65 },
    { name: "GitHub", percentage: 85 },
    { name: "Redux", percentage: 75 },
  ];

  return (
    <div className={`section ${styles.skills}`} id="skills">
      <h1 className="title">Skills</h1>
      <div className={styles.skills_container}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.one_skill}>
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textColor: "#333",
                pathColor: `#dfff00`,
                trailColor: "#eee",
              })}
              className={styles.progress_bar}
            />
            <span className={styles.one_skill_title}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
