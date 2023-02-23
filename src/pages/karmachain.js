import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';


export default function KarmaChainPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karmachain`}
            description="Karmachain empowers Karma Coin">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Hello Karmachain
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    A modern, permissionless blockchain optimized for appreciation and tipping.
                </h2>
                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText, 'text--left')}>
                        <p>Karmachain is app-specific nominated proof of stake (NPos) blockchain that is specifically designed for Karma Coin. It maintains all Karma Coin balances, users karma scores and all appreciations and tipping transactions.</p>
                        <p>Karmachain is built using the <a href='https://substrate.io/' target='_blank'>Substrate blockchain framework</a> to enable the Karma Coin user experience.</p>
                        <p>Karmachain is maintained by the <a href='/validators'>Karmachain validators</a>. Validators are responsible for creating blocks and for achieving consensus on all on-chain data. Validators are rewarded with Karma Coin for their work. Any organization or individual can become a Karmachain validator.</p>
                        <p>Karmachain is 100% open source software and is developed in a fully transparent manner on Github. It is currently under <a href='https://github.com/karma-coin/karmachain'>heavy active development</a> by the Karma Coin dev team.</p>
                        <p>A public open Karmachain testnet is going to be available in Q2 2023. The Karmachain mainnet genesis is planned for Q3 2023.</p>
                        <p>Interested in learning more about Karmachain or getting involved? Contact us at <a href='mailto:info@karmaco.in'>info@karmaco.in</a>.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </main>z
        </Layout>
    );
}

