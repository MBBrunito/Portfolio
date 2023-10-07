import Link from "next/link";
import "./NavBar.css";
export default function NavBar() {
   return (
      <nav className="navContent">
         <h2 className="">MarcosBrunoDev</h2>
         <div className="menuLinks">
            <Link href="/">Home Page</Link>
            <Link href="/Projects">Projects</Link>
         </div>
      </nav>
   );
}
