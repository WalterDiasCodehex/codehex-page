import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

export function AppRoutes (){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    )
}