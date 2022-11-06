import{_ as X}from"./FullscreenModal.vue_vue_type_script_setup_true_lang.4d7fc899.js";import{d as D,l as n,aa as g,b4 as I,o as R,c as h,a as m,e as p,k as ee,u as oe,b as s,i as x,t as N,w as O,v as F,F as ne,bz as le,p as ae,m as se,f as ie,_ as te}from"./index.513abb1d.js";import{_ as T}from"./InputField.vue_vue_type_script_setup_true_lang.5f7db2a0.js";import{u as ue,_ as de,a as re,b as me}from"./useRelays.298ef0a9.js";import{b as A}from"./route-block.011d1056.js";const fe={flex:"","justify-center":"","items-center":""},ce=D({__name:"RealNameField",props:{fieldDomain:null,modelValue:null},emits:["realNameValidationChanged","realNameSubmission","update:modelValue"],setup(f,{emit:u}){const _=f,a=n(""),d=g(()=>(console.log(a.length),a.value.length>2&&a.value.split(" ").filter(i=>i).length>1?(console.log("Valid realName!"),"OK"):(console.log("Invalid realName! Too short."),"NOK")));return I(d,async(i,l)=>{console.log("Watching..."),console.log(l),console.log(i),u("realNameValidationChanged",i)}),I(a,async(i,l)=>{console.log("Watching realNames..."),u("update:modelValue",i)}),(i,l)=>{const t=T;return R(),h("div",fe,[m(t,{"m-1":"","field-name":"realName","field-domain":_.fieldDomain,"field-type":"text","field-icon":"i-carbon-user","field-status":p(d),modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),onFocusout:l[1]||(l[1]=c=>u("realNameSubmission")),onInputSubmission:l[2]||(l[2]=c=>u("realNameSubmission"))},null,8,["field-domain","field-status","modelValue"])])}}}),ve={flex:"","justify-center":"","items-center":""},pe=D({__name:"IbanField",props:{fieldDomain:null,modelValue:null},emits:["ibanValidationChanged","ibanSubmission","update:modelValue"],setup(f,{emit:u}){const _=f,a=n(""),d=/^[A-Z]{2}(?:[ ]?[0-9]){18,20}$/,i=g(()=>(console.log("validate iban, put it green if ok, red if incorrect"),a.value.match(d)?(console.log("Valid iban address!"),"OK"):(console.log("Invalid iban address!"),"NOK")));return I(i,async(l,t)=>{u("ibanValidationChanged",l)}),I(a,async(l,t)=>{console.log("Watching ibans..."),u("update:modelValue",l)}),(l,t)=>{const c=T;return R(),h("div",ve,[m(c,{"m-1":"","field-name":"iban","field-domain":_.fieldDomain,"field-type":"text","field-size":80,"field-icon":"i-mdi-bank-outline","field-status":p(i),modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=b=>a.value=b),onFocusout:t[1]||(t[1]=b=>u("ibanSubmission")),onInputSubmission:t[2]||(t[2]=b=>u("ibanSubmission"))},null,8,["field-domain","field-status","modelValue"])])}}}),S=f=>(ae("data-v-2e6969e0"),f=f(),se(),f),be={flex:"","flex-col":"","h-full":"","justify-center":"","items-center":""},ge={flex:"","flex-col":"","justify-center":"","items-center":""},_e=S(()=>s("div",{"i-carbon-caret-sort-down":""},null,-1)),Ve={flex:"","flex-col":"","justify-center":"","items-center":""},Ne=S(()=>s("div",{w40:""},[s("img",{src:"https://avatars.dicebear.com/api/avataaars/alexvdvfsvdvdscsdsvsdcs.svg"})],-1)),Ie=["disabled"],xe={"flex-col":"","justify-center":""},Se=S(()=>s("div",{"i-carbon-caret-sort-down":""},null,-1)),ye={"flex-col":"","justify-center":""},we=["disabled"],$e=S(()=>s("p",{"text-4xl":""},"32",-1)),B=D({__name:"profile",setup(f){const u=ue();window.wgun=u;const _=ie();ee();const a=n(""),d=n("INITIAL"),i=n(""),l=n("INITIAL"),t=n(""),c=n("INITIAL"),b=n(),j=n("INITIAL"),E=n(""),V=n("INITIAL"),y=n(!0),w=n(!0),$=n(!1),v=n(!1);n(null);const C=n(null);function L(){v.value&&d.value=="OK"&&V.value=="OK"&&C.value.focus()}function M(){v.value&&d.value=="OK"&&V.value=="OK"&&C.value.focus()}g(()=>!v.value&&d.value=="OK"&&j.value=="OK"&&V.value=="OK");const P=g(()=>v.value&&d.value=="OK"&&V.value=="OK"),W=g(()=>l.value=="OK"&&c.value=="OK");I(a,async(r,e)=>{d.value!="OK"?(console.log("Email not validated yet"),v.value=!1):(console.log("Does user already exist?"),console.log(`Full sea name! ${U.value}`),u.get(U.value).once(K=>{console.log("Does existingUser exist?"),K?(console.log("Yes, this user exists"),v.value=!0):(console.log("No, this user doesn't exist"),v.value=!1)}))});const U=g(()=>"~@"+a.value);function z(){console.log("Executing refund"),$.value=!0}function G(){console.log("Dismissing Confirmation modal"),$.value=!1,_.push("/")}const{t:k}=oe();return(r,e)=>{const K=de,Y=re,Z=me,q=pe,H=ce,J=le,Q=X;return R(),h(ne,null,[s("div",be,[s("div",ge,[s("div",{"text-3xl":"","m-2":"","animate-pulse":"","animate-duration-5s":"",onClick:e[0]||(e[0]=o=>w.value=!w.value),flex:"","flex-row":"","justify-center":"",anim:""},[x(N(r.$t("profile.title"))+" ",1),_e]),O(s("div",Ve,[Ne,m(K,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=o=>b.value=o),"field-domain":"signup",onNameValidationChanged:e[2]||(e[2]=o=>{j.value=o}),onNameSubmission:r.nameSubmitted},null,8,["modelValue","onNameSubmission"]),m(Y,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),"field-domain":"signup",onEmailValidationChanged:e[4]||(e[4]=o=>{d.value=o}),onEmailSubmission:L},null,8,["modelValue"]),m(Z,{modelValue:E.value,"onUpdate:modelValue":e[5]||(e[5]=o=>E.value=o),"field-domain":"signup",onPasswordValidationChanged:e[6]||(e[6]=o=>{V.value=o}),onPasswordSubmission:M},null,8,["modelValue"]),s("div",null,[s("button",{ref_key:"signinButton",ref:C,btn:"","m-3":"","p-2":"","p-x-4":"","text-lg":"",border:"rounded-20",disabled:!p(P),onClick:e[7]||(e[7]=(...o)=>r.signin&&r.signin(...o))},N(p(k)("profile.save")),9,Ie)])],512),[[F,w.value]])]),s("div",xe,[s("div",{"text-3xl":"","m-2":"","animate-pulse":"","animate-duration-5s":"",onClick:e[8]||(e[8]=o=>y.value=!y.value),flex:"","flex-row":"","justify-center":"",anim:""},[x(N(r.$t("profile.refund"))+" ",1),Se]),O(s("div",ye,[m(q,{modelValue:i.value,"onUpdate:modelValue":e[9]||(e[9]=o=>i.value=o),"field-domain":"profile",onIbanValidationChanged:e[10]||(e[10]=o=>{l.value=o}),onIbanSubmission:r.ibanSubmitted},null,8,["modelValue","onIbanSubmission"]),m(H,{modelValue:t.value,"onUpdate:modelValue":e[11]||(e[11]=o=>t.value=o),"field-domain":"profile",onRealNameValidationChanged:e[12]||(e[12]=o=>{c.value=o}),onRealNameSubmission:r.realNameSubmitted},null,8,["modelValue","onRealNameSubmission"])],512),[[F,y.value]]),s("div",null,[s("button",{ref:"refundButton",btn:"","m-6":"","p-4":"","text-lg":"",class:"border-rounded-10 bg-#6622aa",disabled:!p(W),onClick:z},[x(N(p(k)("profile.refund-first-button"))+" ",1),$e,x(" "+N(r.$t("profile.refund-token-name")),1)],8,we)])])]),m(J,{redirection:"/",caption:p(k)("profile.back"),"icon-name":"i-carbon:progress-bar-round",side:"right"},null,8,["caption"]),O(m(Q,{onDismissModal:G,modalMessage:r.$t("profile.modal-message"),modalIcon:"i-carbon-checkmark",modalColor:"bg-green"},null,8,["modalMessage"]),[[F,$.value]])],64)}}});typeof A=="function"&&A(B);const De=te(B,[["__scopeId","data-v-2e6969e0"]]);export{De as default};
