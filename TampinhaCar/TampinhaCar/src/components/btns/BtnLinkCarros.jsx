import '../css/btn.css';

function BtnLinkCarros({ texto, destino }) {
  return (
    <a href={destino} className="btn-links">
      {texto}
    </a>
  );
}

export default BtnLinkCarros;