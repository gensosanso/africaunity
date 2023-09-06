import{r as d,o as B,B as D,c as x,d as f,e,t as v,f as l,w as o,g as c,j as b,K as E,m as I,h as g,V as M,H as N,b as y}from"./app.15778.js";import{u as S}from"./postServices.15778.js";import{r as U}from"./PlusCircleIcon.15778.js";import{r as H}from"./TrashIcon.15778.js";const $={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},q={class:"z-0 h-full w-full p-4"},F={class:"flex justify-between bg-white px-8 py-5"},K={class:"text-4xl font-bold capitalize text-primary-blue"},L={class:"text-base leading-4"},O={class:"flex flex-col bg-white pt-8"},R={class:"overflow-x-auto shadow-lg"},Z={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},G={class:"items-center justify-between p-4 lg:flex"},J={class:"relative mt-1"},Q=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),W={class:""},X=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),Y={class:"py-2"},ee=["src"],te={class:"flex items-center"},se=g(" Edit "),ae=g(" View "),le={class:"ml-3"},oe=e("label",{class:"ml-2 text-blue-900"},"Hide",-1),ce={__name:"PostIndex",props:{type:{required:!0,type:String}},setup(i){const r=i,_=N(),{posts:w,getPostsAll:u,destroyPost:k,loading:C,errors:V}=S(),n=d([]),P=["article","propau"];B(async()=>{P.includes(r.type)||_.push({name:"admin.dash"}),await u(r.type)}),D(r,async(a,s)=>{await u(a.type)});const j=async()=>{if(n.value.length!=0){const a=d([]);n.value.forEach(s=>{a.value.push(s.id)}),confirm("I you Sure ?")&&(await k(a.value),V.value==""&&(await u(r.type),n.value=[]))}},T=d("title"),p=d(""),z=[{text:"Image",value:"image"},{text:"Title",value:"title"},{text:"Author",value:"user.firstname"},{text:"Language",value:"language"},{text:"Continent",value:"continent.name_en"},{text:"Zone",value:"zone.name_en"},{text:"Country",value:"country.name_en"},{text:"ACTION",value:"id"}];return(a,s)=>{const h=y("router-link"),A=y("EasyDataTable");return x(),f("div",$,[e("div",q,[e("div",F,[e("h1",K,v(i.type),1),l(h,{to:{name:"admin.post.create",params:{type:i.type}},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:o(()=>[l(c(U),{class:"h-6 w-6"}),e("p",L,"Add "+v(i.type),1)]),_:1},8,["to"])]),e("div",O,[e("div",R,[e("div",Z,[e("div",G,[e("div",J,[Q,b(e("input",{type:"text",id:"table-search","onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[E,p.value]])]),e("div",W,[e("button",{type:"button",title:"delete",onClick:s[1]||(s[1]=t=>j()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[l(c(H),{class:"h-6 w-6"}),X])])]),l(A,{"items-selected":n.value,"onUpdate:items-selected":s[4]||(s[4]=t=>n.value=t),headers:z,items:c(w),alternating:"","search-field":T.value,"search-value":p.value,"show-index":"","buttons-pagination":"",loading:c(C)},{"item-image":o(t=>[e("div",Y,[t.image?(x(),f("img",{key:0,src:t.image,alt:"",class:"h-10 w-10 rounded-full object-cover"},null,8,ee)):I("",!0)])]),"item-title":o(t=>[g(v(t.title.length<=30?t.title:t.title.substring(0,29)+"..."),1)]),"item-id":o(t=>[e("div",te,[e("div",null,[l(h,{to:{name:"admin.post.edit",params:{type:i.type,id:t.id}},class:"dark:text-blue-500 text-primary-blue hover:underline"},{default:o(()=>[se]),_:2},1032,["to"]),l(h,{to:{name:"show.post",params:{id:t.id,slug:t.slug}},class:"dark:text-blue-500 ml-3 text-indigo-600 hover:underline"},{default:o(()=>[ae]),_:2},1032,["to"])]),e("div",le,[b(e("input",{type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=m=>a.isChecked=m),class:"form-checkbox",onChange:s[3]||(s[3]=m=>a.hidePosts(m))},null,544),[[M,a.isChecked]]),oe])])]),_:1},8,["items-selected","items","search-field","search-value","loading"])])])])])])}}};export{ce as default};
