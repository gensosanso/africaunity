import{d as m,o,f as r,g as e,h as s,c as g,w as p,i as y,t as f,m as a,l as h,k as x,K as _}from"./app.69871223.js";import{E as b}from"./Error.32d105e3.js";import{u as w}from"./categoryAnnouncementServices.bfef96c3.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v={class:"relative h-auto w-full xl:mt-0 xl:p-4"},k={class:"z-0 h-full w-full p-4"},A=e("div",{class:"flex justify-between bg-white px-8 py-5 shadow-lg"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Add category Announcement ")],-1),C={class:"mx-auto bg-white p-6 shadow-md"},B=e("h2",{class:"text-md font-light text-gray-700"}," Add a new category Announcement ",-1),V={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},z=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),E={class:"mt-6 flex justify-end"},M={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},N={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},S=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),j=[S],$={__name:"CategoryAnnouncementCreate",setup(D){const n=m({name:""}),{createCategoryAnnouncement:d,errors:i,loading:l}=w(),u=async()=>{await d({...n})};return(T,t)=>(o(),r("div",v,[e("div",k,[A,e("section",C,[s(i)!=""?(o(),g(b,{key:0},{default:p(()=>[y(f(s(i)),1)]),_:1})):a("",!0),B,e("form",{onSubmit:t[1]||(t[1]=h(c=>u(),["prevent"]))},[e("div",V,[e("div",null,[z,x(e("input",{id:"fr","onUpdate:modelValue":t[0]||(t[0]=c=>n.name=c),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[_,n.name]])])]),e("div",E,[s(l)==0?(o(),r("button",M," Save ")):a("",!0),s(l)==1?(o(),r("button",N,j)):a("",!0)])],32)])])]))}};export{$ as default};
