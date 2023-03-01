import{o as x,c as a,d as n,e,g as t,k as _,w as h,h as k,t as w,P as v,m as i,l as C,j as c,K as y,f as S,b as V}from"./app.19df3b2f.js";import{u as E}from"./currencyServices.9bb97b53.js";const N={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},B={class:"z-0 h-full w-full p-4"},j=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Edit Currency ")],-1),M={class:"mx-auto bg-white p-6"},z=e("h2",{class:"text-md font-light text-gray-700"}," Edit a currency ",-1),D={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},T=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Symbol",-1),U=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"Name",-1),q={class:"mt-6 flex justify-end"},K={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},P={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},G={__name:"CurrencyEdit",props:{id:{required:!0,type:String}},setup(b){const l=b,{updateCurrency:p,getCurrency:g,errors:d,loading:u,currency:o}=E();x(async()=>{await g(l.id)});const f=async()=>{await p(l.id)};return($,r)=>{const m=V("Spin");return a(),n("div",N,[e("div",B,[j,e("section",M,[t(d)!=""?(a(),_(v,{key:0},{default:h(()=>[k(w(t(d)),1)]),_:1})):i("",!0),z,e("form",{onSubmit:r[2]||(r[2]=C(s=>f(),["prevent"]))},[e("div",D,[e("div",null,[T,c(e("input",{id:"fr","onUpdate:modelValue":r[0]||(r[0]=s=>t(o).symbol=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t(o).symbol]])]),e("div",null,[U,c(e("input",{id:"en","onUpdate:modelValue":r[1]||(r[1]=s=>t(o).name=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t(o).name]])])]),e("div",q,[t(u)==0?(a(),n("button",K," Save ")):i("",!0),t(u)==1?(a(),n("button",P,[S(m,{size:"small"})])):i("",!0)])],32)])])])}}};export{G as default};