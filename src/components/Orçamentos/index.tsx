import styles from "./Orcamentos.module.scss";
import { Mail, FileText } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Orcamento = () => {

const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.orcamento} id="orcamento" style={{scrollMarginTop: '90px',}}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.9 }}
        
      >
      <h2 className={styles.orcamento__titulo}>💸 Orçamento</h2>

      <div className={styles.cards__container}>
        <div className={styles.card}>
          <div className={styles.icon}>📈</div>
          <h3>Solicite um Orçamento</h3>
          <p>
            Tem uma ideia de projeto? Me envie os detalhes e eu retorno com uma
            proposta personalizada. Atendo tanto demandas pontuais quanto
            projetos contínuos.
          </p>
          <button className={styles.cta}>
            <Mail size={18} />
            Solicitar Orçamento
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🤝</div>
          <h3>Soluções para Empresas</h3>
          <p>
            Ofereço serviços como desenvolvedora full stack para empresas que
            buscam soluções digitais modernas e eficientes. Disponível para
            contratos contínuos, integrações com equipes técnicas ou desenvolvimento
            de sistemas sob demanda.
          </p>
          <button className={styles.cta}>
            <FileText size={18} />
            Solicitar Proposta Corporativa
          </button>
        </div>
      </div>
      </motion.div>
      
    </section>
  );
};

export default Orcamento;