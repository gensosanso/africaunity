import{a as f,c as s,d,e,g as n,k as p,w as y,h as m,t as x,m as i,l as _,j as a,K as l}from"./app.8ef239d2.js";import{E as h}from"./Error.443ca946.js";import{u as k}from"./continentServices.aef8e806.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},v={class:"z-0 h-full w-full p-4"},C=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Add Continent ")],-1),V={class:"mx-auto bg-white p-6"},B=e("h2",{class:"text-md font-light text-gray-700"}," Add a new continent for the 04 languages of the website ",-1),E={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},U=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),j=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),z=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),A=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),M={class:"mt-6 flex justify-end"},N={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},S={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},D=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),T=[D],G={__name:"ContinentCreate",setup(F){const r=f({name_fr:"",name_en:"",name_es:"",name_pt:""}),{createContinent:g,errors:u,loading:c}=k(),b=async()=>{await g({...r})};return(H,t)=>(s(),d("div",w,[e("div",v,[C,e("section",V,[n(u)!=""?(s(),p(h,{key:0},{default:y(()=>[m(x(n(u)),1)]),_:1})):i("",!0),B,e("form",{onSubmit:t[4]||(t[4]=_(o=>b(),["prevent"]))},[e("div",E,[e("div",null,[U,a(e("input",{id:"fr","onUpdate:modelValue":t[0]||(t[0]=o=>r.name_fr=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,r.name_fr]])]),e("div",null,[j,a(e("input",{id:"en","onUpdate:modelValue":t[1]||(t[1]=o=>r.name_en=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,r.name_en]])]),e("div",null,[z,a(e("input",{id:"es","onUpdate:modelValue":t[2]||(t[2]=o=>r.name_es=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,r.name_es]])]),e("div",null,[A,a(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=o=>r.name_pt=o),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,r.name_pt]])])]),e("div",M,[n(c)==0?(s(),d("button",N," Save ")):i("",!0),n(c)==1?(s(),d("button",S,T)):i("",!0)])],32)])])]))}};export{G as default};
