
import './App.css';
import {Routes,Route} from 'react-router-dom'
import AllCountries from './components/AllCountries/AllCountries'
import CountryInfo from './components/CountryInfo/CountryInfo'

function App() {
  return (
    <>
     {/* start heading header */}
     <div className='header'>
     <div className="container">
        <h5>Where in the world</h5>
     </div>
     </div>

     {/* end heading header */}

     <div className='container'>
      <Routes>
        {/* route 1 */}
      <Route path='/' element={<AllCountries/>} />

        {/* route 2 */}
        <Route path='/country/:countryName' element={<CountryInfo/>} />

      
      </Routes>
      
     </div>
    
    </>
  );
}

export default App;

