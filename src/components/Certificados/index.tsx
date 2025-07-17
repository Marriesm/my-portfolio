import React, { useState} from 'react';
import styles from './Certificados.module.scss';
import formacaopython from '../../../public/assets/formacaopython.png';
import reactetype from '../../../public/assets/FormaçãoReactTypescript.png';
import sql from '../../../public/assets/Formacaosql.png';
import fromacaojavascript from '../../../public/assets/FormacaoJavascript.png';
import gitcurso from '../../../public/assets/gitcurso.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface CertificadoData {
  id: number;
  titulo: string;
  instituicao: string;
  imagem: string;
  descricao: string;
  link?: string;
}

const certificados: CertificadoData[] = [
  {
    id: 1,
    titulo: 'Formação Python',
    instituicao: 'Alura',
    imagem: formacaopython,
    descricao: 'Curso aprofundado em vários cursos de Python e performance.',
    link: 'https://cursos.alura.com.br/degree/certificate/33bf4b8b-ba41-4d7c-b2a0-55e3f62c0f56?lang=pt_BR',
  },
  {
    id: 2,
    titulo: 'React e Typescript',
    instituicao: 'Alura',
    imagem: reactetype,
    descricao: 'Criação de APIs com autenticação e banco de dados.',
    link: 'https://cursos.alura.com.br/degree/certificate/2d115d54-1870-474c-9cd8-64c648f3076f?lang=pt_BR',
  },
  {
    id: 3,
    titulo: 'Formação SQL',
    instituicao: 'Alura',
    imagem: sql,
    descricao: 'Banco de dados relacionais, consultas e modelagem.',
    link: 'https://cursos.alura.com.br/degree/certificate/23b4f5dc-cc3c-45c6-a15e-39e70325816f?lang=pt_BR',
  },
  {
    id: 4,
    titulo: 'Formação JavaScript',
    instituicao: 'Alura',
    imagem: fromacaojavascript,
    descricao: 'Conceitos fundamentais da linguagem e aplicações práticas.',
    link: 'https://cursos.alura.com.br/degree/certificate/8bcc519a-a781-47df-9ac3-d63f0513f61d?lang=pt_BR',
  },
  {
    id: 5,
    titulo: 'Formação Git e Github',
    instituicao: 'Alura',
    imagem: gitcurso,
    descricao: 'Controle de versão com Git e colaboração com GitHub.',
    link: 'https://cursos.alura.com.br/degree/certificate/8bcc519a-a781-47df-9ac3-d63f0513f61d?lang=pt_BR',
  },
];

const Certificado: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selecionado, setSelecionado] = useState<CertificadoData | null>(null);

  // Estado para detectar se é mobile (768px ou menos)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const conteudo = (
    <>
      <h2 className={styles.certificado__titulo}>🎓 Certificados</h2>
      <p className={styles.certificado__p}>
        <strong>*</strong> Clique no card para saber mais!
      </p>

      <div className={styles.carrossel__scroll}>
        {certificados.map((cert) => (
          <div
            key={cert.id}
            className={styles.cartao__certificado}
            onClick={() => setSelecionado(cert)}
          >
            <img src={cert.imagem} alt={cert.titulo} />
            <div className={styles.info__certificado}>
              <h3>{cert.titulo}</h3>
              <p className={styles.info__p}>{cert.instituicao}</p>
            </div>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className={styles.modal} onClick={() => setSelecionado(null)}>
          <div
            className={styles.conteudo__modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modal__button}>
              <button onClick={() => setSelecionado(null)}>Fechar ✖</button>
            </div>
            <div className={styles.modal__imagem}>
              <img src={selecionado.imagem} alt={selecionado.titulo} />
            </div>
            <div className={styles.modal__text}>
              <h3>{selecionado.titulo}</h3>
              <p className={styles.modal__descricao}>{selecionado.descricao}</p>
            </div>
            {selecionado.link && (
              <a
                href={selecionado.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botao__certificado}
              >
                VER CERTIFICADO 📄
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );

  return (
    <section
      className={styles.certificado__section}
      id="certificados"
      style={{ scrollMarginTop: '90px' }}
    >
      {isMobile ? (
        <div ref={ref}>{conteudo}</div>
      ) : (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.9 }}
        >
          {conteudo}
        </motion.div>
      )}
    </section>
  );
};

export default Certificado;
