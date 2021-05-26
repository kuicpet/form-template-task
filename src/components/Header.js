import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header">
                    <div className="template_category">All Templates</div>
                    <div className="template_count">2000 templates</div>
                </div>
            </div>
        )
    }
}
