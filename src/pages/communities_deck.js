import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Helmet } from "react-helmet";

export default function CommunitiesDeck() {
const {siteConfig} = useDocusaurusContext();
return (
<Layout>
    <Helmet>
        <title>Karma Coin for Communities</title>
        <meta httpEquiv="Refresh" content="0; url='/communities/deck.html'" />
    </Helmet>
</Layout>);
}


