webpackJsonp([0],{"7zck":function(t,r){},"9h8y":function(t,r){},BwML:function(t,r){},"FC+e":function(t,r){},IW8V:function(t,r,e){t.exports=e.p+"static/img/worldcup_logo.a1a49d8.png"},NHnr:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("v-app",[a("v-toolbar",{attrs:{color:"blue darken-1",app:""}},[a("v-avatar",[a("img",{attrs:{src:e("IW8V")}})]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{to:"/current",flat:""}},[t._v("\n        Current\n      ")]),t._v(" "),a("v-btn",{attrs:{to:"/last",flat:""}},[t._v("\n        Last\n      ")]),t._v(" "),a("v-btn",{attrs:{to:"/future",flat:""}},[t._v("\n        Future\n      ")])],1)],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-footer",{attrs:{fixed:"",height:"auto"}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"","py-1":"","text-xs-center":""}},[a("strong",[t._v("WorldCup Results - Made with "),a("v-icon",{attrs:{color:"red"}},[t._v("favorite")]),t._v(" by bergpb")],1)])],1)],1)],1)},staticRenderFns:[]},o=e("VU/8")({data:function(){return{title:"WorldCup 2018",fixed:!0}},name:"App"},n,!1,null,null,null).exports,s=e("/ocq"),i={render:function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[r("v-flex",{staticClass:"text-xs-center"},[r("h1",[this._v("Follow worldcup results in your mobile.")]),this._v(" "),r("h4",[this._v("App made with VueJs and Python.")])])],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(null,i,!1,function(t){e("9h8y")},"data-v-7a6ec7e2",null).exports,c={data:function(){return{worldcups:null,loading:!0,errored:!1,error:null}},methods:{updateData:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/worldcup").then(function(t){return t.json()}).then(function(r){t.worldcups=r.worldcup.reverse()}).catch(function(r){t.error=r,console.log("Erro: "+r),t.errored=!0}).finally(function(){return t.loading=!1})}},filters:{datalize:function(t){return t?(t=new Date(t)).toLocaleTimeString()+" - "+t.toLocaleDateString():""}},mounted:function(){this.updateData()}},u={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.loading?e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}})],1)],1)],1):t.errored?e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("h2",[t._v("Ops fail to get data! ")])])],1)],1):e("v-card",[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-slide-y-transition",{attrs:{mode:"out-in"}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.worldcups,function(r){return e("v-flex",{directives:[{name:"show",rawName:"v-show",value:"completed"===r.status,expression:"worldcup.status === 'completed'"}],key:r.id,attrs:{xs12:"",sm6:"",md3:"",lg3:"",xl3:""}},[e("v-card",{staticClass:"default",attrs:{color:"blue-grey lighten-4",height:"100%"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v(t._s(r.countries))]),t._v(" "),e("v-card-text",[e("v-icon",[t._v("poll")]),t._v(" "+t._s(r.result)),e("br"),t._v(" "),e("v-icon",[t._v("timer")]),t._v(" "+t._s(r.status)),e("br"),t._v(" "),e("v-icon",[t._v("stars")]),t._v(" "+t._s(r.winner)),e("br"),t._v(" "),e("v-icon",[t._v("calendar_today")]),t._v(" "+t._s(t._f("datalize")(r.date))),e("br"),t._v(" "),e("v-icon",[t._v("location_on")]),t._v(" "+t._s(r.localization)),e("br")],1)],1)],1)],1)}))],1)],1)],1)},staticRenderFns:[]};var v=e("VU/8")(c,u,!1,function(t){e("FC+e")},"data-v-10cd22d4",null).exports,d={data:function(){return{worldcups:null,loading:!0,errored:!1,error:null}},filters:{datalize:function(t){return t?(t=new Date(t)).toLocaleTimeString()+" - "+t.toLocaleDateString():""}},methods:{updateData:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/future").then(function(t){return t.json()}).then(function(r){t.worldcups=r.worldcup}).catch(function(r){t.error=r,console.log("Erro: "+r),t.errored=!0}).finally(function(){return t.loading=!1})}},mounted:function(){this.updateData()}},p={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.loading?e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}})],1)],1)],1)],1):t.errored?e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("h2",[t._v("Ops fail to get data!")])])],1)],1)],1):e("v-card",[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-slide-y-transition",{attrs:{mode:"out-in"}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.worldcups,function(r){return e("v-flex",{key:r.id,attrs:{xs12:"",sm6:"",md3:"",lg3:"",xl3:""}},[e("v-card",{staticClass:"default",attrs:{color:"blue-grey lighten-4",height:"100%"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v(t._s(r.countries))]),t._v(" "),e("v-card-text",[e("v-icon",[t._v("calendar_today")]),t._v(" "+t._s(t._f("datalize")(r.date))),e("br"),t._v(" "),e("v-icon",[t._v("location_on")]),t._v(" "+t._s(r.localization)),e("br")],1)],1)],1)],1)}))],1)],1)],1)},staticRenderFns:[]};var f=e("VU/8")(d,p,!1,function(t){e("mZAR")},"data-v-a44b44cc",null).exports,h={data:function(){return{worldcups:null,loading:!0,errored:!1,error:null}},methods:{updateData:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/worldcup").then(function(t){return t.json()}).then(function(r){t.worldcups=r.worldcup.reverse()}).catch(function(r){t.error=r,console.log("Erro: "+r),t.errored=!0}).finally(function(){return t.loading=!1})}},mounted:function(){this.updateData()}},_={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.loading?e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}})],1)],1)],1)],1):t.errored?e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("h2",[t._v("Ops fail to get data!")])])],1)],1)],1):e("div",[e("v-container",{attrs:{"fill-height":""}},["in progress"===t.worldcups[0].status?e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.worldcups,function(r){return e("v-flex",{directives:[{name:"show",rawName:"v-show",value:"in progress"===r.status,expression:"worldcup.status === 'in progress'"}],key:r.id,staticClass:"text-xs-center"},[e("h1",[e("strong",[t._v(t._s(r.countries))])]),t._v(" "),e("div",[e("v-icon",[t._v("poll")]),t._v(" "+t._s(r.result))],1),t._v(" "),e("div",[e("v-icon",[t._v("timer")]),t._v(" "+t._s(r.status))],1),t._v(" "),e("div",{staticStyle:{"padding-top":"10%"}})])})):e("v-layout",[e("v-flex",{staticClass:"text-xs-center"},[e("h2",[t._v("No matches in progress.")])])],1)],1)],1)},staticRenderFns:[]};var w=e("VU/8")(h,_,!1,function(t){e("BwML")},"data-v-f247ca1c",null).exports;a.a.use(s.a);var g=new s.a({routes:[{path:"/",name:"Home",component:l},{path:"/last",name:"Last",component:v},{path:"/future",name:"Future",component:f},{path:"/current",name:"Current",component:w}]}),m=e("3EgV"),x=e.n(m);e("7zck");a.a.use(x.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},mZAR:function(t,r){}},["NHnr"]);
//# sourceMappingURL=app.ab02c936718e4a139836.js.map