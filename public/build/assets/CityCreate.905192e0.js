import{a as m,o as x,c as a,d,e,g as s,k as _,w as h,h as k,t as w,m as i,l as v,f as C,j as l,K as n,b as V}from"./app.04741282.js";import{E as N}from"./Error.74e5730d.js";import{u as S}from"./cityServices.ca6f6d5c.js";import{u as B}from"./countryServices.c88ea300.js";import"./_plugin-vue_export-helper.cdc0426e.js";const E={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},U={class:"z-0 h-full w-full p-4"},F=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"},"Add City")],-1),M={class:"mx-auto bg-white p-6"},j=e("h2",{class:"text-md font-light text-gray-700"}," Add a new city for the 04 languages of the website ",-1),z={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},A={class:"col-span-2"},D=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country ",-1),T=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),q=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),H=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),K=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),P={class:"mt-6 flex justify-end"},$={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},G={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},I=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),J=[I],Z={__name:"CityCreate",setup(L){const o=m({name_fr:"",name_en:"",name_es:"",name_pt:"",country_id:""}),{countries:g,getCountries:y}=B(),{createCity:b,errors:u,loading:c}=S();x(async()=>{await y()});const f=async()=>{await b({...o})};return(O,t)=>{const p=V("SelectFilter");return a(),d("div",E,[e("div",U,[F,e("section",M,[s(u)!=""?(a(),_(N,{key:0},{default:h(()=>[k(w(s(u)),1)]),_:1})):i("",!0),j,e("form",{onSubmit:t[5]||(t[5]=v(r=>f(),["prevent"]))},[e("div",z,[e("div",A,[D,C(p,{modelValue:o.country_id,"onUpdate:modelValue":t[0]||(t[0]=r=>o.country_id=r),data:s(g),placeholder:"Select Country",required:!1,resetField:!0,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","className"])]),e("div",null,[T,l(e("input",{id:"fr","onUpdate:modelValue":t[1]||(t[1]=r=>o.name_fr=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[n,o.name_fr]])]),e("div",null,[q,l(e("input",{id:"en","onUpdate:modelValue":t[2]||(t[2]=r=>o.name_en=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[n,o.name_en]])]),e("div",null,[H,l(e("input",{id:"es","onUpdate:modelValue":t[3]||(t[3]=r=>o.name_es=r),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[n,o.name_es]])]),e("div",null,[K,l(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=r=>o.name_pt=r),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[n,o.name_pt]])])]),e("div",P,[s(c)==0?(a(),d("button",$," Save ")):i("",!0),s(c)==1?(a(),d("button",G,J)):i("",!0)])],32)])])])}}};export{Z as default};