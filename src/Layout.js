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
import axios from 'axios'
const Profiler = React.unstable_Profiler;

axios.interceptors.request.use(async function (config) {
    let apiUrl = 'https://api.nctzen.com/api/';
    config.url = apiUrl + config.url;
    config.headers.Accept = "application/json";
  
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



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
       <a id="faqlink" href="https://forwardemail.net/en/faq#how-to-send-mail-as-using-gmail" target="blank">How to send mail as using gmail</a>
       </Suspense>
       );
  } 
}