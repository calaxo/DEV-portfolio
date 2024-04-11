import { createRoot } from 'react-dom/client';
import React, { Fragment, lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '@/styles.css';

import Header from "@components/header";
import Footer from "@components/footer";



import routes from '~react-pages';



  
const router = createBrowserRouter(routes);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    {/* <App /> */}
          <Header />
            <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>


);


