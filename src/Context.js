import React, { Component } from 'react'


const TemplateContext = React.createContext();


class TemplateProvider extends Component {
    state = {
        templates : [],
        sortedTemplates: [],
        loading: true,
        category: "all",
        description: ""
    };

    //Get Templates 
    getTemplates = async () => {
        const url = "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
        try {
            await fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    return Promise.reject(response);
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    templates,
                    sortedTemplates,
                    loading: false,
                })
            })
        } catch (error) {
            console.log(error)
        }
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