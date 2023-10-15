import NavBar from "@/components/NavBar";
import { Figtree } from "next/font/google";
import "./globals.css";
import Favicon from "./favicon.ico";
import Footer from "@/components/Footer";

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
               <Footer />
            </footer>
         </body>
      </html>
   );
}
