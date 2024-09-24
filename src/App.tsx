import './App.css'

import productImg from './assets/lobo.jpeg'

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <img className='mainImg' src={productImg} alt="Colar de lobo" />
          <a href="https://shopee.com.br/Colar-Cord%C3%A3o-Pingente-Lobo-de-Madeira-i.319489049.8706052711">
            <button className='linkBtn'>Acessar a página do produto</button>
          </a><a href="https://shopee.com.br/ybyra.artesania">
            <button className='linkBtn'>Acessar loja</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
