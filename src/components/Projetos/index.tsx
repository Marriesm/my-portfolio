import styles from './Projetos.module.scss';
import git from '../../../public/assets/github.png';
import avanti from '../../../public/assets/avanti.png';
import aluroni from '../../../public/assets/aluroni.png';
import tarefas from '../../../public/assets/tarefas.png';
import jogo from '../../../public/assets/amigosecreto.png';
import organo from '../../../public/assets/organo.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Projetos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projetos = [
    {
      img: git,
      alt: "Projeto de busca no git",
      titulo: "Github-profile",
      descricao: "Aplicação web desenvolvida com React e TypeScript, que consome a API do GitHub para exibir nome, foto e descrição de perfis.",
    },
    {
      img: avanti,
      alt: "Ecommerce Avanti",
      titulo: "Avanti",
      descricao: "Interface de um e-commerce responsivo com HTML, CSS e JS. Simula a estrutura de uma loja online real.",
    },
    {
      img: aluroni,
      alt: "Restaurante Aluroni",
      titulo: "Aluroni",
      descricao: "Restaurante digital com filtros e rotas, feito com React + TypeScript, aplicando boas práticas de componentes.",
    },
    {
      img: tarefas,
      alt: "Temporizador de tarefas",
      titulo: "Tarefas Time",
      descricao: "Temporizador de foco/descanso com formulário dinâmico e controle de estado usando React + TS.",
    },
    {
      img: jogo,
      alt: "Amigo secreto",
      titulo: "Sorteador de amigo secreto",
      descricao: "App interativo com lógica de sorteio, cadastro e navegação suave entre telas, feito em React.",
    },
    {
      img: organo,
      alt: "Projeto educacional Organo",
      titulo: "Organo",
      descricao: "Aplicação que organiza equipes por áreas da TI, com formulários e exibição por cards personalizados.",
    },
  ];

  return (
    <section className={styles.projetos} id="projetos" style={{ scrollMarginTop: '100px' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.9 }}
      >
        <h2 className={styles.projetos__titulo}>PROJETOS</h2>

        <div className={styles.projetos__scroll}>
          {projetos.map((proj, index) => (
            <div key={index} className={styles.projetos__li}>
              <img src={proj.img} alt={proj.alt} />
              <h4 className={styles.projeto__h4}>{proj.titulo}</h4>
              <p>{proj.descricao}</p>
              <button><a href="#">Ver mais</a></button>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projetos;
