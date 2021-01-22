/* eslint react/prop-types: 0 */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import  Footer from './components/Footer';
import Routing from './Routing'
import {ThemeContextProvider} from './components/ThemeContext' 
import ErrorComponent from './ErrorComponent'

const Profiler = React.unstable_Profiler;
export default class Layout extends React.Component {
  render(){
    return(
      <Suspense>
        <ErrorComponent>
      <ThemeContextProvider>
       <BrowserRouter>
         <Header />
          <Routing/>
         {/* <Footer /> */}
       </BrowserRouter>
       </ThemeContextProvider>
       </ErrorComponent>
       </Suspense>
       );
  } 
}