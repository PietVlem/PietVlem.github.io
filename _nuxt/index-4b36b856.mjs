import{b as Q,_ as D,u as N,r as k,d as T,e as O,o as i,c,a as o,F as $,f as b,w as V,v as W,t as h,g as A,h as I,n as E}from"./entry-7399b6c8.mjs";var w=Q.exports;const z={setup(q,{expose:f}){f();const S=N(),r=k(""),n=T({regions:[],products:[]}),a=k({total_pages:1,current_page:1}),t=k([]),l=k([]),v=k([]),d=`${S.MINDSWEEP_API_BASEURL}/api/v2/mechstores.json`;let x;function m(s){let e="";if(Object.keys(s).length!==0){for(const[u,y]of Object.entries(s))e=`${e}&${u}=${y}`;e=e.replace("&","?")}return e}function P(){const s=new URLSearchParams;return n.regions.forEach(e=>{s.append("filters[region][]",e)}),n.products.forEach(e=>{s.append("filters[shopProducts][]",e)}),decodeURIComponent(s.toString())}function p(s){console.log(s),w({url:s,method:"get"}).then(e=>{var u;e.status===200&&((u=e==null?void 0:e.data)==null?void 0:u.mechstores)?(t.value=e.data.mechstores,a.value=e.data.meta.pagination):console.error("Error loading posts",e)})}function j(s,e){n[s].includes(e)?n[s]=n.regions.filter(g=>g!==e):n[s].push(e),a.value.current_page=1;const u=m({page:a.value.current_page}),y=P(),_=`${location.pathname}?${y}`;history.replaceState({},"",_),p(`${d}${u}&${y}`)}function B(){if(a.value.current_page!==a.value.total_pages){a.value.current_page+=1;const s=m({page:a.value.current_page}),e=P();p(`${d}${s}&${e}`),window.scrollTo(0,0)}}function L(){if(a.value.current_page>1){a.value.current_page-=1;const s=m({page:a.value.current_page}),e=P();p(`${d}${s}&${e}`),window.scrollTo(0,0)}}function M(){clearTimeout(x),x=setTimeout(()=>{n.regions=[],n.products=[];const s=m({search:r.value});history.replaceState({},"",`${location.pathname}${s}`),p(`${d}${s}`)},750)}async function C(){const s=window.location.search;if(s!==""){let e=new URLSearchParams(s);for(const[_,g]of e)switch(console.log(_,g),_){case"search":r.value=g;break;case"page":a.current_page=g;break;default:if(!["page","search"].includes(_)){const U=_.substring(8,_.length-3);switch(U){case"region":n.regions.push(+g);break;case"shopProducts":n.products.push(+g);break;default:console.log(`${U} not found`)}}break}const u=m({search:r.value,page:a.value.current_page}),y=P();await p(`${d}${u}&${y}`)}else p(d)}async function R(){const s=await w.get(`${S.MINDSWEEP_API_BASEURL}/api/v1/regions.json`);l.value=s.data.regions;const e=await w.get(`${S.MINDSWEEP_API_BASEURL}/api/v1/shopProducts.json`);v.value=e.data.shopProducts}O(async()=>{R(),C()});const F={config:S,search:r,activeFilters:n,pagination:a,mechstores:t,mechstoreRegions:l,mechstoreProducts:v,baseApiUrl:d,timer:x,createQueryString:m,createParamsQueryString:P,makeStoresApiCall:p,toggleFilter:j,nextPage:B,prevPage:L,searchStores:M,getPosts:C,getFilters:R,axios:w};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}},G={class:"store-list g-mb"},H={class:"g-px"},J={class:"row-xl"},K={class:"filters-wrapper"},X={class:"store-filters"},Y={class:"store-filters__region"},Z=o("h3",null,"Region",-1),ee=["onClick"],te={class:"store-filters__product-types"},se=o("h3",null,"Product type",-1),oe={"data-filter-group":"product"},re=["onClick"],ae={class:"search-from"},ne={"data-filter-group":""},ie=o("label",{class:"hidden",for:"search-input"},null,-1),ce={class:"stores"},le=["id","href"],ue={class:"store-snippet"},de={key:0,class:"store-snippet__country"},pe={class:"store-snippet__image-wrapper"},_e=["alt","src"],ge={class:"store-snippet__title"},he={class:"store-snippet__products"},fe={key:0,class:"pagination"},ve={class:"pagination__pages"};function me(q,f,S,r,n,a){return i(),c("div",G,[o("section",H,[o("div",J,[o("div",K,[o("form",X,[o("div",Y,[Z,o("fieldset",null,[(i(!0),c($,null,b(r.mechstoreRegions,(t,l)=>(i(),c("div",{class:"form-group",key:l},[o("button",{onClick:I(v=>r.toggleFilter("regions",t.id),["prevent"]),class:E([`region-${t.slug}`,{active:r.activeFilters.regions.includes(t.id)}])},h(t.title),11,ee)]))),128))])]),o("div",te,[se,o("fieldset",oe,[(i(!0),c($,null,b(r.mechstoreProducts,(t,l)=>(i(),c("div",{class:"form-group",key:l},[o("button",{onClick:I(v=>r.toggleFilter("products",t.id),["prevent"]),class:E([`product-type-${t.slug}`,{active:r.activeFilters.products.includes(t.id)}])},h(t.title),11,re)]))),128))])])]),o("form",ae,[o("div",ne,[ie,V(o("input",{onInput:f[0]||(f[0]=t=>r.searchStores()),"data-search-attribute":"data-name","onUpdate:modelValue":f[1]||(f[1]=t=>r.search=t),type:"search",placeholder:"search...",id:"search-input"},null,544),[[W,r.search]])])])]),o("div",ce,[(i(!0),c($,null,b(r.mechstores,t=>(i(),c("a",{key:t.id,id:`store-${t.id}`,class:E(["stores__single",t.region.slug]),href:t.url,target:"_blank"},[o("article",ue,[t.country?(i(),c("span",de,h(t.country),1)):A("",!0),o("div",pe,[o("img",{alt:`image for ${t.title}`,src:t.logo},null,8,_e)]),o("h2",ge,h(t.title),1),o("div",he,[(i(!0),c($,null,b(t.shopProducts,(l,v)=>(i(),c("span",{key:v},h(l.title),1))),128))])])],10,le))),128))]),r.pagination.total_pages>1?(i(),c("div",fe,[o("button",{onClick:r.prevPage},"prev"),o("span",ve,h(r.pagination.current_page)+"/"+h(r.pagination.total_pages),1),o("button",{onClick:r.nextPage},"next")])):A("",!0)])])])}var Se=D(z,[["render",me]]);export{Se as default};
