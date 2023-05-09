import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './Header';
import { Footer } from './Footer';
import BodyCompomnent from './Body';

const root = ReactDOM.createRoot(document.getElementById('root'));

  /*header component
        logo
        menu items
        cart
      Body Component
        list of restaurants
          image
          restaurant name
          cusines
          distance
        
      Footer component
    */

const AppLayout = () => {
    return (
        <React.Fragment>
           <HeaderComponent/>
           <BodyCompomnent/>
           <Footer/>
         
        </React.Fragment>
    )
  
}

root.render(<AppLayout/>);

