import React from 'react'
const {Provider, Consumer} = React.createContext();

 class ThemeContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {'theme':'light'};
    }
    render(){
        return(
            <Provider value={this.state.theme}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ThemeContextProvider,Consumer as ThemeContextConsumer}; 