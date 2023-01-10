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
            Docusaurus was designed from the ground up to be easily installed and
            used to get your website up and running quickly.
        </>
    ),
},
{
    title: 'Rust (Substrate) Developer',
        image_url: require('@site/static/icon1.png').default,
        link: '/flutter_dev',
        description: (
        <>
            Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
            ahead and move your docs into the <code>docs</code> directory.
        </>
    ),
}
];

function Job({image_url, title, link, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image_url}/>
            </div>
            <div className="text--center padding-horiz--md">
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

