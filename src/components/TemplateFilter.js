import React from 'react'

export default function TemplateFilter() {
    return (
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
    )
}
