import axios from 'axios'
import {ApiRoutes} from '../routes/api'
function showLoader() {
    if(document.querySelector('.loader')){
      document.querySelector('.loader').style.background = 'white';
    }
    document.querySelector('.loader').style.display = 'block';
  }
  function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
    if(document.querySelector('.c-header')){
    document.querySelector('.c-header').style.zIndex = 1070;
    document.querySelector('.c-sidebar').style.zIndex = 1070;
    document.querySelector('.c-sidebar-fixed').style.zIndex = 100;
    }
  }
  async function helpQuery(form){
    showLoader();
    const Instance = {};
    ApiRoutes.helpquery.data = form;
    await axios(ApiRoutes.helpquery).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;
  }
  async function isUpdateAlias(form) {
    showLoader();
    const Instance = {};
    ApiRoutes.isUpdateAlias.params = form;
    await axios(ApiRoutes.isUpdateAlias).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;
  }
  async function updatealias(form) {
    showLoader();
    const Instance = {};
     ApiRoutes.updatealias.data = form;
    await axios(ApiRoutes.updatealias).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;
  }
  async function isAliasExistdelete(form){
    showLoader();
    const Instance = {};
     ApiRoutes.isaliasexistdelete.data = form;
    await axios(ApiRoutes.isaliasexistdelete).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;
  }
  async function isOldAliasExist(form){
    showLoader();
    const Instance = {};
     ApiRoutes.isoldaliasexist.data = form;
    await axios(ApiRoutes.isoldaliasexist).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;
  }
async function createAlias(form){
    showLoader();
   const Instance = {};
    ApiRoutes.createAlias.data = form;
   await axios(ApiRoutes.createAlias).then(function(response){
    Instance.result = response.data;
    });
    hideLoader();
    return Instance.result;
}
async function isAliasExist(form){
    showLoader();
    const Instance = {};
    ApiRoutes.isAliasExist.params = form;
    await axios(ApiRoutes.isAliasExist).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;
}
async function sendEmail(form) {
    showLoader();
    ApiRoutes.sendEmail.params = form;
   const Instance = {};
    await  axios(ApiRoutes.sendEmail).then(function(response){
    Instance.result = response.data;
    });
    hideLoader();
    return Instance.result;
}
async function deleteAlias(form){
    showLoader();
    const Instance = {};
     ApiRoutes.deleteAlias.data = form;
    await axios(ApiRoutes.deleteAlias).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result;  
}
async function verifyOldAlias(form){
     showLoader();
     const Instance = {};
     ApiRoutes.verifyoldalias.data = form;
     await axios(ApiRoutes.verifyoldalias).then(function(response){
     Instance.result = response.data;
     });
     hideLoader();
     return Instance.result; 
}
export {createAlias,sendEmail,isAliasExist,isAliasExistdelete,deleteAlias,verifyOldAlias,updatealias,isUpdateAlias,helpQuery,isOldAliasExist}