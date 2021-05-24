import React from 'react';


export default function Home() {
    return (
        <div className="container">
            <div className="filter_container">
                <div className="search_container">
                    <form>
                        <input 
                            className="search_bar"
                            type="text"
                            placeholder="Search Templates"
                        />
                    </form>
                </div>
                <div className="sort_container">
                    <span>
                        Sort by:
                    </span>
                    <form>
                        <fieldset>
                            <legend>Category</legend>
                            <div className="select">
                                <select>
                                    <option>All</option>
                                    <option>Education</option>
                                    <option>E-Commerce</option>
                                    <option>Health</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Order</legend>
                            <div className="select">
                                <select>
                                    <option>Default</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Date</legend>
                            <div className="select">
                                <select>
                                    <option>Default</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="banner_container">
                <div className="banner">
                    <p>
                        Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
                    </p>
                </div>
            </div>
            <div className="header_container">
                <div className="header">
                    <div className="template_category">All Templates</div>
                    <div className="template_count">2000 templates</div>
                </div>
            </div>
            <div className="templates_container">
                <div className="template">
                    <div className="template_contents">
                        <h2>Alumni Membership Form Template</h2>
                        <p>Engage your alumni network better with this alumni registration form template. Embed this in your website ...</p>
                    </div>
                    <div className="template_link">
                        <a href="https://formpl.us/templates">Use Template</a>
                    </div>
                </div>
                <div className="template">
                    <div className="template_contents">
                        <h2>Alumni Membership Form Template</h2>
                        <p>Engage your alumni network better with this alumni registration form template. Embed this in your website ...</p>
                    </div>
                    <div className="template_link">
                        <a href="https://formpl.us/templates">Use Template</a>
                    </div>
                </div>
                <div className="template">
                    <div className="template_contents">
                        <h2>Alumni Membership Form Template</h2>
                        <p>Engage your alumni network better with this alumni registration form template. Embed this in your website ...</p>
                    </div>
                    <div className="template_link">
                        <a href="https://formpl.us/templates">Use Template</a>
                    </div>
                </div>
                <div className="template">
                    <div className="template_contents">
                        <h2>Alumni Membership Form Template</h2>
                        <p>Engage your alumni network better with this alumni registration form template. Embed this in your website ...</p>
                    </div>
                    <div className="template_link">
                        <a href="https://formpl.us/templates">Use Template</a>
                    </div>
                </div>
                <div className="template">
                    <div className="template_contents">
                        <h2>Alumni Membership Form Template</h2>
                        <p>Engage your alumni network better with this alumni registration form template. Embed this in your website ...</p>
                    </div>
                    <div className="template_link">
                        <a href="https://formpl.us/templates">Use Template</a>
                    </div>
                </div>
                <div className="template">
                    <div className="template_contents">
                        <h2>Alumni Membership Form Template</h2>
                        <p>Engage your alumni network better with this alumni registration form template. Embed this in your website ...</p>
                    </div>
                    <div className="template_link">
                        <a href="https://formpl.us/templates">Use Template</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

