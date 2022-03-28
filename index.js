import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function s3(props){
    const {siteConfig} = useDocusaurusContext();

    const src = siteConfig.customFields.s3BaseURL + props.src;
    return (
        <img src={src}/>
    );

}

export default s3;