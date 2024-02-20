
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Pages/Router/CustomerRouters';
import AdminRouters from './Pages/Router/AdminRouters';
import FeaturePage from './Pages/User/FeaturePage';

function App() {
  return (
   <div>
       {/* <Routes>
          <Route path='/*' element={<CustomerRouters/>} />
          <Route path='/admin/*' element={<AdminRouters/>} />
       </Routes> */}
       
       <FeaturePage/>
   </div>
  );
}

export default App;
