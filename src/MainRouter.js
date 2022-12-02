import React from 'react';
import { Route, Routes } from "react-router";
import Home from "./Home"
import PetVet from "./PetVet"
import Vet from "./Vet";
function MainRouter( props ) {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/pet-vet" element={<PetVet/>}/>
                <Route exact path="/pet-vet-form" element={<Vet/>}/>
            </Routes>
        </div>
    );
}

export default MainRouter;
