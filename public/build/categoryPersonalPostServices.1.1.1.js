import{r as n,H as P,n as r}from"./app.1.1.1.js";function f(){P();const l=n([]),u=n([]),a=n(""),e=n(0);return{categoryPersonalPosts:l,categoryPersonalPost:u,errors:a,loading:e,getCategoryPersonalPosts:async()=>{a.value="",e.value=!0;let t=await r.get("/api/categoryPersonalPosts",{headers:{Authorization:`Bearer ${localStorage.token}`}});l.value=t.data.data,e.value=!1},getCategoryPersonalPost:async t=>{a.value="",e.value=!0;let o=await r.get("/api/categoryPersonalPosts/"+t,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,u.value=o.data.data},createCategoryPersonalPost:async t=>{a.value="";try{e.value=!0,await r.post("/api/categoryPersonalPosts",t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){if(o.response.status==422){e.value=0;for(const s in o.response.data.errors)a.value+=o.response.data.errors[s][0]+`
`}}},updateCategoryPersonalPost:async(t,o)=>{a.value="";try{e.value=!0,await r.put("/api/categoryPersonalPosts/"+o,t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const c in s.response.data.errors)a.value+=s.response.data.errors[c][0]+`	
`}},destroyCategoryPersonalPost:async t=>{a.value="";try{e.value=!0,await r.delete(`/api/categoryPersonalPosts/${JSON.stringify(t)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){e.value=0,o.response.status=="500"&&(a.value="Impossible de supprimer cette category")}}}}export{f as u};
