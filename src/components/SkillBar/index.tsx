import { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaJs, FaBootstrap, FaPython,
  FaSass, FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiMysql
} from "react-icons/si";
import {
  BiBarChartAlt2, BiCodeBlock, BiSpreadsheet
} from "react-icons/bi";

import styles from "./SkillBar.module.scss";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SkillBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 100, category: "Front-end" },
    { name: "CSS", icon: <FaCss3Alt />, percentage: 95, category: "Front-end" },
    { name: "React", icon: <FaReact />, percentage: 90, category: "Front-end" },
    { name: "JavaScript", icon: <FaJs />, percentage: 85, category: "Front-end" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 80, category: "Front-end" },
    { name: "Bootstrap5", icon: <FaBootstrap />, percentage: 80, category: "Front-end" },
    { name: "TypeScript", icon: <SiTypescript />, percentage: 90, category: "Front-end" },
    { name: "Next.js", icon: <SiNextdotjs />, percentage: 75, category: "Front-end" },
    { name: "Vite", icon: <SiVite />, percentage: 80, category: "Front-end" },
    { name: "Sass", icon: <FaSass />, percentage: 90, category: "Front-end" },
    { name: "NodeJs", icon: <FaNodeJs />, percentage: 90, category: "Back-end" },
    { name: "SQL", icon: <SiMysql />, percentage: 90, category: "Back-end" },
    { name: "Python", icon: <FaPython />, percentage: 75, category: "Data Science" },
    { name: "Power BI", icon: <BiBarChartAlt2 />, percentage: 40, category: "Data Science" },
    { name: "NumPy", icon: <BiCodeBlock />, percentage: 90, category: "Data Science" },
    { name: "Excel", icon: <BiSpreadsheet />, percentage: 90, category: "Data Science" },
  ];

  const filteredSkills =
    selectedCategory === "Todos"
      ? skills
      : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className={styles.skill} id="skills" style={{scrollMarginTop: '90px',}}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <h2 className={styles.skill__titulo}>HARD SKILLS</h2>

        <div className={styles.skill__butoes}>
          {["Todos", "Front-end", "Back-end", "Data Science"].map((category) => (
            <button
              key={category}
              className={styles.skill__butao}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.skillsContainer}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.name}>{skill.name}</span>
                <span className={styles.percent}>{skill.percentage}%</span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillBar;
