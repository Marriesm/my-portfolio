import styles from './SobreMim.module.scss';
import camisaroxa from '../../../public/assets/camisaroxa.png';
import { BadgeCheck, Briefcase, Headphones } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const SobreMim = () => {

const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      
        <section className={styles.sobre}  id="sobre" style={{scrollMarginTop: '90px',}}>
       <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.9 }}
        
      >
         <h2 className={styles.sobre__h2}>SOBRE MIM</h2>
         <div className={styles.sobre__text}>
        <div className={styles.sobre__imagem}>
          <img
            src={camisaroxa}
            alt="eu em estilo anime"
            className={styles.sobre__me}
          />
        </div>

        <div className={styles.cards__texts}>
          <div className={styles.sobre__cards}>
            <div className={styles.sobre__card}>
              <BadgeCheck className={styles.sobre__icons} />
              <h3>Experiência</h3>
              <p>1+ anos como desenvolvedora full stack</p>
            </div>

            <div className={styles.sobre__card}>
              <Briefcase className={styles.sobre__icons} />
              <h3>Status</h3>
              <p>Aberta para freelance e contrato</p>
            </div>

            <div className={styles.sobre__card}>
              <Headphones className={styles.sobre__icons} />
              <h3>Suporte</h3>
              <p>Online durante dias úteis e até 12:00 em feriados!</p>
            </div>
          </div>

          <p className={styles.sobre__descricao}>
            <strong>Desenvolvedora full stack</strong> com foco em criar
            soluções digitais modernas, funcionais e responsivas. Tenho
            experiência com React, TypeScript, Node.js, Java, além de conhecimento em
            Python, SQL, análise de dados e bibliotecas como Pandas e NumPy.
            <br />
            <br />
            Atuo em projetos contratados e freelas, unindo desenvolvimento web
            com a capacidade de extrair insights relevantes a partir de dados.
            Valorizo código limpo, interfaces intuitivas e entregas eficientes,
            sempre adaptadas às necessidades do cliente.
            <br />
            <br />
            Tenho facilidade em aprender novas ferramentas, sou comprometida com
            prazos e estou sempre em busca de evoluir tecnicamente e colaborar
            com projetos de impacto.
          </p>
        </div>
      </div>
      </motion.div>

      

      
    </section>

      

  );
};

export default SobreMim;