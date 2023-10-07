import NavBar from "@/components/NavBar";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

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
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={generalFont.className}>
            <NavBar />
            {children}
         </body>
      </html>
   );
}
