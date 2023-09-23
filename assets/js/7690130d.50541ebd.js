"use strict";(self.webpackChunkKarmaCoin=self.webpackChunkKarmaCoin||[]).push([[6785],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={id:"transactions",title:"Transactions",sidebar_label:"Transactions",slug:"/transactions"},o=void 0,s={unversionedId:"design/transactions",id:"version-0.1.0/design/transactions",title:"Transactions",description:"Karma Coin has 3 kinds of blockchain transactions: New User Transaction, Update User Transaction and Payment Transaction. Transaction data is included in a generic higher-level SignedTransaction data object which includes fields common to all transactions and is signed by the user.",source:"@site/versioned_docs/version-0.1.0/design/transactions.md",sourceDirName:"design",slug:"/transactions",permalink:"/docs/transactions",draft:!1,editUrl:"https://github.com/avive/karmacoin-docs/versioned_docs/version-0.1.0/design/transactions.md",tags:[],version:"0.1.0",lastUpdatedBy:"avive",lastUpdatedAt:1677179942,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{id:"transactions",title:"Transactions",sidebar_label:"Transactions",slug:"/transactions"},sidebar:"version-0.1.0/someSidebar",previous:{title:"Blockchain Config",permalink:"/docs/blockchain-config"},next:{title:"Tokenomics",permalink:"/docs/tokenomics"}},c={},l=[{value:"New User Transaction",id:"new-user-transaction",level:3},{value:"Payment Transaction",id:"payment-transaction",level:3},{value:"Update User Transaction",id:"update-user-transaction",level:3},{value:"Update Nickname",id:"update-nickname",level:3},{value:"Update Mobile Number",id:"update-mobile-number",level:3},{value:"Transactions Events Model",id:"transactions-events-model",level:2},{value:"Transactions Pool Model",id:"transactions-pool-model",level:2},{value:"Payment Translations Handling",id:"payment-translations-handling",level:3},{value:"New User Transactions Handling",id:"new-user-transactions-handling",level:3}],d={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Karma Coin has 3 kinds of blockchain transactions: ",(0,r.kt)("inlineCode",{parentName:"p"},"New User Transaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Update User Transaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Payment Transaction"),". Transaction data is included in a generic higher-level SignedTransaction data object which includes fields common to all transactions and is signed by the user."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In addition to the core transactions described above, Karma Coin supports transactions for Staking Karma Coins with validators, nominating validators, and voting on governance proposals.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"enum TransactionType {\n  TRANSACTION_TYPE_PAYMENT_V1 = 0;\n  TRANSACTION_TYPE_NEW_USER_V1 = 1;\n  TRANSACTION_TYPE_UPDATE_USER_V1 = 2;\n}\n\n/// The transaction data is serialized payment, new user or update user transaction data.\nmessage SignedTransaction {\n  AccountId signer = 1; // account this tx is signed by\n  uint64 timestamp = 2; // time transaction was signed\n  uint64 nonce = 3; // tx nonce\n  uint64 fee = 4; // network fee provided by sender\n  TransactionData transaction_Data = 5; // binary transaction data\n  uint32 net_id = 6; // network id to avoid confusion with testnets\n  Signature signature = 7; // signer signature on all of the above data\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"new-user-transaction"},"New User Transaction"),(0,r.kt)("p",null,"This transaction is submitted by new Karma Coin users to create an on-chain account.\nIt includes a signed message from a trusted verifier that attests the user's requested unique user-name, verified phone number and account id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Created and signed by a verifier to attest that an account owns a mobile number\nmessage UserVerificationData {\n  AccountId verifier_account_id = 1;\n  uint64 timestamp = 2;\n  VerificationResult verification_result = 3;\n  AccountId account_id = 4;\n  MobileNumber mobile_number = 5;\n  // only used in referral onboarding flow to indicate referral transaction id\n  bytes referral_transaciton_id = 6;\n  string requested_user_name = 7;\n  Signature signature = 8;\n}\n\nenum VerificationResult {\n  VERIFICATION_RESULT_UNSPECIFIED = 0;\n  VERIFICATION_RESULT_USER_NAME_TAKEN = 1; // there's already a user with the requested user name\n  VERIFICATION_RESULT_VERIFIED = 2; // user is verified using provided token\n  VERIFICATION_RESULT_UNVERIFIED = 3; // user is not verifier using provided token\n  VERIFICATION_RESULT_MISSING_DATA = 4; // request is missing required data\n  VERIFICATION_RESULT_INVALID_SIGNATURE = 5; // bad client signature\n  VERIFICATION_RESULT_ACCOUNT_MISMATCH = 6; // different account associated with phone number\n}\n\n// new user transactions submitted by users\nmessage NewUserTransactionV1 {\n  // Evidence from a valid verifier about the new user\n  UserVerificationData verify_number_response = 1;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"payment-transaction"},"Payment Transaction"),(0,r.kt)("p",null,"A payment transaction specifies transfer of KCents from one user account to another user account. It optionally includes an appreciation for a character trait."),(0,r.kt)("p",null,"Payment transactions are used for several Karma Coin use cases: appreciation, tipping w/o an appreciation and a simple coin transfer operation."),(0,r.kt)("p",null,"Transaction receiver is always a mobile phone number. This is designed so existing users can tip, appreciate or send coins to any other person even before that person created an on-chain user account via a NewUser transaction. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/onboarding"},"onboarding flow")," for additional info regarding how these transactions are processed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Basic payment transaction with optional character appreciation\nmessage PaymentTransactionV1 {\n  MobileNumber to = 1; // dest is always a mobile number (of a user or a non-user) no accountId needed.\n  uint64 amount = 2; // amount in tokens to transfer\n  uint32 char_trait_id = 3; // char trait id set by sender. e.g. smart\n}\n")),(0,r.kt)("h3",{id:"update-user-transaction"},"Update User Transaction"),(0,r.kt)("p",null,"This transaction is used by users who have an on-chain account in several use cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update nickname."),(0,r.kt)("li",{parentName:"ol"},"Update mobile phone number.")),(0,r.kt)("h3",{id:"update-nickname"},"Update Nickname"),(0,r.kt)("p",null,"This is a request by an existing user to change his unique Karma Coin user-name. This operation doesn't requrie signed verification data from a verifier. Block producers check that the requested name is available and reject the transaction if it is taken."),(0,r.kt)("h3",{id:"update-mobile-number"},"Update Mobile Number"),(0,r.kt)("p",null,"This is used when user has changed his mobile phone number. It updates the user's phone number in the on-chain user account. This operation requires the user to attach a signed verification from a verifier regarding ownership of the number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Update user info\nmessage UpdateUserTransactionV1 {\n\n    // new requested nickname\n    string nickname = 1;\n\n    // Updated verified number\n    MobileNumber mobile_number = 2;\n\n    // verifier attestation regarding the number and the account\n    UserVerificationData user_verification_data = 3;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"transactions-events-model"},"Transactions Events Model"),(0,r.kt)("p",null,"Events are generated by runtime transaction processing and include non-chain data that provides useful information for users, validators and verifiers that doesn't need to be kept on-chain. "),(0,r.kt)("p",null,"Karma Coin Archive nodes keep all events since genesis and make them accessible via the Karma Coin blockchain node API. "),(0,r.kt)("p",null,"Full nodes retain only recent events and make them available via the same API. There are two types of events: Transaction Events and Block Events."),(0,r.kt)("p",null,"A blockchain event is generated for each block produced by a block producer. "),(0,r.kt)("p",null,"A transaction event is generated for each processed transaction and includes transactions that were rejected by a block producer for inclusion in a block as well as transactions that were added to a block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"enum FeeType {\n  FEE_TYPE_MINT = 0; // fee provided by the protocol\n  FEE_TYPE_USER = 1; // fee provided by the transaction signer\n}\n\nenum ExecutionResult {\n  EXECUTION_RESULT_EXECUTED = 0;\n  EXECUTION_RESULT_INVALID = 1; // invalid syntax\n}\n\nenum ExecutionInfo {\n  EXECUTION_INFO_UNKNOWN = 0;\n  EXECUTION_INFO_NICKNAME_UPDATED = 1;\n  EXECUTION_INFO_NICKNAME_NOT_AVAILABLE = 2;\n  EXECUTION_INFO_NICKNAME_INVALID = 3;\n  EXECUTION_INFO_NUMBER_UPDATED = 4;\n  EXECUTION_INFO_ACCOUNT_CREATED = 5;\n  EXECUTION_INFO_PAYMENT_CONFIRMED = 6;\n  EXECUTION_INFO_INVALID_DATA = 7;\n  EXECUTION_INFO_ACCOUNT_ALREADY_EXISTS = 8;\n  EXECUTION_INFO_TX_FEE_TOO_LOW = 9;\n  EXECUTION_INFO_INTERNAL_NODE_ERROR = 10;\n}\n\n\n// Transaction event\nmessage TransactionEvent {\n  uint64 timestamp = 1;\n  uint64 height = 2; // ledger height of execution\n  SignedTransaction transaction = 3;\n  bytes transaction_hash = 4;\n  ExecutionResult result = 5;\n  ExecutionInfo info = 6;\n  string error_message = 7;\n  FeeType fee_type = 8;\n  uint64 signup_reward = 9;\n  uint64 referral_reward = 10;\n  uint64 fee = 11;\n}\n\n// Block event\nmessage BlockEvent {\n    uint64 timestamp = 1;\n    uint64 height = 2;\n    bytes block_hash = 3;\n    repeated TransactionEvent transactions_events = 4;\n    uint64 signups_count = 5;\n    uint64 payments_count = 6;\n    uint64 user_updates_count = 7;\n    uint64 fees_amount = 8;\n    uint64 signup_rewards_amount = 9;\n    uint64 referral_rewards_amount = 10;\n    uint64 referral_rewards_count = 11;\n    uint64 reward = 12;\n}\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"transactions-pool-model"},"Transactions Pool Model"),(0,r.kt)("p",null,"The Transactions Pool is a temporary storage for transactions that are received by a node but not yet included in a block. The pool is used to store transactions that are received before a block producer is elected and to store transactions that were rejected by a block producer for inclusion in a block. The following describes the transactions pool model. Some special care is needed to implement Karma Coin correctly which involves how transactions are processed and how the pool is managed."),(0,r.kt)("h3",{id:"payment-translations-handling"},"Payment Translations Handling"),(0,r.kt)("p",null,"As one of the top project goals is to make it easy for users to sign up and appreciate. Clients do not block users from submitting payment/appreciation transactions as soon as they've signe-up in the app and before a new user's ",(0,r.kt)("inlineCode",{parentName:"p"},"new user transcation")," is processed there's no online account for the user. The following rules should be applied:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The pool management logic should not reject payment transactions where the sender's account is not found on chain. These transactions should be stored in the pool for a period of 14 days. "),(0,r.kt)("li",{parentName:"ol"},"Block producers should not process payment transactions where the sender's account is not found on chain. Only payment transactions where the sender's account is found on chain should be processed and included in new blocks.")),(0,r.kt)("h3",{id:"new-user-transactions-handling"},"New User Transactions Handling"),(0,r.kt)("p",null,"Some checks should be performed by the pool logic before accepting a new user transaction to the pool. The following validation rules should be applied:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A valid validators' attestation - signed by an active validator. "),(0,r.kt)("li",{parentName:"ol"},"User requested nickname is available. e.g. was not already taken."),(0,r.kt)("li",{parentName:"ol"},"Valid reference to a payment transaction when the transaction includes a ",(0,r.kt)("inlineCode",{parentName:"li"},"referral transaction id"),". The payment transaction identified by the id should be in the pool.")),(0,r.kt)("p",null,"In case that a transaction does not meet these validation criteria, it should not be added to the pool and rejected upon submission."),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"License",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the ",(0,r.kt)("a",{parentName:"p",href:"/docs/license"},"Karma Coin License"),".")))}p.isMDXComponent=!0}}]);