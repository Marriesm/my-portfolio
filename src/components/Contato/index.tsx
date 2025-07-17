import styles from './Contato.module.scss';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import jaquetaroxa from '../../../public/assets/jaquetaroxa.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contato = () => {
 
   const form = useRef<HTMLFormElement>(null);

     const sendEmail = (e: React.FormEvent) => {
     e.preventDefault();

     emailjs.sendForm(
    'service_xm1hay7',
    'template_7ju8pxn',
    form.current!,
    'D2vp_w_ndkd3YqOUE'
    ).then(() => {
    alert('Mensagem enviada com sucesso!');
    form.current?.reset();
    }).catch((error) => {
    console.error('Erro ao enviar:', error.text);
   });
   };

     return(
        <section className={styles.contato} id="contato" style={{scrollMarginTop: '120px',}}>
          
        <div className={styles.contato__imagem}>
           <img src={jaquetaroxa} className={styles.img__contato}></img>
        </div>

        <div className={styles.contato__text}>
          <h2>Vamos conversar?</h2>
          <div className={styles.contato__lista}>
            <ul className={styles.contato__ul}>
               <li className={styles.contato__li}>
                  <FaWhatsapp className={styles.contato__icon} size={35}/>
                  <h4>Whatssap</h4>
                  <p>(62)98278-1169</p>
                  <a>🔗 Abrir WhatsApp</a>
               </li>
               <li className={styles.contato__li}>
                  <FaEnvelope className={styles.contato__icon} size={35}/>
                  <h4>Email</h4>
                  <p>Ms-eduardasoares@outlook.com</p>
                  <a>🔗 Enviar mensagem</a>
               </li>
               <li className={styles.contato__li}>
                  <FaLinkedin className={styles.contato__icon} size={35}/>
                  <h4>Linkedin</h4>
                  <p>Marriesoares</p>
                  <a>🔗 Abrir Linkedin</a>
               </li>
            </ul>
          </div>
          <form ref={form} onSubmit={sendEmail}  className={styles.contato__form} >
            <label className={styles.contato__label}>
               *Insira seu nome:
               <input type='text' name="name" required ></input>
            </label>
            <label className={styles.contato__label}>
               *Digite o assunto:
               <input name="title" required type="text"></input>
            </label>
            <label className={styles.contato__label}>
               *Digite o seu email:
               <input type='email' name="email" required className={styles.input__email}></input>
            </label>
             <label  className={styles.contato__label} >
               *Mensagem:
               <textarea name="message" required />
            
            </label>
            <button type="submit" className={styles.form__button}> 📩ENVIAR</button>
             
          </form>
          
        </div>
               
        </section>
     )
}
export default Contato;