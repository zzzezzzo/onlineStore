import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import ProductsList from './component/ProductsList';
import Slider from './component/Slider';
import AboutProducts from './component/AboutProducts';
import ProductDetails from './component/ProductDetails';
import GetCategories from './component/GetCategories';
import ItemsCategory from './component/ItemsCategory';
import Footer from './component/Footer';

function App(){
  return(
    <>
      <Navbar/>
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
