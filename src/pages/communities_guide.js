import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function CommunitiesGuidePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Karma Coin for Communities - Guide`}
            description="Karma Coin offering for communities">
            <main>
                <h1 className={clsx('text--center', styles.titleBanner, 'padding--sm')}>
                    Karma Coin for Communities Guide
                </h1>
                <h2 className={clsx('text--center', styles.subtitleBanner, 'padding--sm')}>
                    Uniting communities through the power of positive action and cryptocurrency
                </h2>

                <div className={clsx(styles.mainTextContainer)}>
                    <div className={clsx(styles.center)}>
                        <img className={clsx(styles.imgContainer)} src="/community_screen.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/community_appreciate.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/community_appreciation.png" height="400"/>
                    </div>

                    <div className={clsx('row', styles.mainText)}>
                        <h2>Intro</h2>

                        <p>This is guide is intended for community managers. It explains how Karma Coin App 1.0 can help them make their communities stronger by providing a step by step walkthrough of how the app works for communities.</p>
                        <p> This encourages your members to use the app to show and send tokens of appreciation in a way that is familiar to them.</p>
                        <h2>Getting Started</h2>
                        <p>Install the native Karma Coin mobile app on your iPhone or Android or run the web app in Chrome on your mobile device or desktop</p>
                        <p>Let team Karma Coin know your Karma Coin user name.</p>
                        <p>Team Karma Coin will send you your community partner Karma Coins Grant and make you an admin of your community.</p>
                        <p>Once this happens you should see a community icon in the top left of the app's main screen.</p>
                        <p>Tap it to access your community.</p>
                    </div>
                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/community_access.png" height="400"/>
                     </div>

                    <div className={clsx('row', styles.mainText)}>
                        <p>You are now in the community's branded home screen in the app.</p>
                    </div>

                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/community_screen.png" height="400"/>
                    </div>
                    <div className={clsx('row', styles.mainText)}>
                        <p>Notice that this screen is branded to your community based on assets provided by you to team Karma Coin as part of the integration process.</p>
                        <h2>Appreciating a Community Member</h2>
                        <p>Tap on the appreciate button to invite your community members to your community on Karma Coin.</p>
                    </div>
                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/community_admin_appreciate.png" height="400"/>
                    </div>
                    <div className={clsx('row', styles.mainText)}>
                        <p>Notice your community personality traits in the center of the screen. These traits were chosen by you as part of the partner integration process with Karma Coin.</p>
                        <p>Select a personally trait that you want to appreciate the member with, by selecting the traits wheel. </p>

                        <p>Next, enter the invited member's mobile phone number or just select it from you mobile device contacts by tapping on the 'Contact' button.</p>

                        <p>Only you, as a community admin can invite people to your community using their mobile phone numbers. Members can only appreciate other members who are on Karma Coin. This is designed to keep control about memberships.</p>
                    </div>
                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/community_appreciate_contacts.png" height="400"/>
                    </div>
                    <div className={clsx('row', styles.mainText)}>
                        <p>Determine how much Karma Coins to transfer to the member as part of the appreciation. One million Karma Cents are one Karma Coin. The USD value of the coins you are about to send is displayed on screen.</p>
                        <p>Tap the 'Send' button to send the appreciation.</p>         </div>
                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/cmmunity_appreciation_summary.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/community_appreciation.png" height="400"/>
                    </div>

                    <div className={clsx('row', styles.mainText)}>
                        <h2>Community Member App Use</h2>
                        <p>Your appreciated community member will get a text message to its mobile phone number prompting it to sign up to Karma Coin via the Karma Coin App. Once your member is signed up it will see the appreciation you sent it, and its Karma Coin balance will be updated with the coins you have sent. Once running the app, community members can easily appreciate any other community member by selecting the member from the members list.</p>
                    </div>

                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/community_appreciate.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/community_members.png" height="400"/>
                    </div>
                    <div className={clsx('row', styles.mainText)}>
                        <h2>Feeling the Pulse of you Community</h2>
                        <p>You can browse all community members using the app by tapping the community button at the top-right side of your community main screen to check their community karma score, and sent and received community appreciations.</p>
                        <p>You can quickly appreciate any member by selecting it from the list. No phone number entry is needed once your member is on Karma Coin.</p>
                    </div>
                    <div className={clsx(styles.mainTextContainer)}>
                        <img className={clsx(styles.imgContainer)} src="/community_screen.png" height="400"/>
                        <img className={clsx(styles.imgContainer)} src="/community_members.png" height="400"/>
                    </div>
                    <div className={clsx('row', styles.mainText)}>
                        <h2>Making a member a community admin</h2>
                        <p>A community admin can invite anyone to the community. You can assign one or more people to be your community admin in addition to yourself.</p>
                        <p>Invite the person to the community by appreciating him in your community if he or she are not members yet.</p>
                        <p>Next, browse the communities members list in the app and long-tap (or click and hold on desktop) the member name in the list.</p>
                        <p>A menu will appear giving you an option to make the user an admin. Click or tap 'Yes'.</p>
                        <p>That's it - the member is now an admin and can invite any other person to the community.</p>
                        <p>In the future, additional features are going to be provided to admins.</p>
                        <p></p>

                        <h2>Summary</h2>
                        <p>We hope that this guide helps you see how Karma Coin can help your community grow better and stronger.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

