import React from "react";
import Header from "./pages/header";
import Main from "./pages/main";
import About from "./pages/about";
import Events from "./pages/events";
import Members from "./pages/members";
import Join from "./pages/join";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Events />
            <Members />
            <Join />
            <Contact />
            <Footer />
        </>
    );
}
