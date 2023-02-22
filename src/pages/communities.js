import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function CommunitiesPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Coin for Communities`}
            description="Karma Coin offering for community managers <head />">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Coin for Communities
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    Uniting communities through the power of positive action and cryptocurrency
                </h2>
                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx('row', styles.mainText)}>
                        <p>Our customized Karma Coin app is the perfect tool to strengthen your community, increase core values, and give real-world benefits to your members. </p><p>With our app, your community will have a unique onboarding experience where we learn what your community's core values and strengths are and then modify the app's rating and appreciation labeling to match your community's language and messaging.</p><p> This encourages your members to use the app to show and send tokens of appreciation in a way that is familiar to them.</p>
                        <p>Key Benefits:</p>
                            <ul className={clsx(styles.mainBullets)}>
                                <li>Increase engagement and build upon the community's core strengths.</li>
                                <li>Give members an easy-to-use tool for showing appreciation within the community.</li>
                                <li>Gives community leaders access to statistics about member appreciation and behavior.</li>
                                <li>Gives community leaders a tool for growing and improving the community</li>
                                <li>Gives community leaders a global tipping tool that is familiar and easy to use.</li>
                            </ul>
                        <p>Don't miss out on this opportunity to give your members a tool that will benefit their everyday life. Contact us to learn more and customize your Karma Coin app today!</p>
                        <p>Interested in learning more? Please contact us at <a href='mailto:community@karmaco.in'>comunity@karmaco.in</a>.</p>

                        <div className="container">
                            <div className={clsx('buttons')}>
                                <Link className={clsx(
                                    'button button--outline button--secondary button--lg'
                                )} target='_blank'
                                      to='https://forms.gle/RfpqQAAFnRevABRj9'>
                                    Schedule a Demo
                                </Link>
                            </div>
                        </div>
                        <p>&nbsp;</p>

                    </div>
                </div>
            </main>
        </Layout>
    );
}

