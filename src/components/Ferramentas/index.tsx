import styles from './Ferramentas.module.scss';
import { FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';




const Ferramentas = () => {
 
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

    return(
        

      <section className={styles.ferramentas} id="ferramentas"
      style={{
        
        
        scrollMarginTop: '80px',
      }}>
             <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.9 }}
        
      >
        <h3 className={styles.ferramentas__titulo}>FERRAMENTAS</h3>
            <div className={styles.ferramentas__card}>
                <ul className={styles.ferramentas__ul}>
                    <li className={styles.ferramentas__li}>
                        <FaGitAlt title="Git" color="#F05032" size="50" />
                        <p>Git</p>
                    </li>
                      <li className={styles.ferramentas__li}>
                        <img
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                         alt="VSCode"
                         width="50"
                        />
                        <p>VSCode</p>
                        
                    </li>
                    <li className={styles.ferramentas__li}>
                        <FaGithub title="GitHub" color="#6c63ff" size="50" />
                        <p>Github</p>
                        
                    </li>
                     <li className={styles.ferramentas__li}>
                        <SiFigma title="Figma" color="#F24E1E" size="50" />
                        <p>Figma</p>
                        
                    </li>
                </ul>
            </div>
      </motion.div>
            
        </section>
            

        
    )
}

export default Ferramentas;
