import React from "react";
import {Helmet} from 'react-helmet';
import { Cards } from "../components/Card";
import Footer from "../components/CardFooter";
import Navbar from "../components/CardNavbar";

function DevTeam() {
    return(
        <div>
            <Helmet>
                <style>{'body { background-color: #c2bebe; }'}</style>
            </Helmet>
            <Navbar/>
            <Cards/>
            <Footer/>
            
        </div>
    )
}

export default DevTeam;