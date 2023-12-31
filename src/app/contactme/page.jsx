"use client";
import "./form.css";
import emailjs from "@emailjs/browser";
import Validation from "./validaton";
import { useEffect, useState, useRef } from "react";
import CustomAlert from "@/components/CustomAlert";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactMe(props) {
   const captcha = useRef(null);
   const [captchaOk, setCaptchaOk] = useState(false);
   const [user, setUser] = useState({
      user_name: "",
      user_email: "",
      user_message: "",
   });
   const [errors, setErrors] = useState({
      user_name: "",
      user_email: "",
      user_message: "",
   });

   const [touched, setTouched] = useState({
      user_name: false,
      user_email: false,
      user_message: false,
   });

   const [showAlert, setShowAlert] = useState(false);
   const [showSend, setShowSend] = useState(false);

   const handleAlertClose = () => {
      setShowAlert(false);
      setShowSend(false);
   };

   useEffect(() => {
      Validation(user, setErrors);
   }, [user]);

   const handleChange = (event) => {
      const { name, value } = event.target;

      setUser((prevUser) => ({
         ...prevUser,
         [name]: value,
      }));

      // Marcar el campo como tocado
      setTouched((prevTouched) => ({
         ...prevTouched,
         [name]: true,
      }));
   };

   const onChange = () => {
      if (captcha.current) {
         if (captcha.current) {
            setCaptchaOk(true);
         } else {
            setCaptchaOk(false);
         }
      } else {
         console.error(
            "Error: captcha.current no está definido correctamente."
         );
      }
   };

   const sendEmail = (event) => {
      event.preventDefault();

      if (
         captchaOk &&
         !errors.user_name &&
         !errors.user_email &&
         !errors.user_message
      ) {
         emailjs
            .sendForm(
               "service_hdgpszk",
               "template_vv8fvxg",
               event.target,
               "PzsnAQNS4YBVR1tcE"
            )
            .then((response) => {
               // console.log(response);
               setShowAlert(false);
               setShowSend(true);
            })
            .catch((error) => {
               // console.log(error);
               setShowAlert(true);
               setShowSend(false);
            });
      } else {
         setShowAlert(true);
         setShowSend(false);
      }
   };

   return (
      <div className="formContent">
         <div className="formInvite">
            <h3>¡Hablemos de Tu Próximo Proyecto!</h3>
            <p>
               Estoy emocionado por la posibilidad de trabajar contigo y hacer
               realidad tus ideas. Si tienes un proyecto en mente, una consulta
               técnica o simplemente quieres charlar sobre el fascinante mundo
               del desarrollo web, ¡estaré encantado de escucharte!
            </p>
            <p>
               Mi objetivo es crear soluciones tecnológicas que no solo sean
               funcionales sino también inspiradoras. Ya sea que estés buscando
               desarrollar una aplicación web innovadora, mejorar tu presencia
               en línea o aprender más sobre las últimas tecnologías, estoy aquí
               para ayudarte en cada paso del camino.
            </p>
            <h3>¿Cómo Puedo Ayudarte?</h3>
            <ul>
               <li>Desarrollo Web Frontend y Backend</li>
               <li>Diseño y Desarrollo de Aplicaciones Web Interactivas</li>
               <li>Consultas sobre Tecnologías y Mejores Prácticas</li>
               <li>Colaboraciones Creativas y Proyectos Innovadores</li>
            </ul>
            <p>
               No dudes en completar el formulario de contacto a continuación o
               escribirme directamente a{" "}
               <a
                  href="mailto:MarcosBrunoDev@gmail.com"
                  target="_blank"
                  title="Click para enviar un email"
               >
                  MarcosBrunoDev@gmail.com
               </a>
               . Estoy ansioso por escuchar tus ideas y trabajar juntos para
               hacerlas realidad.
            </p>
            <h4>¡Espero saber pronto de ti!</h4>
         </div>
         <form action="" className="form" onSubmit={sendEmail}>
            <div className="inputs">
               <input
                  type="text"
                  placeholder="Nombre Completo"
                  id="name"
                  name="user_name"
                  className="formInput"
                  value={user.user_name}
                  onChange={handleChange}
                  title="Ingresa tu nombre completo"
               />
               <input
                  type="text"
                  placeholder="Correo Electrónico"
                  id="email"
                  name="user_email"
                  className="formInput"
                  value={user.user_email}
                  onChange={handleChange}
                  title="Ingresa tu dirección de email"
               />
            </div>
            <textarea
               name="user_message"
               id="message"
               placeholder="Escriba aquí su mensaje"
               className="formMessage"
               value={user.user_message}
               onChange={handleChange}
               title="Escríbeme un mensaje, te responderé a la brevedad posible"
            ></textarea>
            <ReCAPTCHA
               ref={captcha}
               sitekey="6Lf3NqgoAAAAAPI_n3SBmqXB2ICM0U_OZHOBvGWN"
               // sitekey="6Ld3OagoAAAAAImXuI2I4WW2qr8WGJ5tPiznvDLI"
               onChange={onChange}
            />
            <button
               className="formbuttom"
               title="Click para enviar tu mensaje"
               type="submit"
            >
               Enviar
            </button>
            {showAlert && (
               <CustomAlert
                  message="Por favor verifica que los datos del formulario sean correctos"
                  onClose={handleAlertClose}
               />
            )}
            {showSend && (
               <CustomAlert
                  message="El mensaje fue enviado correctamente"
                  onClose={handleAlertClose}
               />
            )}
            <p className="formAlert">{touched.user_name && errors.user_name}</p>
            <p className="formAlert">
               {touched.user_email && errors.user_email}
            </p>
            <p className="formAlert">
               {touched.user_message && errors.user_message}
            </p>
         </form>
      </div>
   );
}
