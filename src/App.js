
import './App.css';
import S4 from './component/S4';

import S2 from './component/s-2';
import S3 from './component/S3.jsx';

import S1 from './component/S1';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Ad from './Ad';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route  path='/' element={<Ad/>}>
  </Route> 
  <Route path='pro' element={<S3/>}>
    
    </Route>
    <Route path='company' element={<S4/>}>
    
    </Route>
    
</Routes>

</BrowserRouter>


</>
  );
}

export default App;
