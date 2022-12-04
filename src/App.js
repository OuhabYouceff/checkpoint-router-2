
import './App.css';
import List from './components/MovieList';
import { createBrowserRouter,RouterProvider,Routes,Route } from "react-router-dom";
// import greeting from './components/greeting';
import Address1 from './components/Address';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      
      <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/description" element={<Address1/>}/>
      </Routes>
    </div>
  );
}

export default App;
