import React, { Component } from 'react'
import { TemplateConsumer } from "../Context";

export default class Header extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header">
                    <TemplateConsumer>
                        {value => (
                            <>
                                <div className="template_category">All Templates</div>
                                <div className="template_count">{value.templateCount} templates</div>
                            </>        
                        )}
                    </TemplateConsumer>
                    
                </div>
            </div>
        )
    }
}
