import React, { Component } from 'react';
import { TemplateConsumer } from "../Context";

export class Template extends Component {
    render() {
        const { description, link, name, created } = this.props.template;
        const date = created.toSringDate();
                return (
            <div>
                <TemplateConsumer>
                    { value => (
                    <div className="template">
                        <div className="template_contents">
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="template_link">
                            <a href={link}>Use Template</a>
                            <div>
                                <small>Created: {date}</small>
                            </div>
                        </div>
                    </div>
                    ) }
                </TemplateConsumer>
            </div>
        )
    }
}

export default Template;
