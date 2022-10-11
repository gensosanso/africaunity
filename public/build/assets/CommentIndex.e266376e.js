import{r as M,b as N,d as T,o as l,f as u,g as e,k as f,K as y,h as i,c as z,w as a,i as g,t as p,m,a as _,l as I,e as x}from"./app.69871223.js";import{u as U}from"./commentServices.1337f562.js";import{E as $}from"./Error.32d105e3.js";import"./_plugin-vue_export-helper.cdc0426e.js";const j={class:"relative h-auto w-full xl:mt-0 xl:p-4"},A={class:"z-0 h-full w-full p-4"},K=e("div",{class:"flex justify-between bg-white px-8 py-5 shadow-lg"},[e("h1",{class:"text-4xl font-bold text-primary-blue"},"Comment")],-1),q={class:"flex flex-col bg-white pt-8"},O={class:"overflow-x-auto shadow-lg"},P={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},F={class:"p-4"},G=e("label",{for:"table-search",class:"sr-only"},"Search",-1),H={class:"relative mt-1"},J=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),L={key:0},Q=e("div",{class:"mt-6 flex justify-end"},[e("button",{type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"}," Save ")],-1),R=["onClick"],W=["onClick"],oe={__name:"CommentIndex",setup(X){const{comments:h,getComments:d,destroyComment:v,updateComment:w,loading:k,errors:c}=U(),b=M("");N(async()=>{await d()});const C=async s=>{confirm("I you Sure ?")&&(await v(s),c.value==""&&await d())},t=T({id:"",user_id:"",post_id:"",content:""}),E=s=>{t.id=s.id,t.content=s.content,t.user_id=s.user.id,t.post_id=s.post.id},S=async()=>{await w(t),t.id="",t.content="",t.user_id="",t.post_id="",await d()},V=[{text:"User",value:"user.firstname"},{text:"Post",value:"post.title"},{text:"Comment",value:"content"},{text:"ACTION",value:"id"}];return(s,r)=>{const B=x("router-link"),D=x("EasyDataTable");return l(),u("div",j,[e("div",A,[K,e("div",q,[e("div",O,[e("div",P,[e("div",F,[G,e("div",H,[J,f(e("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>b.value=o),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[y,b.value]])])]),i(c)!=""?(l(),z($,{key:0},{default:a(()=>[g(p(i(c)),1)]),_:1})):m("",!0),_(D,{headers:V,items:i(h),alternating:"","show-index":"","buttons-pagination":"",loading:i(k)},{"item-post.title":a(o=>[_(B,{to:{name:"show.post",params:{id:o.post.id}},class:"hover:underline"},{default:a(()=>[g(p(o.post.title<=50?o.post.title:o.post.title.substring(0,49)+"..."),1)]),_:2},1032,["to"])]),"item-content":a(o=>[t.id==""||t.id!=o.id?(l(),u("span",L,p(o.content<=50?o.content:o.content.substring(0,49)+"..."),1)):m("",!0),t.id!=""&&t.id==o.id?(l(),u("form",{key:1,onSubmit:r[2]||(r[2]=I(n=>S(),["prevent"]))},[f(e("textarea",{required:"","onUpdate:modelValue":r[1]||(r[1]=n=>t.content=n),type:"text",id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                                    `,512),[[y,t.content]]),Q],32)):m("",!0)]),"item-id":a(o=>[e("div",null,[e("button",{onClick:n=>E(o),type:"button",class:"dark:text-blue-500 text-primary-blue hover:underline"}," Edit ",8,R),e("button",{onClick:n=>C(o.id),type:"button",class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"}," Delete ",8,W)])]),_:1},8,["items","loading"])])])])])])}}};export{oe as default};
