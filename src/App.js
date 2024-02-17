import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Pages/Router/CustomerRouters';
import AdminRouters from './Pages/Router/AdminRouters';
import { Aboutpage } from './Pages/User/Aboutpage';
import UserPage from './Pages/User/UserPage';

function App() {
  return (
   <div>
       {/* <Routes>
          <Route path='/*' element={<CustomerRouters/>} />
          <Route path='/admin/*' element={<AdminRouters/>} /> 
       </Routes> */}
       <Aboutpage/>
   </div>
  );
}

export default App;
