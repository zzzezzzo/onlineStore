import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Slider from './components/Slider';
import AboutProducts from './components/AboutProducts';
import ProductDetails from './components/ProductDetails';
import GetCategories from './components/GetCategories';
import ItemsCategory from './components/ItemsCategory';
import Footer from './components/Footer';
import AddNewCar from './components/AddNewCar';

function App(){
  return(
    <>
      <Navbar/>
      <AddNewCar/>
      <Routes>
        <Route path='/' 
          element={
            <>
              <Slider/>
              <ProductsList/>
            </>
          }
        />
        <Route path='/AboutProducts' element={<AboutProducts/>}/>
        <Route path='/ProductCategory' element={<GetCategories/>}/>
        <Route path='/productCategory/:category' element={<ItemsCategory/>}/>
        <Route path='/ProductDetails/:productId' element={<ProductDetails/>}/>

      </Routes>
      <Footer/>
    </>
  );
}
export default App;
