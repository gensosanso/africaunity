import{d as m,b as x,o as s,f as a,g as e,h as l,c as _,w as h,i as k,t as g,m as i,l as w,k as n,J as v,F as C,x as V,K as d}from"./app.4c9b42c1.js";import{E as B}from"./Error.ff1a47a1.js";import{u as E}from"./cityServices.20eb19ab.js";import{u as M}from"./countryServices.5cf6e83b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const U={class:"relative h-auto w-full xl:mt-0 xl:p-4"},S={class:"z-0 h-full w-full p-4"},z=e("div",{class:"flex justify-between bg-white px-8 py-5 shadow-lg"},[e("h1",{class:"text-4xl font-bold text-primary-blue"},"Add City")],-1),A={class:"mx-auto bg-white p-6 shadow-md"},F=e("h2",{class:"text-md font-light text-gray-700"}," Add a new city for the 04 languages of the website ",-1),N={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},j={class:"col-span-2"},D=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country ",-1),T=["value"],q=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),H=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),J=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),K=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),L={class:"mt-6 flex justify-end"},P={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},$={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},G=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),I=[G],ee={__name:"CityCreate",setup(O){const o=m({name_fr:"",name_en:"",name_es:"",name_pt:"",country_id:""}),{countries:y,getCountries:b}=M(),{createCity:f,errors:u,loading:c}=E();x(async()=>{await b()});const p=async()=>{await f({...o})};return(Q,r)=>(s(),a("div",U,[e("div",S,[z,e("section",A,[l(u)!=""?(s(),_(B,{key:0},{default:h(()=>[k(g(l(u)),1)]),_:1})):i("",!0),F,e("form",{onSubmit:r[5]||(r[5]=w(t=>p(),["prevent"]))},[e("div",N,[e("div",j,[D,n(e("select",{required:"","onUpdate:modelValue":r[0]||(r[0]=t=>o.country_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),a(C,null,V(l(y),t=>(s(),a("option",{key:t.id,value:t.id},g(t.name_en),9,T))),128))],512),[[v,o.country_id]])]),e("div",null,[q,n(e("input",{id:"fr","onUpdate:modelValue":r[1]||(r[1]=t=>o.name_fr=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,o.name_fr]])]),e("div",null,[H,n(e("input",{id:"en","onUpdate:modelValue":r[2]||(r[2]=t=>o.name_en=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,o.name_en]])]),e("div",null,[J,n(e("input",{id:"es","onUpdate:modelValue":r[3]||(r[3]=t=>o.name_es=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,o.name_es]])]),e("div",null,[K,n(e("input",{type:"text","onUpdate:modelValue":r[4]||(r[4]=t=>o.name_pt=t),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[d,o.name_pt]])])]),e("div",L,[l(c)==0?(s(),a("button",P," Save ")):i("",!0),l(c)==1?(s(),a("button",$,I)):i("",!0)])],32)])])]))}};export{ee as default};