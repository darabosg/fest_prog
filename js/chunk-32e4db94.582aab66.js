(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32e4db94"],{"427d":function(e,t,n){"use strict";var o=n("7a23");function i(e,t,n,i,s,r){const c=Object(o["y"])("ion-title"),a=Object(o["y"])("ion-toolbar"),l=Object(o["y"])("ion-header"),u=Object(o["y"])("refresher"),d=Object(o["y"])("ion-content");return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["j"])(l,null,{default:Object(o["D"])(()=>[Object(o["j"])(a,null,{default:Object(o["D"])(()=>[Object(o["j"])(c,null,{default:Object(o["D"])(()=>[Object(o["i"])(Object(o["A"])(n.title),1)]),_:1})]),_:1})]),_:1}),Object(o["j"])(d,null,{default:Object(o["D"])(()=>[Object(o["j"])(u),Object(o["j"])(l,{collapse:"condense"},{default:Object(o["D"])(()=>[Object(o["j"])(a,null,{default:Object(o["D"])(()=>[Object(o["j"])(c,{size:"large"},{default:Object(o["D"])(()=>[Object(o["i"])(Object(o["A"])(n.title),1)]),_:1})]),_:1})]),_:1}),Object(o["x"])(e.$slots,"content")]),_:3}),Object(o["x"])(e.$slots,"options")],64)}function s(e,t,n,i,s,r){const c=Object(o["y"])("ion-refresher-content"),a=Object(o["y"])("ion-refresher"),l=Object(o["y"])("ion-icon"),u=Object(o["y"])("ion-toast");return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["j"])(a,{slot:"fixed",onIonRefresh:r.doRefresh,"pull-factor":"0.5","pull-min":"50","pull-max":"500","close-duration":"300ms"},{default:Object(o["D"])(()=>[Object(o["j"])(c,{"pulling-icon":s.chevronDownCircleOutline,"pulling-text":"Húzd még!","refreshing-spinner":"circles"},null,8,["pulling-icon"])]),_:1},8,["onIonRefresh"]),Object(o["j"])(u,{"is-open":s.updateExists,message:"Friss tartalom érkezett, húzd lefele, vagy nyomj a frissítésre!",buttons:s.button},{default:Object(o["D"])(()=>[Object(o["j"])(l,{slot:"icon-only",icon:s.refreshOutline},null,8,["icon"])]),_:1},8,["is-open","buttons"])],64)}var r=n("d867"),c=n("ff79"),a={components:{IonRefresher:r["k"],IonRefresherContent:r["l"],IonToast:r["u"],IonIcon:r["f"]},data(){return{chevronDownCircleOutline:c["f"],refreshOutline:c["p"],refreshing:!1,registration:null,updateExists:!1,button:[{side:"end",icon:c["p"],text:"",handler:this.doRefresh}]}},created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",()=>{this.refreshing||(this.refreshing=!0,window.location.reload())})},methods:{updateAvailable(e){this.registration=e.detail,this.updateExists=!0},doRefresh(){setTimeout(()=>{if(this.updateExists){if(this.updateExists=!1,!this.registration||!this.registration.waiting)return;this.registration.waiting.postMessage({type:"SKIP_WAITING"})}else window.location.reload()},300)}}},l=n("d959"),u=n.n(l);const d=u()(a,[["render",s]]);var j=d,b={name:"MainView",props:["title"],components:{IonHeader:r["e"],IonToolbar:r["v"],IonTitle:r["t"],IonContent:r["d"],Refresher:j}};n("aa80");const O=u()(b,[["render",i]]);t["a"]=O},aa80:function(e,t,n){"use strict";n("e063")},e063:function(e,t,n){},ee81:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function i(e,t,n,i,s,r){const c=Object(o["y"])("main-view");return Object(o["s"])(),Object(o["e"])(c,{title:"Előadók"},{content:Object(o["D"])(()=>[]),_:1})}var s=n("427d"),r={name:"Presentations",components:{MainView:s["a"]}},c=n("d959"),a=n.n(c);const l=a()(r,[["render",i]]);t["default"]=l}}]);
//# sourceMappingURL=chunk-32e4db94.582aab66.js.map