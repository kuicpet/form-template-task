import React from 'react';
import Loading from "./Loading";
import { withTemplateConsumer } from "../Context";
import TemplateList from "./TemplateList";

function TemplateContainer({ context }) {
    const { loading,templates } = context;
    if(loading){
        return <Loading />
    }
    return (
        <>
            <TemplateList templates={templates} />
        </>
    )
}

export default withTemplateConsumer(TemplateContainer);
