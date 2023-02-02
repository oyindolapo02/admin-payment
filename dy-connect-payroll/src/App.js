// import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Homep/Home';
import Task from './Pages/Taskp/Task';
import Analytics from './Pages/Analytics/Analytics'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Adminuser from './Pages/Adminuserview/Adminuser';
import Barchart from './Pages/Barchart/Barchart';
import Linechart from './Pages/Linechart/Linechart';
import Loginp from './Pages/LoginPage/Loginp';
import { Children } from 'react';
import Landingpage from './Pages/Landingpage/Landingpage';
import Registrationlogin from './Pages/RegisterUser/Registrationlogin';
import Orders from './Pages/Orders/Orders';
// import Payment from './Pages/Payments/Payment'


// const Layout = ()=> {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   )
// }

// const routPath = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:([
//       {
//         path:'/',
//         element:<Home />
//       },

//       {
//         path:'/task',
//         element:<Task />
//       },

//       {
//         path:'/message',
//         element:<Message />
//       },

//       {
//         path:'/analytics',
//         element:<Analytics />
//       },

//       {
//         path:'/adminuser',
//         element:<Adminuser/>
//       },
//       {
//         path:'/Barchart',
//         element:<Barchart/>
//       },
//       {
//         path:'/linechart',
//         element:<Linechart/>
//       }
//     ])
//   },
// ])

function App() {
  const [token, setToken] = useState();

  {!token && <Loginp setToken = {setToken}/>}

  // if(!token) {
  //   return <Loginp setToken={setToken} />
  // }

  return (
    <div>
      {/* <RouterProvider router={routPath}/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Loginp/>}/>
          <Route path='/registration' element={<Registrationlogin/>}/>
          <Route path='/Task' element={<Task/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/adminuser' element={<Adminuser/>}/>
          <Route path='/Barchart' element={<Barchart/>}/>
          <Route path='/linechart' element={<Linechart/>}/>
          <Route path='/landingpage' element={<Landingpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
