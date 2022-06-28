import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Purchase from './pages/Home/Purchase';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Orders from './pages/Home/Orders';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Porfolio/Portfolio';
import Review from './pages/Review/Review';
import Payment from './pages/Dashboard/Payment';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
     <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/home' element={<Home></Home>}></Route>
   <Route path='/service/:id' element={<Purchase></Purchase>}></Route>
   <Route path='/orders/:id' element={<Orders></Orders>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/blog' element={<Blog></Blog>}></Route>
   <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
   <Route path='/review' element={<Review></Review>}></Route>
   <Route path='/dashboard' element={<Dashboard></Dashboard>}>
   <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="/dashboard/MyOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="/dashboard/addReview" element={<AddReview></AddReview>}></Route>
          <Route path="/dashboard/Myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/payment/:" element={<Payment></Payment>}></Route>

   </Route>
   <Route path="/payment/:id" element={<Payment></Payment>}></Route>

   
   </Routes>
   <Footer></Footer>

 
    </div>
  );
}

export default App;
