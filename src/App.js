import './App.css';
import {Routes,Route} from 'react-router-dom'
import Alluser from './components/Alluser/Alluser';
import Edituser from './components/EditUser/Edituser';
import Header from './components/Header/Header';
import Newuser from './components/Newuser/Newuser';
import Report from './components/Reports/Report';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path='/' >
        <Route index element={<Alluser/>} />
        <Route path='/newuser' element={<Newuser/>}/> 
        <Route path="edit/:id" element={<Edituser />} />
        <Route path='/reports' element={<Report/>}/>
      </Route>
    </Routes>

  </div>
  );
}

export default App;
