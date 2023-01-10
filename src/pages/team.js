import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const TeamMembers = [
    {
        name: 'Rachel Kiner',
        title: 'Head of Communities',
        link: 'https://twitter.com/rachelkelly',
        image: require('@site/static/icon1.png').default,
        description: (
            <>
                About Rachel...
            </>
        ),
    },
    {
        name: 'Oriya Pollack',
        title: 'Head of Partnerships',
        link: 'https://www.linkedin.com/in/oriya/',
        image: require('@site/static/icon1.png').default,
        description: (
            <>
                About Oriya...
            </>
        ),
    },
    {
        title: 'Head of Product',
        name: 'Aviv Eyal',
        link: 'https://linktr.ee/avive',
        image: require('@site/static/icon1.png').default,
        description: (
            <>
                About Avive...
            </>
        ),
    },
];

function Member({image, link, name, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} className={styles.featureImage} role="img" />
            </div>
            <div className="text--center padding-horiz--md padding-vert--md">
                <h3><a href={link}>{name}</a></h3>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function TeamPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            {TeamMembers.map((props, idx) => (
                                <Member key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

