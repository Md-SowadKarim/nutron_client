import { createBrowserRouter } from 'react-router-dom';
import AddContact from '../pages/AddContact';
import AllContact from '../pages/AllContact';
import MainLayout from './../pages/MainLayout';
const Root = createBrowserRouter([
 
    {
     path:"/",
     element:<MainLayout></MainLayout>,
     errorElement:<Error></Error>,
     children:[
      
       {
         path:"/",
         element:<AddContact/>
       },
       {
         path:"/all",
         element:<AllContact/>,
        //  loader:()=>
        //     fetch('http://localhost:5001/all')
         
       },
     
     ]
   
     
    
   
    }
])
   
   export default Root