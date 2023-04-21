import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function ChatPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Coin for Communities`}
            description="Karma Coin offering for community managers">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Coin for Communities
                </h1>

                <div className={clsx(styles.mainTextContainer)}>

                    <div className={clsx('row', styles.mainText)}>
                        <p>Our customized Karma Coin app is the perfect tool to strengthen your community, increase core values, and give real-world benefits to your members. </p><p>With our app, your community will have a unique onboarding experience where we learn what your community's core values and strengths are and then modify the app's rating and appreciation labeling to match your community's language and messaging.</p><p> This encourages your members to use the app to show and send tokens of appreciation in a way that is familiar to them.</p>

                        <p>&nbsp;</p>

                    </div>
                </div>
            </main>
        </Layout>
    );
}

