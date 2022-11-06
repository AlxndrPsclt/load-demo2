import{d as K,u as I,l as a,b4 as $,n as j,o as b,c as v,b as e,t as f,e as o,i as N,w as F,bt as E,aa as k,ab as B,F as O,aN as H,ac as V,q as T,p as L,m as R,_ as U,k as W,a as M,v as P,bz as Y,f as G}from"./index.513abb1d.js";import{_ as q}from"./FullscreenModal.vue_vue_type_script_setup_true_lang.4d7fc899.js";import{_ as Q}from"./InputField.vue_vue_type_script_setup_true_lang.5f7db2a0.js";import{v as X,_ as Z}from"./vue-scrollto.4834f4a2.js";const ee={flex:"","flex-col":"","justify-center":"","items-center":"",class:"-translate-y-12rem"},ae={"w-80":"",border:"~ border-t-8 rounded-10 #9922dd"},de={"pt-10":""},se={"text-3xl":"","mb-10":""},ne={"text-2xl":"","mb-5":""},ce={"px-3":"","text-4xl":"",class:"bg-#9922dd",border:"~ border-t-8 rounded-10 #9922dd"},ie={"text-2xl":""},re={"px-4":"","text-4xl":"",class:"bg-#9922dd",border:"~ border-t-8 rounded-10 #9922dd"},te={"w-80":"","pt-8":""},oe={"pt-6":""},le={"text-2xl":"","mb-2":""},be=["placeholder","aria-label"],fe=K({__name:"TransactionRecap",props:{fieldDomain:null,destination:null,amount:null,initialMessage:{default:""}},emits:["transactionMessageChanged","transactionMessageSubmission"],setup(m,{emit:_}){const n=m,{t:d}=I(),u=a(""),c=a(null),i=a(!1);function t(){i.value=!0,_("transactionMessageSubmission")}return $(u,async(l,p)=>{_("transactionMessageChanged",l)}),j(()=>{u.value=n.initialMessage}),(l,p)=>(b(),v("div",ee,[e("div",ae,[e("div",de,[e("p",se,f(o(d)("recap.title")),1),e("p",ne,[N(f(o(d)("recap.prompt"))+" ",1),e("span",ce,f(n.amount),1)]),e("p",ie,[N(f(o(d)("recap.to"))+" ",1),e("span",re,f(n.destination),1)])]),e("div",te,[e("div",oe,[e("p",le,f(o(d)("recap.message-prompt")),1),F(e("textarea",{id:"message",ref_key:"messageField",ref:c,"onUpdate:modelValue":p[0]||(p[0]=y=>u.value=y),placeholder:o(d)("recap.message-placeholder"),"aria-label":o(d)("recap.message-placeholder"),type:"text",border:"~ border-t-8 rounded-10 #dd44ff",autocomplete:"off",p5:"",m1:"","mb-1":"","w-75":"","h-30":"","text-2xl":"",text:"center",bg:"transparent",outline:"none active:none",onFocus:p[1]||(p[1]=y=>l.focus=!0),onBlur:p[2]||(p[2]=y=>l.focus=!1),onFocusout:t},`
          `,40,be),[[E,u.value]])])])])]))}}),ue={flex:"","flex-col":"","justify-center":"","items-center":""},me={w10:"",hidden:""},ve=["src"],pe={class:"bg-#9922dd",border:"rounded-10","px-3":""},he=["width"],_e={w10:"",hidden:""},xe=["src"],ge=["onClick"],ye=K({__name:"SearchField",props:{fieldName:null,fieldDomain:null,fieldSize:null,searchFrom:null,modelValue:null,initialSearchKeywords:null},emits:["searchKeywordsChanged","searchKeywordsValidationChanged","searchKeywordsSubmission","update:modelValue"],setup(m,{emit:_}){const n=m,d=a("");a("");const u=a(!1),c=a(!1),i=a({});a({});const t=k(()=>n.searchFrom.filter(x=>x.username.includes(d.value))),l=k(()=>d.value.length>1?"OK":"NOK");function p(){u.value=!0}const y=k(()=>Object.keys(i.value).length>0);return $(d,async(x,g)=>{Object.keys(i.value).length===0&&(c.value=!0),_("searchKeywordsChanged",x)}),$(i,async(x,g)=>{console.log("Watching selected..."),_("update:modelValue",x)}),j(()=>{console.log("Mounting Search field!"),n.initialSearchKeywords&&(console.log("There was an initial search value"),d.value=n.initialSearchKeywords),i.value=n.modelValue}),(x,g)=>{const h=Q;return b(),v("div",ue,[Object.keys(n.modelValue).length>0?(b(),v("div",{key:0,class:"text-3xl flex flex-row justify-center",onClick:g[0]||(g[0]=s=>{i.value={},c.value=!0,d.value=n.modelValue.username})},[e("div",me,[e("img",{src:"https://avatars.dicebear.com/api/avataaars/"+i.value.username+".svg"},null,8,ve)]),e("div",pe,f(n.modelValue.username),1)])):(b(),B(h,{key:1,"m-1":"","field-name":n.fieldName,"field-domain":n.fieldDomain,"field-size":n.fieldSize,"field-border":!1,"field-type":"text","field-status":o(l),modelValue:d.value,"onUpdate:modelValue":g[1]||(g[1]=s=>d.value=s),onInputSubmission:p},null,8,["field-name","field-domain","field-size","field-status","modelValue"])),c.value&&!o(y)?(b(),v("div",{key:2,"border-0":"",width:n.fieldSize+10},[(b(!0),v(O,null,H(o(t),(s,r)=>(b(),v("div",{key:s.id,flex:"","flex-row":""},[e("div",_e,[e("img",{src:"https://avatars.dicebear.com/api/avataaars/"+s.username+".svg"},null,8,xe)]),e("div",{"hover:text-3xl":"",class:"hover:bg-#551188",border:"rounded-10","px-3":"",onClick:S=>{i.value=s,d.value=s.username,c.value=!1}},f(s.username),9,ge)]))),128))],8,he)):V("",!0)])}}}),D=m=>(L("data-v-14661eef"),m=m(),R(),m),Se={flex:"","flex-col":"","justify-center":"","items-center":""},we={"m-5":"",flex:"","flex-row":"","justify-between":"","w-80":"","items-stretch":"","text-xl":""},Me=D(()=>e("div",{"i-carbon-search":"","text-5xl":"","inline-block":"","animate-pulse":"","animate-duration-5s":""},null,-1)),ke={key:1},$e=D(()=>e("div",{"i-mdi:cellphone-nfc":"","text-5xl":"","inline-block":"","animate-pulse":"","animate-duration-5s":""},null,-1)),Ce={key:0},Ve={class:"bg-#71997F",border:"~ 1 #71997F rounded-10",p6:""},Ke={"text-2xl":""},Ae=D(()=>e("div",{"my-6":"",flex:"","flex-row":"","justify-center":"","items-center":"","animate-pulse":""},[e("div",{absolute:""},[e("div",{"text-4xl":"","mx-1":"","i-carbon:circle-dash":"","inline-block":"","animate-ping":""}),e("div",{invisible:"","text-4xl":"","mx-1":"","i-carbon:wifi-bridge":"","inline-block":""}),e("div",{"text-4xl":"","mx-1":"","i-mdi:cellphone-nfc":"","inline-block":"","animate-ping":""})]),e("div",{"text-5xl":"","mx-1":"","i-carbon:fade":"","inline-block":""}),e("div",{"text-4xl":"","mx-1":"","i-carbon:wifi-bridge":"","inline-block":""}),e("div",{"i-mdi:cellphone-nfc":"","text-6xl":"","inline-block":""})],-1)),Fe={"text-2xl":""},Ie={key:1},De=K({__name:"UserSelectField",props:{fieldDomain:null,modelValue:null},emits:["userSearchKeywordsChanged","userSearchKeywordsValidationChanged","userSearchKeywordsSubmission","update:modelValue"],setup(m,{emit:_}){const n=m,{t:d}=I(),u=a(""),c=a({}),i=a({});a(!1);const t=a(!1),l=a(!0),p=a([{id:"5b76afff-8112-4681-8be7-2e47de8f2a82",username:"Raresh"},{id:"a09ac788-1ab2-444d-9ba0-461a7244dc3b",username:"Ricardo"},{id:"fa5fb7e9-fa7d-48d4-9d6d-dc38dee08d4d",username:"Claudio PRC"},{id:"daee8ce0-39f2-4615-acd3-74fab7878560",username:"Alex"},{id:"1b9d3f5c-0c8e-46dc-8e7b-8e6099f9dfbe",username:"Maria"},{id:"8248c354-54bf-4751-b83b-ba3714acb46c",username:"Anna"},{id:"3495bad8-0d65-449f-8dbb-a7f53e074388",username:"Marco"},{id:"739216f6-e229-4f58-a86e-b00ee49210f2",username:"Antonio"},{id:"8e1fa0e1-32b3-4f50-8fd5-b14e2a2b6ca8",username:"Daniel"},{id:"dadeb564-727e-4757-813d-cb4a73f6ddae",username:"Andrea"},{id:"a65ec159-8b69-409f-9ecf-d4bdafb9e8bc",username:"Laura"},{id:"58c19ec6-563b-460f-a52d-0dc5ff7e9c07",username:"Ali"},{id:"7bdeeeca-dfd0-408e-91ff-1f939ad17cac",username:"Jose"},{id:"84bcfeba-0175-4369-8ddd-6760763e8403",username:"Sandra"},{id:"91b24c3f-5b52-4330-898f-cec23881e1b3",username:"Sara"},{id:"dbc4cea5-26af-471a-bc4a-e95d7abc8a01",username:"Carlos"},{id:"fa72b97f-8fb4-441f-a8e1-0063e7f4b11b",username:"Ana"},{id:"fb009505-9478-496f-9cc1-f403494e6212",username:"Michael"},{id:"85f849a9-0b47-4f66-aee4-7924b28c0a75",username:"Marie"},{id:"574dcacb-09f4-4b56-9212-828000e3702c",username:"Francesco"},{id:"77e9d7d1-f5c1-408d-8ed6-a85d5c5983f4",username:"Mehmet"},{id:"0688956c-8dd7-4c59-a351-407337d1aa1c",username:"Marta"},{id:"b9861763-e8fc-47a2-b362-8e0362287f7b",username:"Sarah"},{id:"45cf899d-2348-4757-9379-eec764fe3d3d",username:"John"},{id:"ae7ebf7a-1b20-4d70-aae9-6d7623616d33",username:"Luca"},{id:"f93eed43-abdf-4f23-9ba3-7ef3fafa75b4",username:"Martin"},{id:"86f667f5-3b91-4683-b4aa-1dc4c7783364",username:"Murat"},{id:"0edbe1d6-a84a-4f9d-bc91-24b96a780e03",username:"Mario"},{id:"17863c31-23ac-4c0d-92b2-23ec2d0e0b9c",username:"Juan"},{id:"23cf344b-0e26-4824-adcf-74f90ca7b0d9",username:"Thomas"},{id:"5db36b5f-dd1d-4a12-bfc7-10d9d538a1b2",username:"Giuseppe"},{id:"36b82062-00f0-4062-8cff-4a0abbbf5006",username:"Chris"},{id:"cad63fce-403b-48eb-97cf-46a213c0ddcd",username:"Peter"},{id:"6a9942ed-4c7f-456a-b82d-839aba3f3601",username:"Mustafa"},{id:"0157ccfe-169a-48ee-864e-773eb206e59a",username:"Jessica"},{id:"bef740ed-94d6-48b5-84fa-549664f42cef",username:"Mohamed"},{id:"72500f3c-4208-42cd-96fa-aca7caf6b25e",username:"Monika"},{id:"bf39135c-c07f-43ba-861a-d488cab3cebf",username:"Elena"},{id:"9cdf065c-d56d-45d0-823d-bf309b3483d5",username:"Robert"},{id:"aa199c8a-9528-4c24-8f13-f4b9e7ea5e6e",username:"Manuel"},{id:"d68f82fc-1f94-43b8-9d08-7e7ecdadd9b4",username:"Christian"},{id:"95157fe4-3077-4aa5-9980-4c35bafb01c1",username:"Roberto"},{id:"1b2f71ed-fad6-4b11-9175-b44f059aa7b2",username:"Kevin"},{id:"cbe07048-9f7e-44ca-ac2e-36151320ed58",username:"Pedro"},{id:"c3c8a755-9128-4fbc-b7e5-bf992efa2b6a",username:"Patrick"},{id:"30b215c7-428b-4a2b-aad4-c9b4cda7dcc8",username:"Ahmet"},{id:"10cbde96-b697-42e9-871f-dd3e96fd6352",username:"Luis"},{id:"49b155fc-8b9b-4d3e-8f64-50a05b7b19f2",username:"Cristina"},{id:"7354ed89-e3b8-475e-a345-813c4011db32",username:"Jan"},{id:"67957fc2-f4d4-4cfe-b121-80dee83ae755",username:"Paul"},{id:"3f970a01-d6a3-40a6-9e55-5e26f33cb0aa",username:"Patricia"},{id:"468e9c62-f682-4021-9c85-b35633590233",username:"Eva"},{id:"cbc9c344-a337-4b23-a8ce-64a3e87fbe74",username:"Ahmed"},{id:"75130898-9976-47e6-b725-ed8c00c661bd",username:"Mary"},{id:"92f320eb-15c8-4dbb-bc56-6e143716206d",username:"Eric"},{id:"80385b16-efa2-4a31-8ac1-0e3c4ef911a1",username:"Alessandro"},{id:"1bbdcda8-68ba-4398-80dd-ed35ba189964",username:"Miguel"},{id:"1f53a844-c73a-4d16-8cb0-864cc09af66c",username:"Sergio"},{id:"198a2bac-6519-44e0-924a-6caa35d7b6a4",username:"Tony"},{id:"aa7252f0-0857-47e3-9fc3-b885374061a0",username:"Alexandra"},{id:"8dcf259b-018e-4c6b-9095-6cae287402a6",username:"Ivan"},{id:"f5a046d2-4070-435f-9288-2f60d1f5c581",username:"Vanessa"},{id:"e4e75913-99f5-402f-b9cc-6ca1717c6ac9",username:"Julie"},{id:"fa8ec25e-5324-48d9-af01-75aa2d91995c",username:"Alberto"},{id:"72e23f87-ab22-4e46-b7e6-9eedf5f52e3b",username:"Nicolas"},{id:"cf067b18-b6b5-4163-97f1-636379df5ab9",username:"Sonia"},{id:"a1ebd154-7b4d-404c-b123-20a3f56e2154",username:"Silvia"},{id:"7a13f0d0-762b-41b3-b28f-a2d14b3f9bc5",username:"Claudia"},{id:"8ad14e1e-a979-47fe-be73-bfe0b4891370",username:"Julien"},{id:"28880073-05b5-4e8f-9215-7df0bdb9c174",username:"Max"},{id:"8fbe4d27-c4c2-439f-b9a6-e359e08ea2b0",username:"Adam"},{id:"5ed33311-bca2-4325-a2d8-df215a246801",username:"Mike"},{id:"d972fe53-9f6e-478e-9823-28f08feb4d00",username:"Hakan"},{id:"592c02e5-6600-474b-95a3-cc9a7ad8973f",username:"Sabrina"},{id:"6008be1a-83ea-4581-ad5e-222fe3302dae",username:"Marina"},{id:"dc7f1cdf-04d0-4f04-8d58-943e68f8e302",username:"Marc"},{id:"190ff1f2-39d5-4e47-886d-7b96c5fc0dc7",username:"Daniela"},{id:"bfaaa494-ecfd-4537-8a94-6c59825a5a4e",username:"Julia"},{id:"4b756756-d878-4aa0-be34-7213c3fdbbce",username:"Nicole"},{id:"6d263551-f3f0-41e8-8d3f-77d8caf2e97c",username:"Fabio"},{id:"4c3f880f-a4b1-4eca-8d7c-3d37cb94853a",username:"Francesca"},{id:"69dec4de-c897-49e7-92c9-2d4a4153e7d6",username:"Lisa"},{id:"8b7958db-40bc-46bc-8541-331acc008c7b",username:"Angela"},{id:"6d61fb32-bc42-4856-a649-e13e29d569f8",username:"Jana"},{id:"7536c131-f044-4b12-bb91-a45a90b060f1",username:"Natalia"},{id:"54c7f0c0-7dd8-4abe-973b-19498bb365fe",username:"Javier"},{id:"bfd09a18-821b-47f8-8201-8bb260f51b72",username:"Jorge"},{id:"e4c944e5-3261-48b9-b3c5-a6895f0fa396",username:"Angel"},{id:"b55595ec-d2b4-4cb2-9758-59fb24be205a",username:"Sam"},{id:"e51099f9-ca90-40ab-9903-97d6bdf62f40",username:"Bruno"},{id:"64c3d692-c276-43dd-84e0-cd6ff17757bb",username:"Giovanni"},{id:"7a01b9ca-1070-4b6f-8fca-32b71c444499",username:"Martina"},{id:"545c2408-b3d3-4204-aaeb-0ebc60c1f07e",username:"Agnieszka"},{id:"163c6882-1432-451a-911c-c5bcd775625a",username:"Paolo"},{id:"d4b8325d-f172-4583-8503-fab906dc14ea",username:"Marcin"},{id:"b7704165-665e-44f9-9299-d899b46f23e9",username:"Carmen"},{id:"a0b9b7c2-fc3c-4733-9432-3552e37c4497",username:"Nathalie"},{id:"2f86378b-2184-4379-abf6-0303b8cfb9f4",username:"Linda"},{id:"c61b29be-01b5-43b0-9d18-8ec1e5a4043a",username:"Mark"},{id:"14d46836-f45e-4e3b-9d8f-7e8fa93098e4",username:"James"},{id:"7cb0b523-eb80-4ea4-9540-1621e8a152a2",username:"Barbara"},{id:"4b7c9de7-95d0-47d4-b89a-f0d4f5107293",username:"Tom"},{id:"c436ea5f-c072-40d4-8c0f-cae947b9cda1",username:"Adrian"},{id:"6a4cd79e-f15c-4657-bff3-ada9dcc7092e",username:"Isabelle"},{id:"56e84177-fb5f-4723-b657-26001ee9f65c",username:"Jennifer"},{id:"06923fab-b6de-443b-ac24-71cebbc06a32",username:"Stefano"},{id:"9809b5ad-ef18-4ac4-a528-c442ecef470d",username:"Michel"},{id:"7be2230f-3271-4074-807b-9e9a160dd61f",username:"Piotr"},{id:"f97541d7-a8ef-4834-a091-ebe85f837298",username:"Christine"},{id:"6a45bf70-d61b-4598-a864-d4da59d7d59f",username:"Sophie"},{id:"8406b2e9-c994-48d6-b70a-f4125772ea8a",username:"Anthony"},{id:"e32a3e29-cd7f-40f4-8192-08714626a38f",username:"Christophe"},{id:"522b22c5-ef0d-409c-9dae-11ec417b437d",username:"Hasan"},{id:"beb679d9-7800-4f5d-9140-b639d89949c5",username:"Karim"},{id:"30cad404-14df-4055-ab7c-5f062ac955fa",username:"Victor"},{id:"3a1bc666-76b7-4bfb-a1b3-979a2bfa8c74",username:"Lucie"},{id:"5a3c6f13-c15f-4c4f-a553-04e3b3cd1158",username:"Diana"},{id:"22a12893-5155-40d2-bc92-b9decd2b48ea",username:"Pierre"},{id:"f5c54d7a-39a0-4bb2-95bb-4069b541a0bd",username:"Diego"},{id:"41427efd-3785-4c44-90f2-7bcb4fbae2b7",username:"Michele"},{id:"bbc0cd7f-60f8-4aa8-8c61-f8a9ef4a7542",username:"Monica"},{id:"dad9f99e-6fe1-4d5e-b516-2ba2f0e8f3ce",username:"Kasia"},{id:"981c5004-6181-4b1c-8c67-a141d5136de4",username:"Laurent"},{id:"fb614f5f-473f-474b-8563-d6a97e9b8364",username:"Fernando"},{id:"90c580c5-423a-4364-9041-bcb7dc24dd47",username:"Karolina"},{id:"354e300f-00a2-482c-84f5-0f4f284ea893",username:"Sebastian"},{id:"3c66c9b0-9248-49de-bcfb-a31905917a49",username:"Simone"},{id:"63d35e4c-da97-4268-861f-540be7432b67",username:"Richard"},{id:"8778ddbd-155d-4399-bb96-ecd0ce768c07",username:"Melanie"},{id:"950c04fb-6059-4ac6-8c1f-95c8edf48429",username:"Ibrahim"},{id:"d8f8444c-694f-4ff5-abbe-0b146f99bc87",username:"Emre"},{id:"b6c8b9ea-56b4-49ea-8018-a7a461f84054",username:"Pascal"},{id:"ce61d9b1-6c70-4f9c-9dcc-29b2b4e36aa3",username:"Nina"},{id:"8f9739f0-42e7-453c-83d5-d5bcd18a8348",username:"Elisa"},{id:"a38442bc-496a-4587-a156-a710f9012f19",username:"Petra"},{id:"e14fef20-90bd-446d-9ee5-336ee0396b62",username:"Stefan"},{id:"02cd0957-d746-464b-94da-d96391f780fe",username:"Philippe"},{id:"9140835a-934c-45a4-aba2-d240b5dcba24",username:"Olga"},{id:"6fad7fef-1b84-4f31-9c1b-2bd3049fcf00",username:"Petr"},{id:"0ddc0924-01eb-47b8-a191-53f562241aab",username:"Jonathan"},{id:"07aca20c-293f-47fc-ad50-8adb371980db",username:"Jean"},{id:"90d35466-02d6-4a39-b712-5d2013add102",username:"Davide"},{id:"cdbd707f-0fab-4935-828e-671ea1587803",username:"Nico"},{id:"06dde164-bd6c-4cb9-ada8-7637695d6079",username:"Dani"},{id:"cebc67cc-24e6-4475-a0a2-a15643ccacfb",username:"Lucia"},{id:"d92e435c-3f0b-4773-861d-c187846328ed",username:"Pablo"},{id:"1fc76dd1-2f3d-42d3-ad3f-7672b8f8a604",username:"Cindy"},{id:"f21b4213-09c3-4f45-8dd3-f44c6d44fc3f",username:"Vincent"},{id:"ae22901b-4b39-478e-9596-86913749617b",username:"Frank"},{id:"a7dec0a3-e700-4c3c-91bd-e96b6250abf9",username:"Daniele"},{id:"4eca664c-708f-4853-a2d2-6e1c210aa258",username:"Jenny"},{id:"17ce65d2-214f-407c-a1bb-cfd41e7f3a2d",username:"Cristian"},{id:"c89c728a-12d7-44fa-83b1-27496f1f35aa",username:"Fred"},{id:"5b035b93-9d60-485c-9392-278acca6d9d6",username:"Magdalena"},{id:"6fc9db50-0982-4892-8d47-97b76a354dcb",username:"Emilie"},{id:"d8f86e59-fc63-4140-a9d3-4ce1978229ab",username:"Valentina"},{id:"f5f82fd0-4b59-4884-b018-6630cf854977",username:"Katarzyna"},{id:"575ca81c-2a59-4b82-a537-5446a81019ad",username:"Olivier"},{id:"e2d2f37f-e327-4ceb-afef-7b10e02c6a29",username:"Marek"},{id:"42de28b8-d90b-4db7-ae1b-ffd1c6ff53b5",username:"Manu"},{id:"853e382f-70cd-47d7-9e66-a18dfcb20eb3",username:"Stephanie"},{id:"55c93b3b-9f88-4e4d-aef2-a533d79bba03",username:"Alain"},{id:"ba514d83-4062-4f66-bbb8-de19b9c7ccb5",username:"Joanna"},{id:"07fe96f8-b9fb-4eff-ba9d-3be20134099a",username:"Francisco"},{id:"c7e332f0-2045-4c82-a46d-6e1dfe657995",username:"Ricardo"},{id:"64d43413-a0e1-4385-8d1c-4c927f6a1c2f",username:"Ben"},{id:"24e7d7d6-51ef-4d7e-8caa-a4dfd142f683",username:"Melissa"},{id:"012a466b-685f-471d-b1d8-d0e9db6472cb",username:"Alice"},{id:"d26b45d0-6399-4d97-9263-cb26a9164e67",username:"Javi"},{id:"600e836c-bd39-4660-971e-adb3f8d839ff",username:"Paula"},{id:"ecfe7dfc-6e23-47d3-a21d-95a46b2e1157",username:"Veronica"},{id:"209d8088-d8d6-4700-ac88-8563147691fa",username:"Sandrine"},{id:"52ae7c92-74b2-41b9-8140-a91425b7629c",username:"Fatih"},{id:"d7325f7e-61c5-49c2-bfb2-31cd94978d40",username:"Jack"},{id:"c8aa35af-7b93-4bae-a4c5-fa1afa79072c",username:"Angelo"},{id:"fb1bc9a9-37a9-4151-a69b-cb1ce9cd9fee",username:"Kamil"},{id:"e603f8a2-136e-4a29-b34d-68a649558436",username:"Alexander"},{id:"e21d053b-e945-4c4f-98a0-eb1bfb905ed7",username:"Simon"},{id:"e650ae65-3ad0-4aba-b147-2aa6441ddeaf",username:"Steve"},{id:"cac08a4c-afa1-4cfe-9bf3-c7098914081a",username:"Carla"},{id:"d5feb497-681e-4962-a7b1-60156d654b16",username:"Jesus"},{id:"e14e4577-8b9f-4f9b-8577-627db51f7ab9",username:"Massimo"},{id:"52c2d608-ec95-4918-be3e-0aa26db78410",username:"Michelle"},{id:"ca005315-3d29-41a3-9ca1-1411c9959603",username:"Matteo"},{id:"d78c0a11-7077-439a-a9a6-39872c3271cd",username:"Paulina"},{id:"f98dce82-c55e-421d-931f-5dfc59d99def",username:"Serkan"},{id:"a6777423-cd7c-4f06-a566-1d4162875f7d",username:"Anita"},{id:"1b0e4a02-e848-4ced-9113-4a07c0b09291",username:"Andy"},{id:"1b137ba8-3e2f-4583-a19d-152b9b0a0997",username:"Oscar"},{id:"8cf7cfdf-d1e7-492f-9534-45b1c6a6fb08",username:"Nadia"},{id:"cc7d2edb-3a65-4d67-a372-b20139e5d374",username:"Sylvie"},{id:"c9928d44-a643-4e3d-8bdb-4ef9eb813cf6",username:"Pavel"},{id:"dd765cd2-320c-4d47-8d50-79e22093e871",username:"Caroline"},{id:"b7bfc55d-0c6c-4a14-a2d1-2a3776a9d161",username:"Rosa"},{id:"4b2769c9-b78c-4a97-a352-a66c558d5491",username:"Luigi"},{id:"7772448a-cb90-4104-ab85-e4884c138904",username:"Ania"},{id:"97ae5ac3-5b3f-4e1b-bf29-de5dcd26217b",username:"Andreas"},{id:"bb4768f8-b0c4-4159-96ec-d65241973a3a",username:"Imagine Family"},{id:"b1d0ba7f-758e-49c3-9451-b1443707b2aa",username:"Marwan Saab"}]);function y(r){console.log("Changing userSearchKeywords in UserSearchKeywordsField"),u.value=r,_("userSearchKeywordsChanged",r)}function x(){searchKeywordsHaveBeenSubmitted.value=!0}function g(){t.value=!0,l.value=!1,i.value=Object.keys(c.value).length?c.value:i.value,c.value={}}const h=k(()=>{var r="~ border-l-1 border-b-2 rounded-10 focus:blue";return l.value?r+=" w-full":t.value?r+=" border-transparent":r+=" w-60 border-#9922dd",r}),s=k(()=>{var r="~ border-r-1 border-b-2 rounded-10 focus:blue";return l.value?r+=" w-full":t.value?r+="~ border-transparent":r+=" border-transparent",r});return $(c,async(r,S)=>{console.log("Watching selected users..."),_("update:modelValue",r)}),$(t,async(r,S)=>{r||(c.value=i.value,i.value={})}),(r,S)=>{const A=ye;return b(),v("div",Se,[e("div",we,[e("div",{class:T(o(h)),p1:"",onClick:S[1]||(S[1]=C=>{t.value=!1,l.value=!1})},[Me,!t.value&&!l.value?(b(),B(A,{key:0,modelValue:c.value,"onUpdate:modelValue":S[0]||(S[0]=C=>c.value=C),"initial-search-keywords":u.value,"field-name":"user-search","field-domain":n.fieldDomain,"field-size":32,"search-from":p.value,onSearchKeywordsChanged:y,onInputSubmission:x},null,8,["modelValue","initial-search-keywords","field-domain","search-from"])):(b(),v("p",ke,f(o(d)("transfers.search")),1))],2),e("div",{p1:"",class:T(o(s)),onClick:g},[$e,t.value&&!l.value?(b(),v("div",Ce,[e("div",Ve,[e("p",Ke,f(o(d)("transfers.scan-prompt")),1),Ae,e("p",Fe,f(o(d)("transfers.nfc-must-be-activated")),1)])])):(b(),v("p",Ie,f(o(d)("transfers.scan")),1))],2)])])}}});const Je=U(De,[["__scopeId","data-v-14661eef"]]),J=m=>(L("data-v-0b05ad65"),m=m(),R(),m),Ne={ref:"transfersPage","h-screen":"","px-4":"","py-10":"",flex:"","flex-col":"","justify-between":"","items-center":""},Te={flex:"","flex-col":"","mt-4":"","mb-2":"","justify-center":""},Pe={"text-4xl":""},je={key:0,class:"-translate-y-19rem flex flex-col justify-center"},Be={"text-4xl":""},Oe={"p-5":"","text-4xl":"",class:"bg-#551188 flex flex-row items-center",border:"rounded-20"},Le=J(()=>e("div",{class:"i-mdi:gesture-swipe-up","text-5xl":""},null,-1)),Re={key:2,"h-100vh":"",class:"recap"},Ue={flex:"","flex-col":"","items-center":"",class:"-translate-y-6rem"},ze=J(()=>e("div",{class:"i-mdi:gesture-swipe-up","text-5xl":""},null,-1)),Ee=J(()=>e("div",{invisible:"","h-40vh":""}," HIDDEN ",-1)),He=K({__name:"transfers",setup(m){const _=G();W();const{t:n}=I(),d=a(null),u=a(0),c=a(!1);a("INITIAL");const i=a("");a("");const t=a({});a(!1),a(5);const l=a(!1);function p(h){u.value=h,c.value=!0}function y(){console.log("Scrollling!");let h="#bottomd",s=1e3;X.exports.scrollTo(h,s)}function x(){return console.log(window.scrollY),window.scrollY}function g(){console.log("Transaction over; hide modal"),l.value=!1,_.push("/")}return(h,s)=>{const r=Z,S=Je,A=fe,C=q,z=Y;return b(),v(O,null,[e("div",Ne,[e("div",Te,[e("p",Pe,f(o(n)("transfers.title")),1),M(r,{onAmountSubmitted:s[0]||(s[0]=w=>{p(w)})})]),c.value?(b(),v("div",je,[e("div",null,[e("p",Be,f(o(n)("transfers.to-whom")),1)]),e("div",null,[M(S,{"field-domain":"transfers",modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=w=>t.value=w)},null,8,["modelValue"])])])):V("",!0),c.value&&Object.keys(t.value).length>0&&u.value>0?(b(),v("div",{key:1,class:"-translate-y-19rem flex flex-col justify-center",onClick:y},[e("button",Oe,[Le,e("div",null,[e("p",null,f(h.$t("transfers.send")),1)])])])):V("",!0),c.value&&Object.keys(t.value).length>0&&u.value?(b(),v("div",Re,[M(A,{"w-90":"",destination:t.value.username,amount:u.value,"field-domain":"transfers",initialMessage:i.value,onTransactionMessageChanged:s[2]||(s[2]=w=>{i.value=w}),onTransactionMessageSubmission:s[3]||(s[3]=w=>i.value.length>3&&d.value.focus())},null,8,["destination","amount","initialMessage"])])):V("",!0),e("div",null,[F(e("div",Ue,[e("button",{ref_key:"finalButton",ref:d,"p-5":"","text-4xl":"",class:"bg-#551188 flex flex-row items-center",border:"rounded-20",onClick:s[4]||(s[4]=w=>l.value=!0)},[ze,e("div",null,[e("p",null,f(h.$t("transfers.validate")),1)])],512)],512),[[P,c.value&&u.value>0&&i.value&&i.value.length>3&&Object.keys(t.value).length>0]])]),Ee,e("div",{invisible:"",id:"bottomd",onClick:x}," BOTTOM ")],512),F(M(C,{onDismissModal:g,modalMessage:h.$t("modal.succes"),modalIcon:"i-carbon-checkmark",modalColor:"bg-green"},null,8,["modalMessage"]),[[P,l.value]]),M(z,{redirection:"/",caption:o(n)("transfers.cancel"),"icon-name":"i-carbon:progress-bar-round",side:"left"},null,8,["caption"])],64)}}});const Qe=U(He,[["__scopeId","data-v-0b05ad65"]]);export{Qe as default};
