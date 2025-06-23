import {Link} from 'react-router-dom';
import '../css/header.css';
import BtnLinkCarros from './btns/btnLinkCarros';


function Header () {
    return (
        <header className='header'>
            <div className='banner'>
                <div className='banner-texto'>
                    <h1>Dirija um carro à altura do seu estilo.</h1>
                    <p>Conforto, elegância e performance em cada detalhe.</p>
                    <BtnLinkCarros texto="Confira Agora" destino="/carros" />
                    
                </div>           
            </div> 
          
        </header>


    )
}
export default Header;