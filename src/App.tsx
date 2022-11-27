
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import Home from './pages/Home/Home'
import Permissao from './pages/Permissao/Permissao'
import QR from './pages/QR/QR'
import QRProjeto from './pages/QRProjeto/QRProjeto'
import Votar from './pages/Votar/Votar'
import Votos from './pages/Votos/Votos'

function App() {

  return (
   <>
   <Header></Header>

   <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/voto/all" element={<Votos />}></Route>
          <Route path="/permissao" element={<Permissao />}></Route>
          <Route path="/qr" element={<QR />}></Route>
          <Route path="/qr/:projeto" element={<QRProjeto />}></Route>
          <Route path="/cadastro" element={<Cadastrar />}></Route>
           <Route path="/voto/:projeto" element={<Votar />}></Route>
        </Routes>
      </BrowserRouter>


   </>
  )
}

export default App
