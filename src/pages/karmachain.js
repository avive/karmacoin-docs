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
                    A modern, permissionless blockchain optimized for appreciation and tipping
                </h2>
                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText, 'text--left')}>
                        <h2>Karmachain 1.0</h2>
                        <ul className={clsx(styles.mainBullets)}>
                            <li>The first implementation of Karmachain</li>
                            <li>A dedicated app-specific blockchain designed for Karma Coin</li>
                            <li>Code complete and powering <a href="/testnet">Karma Coin Testnet 1</a></li>
                            <li>Built in modern Rust</li>
                            <li>100% <a target='_blank' href='https://github.com/karma-coin/karmacoin-server'>open source software</a></li>
                        </ul>
                        <p>&nbsp;</p>
                        <h2>Karmachain 2.0</h2>
                        <ul className={clsx(styles.mainBullets)}>
                            <li>A dedicated app-specific nominated proof of stake (NPos) blockchain</li>
                            <li>Custom designed for Karma Coin</li>
                            <li>built with the <a href='https://substrate.io/' target='_blank'>Substrate blockchain framework</a></li>
                            <li>Maintained by the <a href='/validators'>Karmachain validators</a></li>
                            <li>100% open source software and is developed in a fully transparent manner on Github</li>
                            <li>Under <a href='https://github.com/karma-coin/karmachain'>heavy active development</a> by the Karma Coin dev team</li>
                            <li>Open public testnet in Q2 2023</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>Interested in learning more about Karmachain or getting involved?</p>
                        <p>Contact us at <a href='mailto:info@karmaco.in'>info@karmaco.in</a></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

