import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Pages/Router/CustomerRouters';
import AdminRouters from './Pages/Router/AdminRouters';
import { Aboutpage } from './Pages/User/Aboutpage';
import UserPage from './Pages/User/UserPage';
import Login from './Pages/Register/Login';
import Signup from './Pages/Register/Signup';
import Contact from './Pages/User/components/Contact';

function App() {
  return (
   <div>
       <Routes>
          <Route path='/*' element={<CustomerRouters/>} />
          <Route path='/admin/*' element={<AdminRouters/>} /> 
       </Routes>
       
   </div>
  );
}

export default App;

