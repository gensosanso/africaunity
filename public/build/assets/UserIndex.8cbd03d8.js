import{r as p,o as I,c as l,d as o,e,f as i,w as n,g as c,j as b,J as M,K as V,k as j,h as y,a as x,b as _}from"./app.8ef239d2.js";import{u as D}from"./userServices.e6b11fa8.js";import{r as N}from"./PlusCircleIcon.39fdb421.js";import{r as B}from"./TrashIcon.ade30d2c.js";import{r as $}from"./UserCircleIcon.abbdd172.js";const z={class:"relative h-auto min-h-screen w-full bg-white xl:mt-0 xl:p-4"},F={class:"z-0 h-full w-full p-4"},R={class:"flex justify-between bg-white px-8 py-5"},J=e("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," User ",-1),K=e("p",{class:"text-base leading-4"},"Add User",-1),L={class:"items-center justify-between lg:flex"},O={class:"items-end space-x-2 p-4 lg:flex"},P=e("label",{for:""},"Filter by:",-1),Y=e("option",{value:"firstname"},"Name",-1),q=e("option",{value:"email"},"Email",-1),G=[Y,q],H={class:"relative mt-1"},Q=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),W={class:""},X=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),Z=["src"],ee={key:0,class:"rounded-full bg-green-500 p-2 text-white"},te={key:1,class:"rounded-full bg-red-500 p-2 text-white"},se=y("Edit"),ae=y(" view "),re=["onClick"],le=["onClick"],pe={__name:"UserIndex",setup(oe){const{users:g,getUsers:u,destroyUser:w,updateStatusUser:f,loading:k,errors:v}=D(),d=p([]),m=p("firstname"),h=p("");I(async()=>{await u()});const U=async()=>{if(d.value.length!=0){const a=p([]);d.value.forEach(s=>{a.value.push(s.id)}),confirm("I you Sure ?")&&(await w(a.value),v.value==""&&(await u(),d.value=[]))}},A=async(a,s)=>{const r=x({status:s});confirm("I you Sure ?")&&(await f(a,{...r}),v.value==""&&await u())},S=async(a,s)=>{const r=x({status:s});confirm("I you Sure ?")&&(await f(a,{...r}),v.value==""&&await u())},T=[{text:"AVATAR",value:"avatar"},{text:"FIRSTNAME",value:"firstname"},{text:"EMAIL",value:"email"},{text:"TYPE",value:"type"},{text:"STATUS",value:"status"},{text:"ACTION",value:"id"}];return(a,s)=>{const r=_("router-link"),C=_("EasyDataTable");return l(),o("div",z,[e("div",F,[e("div",R,[J,i(r,{to:{name:"admin.user.create"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:n(()=>[i(c(N),{class:"h-6 w-6"}),K]),_:1},8,["to"])]),e("div",L,[e("div",O,[e("div",null,[P,b(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>m.value=t),class:"form-select mt-2 block w-32 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},G,512),[[M,m.value]])]),e("div",H,[Q,b(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>h.value=t),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[V,h.value]])])]),e("div",W,[e("button",{type:"button",title:"delete",onClick:s[2]||(s[2]=t=>U()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[i(c(B),{class:"h-6 w-6"}),X])])]),i(C,{"items-selected":d.value,"onUpdate:items-selected":s[3]||(s[3]=t=>d.value=t),headers:T,items:c(g),alternating:"","search-field":m.value,"search-value":h.value,"show-index":"","buttons-pagination":"",loading:c(k)},{"item-avatar":n(t=>[t.avatar?(l(),o("img",{key:0,src:t.avatar,alt:"",class:"h-12 w-12 rounded-full object-cover"},null,8,Z)):(l(),j(c($),{key:1,class:"h-12 w-12 text-gray-700"}))]),"item-status":n(t=>[t.status==1?(l(),o("span",ee,"Actived")):(l(),o("span",te,"Desactived"))]),"item-id":n(t=>[e("div",null,[i(r,{to:{name:"admin.user.edit",params:{id:t.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:n(()=>[se]),_:2},1032,["to"]),i(r,{to:{name:"compte",params:{slug:t.slug,id:t.id}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:n(()=>[ae]),_:2},1032,["to"]),t.status==1?(l(),o("button",{key:0,type:"button",onClick:E=>A(t.id,3),class:"dark:text-blue-500 ml-3 text-purple-600 hover:underline"}," Desactived ",8,re)):(l(),o("button",{key:1,type:"button",onClick:E=>S(t.id,1),class:"dark:text-blue-500 ml-3 text-purple-600 hover:underline"}," Actived ",8,le))])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])}}};export{pe as default};
