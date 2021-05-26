import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import TemplateContainer from "../components/TemplateContainer";
import TemplateFilter from '../components/TemplateFilter';

export default function Home() {
    return (
        <div className="container">
            <TemplateFilter />
            <Banner />
            <Header />
            <TemplateContainer />
        </div>
    )
}

