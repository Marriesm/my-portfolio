import styles from './orbit.module.scss';
import { FaSass, FaJs, FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { FiDownload } from "react-icons/fi";
import metwo from '../../../public/assets/metwo.jpg'
import { SiMysql } from 'react-icons/si';
import Typewriter from 'typewriter-effect';

const Orbit = () => {


  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.orbit} id="inicio" style={{scrollMarginTop: '90px',}}
    >
      <div className={styles.text}>
         <h1>SEJA BEM-VINDO, EU SOU <strong>MARIA EDUARDA SOARES.</strong></h1>
           <Typewriter
           
        onInit={(typewriter) => {
          typewriter
            .typeString('| DESENVOLVEDORA FULL-STACK & ANALISTA DE DADOS |')
            .start(); // Nenhum delete, nenhum loop
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 50,
          cursor: '|',
        }}
      />
      <div/>
         <div className={styles.button}>
          <button className={styles.button__curriculo} onClick={() => handleDownload('MariaEduardaSoares.dev.pdf')}>
            BAIXAR CV DEV
             <FiDownload size={18} className={styles.iconbutton} />
            
            </button>
             <button className={styles.button__curriculo} onClick={() => handleDownload('MariaEduardaSoares.dados.pdf')}>
              BAIXAR CV DADOS
             <FiDownload size={18} className={styles.iconbutton} />
            
            </button>
         </div>
         
      </div>

      <div className={styles.orbitBackground}>
      <div className={styles.orbitContainer}>
        <div className={styles.orbitCircle}>
          <FaReact className={styles.react} size={45} />
          <FaSass className={styles.sass} size={45} />
          <SiMysql className={styles.sql} size={45} /> 
          <FaJs className={styles.js} size={45} />
          <FaHtml5 className={styles.html1} size={45} />
          <DiPython className={styles.python} size={45}/>
          <SiTypescript className={styles.ts} size={45} />
          <FaNodeJs className={styles.node} size={45} />
        </div>
        <div className={styles.profileImageContainer}>
          <div className={styles.orbitRing}></div> {/* Linha circular aqui */}
          <img src={metwo} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Orbit;