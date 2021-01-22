import React from 'react';

export default class contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

        this.state = {contactModel:{}};
    }
    handleChange(e) {
        const model = this.state.contactModel;
        model[e.target.name] = e.target.value;
       this.setState({contactModel:model});
    }
    submitForm(e){
       e.preventDefault();
       console.log(this.state.contactModel);
    }
    render() {
        return (
            <div class="container">
                <div>
                    <h2>About Page</h2>
                </div>
            </div>
        )
    };
}