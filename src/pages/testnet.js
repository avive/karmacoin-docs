import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Testnet1Page() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Coin Testnet`}
            description="Join our test">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Coin Testnet
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    Experience Karma Coin on your device
                </h2>

                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx(styles.center)}>
                        <img className={clsx(styles.imgContainer)} src="/main.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/appreciate.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/appreciation.png" height="400"/>
                    </div>

                    <div className={clsx('row', styles.mainText)}>
                        <h2>Testnet 1</h2>
                        <p>We are super exciting to announce the availability of the first Karma Coin public open testnet.</p>
                        <p>This is an early release designed for partners to be able to experience the Karma Coin App on their devices. </p>
                        <p>To join, head over to our <a href="https://t.me/karmacoinapp/13">Telegram Group</a> and follow the instructions for your device.</p>
                        <p>Check <a target='_blank' href="https://chain.karmaco.in">Testnet 1 Status</a>.</p>
                        <h2>Key Features</h2>
                        <ul className={clsx(styles.mainBullets)}>
                            <li>Run on Android, iOS or Desktop</li>
                            <li>Sign up with your mobile phone number.</li>
                            <li>Get your free Karma Coin signup award.</li>
                            <li>Appreciate and send Karma Coins to anyone.</li>
                            <li>Experience Karma Coin community features.</li>
                         </ul>

                        <p>&nbsp;</p>
                        <p>⚠️ Testnet 1 Karma Coins do not have any monetary value and do not carry over to the Karma Coin mainent.</p>
                        <p>&nbsp;</p>

                        <h2>Karma Coin App 1.0</h2>
                        <p>Run the Karma Coin App to use Karma Coin. The app is available as an Android App and an iOS app, as well as a web app that runs in your browser.</p>
                        <ul className={clsx(styles.mainBullets)}>
                            <li>Desktop - run the <a href="https://app.karmaco.in">Karma Coin web app</a> in Chrome (Safari on macOS also works).</li>
                            <li>iPhone - run the Karma Coin native iPhone app from Testflight, or use the <a href="https://app.karmaco.in">Karma Coin web app</a> in Chrome or Safari. <a href="https://apple.co/3LUannD">Get the App via Testflight</a>.</li>
                            <li>Android - install the <a href="https://bit.ly/3FPWRxE">Karma Coin Android App (apk)</a> or use the <a href="https://app.karmaco.in">Karma Coin web app</a> in Chrome.</li>
                            <li>Got an Apple silicon Mac? You can run the app on your mac via <a href="https://apple.co/3LUannD">Testflight</a>.</li>
                        </ul>
                        <p>&nbsp;</p>

                        <p>Having an issue joining? Please contact us at <a href='mailto:support@karmaco.in'>support@karmaco.in</a>.</p>

                        <div className={clsx('buttons')}>
                            <Link className={clsx(
                                'button button--outline button--secondary button--lg'
                            )} target='_blank'
                                  to='https://t.me/karmacoinapp/13'>
                                Join Testnet
                            </Link>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

