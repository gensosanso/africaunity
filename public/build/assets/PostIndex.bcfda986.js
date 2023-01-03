import{r as d,o as V,B as z,c as v,d as y,e as t,t as c,f as l,w as a,g as u,j as A,K as B,m as D,h as m,I as E,b as x}from"./app.04741282.js";import{u as M}from"./postServices.9af36f2b.js";import{r as N}from"./PlusCircleIcon.2912cddb.js";import{r as S}from"./TrashIcon.0de62fab.js";const U={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},$={class:"z-0 h-full w-full p-4"},q={class:"flex justify-between bg-white px-8 py-5"},F={class:"text-4xl font-bold capitalize text-primary-blue"},K={class:"text-base leading-4"},L={class:"flex flex-col bg-white pt-8"},O={class:"overflow-x-auto shadow-lg"},R={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},Z={class:"items-center justify-between p-4 lg:flex"},G={class:"relative mt-1"},H=t("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[t("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),J={class:""},Q=t("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),W={class:"py-2"},X=["src"],Y=m("Edit"),ee=m(" view "),oe={__name:"PostIndex",props:{type:{required:!0,type:String}},setup(o){const r=o,f=E(),{posts:b,getPostsAll:p,destroyPost:_,loading:w,errors:k}=M(),n=d([]),C=["article","propau"];V(async()=>{C.includes(r.type)||f.push({name:"admin.dash"}),await p(r.type)}),z(r,async(i,s)=>{await p(i.type)});const j=async()=>{if(n.value.length!=0){const i=d([]);n.value.forEach(s=>{i.value.push(s.id)}),confirm("I you Sure ?")&&(await _(i.value),k.value==""&&(await p(r.type),n.value=[]))}},I=d("title"),h=d(""),P=[{text:"Image",value:"image"},{text:"Title",value:"title"},{text:"Author",value:"user.firstname"},{text:"Language",value:"language"},{text:"Continent",value:"continent.name_en"},{text:"Zone",value:"zone.name_en"},{text:"Country",value:"country.name_en"},{text:"Ministry",value:"ministry.name_en"},{text:"ACTION",value:"id"}];return(i,s)=>{const g=x("router-link"),T=x("EasyDataTable");return v(),y("div",U,[t("div",$,[t("div",q,[t("h1",F,c(o.type),1),l(g,{to:{name:"admin.post.create",params:{type:o.type}},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:a(()=>[l(u(N),{class:"h-6 w-6"}),t("p",K,"Add "+c(o.type),1)]),_:1},8,["to"])]),t("div",L,[t("div",O,[t("div",R,[t("div",Z,[t("div",G,[H,A(t("input",{type:"text",id:"table-search","onUpdate:modelValue":s[0]||(s[0]=e=>h.value=e),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[B,h.value]])]),t("div",J,[t("button",{type:"button",title:"delete",onClick:s[1]||(s[1]=e=>j()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[l(u(S),{class:"h-6 w-6"}),Q])])]),l(T,{"items-selected":n.value,"onUpdate:items-selected":s[2]||(s[2]=e=>n.value=e),headers:P,items:u(b),alternating:"","search-field":I.value,"search-value":h.value,"show-index":"","buttons-pagination":"",loading:u(w)},{"item-image":a(e=>[t("div",W,[e.image?(v(),y("img",{key:0,src:e.image,alt:"",class:"h-10 w-10 rounded-full object-cover"},null,8,X)):D("",!0)])]),"item-title":a(e=>[m(c(e.title.length<=30?e.title:e.title.substring(0,29)+"..."),1)]),"item-ministry.name_en":a(e=>[m(c(e.ministry.name_en<=30?e.ministry.name_en:e.ministry.name_en.substring(0,29)+"..."),1)]),"item-id":a(e=>[t("div",null,[l(g,{to:{name:"admin.post.edit",params:{type:o.type,id:e.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:a(()=>[Y]),_:2},1032,["to"]),l(g,{to:{name:"show.post",params:{id:e.id,slug:e.slug}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:a(()=>[ee]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{oe as default};