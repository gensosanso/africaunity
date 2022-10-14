import{r as w,b as I,V as m,d as J,o as a,f as i,g as e,t as l,h as c,c as L,w as O,i as H,m as f,l as K,k as u,K as V,J as p,F as b,x as _,I as R}from"./app.4c9b42c1.js";import{E as G}from"./Error.ff1a47a1.js";import{u as Q}from"./postServices.b6b9d760.js";import{u as W}from"./continentServices.b8a7ec85.js";import{u as X}from"./zoneServices.7172ed0d.js";import{u as Y}from"./countryServices.5cf6e83b.js";import{u as ee}from"./ministryServices.ee8b8400.js";import"./_plugin-vue_export-helper.cdc0426e.js";const te={class:"relative h-auto w-full xl:mt-0 xl:p-4"},oe={class:"z-0 w-full p-4"},re={class:"flex w-full justify-between bg-white px-8 py-5 shadow-lg"},se={class:"text-4xl font-bold capitalize text-primary-blue"},ne={class:"mx-auto w-full bg-white p-6 shadow-md"},ae={class:"text-md font-light text-gray-700"},ie={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},le={class:"col-span-2"},de=e("label",{class:"dark:text-gray-200 text-gray-700"},"Title",-1),ue={class:"col-span-2"},ce=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"Language",-1),pe=e("option",{value:"fr"},"French",-1),ye=e("option",{value:"en"},"English",-1),ge=e("option",{value:"es"},"Espanol",-1),me=e("option",{value:"pt"},"Portugues",-1),fe=[pe,ye,ge,me],be=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),_e=["value"],xe=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Zone",-1),he=["value"],ve={key:1,value:"null"},we=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),ke=["value"],Ce={key:1,value:"null"},ze=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Ministry",-1),Ve=["value"],qe={key:0,class:"col-span-2"},Se=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Image",-1),Me={class:"col-span-2"},Fe=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Content",-1),Ue={class:"mt-6 flex justify-end"},Be={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Ee={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},Pe=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ae=[Pe],Le={__name:"PostCreate",props:{type:{required:!0,type:String}},async setup(y){let n,d;const x=y,h=R(),k=w(null),q=["article","propau"],S=JSON.parse(localStorage.user),{continents:M,getContinents:F}=W(),{zones:U,getZones:B}=X(),{countries:E,getCountries:P}=Y(),{ministries:A,getMinistries:D}=ee(),v=w([]),g=w([]);I(async()=>{q.includes(x.type)||h.push({name:"admin.dash"})},([n,d]=m(()=>F()),n=await n,d(),n),([n,d]=m(()=>B()),n=await n,d(),n),([n,d]=m(()=>P()),n=await n,d(),n),([n,d]=m(()=>D()),n=await n,d(),n));const t=J({title:"",type:x.type,user_id:S.id,language:"fr",content:"",image:"",continent_id:1,zone_id:1,country_id:1,ministry_id:1}),N=()=>{v.value=U.value.filter(r=>r.continent_id==t.continent_id),t.country_id="",t.zone_id="",g.value=[]},Z=()=>{g.value=E.value.filter(r=>r.zone_id==t.zone_id),t.country_id=""},{createPost:$,errors:C,loading:z}=Q(),j=async()=>{let r=new FormData;r.append("image",t.image),r.append("title",t.title),r.append("type",t.type),r.append("user_id",t.user_id),r.append("language",t.language),r.append("content",t.content),r.append("continent_id",t.continent_id),r.append("zone_id",t.zone_id),r.append("country_id",t.country_id),r.append("ministry_id",t.ministry_id),await $(r),x.type=="article"?h.push({name:"admin.post.index",params:{type:"article"}}):h.push({name:"admin.post.index",params:{type:"propau"}})},T=()=>{t.image=k.value.files[0]};return(r,s)=>(a(),i("div",te,[e("div",oe,[e("div",re,[e("h1",se," Add "+l(y.type),1)]),e("section",ne,[c(C)!=""?(a(),L(G,{key:0},{default:O(()=>[H(l(c(C)),1)]),_:1})):f("",!0),e("h2",ae," Add a new "+l(y.type),1),e("form",{onSubmit:s[8]||(s[8]=K(o=>j(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[e("div",ie,[e("div",le,[de,u(e("input",{required:"","onUpdate:modelValue":s[0]||(s[0]=o=>t.title=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[V,t.title]])]),e("div",ue,[ce,u(e("select",{required:"","onUpdate:modelValue":s[1]||(s[1]=o=>t.language=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},fe,512),[[p,t.language]])]),e("div",null,[be,u(e("select",{required:"","onUpdate:modelValue":s[2]||(s[2]=o=>t.continent_id=o),onChange:N,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(a(!0),i(b,null,_(c(M),o=>(a(),i("option",{key:o.id,value:o.id},l(o.name_en),9,_e))),128))],544),[[p,t.continent_id]])]),e("div",null,[xe,u(e("select",{required:"","onUpdate:modelValue":s[3]||(s[3]=o=>t.zone_id=o),onChange:Z,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[v.value.length!=0?(a(!0),i(b,{key:0},_(v.value,o=>(a(),i("option",{key:o.id,value:o.id},l(o.name_en),9,he))),128)):(a(),i("option",ve," Select "+l(r.$t("continent")),1))],544),[[p,t.zone_id]])]),e("div",null,[we,u(e("select",{required:"","onUpdate:modelValue":s[4]||(s[4]=o=>t.country_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[g.value.length!=0?(a(!0),i(b,{key:0},_(g.value,o=>(a(),i("option",{value:o.id},l(o.name_en),9,ke))),256)):(a(),i("option",Ce," Select "+l(r.$t("zoned")),1))],512),[[p,t.country_id]])]),e("div",null,[ze,u(e("select",{required:"","onUpdate:modelValue":s[5]||(s[5]=o=>t.ministry_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(a(!0),i(b,null,_(c(A),o=>(a(),i("option",{key:o.id,value:o.id},l(o.name_en),9,Ve))),128))],512),[[p,t.ministry_id]])]),y.type=="article"?(a(),i("div",qe,[Se,e("input",{required:"",ref_key:"file",ref:k,onChange:s[6]||(s[6]=o=>T()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])):f("",!0),e("div",Me,[Fe,u(e("textarea",{required:"",type:"text","onUpdate:modelValue":s[7]||(s[7]=o=>t.content=o),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[V,t.content]])])]),e("div",Ue,[c(z)==0?(a(),i("button",Be," Save ")):f("",!0),c(z)==1?(a(),i("button",Ee,Ae)):f("",!0)])],32)])])]))}};export{Le as default};