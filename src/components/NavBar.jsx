import Link from "next/link";
import "./NavBar.css";
export default function NavBar() {
   return (
      <nav className="navContent">
         <Link href="/" className="linksNav">
            <h2>MarcosBrunoDev</h2>
         </Link>
         <div className="menuLinks">
            <Link href="/projects" className="linksNav">
               Projects
            </Link>
            <Link href="/contactme" className="linksNav">
               Contact me
            </Link>
         </div>
      </nav>
   );
}
