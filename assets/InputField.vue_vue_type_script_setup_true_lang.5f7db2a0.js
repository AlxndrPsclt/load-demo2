import{d as N,u as g,l as o,aa as x,n as B,o as c,c as b,q as S,ac as $,b as v,e as d,bu as C,t as K}from"./index.513abb1d.js";const I=["border"],V=["id","value","placeholder","aria-label","type","onKeydown"],h=["for"],w=N({__name:"InputField",props:{fieldName:null,fieldDomain:null,fieldType:null,fieldIcon:null,fieldStatus:null,fieldSize:{default:80},fieldBorder:{type:Boolean,default:!0},modelValue:null},emits:["inputSubmission","update:modelValue"],setup(e,{emit:s}){const n=e,{t:a}=g();o("");const u=o(null);o(!1);const f=o(!1),r=o(!0);function p(l){s("update:modelValue",l)}const y=x(()=>{var l="~ border-t-8 rounded-10 gray focus:blue";return n.fieldBorder?r.value?f.value?l={OK:"~ border-t-8 rounded-10  green-700",NOK:"~ border-t-8 rounded-10  pink"}[n.fieldStatus]:l="~ border-t-8 rounded-10  blue":l={OK:"~ border-t-8 rounded-10  green",NOK:"~ border-t-8 rounded-10  red"}[n.fieldStatus]:l="border-0",l});function m(){f.value=!0,s("inputSubmission")}return B(()=>{u.value.focus(),console.log(u.value)}),(l,t)=>(c(),b("div",{flex:"","flex-row":"","justify-center":"","items-center":"",border:d(y)},[n.fieldIcon?(c(),b("div",{key:0,class:S(n.fieldIcon),"w-6":"","ml-2":"","mr-2":"","text-4xl":""},null,2)):$("",!0),v("input",{id:e.fieldName,ref_key:"inputField",ref:u,value:n.modelValue,placeholder:d(a)(`${e.fieldDomain}.${e.fieldName}`),"aria-label":d(a)(`${e.fieldDomain}.${e.fieldName}`),type:n.fieldType,autocomplete:"off",p:"x4 y2",m:"t1 b1",border:"hidden",text:"center",bg:"transparent",outline:"none active:none",onInput:t[0]||(t[0]=i=>p(i.target.value)),onKeydown:C(m,["enter"]),onFocus:t[1]||(t[1]=i=>r.value=!0),onBlur:t[2]||(t[2]=i=>r.value=!1),onFocusout:m},null,40,V),v("label",{class:"hidden",for:e.fieldName},K(d(a)(`${e.fieldDomain}.${e.fieldName}`)),9,h)],8,I))}});export{w as _};
