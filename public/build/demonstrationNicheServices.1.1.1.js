import{r as n,H as l,n as r}from"./app.1.1.1.js";function g(){l();const i=n([]),c=n([]),t=n(""),e=n(0);return{demonstrationNiches:i,demonstrationNiche:c,errors:t,loading:e,getDemonstrationNiches:async()=>{t.value="",e.value=!0;let a=await r.get("/api/demonstrationNiches",{headers:{Authorization:`Bearer ${localStorage.token}`}});i.value=a.data.data,e.value=!1},getDemonstrationNiche:async a=>{t.value="",e.value=!0;let o=await r.get("/api/demonstrationNiches/"+a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,c.value=o.data.data},createDemonstrationNiche:async a=>{t.value="";try{e.value=!0,await r.post("/api/demonstrationNiches",a,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){if(o.response.status==422){e.value=0;for(const s in o.response.data.errors)t.value+=o.response.data.errors[s][0]+`
`}}},updateDemonstrationNiche:async(a,o)=>{t.value="";try{e.value=!0;let s=await r.put("/api/demonstrationNiches/"+o,a,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=!1}catch(s){if(e.value=0,s.response.status==422)for(const u in s.response.data.errors)t.value+=s.response.data.errors[u][0]+`	
`}},destroyDemonstrationNiche:async a=>{t.value="";try{e.value=!0,await r.delete(`/api/demonstrationNiches/${JSON.stringify(a)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){e.value=0,o.response.status=="500"&&(t.value="Impossible de supprimer cette category")}}}}export{g as u};
