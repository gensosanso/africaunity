import{o as f,c as a,d as i,e,g as t,k as x,w as h,h as _,t as w,m as n,l as k,j as u,K as y}from"./app.8ef239d2.js";import{E as v}from"./Error.443ca946.js";import{u as C}from"./currencyServices.8cf69a50.js";import"./_plugin-vue_export-helper.cdc0426e.js";const E={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},V={class:"z-0 h-full w-full p-4"},B=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Edit Currency ")],-1),S={class:"mx-auto bg-white p-6"},M=e("h2",{class:"text-md font-light text-gray-700"}," Edit a currency ",-1),N={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},j=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Symbol",-1),z=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"Name",-1),D={class:"mt-6 flex justify-end"},T={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},U={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},q=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),A=[q],I={__name:"CurrencyEdit",props:{id:{required:!0,type:String}},setup(p){const l=p,{updateCurrency:g,getCurrency:b,errors:d,loading:c,currency:o}=C();f(async()=>{await b(l.id)});const m=async()=>{await g(l.id)};return(H,r)=>(a(),i("div",E,[e("div",V,[B,e("section",S,[t(d)!=""?(a(),x(v,{key:0},{default:h(()=>[_(w(t(d)),1)]),_:1})):n("",!0),M,e("form",{onSubmit:r[2]||(r[2]=k(s=>m(),["prevent"]))},[e("div",N,[e("div",null,[j,u(e("input",{id:"fr","onUpdate:modelValue":r[0]||(r[0]=s=>t(o).symbol=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t(o).symbol]])]),e("div",null,[z,u(e("input",{id:"en","onUpdate:modelValue":r[1]||(r[1]=s=>t(o).name=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t(o).name]])])]),e("div",D,[t(c)==0?(a(),i("button",T," Save ")):n("",!0),t(c)==1?(a(),i("button",U,A)):n("",!0)])],32)])])]))}};export{I as default};
