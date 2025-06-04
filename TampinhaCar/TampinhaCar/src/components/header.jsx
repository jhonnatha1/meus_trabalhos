import {Link} from 'react-router-dom';
import './css/header.css';
import BtnLinkCarros from './btns/btnLinkCarros';


function Header () {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/">Carros</Link> </li>
                    <li><Link to="/">Contacto</Link> </li>
                </ul>
                
            </nav> 
            <div className='banner'>
                <div className='banner-texto'>
                    <h1>Dirija um carro à altura do seu estilo.</h1>
                    <p>Conforto, elegância e performance em cada detalhe.</p>
                    <BtnLinkCarros texto="Confira Agora" destino="#" />
                    
                </div>           
            </div> 
          
        </header>


    )
}
export default Header;