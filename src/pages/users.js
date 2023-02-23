import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function UsersPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome to Karma Coin`}
            description="About the Karma Coin App">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Welcome to Karma Coin
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    Coming soon...
                </h2>
            </main>
        </Layout>
    );
}

