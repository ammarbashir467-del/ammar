import React from "react";
import Hero from "../Components/Hero";
import Aboutt from "../Components/Aboutt";
import { Footer } from "../Components/Footer";
function Home( {setPage}) {
    return (
        <>
            <Hero setPage = {setPage} />
            <Aboutt />
            <Footer/>
        </>
    );

}
export default Home;