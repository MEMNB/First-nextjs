import Navbar from '@/components/Navbar';
import {
Roboto_Slab
} from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: "Mi tienda con Nextjs - HomePage",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
};
const roboto = Roboto_Slab({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />        

        {children}
      </body>
    </html>
  );
}
