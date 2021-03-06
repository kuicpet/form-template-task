import React, { Component } from 'react';
import { TemplateConsumer } from "../Context";

export class Template extends Component {
    render() {
        const { description, link, name, created, category } = this.props.template;
                return (
            <div>
                <TemplateConsumer>
                    { value => (
                    <div className="template">
                        <div className="template_contents">
                            {category.map((elem, index) => 
                                <ul key={index}>
                                    <li className="tags">{elem} ,</li>
                                </ul>
                            )}
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="template_link">
                            <a href={link}>Use Template</a>
                            <div>
                                <small>Created: {created}</small>
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
