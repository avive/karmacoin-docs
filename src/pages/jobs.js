import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const Positions = [
{
    title: 'Flutter Developer',
        image_url: require('@site/static/icon1.png').default,
        link: '/flutter_dev',
        description: (
        <>
            We are looking for an awesome Flutter developer to join our team and build the Karma Coin app. You will be working with a small team of developers, designers, and product managers to build a great product.
        </>
    ),
},
{
    title: 'Senior Rust (Substrate) Developer',
        image_url: require('@site/static/icon1.png').default,
        link: '/rust_dev',
        description: (
        <>
            We are looking for a strong Rust developer with in-depth knowledge and working experience with the <a href='https://substrate.io/'>Substrate blockchain framework</a>, to join our team and work on the Karma Coin blockchain. You will be working with a small team of developers, designers, and product managers to build a great product.
        </>
    ),
}
];

function Job({image_url, title, link, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image_url} className={styles.featureImage}/>
            </div>
            <div className="text--center padding-horiz--md padding-vert--md">
                <h3><a href={link}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function JobsPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main>
                <section className={styles.features}>
                    <div className="container" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div className="row">
                            {Positions.map((props, idx) => (
                                <Job key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

