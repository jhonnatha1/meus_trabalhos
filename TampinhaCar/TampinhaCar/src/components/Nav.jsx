import {Link} from 'react-router-dom';
import '../css/header.css';
import BtnLinkCarros from './btns/btnLinkCarros';


function Nav () {
    return (

            <nav >
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/carros">Carros</Link> </li>
                    <li><Link to="/contacto">Contacto</Link> </li>
                </ul>
                
            </nav> 
          


    )
}
export default Nav;