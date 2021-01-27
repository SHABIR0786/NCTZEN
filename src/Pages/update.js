import React from "react";
import  {isAliasExistdelete,verifyOldAlias,isAliasExist,updatealias,isUpdateAlias}  from '../controllers/HomeController'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2';
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
          <Button className={props.isshowupdateform ? 'displaynone' : 'displayblock'} onClick={props.verifyoldalias}>Verify Code</Button>
          <Button className={props.isshowupdateform ? 'displayblock' : 'displaynone'}  onClick={props.updatenewalias}>Verify Code</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default class home extends React.Component {
constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.sendUpdateAliasCode = this.sendUpdateAliasCode.bind(this);
    this.updateAlias = this.updateAlias.bind(this);
    this.verifyCodeOldAlias = this.verifyCodeOldAlias.bind(this);
    this.state = { formModel:{},modalShow:false,showupdateform:false};
}

 async submitForm(e) {
  e.preventDefault();
  var result =  await isAliasExistdelete(this.state.formModel);
  if(result.success) {
  this.setState({modalShow:true})
  } else {
  Swal.fire({
    title: 'Error!',
    text: result.data,
    icon: 'error',
    confirmButtonText: 'Okay'
  });
  }
}
async updateAlias(e) {
    e.preventDefault();
    var result =  await updatealias(this.state.formModel);
    if(result.success){
    this.setState({modalShow:false});
    this.setState({showupdateform:false});
    document.querySelector('#newaliasname').value = '';
    document.querySelector('#newaliasemail').value = '';
    Swal.fire({
      title: 'Success!',
      text: result.data,
      icon: 'success',
      confirmButtonText: 'Okay'
    });
    }else{
      Swal.fire({
        title: 'Error!',
        text: result.data,
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
}
async sendUpdateAliasCode(e){
  e.preventDefault();
  var result =  await isUpdateAlias(this.state.formModel);
    if(result.success){
    this.setState({modalShow:true})
    Swal.fire({
      title: 'Success!',
      text: result.data,
      icon: 'success',
      confirmButtonText: 'Okay'
    });
    }else{
      Swal.fire({
        title: 'Error!',
        text: result.data,
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
}
 async handleChange(e) {
    const model = this.state.formModel;
    model[e.target.name] = e.target.value;
    this.setState({formModel:model});
}
async verifyCodeNewAlias(e){
    e.preventDefault();
    var result = await verifyOldAlias(this.state.formModel);
    if(result.success) {
    this.setState({modalShow:false});
    document.querySelector('#aliasname').value = '';
    document.querySelector('#aliasemail').value = '';
    this.setState({formModel:{}});
    } else {
    if(result.status == 400){
    this.setState({modalShow:false});
    }
    Swal.fire({
      title: 'Error!',
      text: result.data,
      icon: 'error',
      confirmButtonText: 'Okay'
    });
    } 
}

async verifyCodeOldAlias(e) {
  e.preventDefault();
  var result = await verifyOldAlias(this.state.formModel);
  if(result.success) {
  this.setState({modalShow:false});
  this.setState({showupdateform:true});
  document.querySelector('#aliasname').value = '';
  document.querySelector('#aliasemail').value = '';
  } else {
    if(result.status == 400){
    this.setState({modalShow:false});
    }
    Swal.fire({
      title: 'Error!',
      text: result.data,
      icon: 'error',
      confirmButtonText: 'Okay'
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
        onHide={() => this.setState({modalShow:false})}  handlechange={this.handleChange} isshowupdateform={this.state.showupdateform} updatenewalias={this.updateAlias} verifyoldalias={this.verifyCodeOldAlias} />
        <div className="container">
          <div className="intro-text">
            <h1>Update alias with nctzen.com</h1>
            <p>
              Set up email forwarding in seconds and start recieving and sending
              emails with your email at nctzen.com. Absolutely free.
            </p>
          </div>
          <form onSubmit={this.submitForm} className={!this.state.showupdateform ? 'displayblock' : 'displaynone'}>
          <div className="creation_form">
              <div className="user_alias">
                <label>Your old email alias at nctzen.com</label>
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
                <label>Your old email address</label>     
              <input type="email" onChange={this.handleChange} id="aliasemail" name="emailAddress" required placeholder="shabir.abdulmajeed786@gmail.com"></input>
              </div>
            <button className="create_alias_btn" type="submit">Verify old alias</button>
          </div>
          </form>
          <form onSubmit={this.sendUpdateAliasCode} className={this.state.showupdateform ? 'displayblock' : 'displaynone'}>
          <div className="creation_form">
              <div className="user_alias">
                <label>Your new email aliases at nctzen.com</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="newaliasname"
                    onChange={this.handleChange}
                    name="newname"
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
                <label>Your new email address</label>     
              <input type="email" onChange={this.handleChange} id="newaliasemail" name="newemailAddress" required placeholder="shabir.abdulmajeed786@gmail.com"></input>
              </div>
            <button className="create_alias_btn" type="submit">Update alias</button>
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
