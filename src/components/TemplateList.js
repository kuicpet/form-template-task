import React, { Component } from 'react';
import Template from "./Template";
import { TemplateConsumer } from "../Context";

export default class TemplateList extends Component {
    render() {
        return (
            <>
             <div className="templates_container">
                 <TemplateConsumer>
                     {(value) => {
                         return value.templates.map(template => {
                             return <Template key={template.name} template={template} />
                         })
                     }}
                 </TemplateConsumer>
             </div>
            </>
        )
    }
}
