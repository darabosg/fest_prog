(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d374d"],{"5d9a":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=Object(o["i"])("Előadások"),j=Object(o["i"])("Előadások");function i(e,t,n,i,s,r){const l=Object(o["w"])("ion-title"),a=Object(o["w"])("ion-toolbar"),b=Object(o["w"])("ion-header"),O=Object(o["w"])("refresher"),d=Object(o["w"])("ion-item"),u=Object(o["w"])("ion-list"),f=Object(o["w"])("ion-content"),h=Object(o["w"])("ion-page");return Object(o["s"])(),Object(o["e"])(h,null,{default:Object(o["A"])(()=>[Object(o["j"])(b,null,{default:Object(o["A"])(()=>[Object(o["j"])(a,null,{default:Object(o["A"])(()=>[Object(o["j"])(l,null,{default:Object(o["A"])(()=>[c]),_:1})]),_:1})]),_:1}),Object(o["j"])(f,{fullscreen:!0},{default:Object(o["A"])(()=>[Object(o["j"])(O),Object(o["j"])(b,{collapse:"condense"},{default:Object(o["A"])(()=>[Object(o["j"])(a,null,{default:Object(o["A"])(()=>[Object(o["j"])(l,{size:"large"},{default:Object(o["A"])(()=>[j]),_:1})]),_:1})]),_:1}),Object(o["j"])(u,null,{default:Object(o["A"])(()=>[Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d),Object(o["j"])(d)]),_:1})]),_:1})]),_:1})}function s(e,t,n,c,j,i){const s=Object(o["w"])("ion-refresher-content"),r=Object(o["w"])("ion-refresher"),l=Object(o["w"])("ion-icon"),a=Object(o["w"])("ion-toast");return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["j"])(r,{slot:"fixed",onIonRefresh:i.doRefresh,"pull-factor":"0.5","pull-min":"100","pull-max":"500","close-duration":"300ms"},{default:Object(o["A"])(()=>[Object(o["j"])(s,{"pulling-icon":j.chevronDownCircleOutline,"pulling-text":"Pull to refresh","refreshing-spinner":"circles","refreshing-text":"Refreshing..."},null,8,["pulling-icon"])]),_:1},8,["onIonRefresh"]),Object(o["j"])(a,{"is-open":j.updateExists,message:"Friss tartalom érkezett, húzd lefele, vagy nyomj a frissítésre!",buttons:j.button},{default:Object(o["A"])(()=>[Object(o["j"])(l,{slot:"icon-only",icon:j.refreshOutline},null,8,["icon"])]),_:1},8,["is-open","buttons"])],64)}var r=n("d867"),l=n("ff79"),a={components:{IonRefresher:r["l"],IonRefresherContent:r["m"],IonToast:r["t"],IonIcon:r["f"]},data(){return{chevronDownCircleOutline:l["e"],refreshOutline:l["o"],refreshing:!1,registration:null,updateExists:!1,button:[{side:"end",icon:l["o"],text:"",handler:this.doRefresh}]}},created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",()=>{this.refreshing||(this.refreshing=!0,window.location.reload())})},methods:{updateAvailable(e){this.registration=e.detail,this.updateExists=!0},doRefresh(){this.updateExists||setTimeout(()=>{window.location.reload()},300),this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},b=n("d959"),O=n.n(b);const d=O()(a,[["render",s]]);var u=d,f={name:"Presentations",components:{IonHeader:r["e"],IonToolbar:r["u"],IonTitle:r["s"],IonContent:r["d"],IonPage:r["k"],IonList:r["i"],IonItem:r["g"],Refresher:u}};const h=O()(f,[["render",i]]);t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0d374d.4d426a2c.js.map