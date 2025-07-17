import styles from './Rodape.module.scss';
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import chibi from '../../../public/assets/chibi.png'

const Rodape = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__imagem}>
                <img src={chibi} />
                <p>MARRIEDEV</p>
            </div>
            
            <div className={styles.footer__icons}>
                <FaGithub size={25} className={styles.footer__icon}/> 
                <FaLinkedin size={25} className={styles.footer__icon}/>
                <FaDiscord size={25} className={styles.footer__icon}/>
                <FaInstagram size={25}className={styles.footer__icon}/>
                
            </div>
            <p className={styles.footer__desc}>2025 © Maria Eduarda Soares. All rights reserved</p>

        </footer>
    )
}

export default Rodape;