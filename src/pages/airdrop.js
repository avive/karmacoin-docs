import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';


export default function AirdropsPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Airdrops`}
            description="Karma Coin Airdrops Program">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    The Karma Coin Airdrop
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    Round 1 - Join the Waiting List
                </h2>
                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText, 'text--left')}>
                        <p>Good morning to you. Karma Coin has a unique economic model that rewards early adopters for signing-up and using the Karma Coin App for tipping and appreciating others.</p>
                        <p>The App is going to be available this summer for iOS, Android and web platforms.</p>
                        <p>We are glad to announce round one of our airdrop program. The program is designed to reward early adopters who sign-up to Karma coin pre app-launch.</p>
                        <p>To claim your Karma Coins, just get on our <a href="https://getwaitlist.com/waitlist/4912" target="_blank">Waiting List</a>.</p>
                        <p>The earlier you join, the higher your award...</p>
                        <ul className={clsx(styles.mainBullets)}>
                            <li>The first 100 people who join the waiting list get 1,000 Karma Coins. <span className={clsx(styles.redText)}> Over-subscribed - thank you all!</span></li>
                            <li>The next 1,000 get 500 Karma Coins.</li>
                            <li>The next 10,000 get 250 Karma Coins.</li>
                            <li>The next 10 million get good karma ☥.</li>
                        </ul>
                        <p>To claim your award, just sign-up in the Karma Coin App with the same mobile phone number used to join the waiting list.</p>

                        <p>Stay tuned... future airdrop rounds will be announced on this page and on our <a href="https://twitter.com/TeamKarmaCoin">Twitter account</a>.</p>
                        <p>Most <a href="https://firebase.google.com/support/faq/#phone-auth-countries" target="_blank">countries</a> are supported.</p>
                        <p>Wishing you good karma!</p>
                        <p>-- <a href="/team">Team Karma Coin</a></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

