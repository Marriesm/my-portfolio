import styles from './Menu.module.scss';
import chibimenu from '../../../public/assets/chibimenu.png';


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}; 


export default function Menu() {
  return (
    
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={chibimenu} alt="Logo MarrieDev" />
      </div>
      
      <nav className={styles.links}>
         <button className={styles.link} onClick={() => scrollToSection('inicio')}>
          INICIO
        </button>
          <button className={styles.link} onClick={() => scrollToSection('sobre')}>
          SOBRE MIM
        </button>
        <button className={styles.link} onClick={() => scrollToSection('ferramentas')}>
          FERRAMENTAS
        </button>
         <button className={styles.link} onClick={() => scrollToSection('skills')}>
          SKILLS
        </button>
         <button className={styles.link} onClick={() => scrollToSection('projetos')}>
          PROJETOS
        </button>
         <button className={styles.link} onClick={() => scrollToSection('certificados')}>
          CERTIFICADOS
        </button>
         <button className={styles.link} onClick={() => scrollToSection('orcamento')}>
          ORCAMENTO
        </button>
         <button className={styles.link} onClick={() => scrollToSection('contato')}>
          CONTATO
        </button>
      </nav>
    </header>
  );
}