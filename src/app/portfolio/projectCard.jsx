/* eslint-disable @next/next/no-img-element */
import "./projectCard.css";
import Link from "next/link";
import { projects } from "../../../profile";

export default function Project() {
   return (
      <div className="card">
         {projects.map(({ name, description, date, image }, index) => (
            <div key={index}>
               <div className="cardContent">
                  <div className="photoCont">
                     <img src={image} alt="" className="photoProj" />
                  </div>
                  <div className="descProj">
                     <h3>{name}</h3>
                     <span>{date}</span>
                     <p>{description}</p>
                     <Link href="https://youtu.be/OWJFsyPq-LQ" target="_blank">
                        Ver más...
                     </Link>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
