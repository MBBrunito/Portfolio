import NavBar from "@/components/NavBar";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Favicon from "./favicon.ico";
import { contact } from "../../profile";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
const generalFont = Figtree({
   weight: ["400", "500", "600", "700"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
});

export const metadata = {
   title: "MarcosBrunoDev",
   description: "Marcos Bruno Portfolio",
   keywords: ["Marcos", "Bruno", "Brunito", "MB", "MBB", "MBBrunito"],
   colorScheme: "dark",
   icons: [
      {
         rel: "icon",
         url: Favicon,
      },
   ],
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={generalFont.className}>
            <NavBar />
            <main>{children}</main>
            <footer>
               <div className="footer">
                  <div>
                     <img
                        src="https://res.cloudinary.com/daoavxvau/image/upload/v1697171874/MBDevFS_vt13er.png"
                        alt=""
                     />
                  </div>
                  <div>
                     <h3>&copy; MarcosBrunoDev</h3>
                     <p>2023 - {new Date().getFullYear()}</p>
                     <p>All rights Reserved.</p>
                  </div>
                  <div className="redes">
                     {contact.map((cont, index) => (
                        <div key={index}>
                           <Link href={cont.contact} target="_blank">
                              <img src={cont.logo} alt="" />
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </footer>
         </body>
      </html>
   );
}
