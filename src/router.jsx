import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Lista from "./pages/lista/lista";
import Sla from "./pages/sla/sla";

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/lista" element= {<Lista/>}/>
            </Routes>
        </BrowserRouter>
    );
}
