import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Helmet } from "react-helmet";

export default function ValidatorsDeck() {
const {siteConfig} = useDocusaurusContext();
return (
<Layout>
    <Helmet>
        <title>Karma Coin for validators</title>
        <meta httpEquiv="Refresh" content="0; url='/validators/deck.html'" />
    </Helmet>
</Layout>);
}


