import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {InitialPage} from './pages/initial_page'
import {InfoPage} from './pages/info_page'
import {TermsPage} from './pages/terms_page'



/**Como crear rutas  
 * Importacion
 * import { Login_template } from './pages/Login_template'
 * Implementación
 * <Route path='/login' element ={<Login_template/>} />  
 * */  
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element ={<InitialPage/>} />
      <Route path='/info' element ={<InfoPage/>} />
      <Route path='/terms' element ={<TermsPage/>} />
    
    </Routes>

  </BrowserRouter>
  );
}

export default App;
