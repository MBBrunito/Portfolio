import Link from "next/link";
import "./NavBar.css";
export default function NavBar() {
   return (
      <nav className="navContent">
         <Link href="/" className="linksNav" title="Ir a la página principal">
            <h2>MarcosBrunoDev</h2>
         </Link>
         <div className="menuLinks">
            <Link href="/portfolio" className="linksNav" title="Ver portfolio">
               Portafolio
            </Link>
            <Link
               href="/contactme"
               className="linksNav"
               title="Mándame un mensaje"
            >
               Háblame
            </Link>
         </div>
      </nav>
   );
}
