import React from "react";
import { createAlias, helpQuery } from "../controllers/HomeController";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = { formModel: {}, modalShow: false };
  }

  async submitForm(e) {
    e.preventDefault();
    var result = await helpQuery(this.state.formModel);
    if (result.success) {
      this.setState({ modalShow: true });
      Swal.fire({
        title: "Success!",
        text: result.data,
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: result.data,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }
  async handleChange(e) {
    const model = this.state.formModel;
    model[e.target.name] = e.target.value;
    this.setState({ formModel: model });
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Card id="helpformcard">
            <Card.Header>
              <h4>Ask a question</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={this.submitForm}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                   onChange={this.handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                   onChange={this.handleChange}
                    as="textarea"
                    name="message"
                    rows={6}
                    placeholder="Enter Message"
                    required
                  />
                </Form.Group>
                <button type="submit">
                  Submit
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
home.defaultProps = {
  name: "page",
};
