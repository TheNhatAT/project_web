import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

export default function Layout({children}) {

    return (
        <>
            <Header/>
            <Content>{children}</Content>
            <Footer/>
        </>
    )
}