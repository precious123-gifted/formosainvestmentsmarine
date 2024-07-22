import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RefsProvider } from "./StateManager";
import { StateProvider } from "./StateManager";
import Homepage from "./homepage";


const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()

  const settings = await client.getSingle('settings')

 
  return {
    title: settings.data.company_title || 'Empty Title',
    description: settings.data.company_description || 'Add a Description',
    openGraph: {
      images: [settings.data?.og_image.url || "../../public/OG_Image.jpg"],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#EEF4F8] ">
  <StateProvider>      
<RefsProvider>

        <Header/>
   
        
        
      <Homepage Children={children}/>
           
        
         
               
        <Footer/>
</RefsProvider>
</StateProvider>
        </body>
    </html>
  );
}