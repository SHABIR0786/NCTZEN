import React from "react";
import { ThemeContextConsumer } from "../components/ThemeContext";
export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: this.context };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const theme = this.context;
    return (
      <React.Fragment>
        <div class="container">
          <div class="intro-text">
            <h2>Get free email ending with nctzen.com</h2>
            <p>
              Set up email forwarding in seconds and start recieving and sending
              emails with your email at nctzen.com Absolutely free.No
              registration. 24/7 Support.
            </p>
          </div>
          <div class="resp-tbl">
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Email alias</th>
                      <th>Your email address</th>
                      <th>Action</th>
                  </tr>
              </thead>
            <tbody>
            <tr>
                <td class="email_td">
                    <div class="input-group emailinput-group">
                    <input
                      type="email"
                      onChange={this.handleChange}
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                   <div class="input-group-append">
                      <span class="input-group-text">@nctzen.com</span>
                    </div>
                    </div>
                    <span class="forwards_to">
                        FORWARDS TO
                    </span>
                </td>
                <td class="your_email">
                  <p>richard.hendricks@gmail.com</p>
                </td>
                <td>
                  <button type="button" class="btn btn-success create-alias-btn">Create a free Alias</button>
                </td>
              </tr>
              <tr>
                <td class="email_td">
                    <div class="input-group emailinput-group">
                    <input
                      type="email"
                      onChange={this.handleChange}
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                   <div class="input-group-append">
                      <span class="input-group-text">@nctzen.com</span>
                    </div>
                    </div>
                    <span class="forwards_to">
                        FORWARDS TO
                    </span>
                </td>
                <td class="your_email">
                  <p>richard.hendricks@gmail.com</p>
                </td>
                <td>
                  <button type="button" class="btn btn-success create-alias-btn">Create a free Alias</button>
                </td>
              </tr>
              <tr>
                <td class="email_td">
                    <div class="input-group emailinput-group">
                    <input
                      type="email"
                      onChange={this.handleChange}
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                   <div class="input-group-append">
                      <span class="input-group-text">@nctzen.com</span>
                    </div>
                    </div>
                    <span class="forwards_to">
                        FORWARDS TO
                    </span>
                </td>
                <td class="your_email">
                  <p>richard.hendricks@gmail.com</p>
                </td>
                <td>
                  <button type="button" class="btn btn-success create-alias-btn">Create a free Alias</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
home.defaultProps = {
  name: "page",
};
home.contextType = ThemeContextConsumer;
