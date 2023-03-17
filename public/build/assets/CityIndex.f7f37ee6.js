import{r as i,o as k,c as m,d as C,e,f as r,w as d,g as a,j as E,K as N,k as V,h as p,t as j,P as B,m as D,b as h}from"./app.4afc0db7.js";import{u as T}from"./cityServices.7ffa2921.js";import{r as I}from"./PlusCircleIcon.5a7e1f88.js";import{r as M}from"./TrashIcon.739c784b.js";const S={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},z={class:"z-0 h-full w-full p-4"},A={class:"flex justify-between bg-white px-8 py-5"},U=e("h1",{class:"text-4xl font-bold text-primary-blue"},"City",-1),$=e("p",{class:"text-base leading-4"},"Add City",-1),F={class:"flex flex-col bg-white pt-8"},K={class:"overflow-x-auto shadow-lg"},O={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},P={class:"items-center justify-between p-4 lg:flex"},q={class:"relative mt-1"},G=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),H={class:""},J=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),L=p("Edit"),Z={__name:"CityIndex",setup(Q){const l=i([]),{cities:f,getCities:u,destroyCity:v,loading:x,errors:n}=T();k(async()=>{await u()});const _=async y=>{if(l.value.length!=0){const t=i([]);l.value.forEach(o=>{t.value.push(o.id)}),confirm("I you Sure ?")&&(await v(t.value),n.value==""&&(await u(),l.value=[]))}},b=i("name_en"),c=i(""),g=[{text:"Name",value:"name_en"},{text:"ACTION",value:"id"}];return(y,t)=>{const o=h("router-link"),w=h("EasyDataTable");return m(),C("div",S,[e("div",z,[e("div",A,[U,r(o,{to:{name:"admin.city.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:d(()=>[r(a(I),{class:"h-6 w-6"}),$]),_:1},8,["to"])]),e("div",F,[e("div",K,[e("div",O,[e("div",P,[e("div",q,[G,E(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[N,c.value]])]),e("div",H,[e("button",{type:"button",title:"delete",onClick:t[1]||(t[1]=s=>_()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[r(a(M),{class:"h-6 w-6"}),J])])]),a(n)!=""?(m(),V(B,{key:0},{default:d(()=>[p(j(a(n)),1)]),_:1})):D("",!0),r(w,{"items-selected":l.value,"onUpdate:items-selected":t[2]||(t[2]=s=>l.value=s),headers:g,items:a(f),alternating:"","search-field":b.value,"search-value":c.value,"show-index":"","buttons-pagination":"",loading:a(x)},{"item-id":d(s=>[e("div",null,[r(o,{to:{name:"admin.city.edit",params:{id:s.id}},href:"#",class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:d(()=>[L]),_:2},1032,["to"])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{Z as default};