import{r as ae,o as _e,c as Ee,d as we,e as o,t as l,h as k,f as y,g as b,w as Y,b as Se}from"./app.fba3b33f.js";import{r as _}from"./CheckCircleIcon.2daf671a.js";var N={};const xe="@vue-stripe/vue-stripe",Ae="4.4.4",Ce="Stripe Checkout & Elements for Vue.js",$e="jofftiquez@gmail.com",ke={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},Pe="dist/index.js",Oe="dist",Te={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},je={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},Le={url:"https://github.com/vue-stripe/vue-stripe/issues"},Ie={"pre-commit":"lint-staged"},Re="https://github.com/vue-stripe/vue-stripe#readme",Be=["vue","vuejs","stripe","checkout","payment"],De="MIT",Fe={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},Ne="typings/index.d.ts",Me={name:xe,version:Ae,description:Ce,author:$e,scripts:ke,main:Pe,module:Oe,dependencies:Te,devDependencies:je,bugs:Le,gitHooks:Ie,homepage:Re,keywords:Be,license:De,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Fe,typings:Ne};Object.defineProperty(N,"__esModule",{value:!0});var te="auto",Ve=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Ue=["auto","book","donate","pay"],Ge=["required","auto"],qe={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},He=Me.version,U={name:"vue-stripe",version:He,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},ze={install:function(t,e){var s=e.pk,n=e.stripeAccount,p=e.apiVersion,m=e.locale,d=window.Stripe(s,{stripeAccount:n,apiVersion:p,locale:m});d.registerAppInfo(U),t.prototype.$stripe=d}};function Ye(t,e){return t(e={exports:{}},e.exports),e.exports}var Xe=Ye(function(t){var e=function(s){var n,p=Object.prototype,m=p.hasOwnProperty,d=typeof Symbol=="function"?Symbol:{},g=d.iterator||"@@iterator",A=d.asyncIterator||"@@asyncIterator",h=d.toStringTag||"@@toStringTag";function E(i,r,c,u){var a=r&&r.prototype instanceof Q?r:Q,w=Object.create(a.prototype),B=new Z(u||[]);return w._invoke=function(T,V,f){var x=v;return function(j,D){if(x===M)throw new Error("Generator is already running");if(x===G){if(j==="throw")throw D;return oe()}for(f.method=j,f.arg=D;;){var F=f.delegate;if(F){var O=ie(F,f);if(O){if(O===$)continue;return O}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(x===v)throw x=G,f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);x=M;var S=C(T,V,f);if(S.type==="normal"){if(x=f.done?G:X,S.arg===$)continue;return{value:S.arg,done:f.done}}S.type==="throw"&&(x=G,f.method="throw",f.arg=S.arg)}}}(i,c,B),w}function C(i,r,c){try{return{type:"normal",arg:i.call(r,c)}}catch(u){return{type:"throw",arg:u}}}s.wrap=E;var v="suspendedStart",X="suspendedYield",M="executing",G="completed",$={};function Q(){}function q(){}function I(){}var W={};W[g]=function(){return this};var J=Object.getPrototypeOf,H=J&&J(J(ee([])));H&&H!==p&&m.call(H,g)&&(W=H);var R=I.prototype=Q.prototype=Object.create(W);function se(i){["next","throw","return"].forEach(function(r){i[r]=function(c){return this._invoke(r,c)}})}function z(i){var r;this._invoke=function(c,u){function a(){return new Promise(function(w,B){(function T(V,f,x,j){var D=C(i[V],i,f);if(D.type!=="throw"){var F=D.arg,O=F.value;return O&&typeof O=="object"&&m.call(O,"__await")?Promise.resolve(O.__await).then(function(S){T("next",S,x,j)},function(S){T("throw",S,x,j)}):Promise.resolve(O).then(function(S){F.value=S,x(F)},function(S){return T("throw",S,x,j)})}j(D.arg)})(c,u,w,B)})}return r=r?r.then(a,a):a()}}function ie(i,r){var c=i.iterator[r.method];if(c===n){if(r.delegate=null,r.method==="throw"){if(i.iterator.return&&(r.method="return",r.arg=n,ie(i,r),r.method==="throw"))return $;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return $}var u=C(c,i.iterator,r.arg);if(u.type==="throw")return r.method="throw",r.arg=u.arg,r.delegate=null,$;var a=u.arg;return a?a.done?(r[i.resultName]=a.value,r.next=i.nextLoc,r.method!=="return"&&(r.method="next",r.arg=n),r.delegate=null,$):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,$)}function be(i){var r={tryLoc:i[0]};1 in i&&(r.catchLoc=i[1]),2 in i&&(r.finallyLoc=i[2],r.afterLoc=i[3]),this.tryEntries.push(r)}function K(i){var r=i.completion||{};r.type="normal",delete r.arg,i.completion=r}function Z(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(be,this),this.reset(!0)}function ee(i){if(i){var r=i[g];if(r)return r.call(i);if(typeof i.next=="function")return i;if(!isNaN(i.length)){var c=-1,u=function a(){for(;++c<i.length;)if(m.call(i,c))return a.value=i[c],a.done=!1,a;return a.value=n,a.done=!0,a};return u.next=u}}return{next:oe}}function oe(){return{value:n,done:!0}}return q.prototype=R.constructor=I,I.constructor=q,I[h]=q.displayName="GeneratorFunction",s.isGeneratorFunction=function(i){var r=typeof i=="function"&&i.constructor;return!!r&&(r===q||(r.displayName||r.name)==="GeneratorFunction")},s.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,I):(i.__proto__=I,h in i||(i[h]="GeneratorFunction")),i.prototype=Object.create(R),i},s.awrap=function(i){return{__await:i}},se(z.prototype),z.prototype[A]=function(){return this},s.AsyncIterator=z,s.async=function(i,r,c,u){var a=new z(E(i,r,c,u));return s.isGeneratorFunction(r)?a:a.next().then(function(w){return w.done?w.value:a.next()})},se(R),R[h]="Generator",R[g]=function(){return this},R.toString=function(){return"[object Generator]"},s.keys=function(i){var r=[];for(var c in i)r.push(c);return r.reverse(),function u(){for(;r.length;){var a=r.pop();if(a in i)return u.value=a,u.done=!1,u}return u.done=!0,u}},s.values=ee,Z.prototype={constructor:Z,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(K),!i)for(var r in this)r.charAt(0)==="t"&&m.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var i=this.tryEntries[0].completion;if(i.type==="throw")throw i.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var r=this;function c(V,f){return w.type="throw",w.arg=i,r.next=V,f&&(r.method="next",r.arg=n),!!f}for(var u=this.tryEntries.length-1;u>=0;--u){var a=this.tryEntries[u],w=a.completion;if(a.tryLoc==="root")return c("end");if(a.tryLoc<=this.prev){var B=m.call(a,"catchLoc"),T=m.call(a,"finallyLoc");if(B&&T){if(this.prev<a.catchLoc)return c(a.catchLoc,!0);if(this.prev<a.finallyLoc)return c(a.finallyLoc)}else if(B){if(this.prev<a.catchLoc)return c(a.catchLoc,!0)}else{if(!T)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return c(a.finallyLoc)}}}},abrupt:function(i,r){for(var c=this.tryEntries.length-1;c>=0;--c){var u=this.tryEntries[c];if(u.tryLoc<=this.prev&&m.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var a=u;break}}a&&(i==="break"||i==="continue")&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var w=a?a.completion:{};return w.type=i,w.arg=r,a?(this.method="next",this.next=a.finallyLoc,$):this.complete(w)},complete:function(i,r){if(i.type==="throw")throw i.arg;return i.type==="break"||i.type==="continue"?this.next=i.arg:i.type==="return"?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):i.type==="normal"&&r&&(this.next=r),$},finish:function(i){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.finallyLoc===i)return this.complete(c.completion,c.afterLoc),K(c),$}},catch:function(i){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc===i){var u=c.completion;if(u.type==="throw"){var a=u.arg;K(c)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(i,r,c){return this.delegate={iterator:ee(i),resultName:r,nextLoc:c},this.method==="next"&&(this.arg=n),$}},s}(t.exports);try{regeneratorRuntime=e}catch{Function("r","regeneratorRuntime = r")(e)}}),P=Xe;function pe(t){return(pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var ue,me="https://js.stripe.com/v3",Qe=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,le="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",We=function(){for(var t=document.querySelectorAll('script[src^="'.concat(me,'"]')),e=0;e<t.length;e++){var s=t[e];if(Qe.test(s.src))return s}return null},Je=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(me).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(s),s},Ke=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:e})},ne=null,Ze=function(t){return ne!==null?ne:ne=new Promise(function(e,s){if(typeof window<"u")if(window.Stripe&&t&&console.warn(le),window.Stripe)e(window.Stripe);else try{var n=We();n&&t?console.warn(le):n||(n=Je(t)),n.addEventListener("load",function(){window.Stripe?e(window.Stripe):s(new Error("Stripe.js not available"))}),n.addEventListener("error",function(){s(new Error("Failed to load Stripe.js"))})}catch(p){return void s(p)}else e(null)})},et=function(t,e,s){if(t===null)return null;var n=t.apply(void 0,e);return Ke(n,s),n},tt=function(t){var e=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(t),`
`);if(t===null||pe(t)!=="object")throw new Error(e);if(Object.keys(t).length===1&&typeof t.advancedFraudSignals=="boolean")return t;throw new Error(e)},he=!1,L=function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];he=!0;var n=Date.now();return Ze(ue).then(function(p){return et(p,e,n)})};L.setLoadParameters=function(t){if(he)throw new Error("You cannot change load parameters after calling loadStripe");ue=tt(t)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var nt={beforeCreate:function(){var t=this.$options.props;t&&(this._$coertions=Object.keys(t).filter(function(e){return t[e].coerce}).map(function(e){return[e,t[e].coerce]}))},computed:{$coerced:function(){var t=this;return this._$coertions.reduce(function(e,s){var n=s[0],p=s[1];return e[n]=p.call(t,t.$props[n]),e},{})}}},rt={pk:{type:String,required:!0},mode:{type:String,validator:function(t){return["payment","subscription"].includes(t)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(t){return Ue.includes(t)}},billingAddressCollection:{type:String,default:"auto",validator:function(t){return Ge.includes(t)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:te,coerce:function(t){return Ve.includes(t)?t:(console.warn("VueStripe Warning: '".concat(t,"' is not supported by Stripe yet. Falling back to default '").concat(te,"'.")),te)}},shippingAddressCollection:{type:Object,validator:function(t){return Object.prototype.hasOwnProperty.call(t,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},st={props:rt,mixins:[nt],render:function(t){return t},methods:{redirectToCheckout:function(){var t,e,s;return P.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&L.setLoadParameters({advancedFraudSignals:!1}),t={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n.next=6,P.awrap(L(this.pk,t));case 6:if((e=n.sent).registerAppInfo(U),!this.sessionId){n.next=11;break}return e.redirectToCheckout({sessionId:this.sessionId}),n.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){n.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),n.abrupt("return");case 14:return s={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},n.abrupt("return",e.redirectToCheckout(s));case 18:n.prev=18,n.t0=n.catch(0),console.error(n.t0),this.$emit("error",n.t0);case 22:case"end":return n.stop()}},null,this,[[0,18]])}}};function it(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var ot=it;function ce(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable})),s.push.apply(s,n)}return s}function at(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ce(Object(s),!0).forEach(function(n){ot(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ce(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}var lt="card",ct={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return qe}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(t){return["solid","default"].includes(t)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var t,e,s=this;return P.async(function(n){for(;;)switch(n.prev=n.next){case 0:return this.disableAdvancedFraudDetection&&L.setLoadParameters({advancedFraudSignals:!1}),t={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},e={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},n.next=5,P.awrap(L(this.pk,t));case 5:this.stripe=n.sent,this.stripe.registerAppInfo(U),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(lt,e),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(p){var m=document.getElementById("stripe-element-errors");p.error?m.textContent=p.error.message:m.textContent="",s.onChange(p)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(p){var m,d,g,A;return P.async(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,s.$emit("loading",!0),p.preventDefault(),m=at({},s.element),s.amount&&(m.amount=s.amount),h.next=7,P.awrap(s.stripe.createToken(m,s.tokenData));case 7:if(d=h.sent,g=d.token,!(A=d.error)){h.next=15;break}return document.getElementById("stripe-element-errors").textContent=A.message,s.$emit("error",A),h.abrupt("return");case 15:s.$emit("token",g),h.next=22;break;case 18:h.prev=18,h.t0=h.catch(0),console.error(h.t0),s.$emit("error",h.t0);case 22:return h.prev=22,s.$emit("loading",!1),h.finish(22);case 25:case"end":return h.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return n.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(t){this.element.update(t)},onChange:function(t){this.$emit("element-change",t)},onReady:function(t){this.$emit("element-ready",t)},onFocus:function(t){this.$emit("element-focus",t)},onBlur:function(t){this.$emit("element-blur",t)},onEscape:function(t){this.$emit("element-escape",t)},onClick:function(t){this.$emit("element-click",t)}}};function fe(t,e,s,n,p,m,d,g,A,h){typeof d!="boolean"&&(A=g,g=d,d=!1);const E=typeof s=="function"?s.options:s;let C;if(t&&t.render&&(E.render=t.render,E.staticRenderFns=t.staticRenderFns,E._compiled=!0,p&&(E.functional=!0)),n&&(E._scopeId=n),m?(C=function(v){(v=v||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(v=__VUE_SSR_CONTEXT__),e&&e.call(this,A(v)),v&&v._registeredComponents&&v._registeredComponents.add(m)},E._ssrRegister=C):e&&(C=d?function(v){e.call(this,h(v,this.$root.$options.shadowRoot))}:function(v){e.call(this,g(v))}),C)if(E.functional){const v=E.render;E.render=function(X,M){return C.call(M),v(X,M)}}else{const v=E.beforeCreate;E.beforeCreate=v?[].concat(v,C):[C]}return s}const dt=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ye(t){return(e,s)=>pt(e,s)}let re;const de={};function pt(t,e){const s=dt?e.media||"default":t,n=de[s]||(de[s]={ids:new Set,styles:[]});if(!n.ids.has(t)){n.ids.add(t);let p=e.source;if(e.map&&(p+=`
/*# sourceURL=`+e.map.sources[0]+" */",p+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",e.media&&n.element.setAttribute("media",e.media),re===void 0&&(re=document.head||document.getElementsByTagName("head")[0]),re.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(p),n.element.styleSheet.cssText=n.styles.filter(Boolean).join(`
`);else{const m=n.ids.size-1,d=document.createTextNode(p),g=n.element.childNodes;g[m]&&n.element.removeChild(g[m]),g.length?n.element.insertBefore(d,g[m]):n.element.appendChild(d)}}}const ut=ct;var ge=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",{attrs:{id:"stripe-element-form"}},[e("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[e("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),e("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},mt=[];ge._withStripped=!0;const ht=function(t){t&&t("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},ft="data-v-4dd8360e",yt=fe({render:ge,staticRenderFns:mt},ht,ut,ft,!1,void 0,!1,ye,void 0,void 0);var gt="payment",vt={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var t,e=this;return P.async(function(s){for(;;)switch(s.prev=s.next){case 0:return this.disableAdvancedFraudDetection&&L.setLoadParameters({advancedFraudSignals:!1}),t={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},s.next=4,P.awrap(L(this.pk,t));case 4:this.stripe=s.sent,this.stripe.registerAppInfo(U),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(gt,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(n){var p=document.getElementById("stripe-payment-element-errors");n.error?p.textContent=n.error.message:p.textContent="",e.onChange(n)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(n){var p,m;return P.async(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,e.$emit("loading",!0),n.preventDefault(),d.next=5,P.awrap(e.stripe.confirmPayment({elements:e.elements,confirmParams:e.confirmParams,redirect:e.redirect}));case 5:if(p=d.sent,!(m=p.error)){d.next=12;break}return document.getElementById("stripe-payment-element-errors").textContent=m.message,e.$emit("error",m),d.abrupt("return");case 12:d.next=18;break;case 14:d.prev=14,d.t0=d.catch(0),console.error(d.t0),e.$emit("error",d.t0);case 18:return d.prev=18,e.$emit("loading",!1),d.finish(18);case 21:case"end":return d.stop()}},null,null,[[0,14,18,21]])});case 16:case"end":return s.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(t){this.element.update(t)},onChange:function(t){this.$emit("element-change",t)},onReady:function(t){this.$emit("element-ready",t)},onFocus:function(t){this.$emit("element-focus",t)},onBlur:function(t){this.$emit("element-blur",t)},onEscape:function(t){this.$emit("element-escape",t)},onClick:function(t){this.$emit("element-click",t)}}};const bt=vt;var ve=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",{attrs:{id:"stripe-payment-element-form"}},[e("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[e("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),e("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},_t=[];ve._withStripped=!0;const Et=function(t){t&&t("data-v-3329b3f8_0",{source:`


































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-3329b3f8] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmQA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},wt=fe({render:ve,staticRenderFns:_t},Et,bt,"data-v-3329b3f8",!1,void 0,!1,ye,void 0,void 0);var St={install:function(t,e){var s,n,p,m,d,g,A;return P.async(function(h){for(;;)switch(h.prev=h.next){case 0:s=e.pk,n=e.stripeAccount,p=e.apiVersion,m=e.locale,d=e.elementsOptions,(g=window.Stripe(s,{stripeAccount:n,apiVersion:p,locale:m})).registerAppInfo(U),A=g.elements(d),t.prototype.$stripe=g,t.prototype.$stripeElements=A;case 6:case"end":return h.stop()}})}};N.StripeCheckout=st,N.StripeElementCard=yt,N.StripeElementPayment=wt,N.StripeElementsPlugin=St,N.StripePlugin=ze;const xt={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},At={class:""},Ct={class:"container mx-auto px-6 py-8"},$t={class:"text-center"},kt={class:"text-4xl font-bold uppercase"},Pt={class:"mt-4 text-gray-500"},Ot={class:"mx-auto max-w-6xl mt-16 grid gap-6 px-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"},Tt={class:"transform rounded-lg px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"},jt={class:"text-center"},Lt={class:"text-3xl font-semibold uppercase text-gray-800"},It=o("br",null,null,-1),Rt={class:"dark:text-gray-400 mt-2 text-gray-600"},Bt={class:"mt-4 text-gray-500"},Dt={class:"mt-2 text-5xl font-semibold uppercase text-gray-800"},Ft={class:"mt-4 text-gray-500"},Nt={class:"mt-8 space-y-8"},Mt={class:"flex items-center"},Vt={class:"mx-4 text-gray-700"},Ut={class:"flex items-center"},Gt={class:"mx-4 text-gray-700"},qt={class:"flex items-center"},Ht={class:"mx-4 text-gray-700"},zt={class:"flex items-center"},Yt={class:"mx-4 text-gray-700"},Xt={class:"flex items-center"},Qt={class:"mx-4 text-gray-700"},Wt={class:"flex items-center"},Jt={class:"mx-4 text-gray-700"},Kt={class:"transform rounded-lg bg-primary-blue px-6 py-4 shadow transition-colors duration-200"},Zt={class:"text-center"},en={class:"text-3xl font-semibold uppercase text-white"},tn=o("br",null,null,-1),nn={class:"dark:text-gray-400 mt-2 text-gray-100"},rn={class:"mt-4 text-gray-100"},sn={class:"mt-2 animate-pulse text-5xl font-semibold uppercase text-white"},on={class:"mt-4 text-gray-100"},an={class:"mt-8 space-y-8"},ln={class:"flex items-center"},cn={class:"mx-4 text-gray-100"},dn={class:"flex items-center"},pn={class:"mx-4 text-gray-100"},un={class:"flex items-center"},mn={class:"mx-4 text-gray-100"},hn={class:"flex items-center"},fn={class:"mx-4 text-gray-100"},yn={class:"flex items-center"},gn={class:"mx-4 text-gray-100"},vn={class:"flex items-center"},bn={class:"mx-4 text-gray-100"},_n={class:"transform rounded-lg bg-white px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"},En={class:"text-center"},wn={class:"text-3xl font-semibold uppercase text-gray-800"},Sn=o("br",null,null,-1),xn={class:"dark:text-gray-400 mt-2 text-gray-600"},An={class:"mt-4 text-gray-500"},Cn={class:"mt-2 text-5xl font-semibold uppercase text-gray-800"},$n={class:"mt-4 text-gray-500"},kn={class:"mt-8 space-y-8"},Pn={class:"flex items-center"},On={class:"mx-4 text-gray-700"},Tn={class:"flex items-center"},jn={class:"mx-4 text-gray-700"},Ln={class:"flex items-center"},In={class:"mx-4 text-gray-700"},Rn={class:"flex items-center"},Bn={class:"mx-4 text-gray-700"},Dn={class:"flex items-center"},Fn={class:"mx-4 text-gray-700"},Nn={class:"flex items-center"},Mn={class:"mx-4 text-gray-700"},Vn={class:"md:text-md mb-4 h-16 p-4 text-center text-lg"},qn={__name:"Pack",setup(t){return ae(null),ae(null),_e(async()=>{}),(e,s)=>{const n=Se("router-link");return Ee(),we("div",xt,[o("section",At,[o("div",Ct,[o("div",$t,[o("h2",kt,l(e.$t("create-account")),1),o("p",Pt,l(e.$t("register-desc"))+".",1)]),o("div",Ot,[o("div",Tt,[o("div",jt,[o("p",Lt,[k(l(e.$t("pack"))+" ",1),It,k(" "+l(e.$t("particular")),1)]),o("h4",Rt," ("+l(e.$t("physical-person"))+") ",1),o("p",Bt,l(e.$t("essential-features")),1),o("h4",Dt,l(e.$t("free")),1),o("p",Ft,l(e.$t("unlimited")),1)]),o("div",Nt,[o("div",Mt,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Vt,l(e.$t("plan-desc1")),1)]),o("div",Ut,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Gt,l(e.$t("plan-desc2")),1)]),o("div",qt,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Ht,l(e.$t("plan-desc3")),1)]),o("div",zt,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Yt,l(e.$t("plan-desc4")),1)]),o("div",Xt,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Qt,l(e.$t("plan-desc5")),1)]),o("div",Wt,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Jt,l(e.$t("plan-desc6")),1)])]),y(n,{to:{name:"register",params:{type:"particular"}},class:"mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"},{default:Y(()=>[k(l(e.$t("register")),1)]),_:1})]),o("div",Kt,[o("div",Zt,[o("p",en,[k(l(e.$t("pack"))+" ",1),tn,k(" "+l(e.$t("business")),1)]),o("h4",nn," ("+l(e.$t("corporation"))+") ",1),o("p",rn,l(e.$t("advanced-features")),1),o("h4",sn,l(e.$t("free")),1),o("p",on," / "+l(e.$t("recruiter")),1)]),o("div",an,[o("div",ln,[y(b(_),{class:"h-5 w-5 text-white"}),o("span",cn,l(e.$t("plan-desc1")),1)]),o("div",dn,[y(b(_),{class:"h-5 w-5 text-white"}),o("span",pn,l(e.$t("plan-desc2")),1)]),o("div",un,[y(b(_),{class:"h-5 w-5 text-white"}),o("span",mn,l(e.$t("plan-desc3")),1)]),o("div",hn,[y(b(_),{class:"h-5 w-5 text-white"}),o("span",fn,l(e.$t("plan-desc4")),1)]),o("div",yn,[y(b(_),{class:"h-5 w-5 text-white"}),o("span",gn,l(e.$t("plan-desc8")),1)]),o("div",vn,[y(b(_),{class:"h-5 w-5 text-white"}),o("span",bn,l(e.$t("plan-desc7")),1)])]),y(n,{to:{name:"register",params:{type:"business2"}},class:"mt-10 block w-full transform rounded-md bg-white px-4 py-2 text-center font-medium capitalize tracking-wide text-primary-blue transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"},{default:Y(()=>[k(l(e.$t("register")),1)]),_:1})]),o("div",_n,[o("div",En,[o("p",wn,[k(l(e.$t("pack"))+" ",1),Sn,k(" "+l(e.$t("politic")),1)]),o("h4",xn," ("+l(e.$t("ip"))+") ",1),o("p",An,l(e.$t("essential-features")),1),o("h4",Cn,l(e.$t("free")),1),o("p",$n,l(e.$t("unlimited")),1)]),o("div",kn,[o("div",Pn,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",On,l(e.$t("plan-desc1")),1)]),o("div",Tn,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",jn,l(e.$t("plan-desc2")),1)]),o("div",Ln,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",In,l(e.$t("plan-desc3")),1)]),o("div",Rn,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Bn,l(e.$t("plan-desc4")),1)]),o("div",Dn,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Fn,l(e.$t("plan-desc8")),1)]),o("div",Nn,[y(b(_),{class:"h-5 w-5 text-primary-blue"}),o("span",Mn,l(e.$t("plan-desc7")),1)])]),y(n,{to:{name:"register",params:{type:"ip"}},class:"mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"},{default:Y(()=>[k(l(e.$t("register")),1)]),_:1})])])])]),o("div",Vn,[k(l(e.$t("already-signup"))+" ",1),y(n,{class:"text-primary-blue hover:underline",to:{name:"login"}},{default:Y(()=>[k(l(e.$t("login")),1)]),_:1})])])}}};export{qn as default};
