import React from "react";
import Opacity from "../components/OpacityBlackUser";
import Navbar from "../components/NavbarUser";
import Jumbotron from "../components/JumbotronMobilUser";
import Footer from "../components/Footer";
import Content from "../pages/HasilPencarianUser";

export default function Layouts() {
    return (
        <>
        <Opacity />
        <Navbar />
        <Jumbotron />
        <Content />
        <Footer />
        </>
    )
}
