import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Helmet } from "react-helmet";

export default function ChatPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Diva Chat`}
            description="Ask Karma Diva anything about Karma Coin">
            <Helmet>
                <script src="https://cdn.customgpt.ai/js/embed.js" width="100%" height="600px" p_id="1064" p_key="ccbd8af1f90ebb0249653e30c2bc92f9" div_id="customgpt_chat" defer></script>
            </Helmet>

            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Diva - AMA
                </h1>

                <div className={clsx(styles.chatBar)}>
                    <div id="customgpt_chat">&nbsp;</div>
                </div>
            </main>
        </Layout>
    );
}

