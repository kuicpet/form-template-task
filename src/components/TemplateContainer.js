import React from 'react';
import Loading from "./Loading";
import { withTemplateConsumer } from "../Context";
import TemplateList from "./TemplateList";

function TemplateContainer({ context }) {
    const { loading,templates, errorMsg } = context;
    if(loading){
        return <Loading />
    }
    if(errorMsg){
        return "Sorry there was an error fetching templates"
    }
    return (
        <>
            <TemplateList templates={templates} />
        </>
    )
}

export default withTemplateConsumer(TemplateContainer);
