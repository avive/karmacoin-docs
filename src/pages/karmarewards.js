import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function KarmaRewardsPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Rewards`}
            description="About Karma Rewards">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    About Karma Rewards
                </h1>

                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText, 'text--left')}>
                        <p>Good morning to you.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

