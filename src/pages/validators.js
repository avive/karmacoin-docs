import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';


export default function ValidatorsPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Coin Validators`}
            description="Karma Coin offering for blockchain validators">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Coin for Validators
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    Validate with Purpose: Join the Karma Coin Network
                </h2>
                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText, 'text--left')}>
                        <p>Karma Coin is a unique cryptocurrency designed for appreciation and tipping. The cryptocurrency runs on the Karma Coin blockchain. The Karma Coin blockchain uses a proof-of-stake consensus protocol.</p><p> As a validator, you'll have the opportunity to help secure the network and earn rewards for your efforts.
                            </p><p>By becoming a validator, you'll be able to:</p>
                        <ul className={clsx(styles.mainBullets)}>
                            <li>Earn passive income by validating transactions on the KarmaCoin network.</li>
                            <li>Play a crucial role in maintaining the integrity and security of the network.</li>
                            <li>Be a part of a growing community of like-minded individuals who believe in the power of KarmaCoin.</li>
                            <li>Gain early access to new features and updates to the network.</li>
                            <li>Help build the future of appreciation and payments.</li>
                        </ul>
                        <p>We are looking for solid validators to become a Karma Coin mainnet launch partner.</p>
                        <p>📣 You can now run a validator node on the <a href="/docs/testnet/validator">Karmachain 2.0 public testnet</a>!</p>
                        <p>For more info, check out our <a href='/docs/validators/faq'>Validators FAQ</a>.</p>
                        <p>Interested in learning more? Please contact us at <a href='mailto:validators@karmaco.in'>validators@karmaco.in</a>.</p>

                        <div className={clsx('buttons')}>
                            <Link className={clsx(
                                    'button button--outline button--secondary button--lg'
                                )} target='_blank'
                                      to='https://forms.gle/MTT5esnpCBMU63vt9'>
                                    Schedule a Demo
                                </Link>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

