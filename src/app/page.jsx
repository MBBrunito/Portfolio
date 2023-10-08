import Link from "next/link";
import "./page.css";
import { experiencies, skills } from "../../profile";

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
   return (
      <div className="generalCont">
         <div className="headContent">
            <img
               className="photoMe"
               src="https://res.cloudinary.com/daoavxvau/image/upload/v1695691847/BrunoDev_gkcnto.png"
               alt=""
            />
            <div className="headerContent">
               <h3>¡Hola, Soy Marcos Bruno! 👋</h3>
               <h4>
                  ¡Encantado de conocerte! Soy un{" "}
                  <span>
                     desarrollador Full Stack con más de 30 años de experiencia
                  </span>{" "}
                  en el mundo de la programación. Mi pasión es transformar ideas
                  en código y crear soluciones tecnológicas innovadoras y
                  robustas.
               </h4>
               <h4>
                  ¡Estoy emocionado por la oportunidad de colaborar contigo en
                  tu próximo proyecto! Si estás buscando un desarrollador Full
                  Stack apasionado y experimentado,{" "}
                  <Link href="#">contáctame</Link> y hagamos algo grandioso
                  juntos. 🚀
               </h4>
            </div>
         </div>
         <div className="dataCont">
            <div className="skillContent">
               <h2 className="title">Habilidades</h2>
               <div className="listSkills">
                  {skills.map(({ skill, logo }, index) => (
                     <div key={index} className="skills">
                        <img src={logo} alt="" />
                        <p>{skill}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="experienceContent">
               <h2 className="title">Experiencia</h2>
               <ul className="ulExp">
                  {experiencies.map(
                     ({ title, date, description, items }, index) => (
                        <div key={index}>
                           <li>
                              <h3 className="titDesc">{title}</h3>
                              <h5 className="dateDesc">{date}</h5>
                              <p className="detaDesc">{description}</p>
                              <ul>
                                 {items.map((item, index) => (
                                    <li key={index}>
                                       <p className="itemDesc">{item}</p>
                                    </li>
                                 ))}
                                 <br />
                              </ul>
                           </li>
                        </div>
                     )
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
}
// {new Date().getFullYear() - 1991}
