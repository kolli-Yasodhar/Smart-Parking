import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Pages/Router/CustomerRouters';
import AdminRouters from './Pages/Router/AdminRouters';
import BookingPage from './Components/Slot/BookingPage';


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

