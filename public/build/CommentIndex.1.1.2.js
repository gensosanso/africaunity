import{r as p,o as N,a as T,c as i,d as m,e,j as y,K as x,f as b,g as a,k as I,w as l,h,t as f,P as U,m as g,l as z,b as _}from"./app.1.1.2.js";import{u as $}from"./commentServices.1.1.2.js";import{r as A}from"./TrashIcon.1.1.2.js";const K={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},P={class:"z-0 h-full w-full p-4"},q=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"},"Comment")],-1),O={class:"flex flex-col bg-white pt-8"},F={class:"overflow-x-auto shadow-lg"},G={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},H={class:"items-center justify-between p-4 lg:flex"},J={class:"relative mt-1"},L=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),Q={class:""},R=e("span",{class:"hidden text-sm font-thin lg:block"},"Delete",-1),W={key:0},X=e("div",{class:"mt-6 flex justify-end"},[e("button",{type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"}," Save ")],-1),Y=["onClick"],oe={__name:"CommentIndex",setup(Z){const n=p([]),{comments:w,getComments:d,destroyComment:k,updateComment:C,loading:E,errors:u}=$(),v=p("");N(async()=>{await d()});const S=async()=>{if(n.value.length!=0){const r=p([]);n.value.forEach(o=>{r.value.push(o.id)}),confirm("I you Sure ?")&&(await k(r.value),u.value==""&&(await d(),n.value=[]))}},s=T({id:"",user_id:"",post_id:"",content:""}),V=r=>{s.id=r.id,s.content=r.content,s.user_id=r.user.id,s.post_id=r.post.id},j=async()=>{await C(s),s.id="",s.content="",s.user_id="",s.post_id="",await d()},B=[{text:"User",value:"user.firstname"},{text:"Post",value:"post.title"},{text:"Comment",value:"content"},{text:"ACTION",value:"id"}];return(r,o)=>{const D=_("router-link"),M=_("EasyDataTable");return i(),m("div",K,[e("div",P,[q,e("div",O,[e("div",F,[e("div",G,[e("div",H,[e("div",J,[L,y(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>v.value=t),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[x,v.value]])]),e("div",Q,[e("button",{type:"button",title:"delete",onClick:o[1]||(o[1]=t=>S()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[b(a(A),{class:"h-6 w-6"}),R])])]),a(u)!=""?(i(),I(U,{key:0},{default:l(()=>[h(f(a(u)),1)]),_:1})):g("",!0),b(M,{"items-selected":n.value,"onUpdate:items-selected":o[4]||(o[4]=t=>n.value=t),headers:B,items:a(w),alternating:"","show-index":"","buttons-pagination":"",loading:a(E)},{"item-post.title":l(t=>[b(D,{to:{name:"show.post",params:{id:t.post.id,slug:t.post.slug}},class:"hover:underline"},{default:l(()=>[h(f(t.post.title<=50?t.post.title:t.post.title.substring(0,49)+"..."),1)]),_:2},1032,["to"])]),"item-content":l(t=>[s.id==""||s.id!=t.id?(i(),m("span",W,f(t.content<=50?t.content:t.content.substring(0,49)+"..."),1)):g("",!0),s.id!=""&&s.id==t.id?(i(),m("form",{key:1,onSubmit:o[3]||(o[3]=z(c=>j(),["prevent"]))},[y(e("textarea",{required:"","onUpdate:modelValue":o[2]||(o[2]=c=>s.content=c),type:"text",id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                                    `,512),[[x,s.content]]),X],32)):g("",!0)]),"item-id":l(t=>[e("div",null,[e("button",{onClick:c=>V(t),type:"button",class:"dark:text-blue-500 text-primary-blue hover:underline"}," Edit ",8,Y)])]),_:1},8,["items-selected","items","loading"])])])])])])}}};export{oe as default};