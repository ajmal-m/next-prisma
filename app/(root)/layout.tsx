import Header from "@/components/reusable/Header";
import Footer from "@/components/reusable/Footer";
import './index.css';
export default function RootLayout({
    children
}:  Readonly<{
    children: React.ReactNode;
  }>){
    return <>
        <Header/>
        {children}
        <Footer/>
    </>
}