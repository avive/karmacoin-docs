"use strict";(self.webpackChunkKarmaCoin=self.webpackChunkKarmaCoin||[]).push([[2497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={id:"validator",title:"Running a Validator Node",sidebar_label:"\u26d3\ufe0f Validation"},r=void 0,l={unversionedId:"testnet/validator",id:"version-0.1.0/testnet/validator",title:"Running a Validator Node",description:"Follow the instructions in this document to run your own a validator node on the karmachain 2.0 Testnet 3 (TN3).",source:"@site/versioned_docs/version-0.1.0/testnet/validator.md",sourceDirName:"testnet",slug:"/testnet/validator",permalink:"/docs/testnet/validator",draft:!1,editUrl:"https://github.com/avive/karmacoin-docs/versioned_docs/version-0.1.0/testnet/validator.md",tags:[],version:"0.1.0",lastUpdatedBy:"HolyGrease",lastUpdatedAt:1695305906,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"validator",title:"Running a Validator Node",sidebar_label:"\u26d3\ufe0f Validation"},sidebar:"version-0.1.0/someSidebar",previous:{title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Mining Pools",permalink:"/docs/testnet/mining-pools"},next:{title:"\ud83d\ude4b\u200d\u2642\ufe0f Nomination",permalink:"/docs/testnet/nominator"}},s={},u=[{value:"System Requirements",id:"system-requirements",level:2},{value:"CPU",id:"cpu",level:3},{value:"Memory",id:"memory",level:3},{value:"System",id:"system",level:3},{value:"Network",id:"network",level:3},{value:"Dev Environment Setup",id:"dev-environment-setup",level:2},{value:"Read Testnet 3 Release Notes",id:"read-testnet-3-release-notes",level:2},{value:"Run your node",id:"run-your-node",level:2},{value:"Create Accounts",id:"create-accounts",level:3},{value:"Request Testnet Coins",id:"request-testnet-coins",level:2},{value:"Bond Karma Coins",id:"bond-karma-coins",level:2},{value:"Generate Session Keys",id:"generate-session-keys",level:2},{value:"Submit a <code>setKeys</code> Transaction",id:"submit-a-setkeys-transaction",level:2},{value:"Validating",id:"validating",level:2},{value:"Summary",id:"summary",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Follow the instructions in this document to run your own a validator node on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/karma-coin/karmachain/releases/tag/v0.3.0"},"karmachain 2.0 Testnet 3 (TN3)"),"."),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The specs below are not a hard requirement to run a validator, but are considered best practice."),(0,o.kt)("li",{parentName:"ul"},"Running a validator is a responsible task. Using professional hardware is a must."),(0,o.kt)("li",{parentName:"ul"},"The most common way for a beginner to run a validator is on a cloud server running Linux. You may choose whatever VPS provider that your prefer. As for OS it is best to use a recent Debian-based Linux (Debian or Ubuntu).")),(0,o.kt)("h3",{id:"cpu"},"CPU"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x86-64 compatible"),(0,o.kt)("li",{parentName:"ul"},"Intel Ice Lake, or newer (Xeon or Core series)"),(0,o.kt)("li",{parentName:"ul"},"Minimum of 2 physical cores @ 3.4GHz. 4 cores recommended"),(0,o.kt)("li",{parentName:"ul"},"Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD)"),(0,o.kt)("li",{parentName:"ul"},"Prefer single-threaded performance over higher cores count"),(0,o.kt)("li",{parentName:"ul"},"An NVMe SSD of 500 GB (As it should be reasonably sized to deal with blockchain growth)")),(0,o.kt)("h3",{id:"memory"},"Memory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"16 GB DDR4 ECC")),(0,o.kt)("h3",{id:"system"},"System"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux Kernel 5.16 or newer")),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum symmetric networking speed of 500 Mbit/s (62.5 MB/s)."),(0,o.kt)("li",{parentName:"ul"},"Make sure your system is configured to run NTP to sync its local time.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"dev-environment-setup"},"Dev Environment Setup"),(0,o.kt)("p",null,"Running a validator node requires ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker"),"."),(0,o.kt)("h2",{id:"read-testnet-3-release-notes"},"Read Testnet 3 Release Notes"),(0,o.kt)("p",null,"Read the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/karma-coin/karmachain/releases/tag/v0.3.0"},"testnet release"),"."),(0,o.kt)("h2",{id:"run-your-node"},"Run your node"),(0,o.kt)("p",null,"The Karmachain TN3 node is available as a docker image on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/layers/teamkarmacoin/karmachain/tn3/images/sha256-3c32d0b0896b8c67eb0f3a7221cfc430432c33d5569fc8e05c0eaa07d49deaac?context=explore"},"DockerHub"),". "),(0,o.kt)("p",null,"Alternatively, you can clone the Karmachain open source Github repo and build a docker image directly from source code. To do so, git check out the code from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/karma-coin/karmachain/tree/v0.3.0"},"release tag"),", build a local docker image and modify the docker run command below to use your local image instead of the dockerhub one."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," for your platform.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the command below to a text editor."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run --name karmachain-node --mount source=chain-data,target=/chain-data -p 30333:30333 -p 9944:9944 -p 9933:9933 teamkarmacoin/karmachain:tn3 --base-path /chain-data --chain chain-spec/chainSpecTN3.json --port 30333 --unsafe-rpc-external --rpc-port 9933 --rpc-cors all --rpc-methods unsafe --validator --name [YOUR_NODE_NAME] --bootnodes /dns/testnet.karmaco.in/tcp/30333/p2p/12D3KooWF6sxqSYcgm2LTATwVWgnzTaZrf4zkJwskdAfFa9Crq2t --telemetry-url "wss://telemetry.polkadot.io/submit/ 0"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the command to set your node's name as the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--name")," flag.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the modified command."))),(0,o.kt)("p",null,"To verify that your node is running, view the logs of your node obtain the container id by running ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo docker ps")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo docker logs NODE-CONTAINER-ID -f"),". If your node is correctly set up then you should see blocks syncing via the logs."),(0,o.kt)("h3",{id:"create-accounts"},"Create Accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To start validating, you should create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Stash account")," and a ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller account"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Stash account")," is where you keep most of your coins. It is the custodian of your staking funds."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller account")," is an account designed to perform various validation-related transactions.")),(0,o.kt)("p",null,"Security note. On mainnet, for increased security, you want to set up your ",(0,o.kt)("inlineCode",{parentName:"p"},"Stash Account")," as a cold wallet. Meaning, its private key should not be stored on your computer. Your controller acccount can be a hot-wallet with private key on your computer. For testnet, you can have both account private keys in your hot wallet. On Testnet, you can may skip the controller account creation step and use your stash account as your controller."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can use any Substrate-compatible wallet to create these accounts. We recommend using the ",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd"},"polkadot.js extension"),". Refer to this guide ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"Create an Account using Polkadot JS Extension")," for more information about using the extension.")),(0,o.kt)("h2",{id:"request-testnet-coins"},"Request Testnet Coins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the Karma Coin ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/karmacoinapp/293"},"Testnet Telegram Channel"),"."),(0,o.kt)("li",{parentName:"ul"},"The basic accounting unit of Karmachain is ",(0,o.kt)("inlineCode",{parentName:"li"},"Karma Coin")," (KCOIN). The minimum amount is one-millionth KCOIN which is 1 Karma Cent (KCENT). 1 KCENT is one Micro KCOIN."),(0,o.kt)("li",{parentName:"ul"},"The minimum testnet bonding amount is 1 KCOIN. We configured it in this way to make it easy to bond and validate."),(0,o.kt)("li",{parentName:"ul"},"Share the public address of you ",(0,o.kt)("inlineCode",{parentName:"li"},"Stash account")," and request testnet KCOINs for your bond."),(0,o.kt)("li",{parentName:"ul"},"Once you received some funds, transfer some of them to your ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller account"),".")),(0,o.kt)("h2",{id:"bond-karma-coins"},"Bond Karma Coins"),(0,o.kt)("p",null,"Follow these steps to set up your validator."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bond coins in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Stash account"),". These coins will be used as stake for the security of the network and can be slashed. Make sure not to bond your entire coin balance since in that case you will be unable to pay transaction fees from your ",(0,o.kt)("inlineCode",{parentName:"p"},"Stash account"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Access the testnet's web app on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.karmaco.in/#/explorer"},"testnet.karmaco.in")," and complete the steps below in it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to the Staking section. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts"),", and then the ",(0,o.kt)("inlineCode",{parentName:"p"},"+ Stash")," button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"bond",src:a(8238).Z,width:"1390",height:"904"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Stash account")," - Select your Stash account. Make sure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"Stash account")," contains at least this much. You can, of course, stake more than this.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Value bonded")," - How much KCOINs from the Stash account you want to bond/stake. Note that you do not need to bond all the KCOINs in that account. Also note that you can always bond more KCOINs later. However, withdrawing any bonded amount requires the duration of the un-bonding period.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Controller account")," - Select yhour controller account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Payment destination")," - The account where the rewards from validating are sent. Payouts can go to any account. If you'd like to redirect payments to an account that is neither the controller nor the stash account, set one up. Note that it is extremely unsafe to set an exchange address as the recipient of your staking rewards.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Bond")," and sign the transaction with your ",(0,o.kt)("inlineCode",{parentName:"p"},"Stash account"),". You should see an ExtrinsicSuccess message in about a minute.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your bonded account will available under ",(0,o.kt)("inlineCode",{parentName:"p"},"Stashes"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should now see a new card with all of your accounts (note: you may need to refresh the page). The bonded amount on the right corresponds to the funds bonded by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stash account"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bond",src:a(5907).Z,width:"2816",height:"430"})),(0,o.kt)("h2",{id:"generate-session-keys"},"Generate Session Keys"),(0,o.kt)("p",null,"Install Websocat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget -qO /usr/local/bin/websocat https://github.com/vi/websocat/releases/latest/download/websocat.x86_64-unknown-linux-musl\nsudo chmod a+x /usr/local/bin/websocat\n")),(0,o.kt)("p",null,"Run this command on the same machine that runs your validator node. Ensure that the node is running with the WS RPC port set to 9944."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'{"id":1,"jsonrpc":"2.0","method":"author_rotateKeys","params":[]}\' | websocat -n1 -B 99999999 ws://127.0.0.1:9933\n')),(0,o.kt)("p",null,"The output will have a hex-encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," field. Save this result for a later step."),(0,o.kt)("h2",{id:"submit-a-setkeys-transaction"},"Submit a ",(0,o.kt)("inlineCode",{parentName:"h2"},"setKeys")," Transaction"),(0,o.kt)("p",null,"You need to tell Karmachain about your Session keys by signing and submitting an extrinsic. This is what associates your validator with your stash account and your controller account."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Staking")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Network")," menu."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Accounts")," and select ",(0,o.kt)("inlineCode",{parentName:"li"},"All stashes"),"."),(0,o.kt)("li",{parentName:"ol"},"Locate your ",(0,o.kt)("inlineCode",{parentName:"li"},"Stash account")," in the list of stashes."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Session Key")," button. "),(0,o.kt)("li",{parentName:"ol"},"Paste the hex string value of ",(0,o.kt)("inlineCode",{parentName:"li"},"result field")," of the response for ",(0,o.kt)("inlineCode",{parentName:"li"},"author_rotateKeys"),".")),(0,o.kt)("p",null,"For example, for this response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"jsonrpc":"2.0","result":"0xcc10239e1384fb33117f5121bb394c3290c87e2ec79d145acf9e16493b3409190e48cd261f2d3a32c0c3f5e6f930f00dfd0dd6964c0baaeadb7009022d78d91a","id":1}\n')),(0,o.kt)("p",null,"The value to copy and paste is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xcc10239e1384fb33117f5121bb394c3290c87e2ec79d145acf9e16493b3409190e48cd261f2d3a32c0c3f5e6f930f00dfd0dd6964c0baaeadb7009022d78d91a"),"."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Set Session Key"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"setKeys",src:a(632).Z,width:"2146",height:"680"})),(0,o.kt)("h2",{id:"validating"},"Validating"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Network")," menu and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"All Stashes")," and Locate your stash account in the list.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Validate")," for your validator to set up validation."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Reward commission percentage")," is the commission percentage that you can declare against your validator's rewards. This is the rate that your validator will be commissioned with."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Payment preferences")," - You can specify the percentage of the rewards that will get paid to you. The remaining will be split among your nominators."),(0,o.kt)("p",null,"You can also determine if you would like to receive nominations with the ",(0,o.kt)("inlineCode",{parentName:"p"},"allows new nominations")," option."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"validate",src:a(9746).Z,width:"2126",height:"694"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Bond & Validate"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Waiting")," and verify that your node is listed as waiting."))),(0,o.kt)("p",null,"At the top of the page, The number of validator slots that are available is displayed as well as the number of nodes that have signaled their intention to be a validator."),(0,o.kt)("p",null,"If your validator is not selected to become part of the validator set, it will remain in the waiting queue until it is."),(0,o.kt)("p",null,"There is no need to re-start your node if you are not selected for the validator set in a particular era."),(0,o.kt)("p",null,"The validator set is refreshed every era. In the next era, if there's a slot available and your node is selected to join the validator set, your node will become an active validator. Until then, it will remain in the waiting queue."),(0,o.kt)("p",null,"\ud83c\udf89 Congratulation, you have successfully set up validation and your node should start validation the testnet and get you coin rewards in the next era (in up to 24 hours)."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"We hope this guide got your validator up and running smoothly.\nPlease feel free to contact Team Karma Coin if you came across any issue."))}p.isMDXComponent=!0},8238:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bond-31f77b8d1c8ae507d74e3b69d3ee6be7.png"},632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-session-key-408efe22daa8d6533715987a1099828a.png"},5907:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stash-09fb38fdc6bbdee6a577377dec46c5df.png"},9746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/validate-18a8869804f89ffebafa1b920e31ccd6.png"}}]);