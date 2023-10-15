import Link from "next/link";
import "./NavBar.css";
export default function NavBar() {
   return (
      <nav className="navContent">
         <Link href="/" className="linksNav">
            <h2>MarcosBrunoDev</h2>
         </Link>
         <div className="menuLinks">
            <Link href="/portfolio" className="linksNav">
               Portafolio
            </Link>
            <Link href="/contactme" className="linksNav">
               Háblame
            </Link>
         </div>
      </nav>
   );
}
