import React, { Component } from 'react'


const TemplateContext = React.createContext();


class TemplateProvider extends Component {
    state = {
        templates : [],
        sortedTemplates: [],
        loading: true,
        category: "all",
    };

    //Get Templates 
    getTemplates = async () => {

    }

    componentDidMount(){
        this.getTemplates()
    }

    render(){
        return (
            <TemplateContext.Provider
                value={{
                    ...this.state
                }}
            >
                {this.props.children}
            </TemplateContext.Provider>
        )
    }
}


export { TemplateProvider, TemplateContext }