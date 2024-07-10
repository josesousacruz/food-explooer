import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Produto } from './pages/Produto';
import { UserHome } from './pages/UserHome';
import { ProductAdd } from './pages/FormAddPrato';
import { ProductEdit } from './pages/FormEditPrato';
import PrivateRoute from './components/PrivateRoutes';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<PrivateRoute element={UserHome}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto/show" element={<PrivateRoute element={Produto} />} />
        <Route path="/produto/new" element={<PrivateRoute element={ProductAdd} />} />
        <Route path="/produto/edit" element={<PrivateRoute element={ProductEdit} />} />
      </Routes>
    </Router>
  );
};

export default App;
