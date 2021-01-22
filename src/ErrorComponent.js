import React from 'react';

export default class ErrorComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError:false,error:null};
    }
    static getDerivedStateFromError(error){
        return {hasError:true};
    }
    componentDidCatch(error,errorInfo){
        this.setState({error:error});
    }
    render(){
        if(this.state.hasError){
        return(
            <React.Fragment>
                <p>Following error occurred</p>
                <p>{this.state.error}</p>
            </React.Fragment>
        )};
        return this.props.children;
    }
    


}