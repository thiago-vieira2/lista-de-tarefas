import { Link } from "react-router-dom";
import './header.scss'

export default function Header (props) {
    return (
        <div className="mae">
            <h1>{props.text}</h1>
        

        </div>
    )
}