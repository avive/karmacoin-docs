import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Helmet } from "react-helmet";

export default function ValidatorsDeckPage() {
const {siteConfig} = useDocusaurusContext();
return (
<Layout>
    <Helmet>
        <title>Karma Coin Intro Deck</title>
        <meta httpEquiv="Refresh" content="0; url='/intro/deck.html'" />
    </Helmet>
</Layout>);
}


