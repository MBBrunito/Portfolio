/* eslint-disable @next/next/no-img-element */
import "./projectCard.css";
import Link from "next/link";
import { projects } from "../../../profile";

export default function Project() {
   return (
      <div className="card">
         {projects.map(({ name, description, date, image, link }, index) => (
            <div key={index}>
               <div className="cardContent">
                  <div className="photoCont">
                     <Link href={link} target="_blank">
                        <img
                           src={image}
                           alt={name}
                           title="Ver proyecto"
                           className="photoProj"
                        />
                     </Link>
                  </div>
                  <div className="descProj">
                     <h3>{name}</h3>
                     <span>{date}</span>
                     <p>{description}</p>
                     <Link href={link} target="_blank" title="Ver proyecto">
                        Ver más...
                     </Link>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
