"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2106],{8551:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=n(4848),i=n(8453);const o={title:"Profile-based Access Control",description:"Profile-based Access Control",custom_edit_url:null},r="Profile-based Access Control",l={id:"Use Cases/Profile-based Access Control",title:"Profile-based Access Control",description:"Profile-based Access Control",source:"@site/docs/03-Use Cases/03-Profile-based Access Control.mdx",sourceDirName:"03-Use Cases",slug:"/Use Cases/Profile-based Access Control",permalink:"/solution-openpages-wx/Use Cases/Profile-based Access Control",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Profile-based Access Control",description:"Profile-based Access Control",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AI Assisted Conversational Experience",permalink:"/solution-openpages-wx/Use Cases/AI Assisted Conversational Experience"},next:{title:"AI-Assisted Review for Data Quality\u200b",permalink:"/solution-openpages-wx/Use Cases/AI-Assisted Review for Data Quality\u200b"}},c={},a=[{value:"Upload the an Internal Audit Standards document to Watson Discovery",id:"upload-the-an-internal-audit-standards-document-to-watson-discovery",level:2},{value:"Create Login Action",id:"create-login-action",level:2},{value:"Profile Assignment",id:"profile-assignment",level:2},{value:"Ensure Search Action Queries the Internal Audit Document",id:"ensure-search-action-queries-the-internal-audit-document",level:2}];function d(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"profile-based-access-control",children:"Profile-based Access Control"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Background & challenges"}),": Users with unique profiles should only be able to access pertinent data relevant to their profile because it is critical that data only be accessed on a need-to-know basis to maintaining the security and confidentiality of sensitive documents."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Proposed Solution"}),": Implement an AI Assistant that ensures ",(0,t.jsx)(s.strong,{children:"profile-based access control"})," to limit content and data exposure, along with creating rules to restrict users to specific modules."]}),"\n",(0,t.jsx)(s.p,{children:"For this example, Justin will be an employee within the Compliance department and Emma will be from the Internal Audit department. Therefore, Justin should not have access to private Internal Audit Standards information."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"upload-the-an-internal-audit-standards-document-to-watson-discovery",children:"Upload the an Internal Audit Standards document to Watson Discovery"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Make sure that you have an Internal Audit Standards document downloaded locally."}),"\n",(0,t.jsx)(s.li,{children:"Under your previous project, create a new collection."}),"\n",(0,t.jsxs)(s.li,{children:["Upload the file which will serve as the knowledge base. It should look like the following once you have uploaded -\n",(0,t.jsx)(s.img,{src:n(8334).A+"",width:"1294",height:"539"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"create-login-action",children:"Create Login Action"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["In the watsonx Assistant platform, in the Actions tab, under Variables, under Created by you, create 3 new variables:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"username"}),': Create a new variable called username as type "Free Text" with no initial value. Then, click Save.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"password"}),': Create a new variable called password as type "Free Text" with no initial value. Then, click Save.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"profile"}),': Create a new variable called profile as type "Free Text" with no initial value. Then, click Save.']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Under Actions, under All items, under Set by assistant, click on Greet Customer. Before anything, the user should be prompted to login to the system."}),"\n",(0,t.jsxs)(s.li,{children:["In the Greet Customer Action, delete all of the existing steps. Then, add on the following steps:","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Step 1:"}),' Type in "Welcome, please enter your ',(0,t.jsx)(s.strong,{children:"username"}),'." under Assistant says, then set the output to ',(0,t.jsx)(s.em,{children:"free text"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Step 2:"}),' Type in "Please enter your ',(0,t.jsx)(s.strong,{children:"password."}),'" under Assistant says, then set the output to ',(0,t.jsx)(s.em,{children:"free text"}),". Also, set the variable value ",(0,t.jsx)(s.em,{children:"username"})," to Action step variable / Step 1. It should look similar to the following image:\n",(0,t.jsx)(s.img,{src:n(7580).A+"",width:"625",height:"667"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Step 3:"})," Set the variable value ",(0,t.jsx)(s.em,{children:"password"})," to Action step variable / Step 2."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Step 4 and 5:"}),' Type in "Welcome ',(0,t.jsx)(s.em,{children:"username"}),', how can I assist you today?" under Assistant says. Using your preferred way of User Authentication, set the conditions as such and then set loggedIn to True.\n',(0,t.jsx)(s.img,{src:n(3970).A+"",width:"651",height:"762"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Step 6:"}),' Type in "Your username or password is incorrect, please ',(0,t.jsx)(s.strong,{children:"try again."}),'" under Assistant says, and set the And then section to Re-ask previous step(s) and set to Steps 1-5. Set the conditions to match your preferred authentication approach once again.\n',(0,t.jsx)(s.img,{src:n(549).A+"",width:"1272",height:"1392"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Step 7:"}),' Set the And then section to Go to subaction: goes to action "Role assignment" so that they can re-login.']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Now, when the Assistant first prompts the user, it should ask them to login."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Test out your new action sequence in Preview!"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"profile-assignment",children:"Profile Assignment"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'Next, navigate to the Actions tab, under All items, under Created by you, create a New action called "Profile Assignment" from scratch.'}),"\n",(0,t.jsx)(s.li,{children:"Add your method of Authentication."}),"\n",(0,t.jsx)(s.li,{children:"Be sure to save this action, then close out of this window. Preview your new action in the bottom-right Preview chat."}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"ensure-search-action-queries-the-internal-audit-document",children:"Ensure Search Action Queries the Internal Audit Document"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["On the watsonx Assistant platform navigate to the ",(0,t.jsx)(s.strong,{children:"Search"})," action, on ",(0,t.jsx)(s.strong,{children:"Step 5"}),", create a new condition ",(0,t.jsx)(s.code,{children:"If All of this is true: profile matches Internal Audit"})," and ensure that you are using the Watson Discovery Custom Extension.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The condition should look like the following image:\n",(0,t.jsx)(s.img,{src:n(3879).A+"",width:"584",height:"265"})]}),"\n",(0,t.jsxs)(s.li,{children:["The extension setup should be the default settings, except:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"collections_ids"})," To ",(0,t.jsxs)(s.em,{children:["the ",(0,t.jsx)(s.strong,{children:"Collection ID"})," of your Internal Audit Document in Watson Discovery"]})," as ",(0,t.jsx)(s.code,{children:'["<collection_id>"]'}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Where to get Collection ID"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"collection_ids"}),': In Watson Discovery, navigate to your collection, then copy the URL of your browser once you click on your collection. Copy the code between "collections" and "activity" because this is your Collection ID.']}),"\n"]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Be sure to click Apply, then Save."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Do the same for ",(0,t.jsx)(s.strong,{children:"Step 6"}),", setting the condition instead to ",(0,t.jsx)(s.code,{children:"If All of this is true: profile matches Compliance"})," and ensure that you are using the Watson Discovery Custom Extension.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The condition should look like the following image:\n",(0,t.jsx)(s.img,{src:n(633).A+"",width:"563",height:"257"})]}),"\n",(0,t.jsxs)(s.li,{children:["The extension setup should be the default settings, except:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"collections_ids"})," To ",(0,t.jsxs)(s.em,{children:["the ",(0,t.jsx)(s.strong,{children:"Collection ID"})," of your Open Pages User Guide in Watson Discovery"]})," as ",(0,t.jsx)(s.code,{children:'["<collection_id>"]'}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Where to get Collection ID"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"collection_ids"}),': In Watson Discovery, navigate to your collection, then copy the URL of your browser once you click on your collection. Copy the code between "collections" and "activity" because this is your Collection ID.']}),"\n"]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Be sure to click Apply, then Save."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["For ",(0,t.jsx)(s.strong,{children:"Step 7"}),", check if Step 5 ran successfully, meaning that the user logged in as an Admin. If Step 5 ran successfully, then set the following variable values:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["discovery_document_id To ",(0,t.jsx)(s.code,{children:"<Step 5>body.results[0].document_id"})]}),"\n",(0,t.jsxs)(s.li,{children:["discovery_collection_id To ",(0,t.jsx)(s.code,{children:"<Step 5>body.results[0].result_metadata"}),"\n",(0,t.jsx)(s.img,{src:n(2982).A+"",width:"537",height:"552"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["For ",(0,t.jsx)(s.strong,{children:"Step 8"}),", similar to the previous step, but this time check if Step 6 ran successfully, meaning that the user logged in as an Analyst. If Step 6 ran successfully, then set the following variable values:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["discovery_document_id To ",(0,t.jsx)(s.code,{children:"<Step 6>body.results[0].document_id"})]}),"\n",(0,t.jsxs)(s.li,{children:["discovery_collection_id To ",(0,t.jsx)(s.code,{children:"<Step 6>body.results[0].result_metadata"}),"\n",(0,t.jsx)(s.img,{src:n(849).A+"",width:"524",height:"548"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["For ",(0,t.jsx)(s.strong,{children:"Step 9"}),", check if Step 5 failed. If it did, then respond in the ",(0,t.jsx)(s.em,{children:"Assistant Says"}),' section with "Sorry, the search failed!"']}),"\n",(0,t.jsxs)(s.li,{children:["For ",(0,t.jsx)(s.strong,{children:"Step 10"}),", check if Step 5 was successful, and if it was, then set the ",(0,t.jsx)(s.code,{children:"search results To <Step 5>.body.results"}),". Then, it goes to subaction Generate Answer. Please repeat this for ",(0,t.jsx)(s.strong,{children:"Step 11"}),", but replace all instances of Step 5 with Step 6.\n",(0,t.jsx)(s.img,{src:n(6850).A+"",width:"554",height:"804"})]}),"\n",(0,t.jsxs)(s.li,{children:["For ",(0,t.jsx)(s.strong,{children:"Step 12"}),", check if Step 5 was successful, and if it was, then set the ",(0,t.jsx)(s.code,{children:"search_results To <Step 5>.body.results=[]"})," in order to ensure, the body from the generated answer is entirely saved. Do the same for ",(0,t.jsx)(s.strong,{children:"Step 13"})," but for Step 6 not Step 5.\n",(0,t.jsx)(s.img,{src:n(832).A+"",width:"558",height:"753"})]}),"\n",(0,t.jsx)(s.li,{children:"You are done!"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Test out this way of managing user access by asking the Assistant Internal Audit specific questions, such as:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'"What are the requirements of Legal and Ethical Behavior for internal auditors?"'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Notice the difference when a Compliance vs Internal Audit employee asks the question."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7580:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/RA-step2-df554b0ef8d6f3338f3920ec7e81c46c.png"},3970:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/RA-step4and5-f384acdb4ab07c9dde86ef2972d30472.png"},549:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/RA-step6-new-d2456a4132f47d69326111f4a4dcad4d.png"},8334:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/WD-loading-2f014d9ded8f8c3a125b237e80c32398.png"},633:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/compliance-00a32ebf69cbfa757506048de76d0599.png"},3879:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/internal_audit-118687c784a3f52b3624f2bd414ee315.png"},6850:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/search-step10-64e1c33e5e7124793cabf43ef185f1aa.png"},832:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/search-step12-941cd88be4bf1c8634d75af35f393cbe.png"},2982:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/search-step7-85434371cb37c3fb76f02ab1fb708e10.png"},849:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/search-step8-c837c22f644c0d1af3f99e53d95c2102.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);