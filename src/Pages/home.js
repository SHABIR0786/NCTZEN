import React from "react";
import  {createAlias,isAliasExist}  from '../controllers/HomeController'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import  { useEffect, useState } from "react";
function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Verification Code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
         <div className="container">
             <p>Verification code is sent to your email address.</p>
         <form id="verificationform">
          <div className="creation_form">
              <div className="user_emailaddress">
                <label>Verification Code</label>     
              <input type="number" onChange={props.handlechange} name="verifycode" placeholder="Enter Verification Code"></input>
              </div>
          </div>
          </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.createalias}>Verify Code</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default class home extends React.Component {

    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.verifyCodeandCreateAlias = this.verifyCodeandCreateAlias.bind(this);
    this.state = { formModel:{},modalShow:false};
  }

 async submitForm(e) {
  e.preventDefault();
  var result =  await isAliasExist(this.state.formModel);
  if(result.success){
  this.setState({modalShow:true})
  Swal.fire({
    title: 'Success!',
    text: result.data,
    icon: 'success',
    confirmButtonText: 'Ok'
  });
  }else{
    Swal.fire({
      title: 'Error!',
      text: result.data,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
 }
 async handleChange(e) {
    const model = this.state.formModel;
    model[e.target.name] = e.target.value;
    this.setState({formModel:model});
}
 async verifyCodeandCreateAlias(e) {
  e.preventDefault();
  var result = await createAlias(this.state.formModel);
  if(result.success){
  this.setState({modalShow:false});
  Swal.fire({
    title: 'Success!',
    text: result.data,
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  this.setState({formModel:{}});
  document.querySelector('#aliasname').value = '';
  document.querySelector('#aliasemail').value = '';
  }else{
    if(result.status == 400){
    this.setState({modalShow:false});
    }
    Swal.fire({
      title: 'Error!',
      text: result.data,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
      
    return (
      <React.Fragment>
      <MydModalWithGrid show={this.state.modalShow}
        onHide={() => this.setState({modalShow:false})} handlechange={this.handleChange} createalias={this.verifyCodeandCreateAlias} />
        <div className="container">
          <div className="intro-text">
            <h1>Get free email at nctzen.com</h1>
            <p>
              Set up email forwarding in seconds and start recieving and sending
              emails with your email at nctzen.com. Absolutely free.
            </p>
          </div>
          <form onSubmit={this.submitForm}>
          <div className="creation_form">
              <div className="user_alias">
                <label>Your email alias at nctzen.com</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="aliasname"
                    onChange={this.handleChange}
                    name="name"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter alias"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">@nctzen.com</span>
                  </div>
                </div>
              </div>
              <span className="forwards_to">forward to</span>
              <div className="user_emailaddress">
                <label>Your email address</label>     
              <input type="email" onChange={this.handleChange} id="aliasemail" name="emailAddress" required placeholder="NCTzen@kandooit.co"></input>
              </div>
            <button className="create_alias_btn" type="submit">Create alias</button>
          </div>
          </form>

        </div>
      </React.Fragment>
    );
  }
}
home.defaultProps = {
  name: "page",
};
