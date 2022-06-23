import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import NavBar from "./NavBar";

export default function Layout({children, nav}) {
    console.log('nav: ', nav);
    return (
        <>
            <Header/>
            {nav && (<NavBar/>)}
            <Content>{children}</Content>
            <Footer/>
        </>
    )
}