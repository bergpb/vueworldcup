webpackJsonp([1],{"7zck":function(t,r){},NHnr:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("7+uW"),a={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",[e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[e("v-list",[e("v-list-tile")],1)],1),t._v(" "),e("v-toolbar",{attrs:{color:"red accent-4",app:"","clipped-left":t.clipped}},[e("v-toolbar-side-icon",{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer")],1),t._v(" "),e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]},o=e("VU/8")({data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!1,rightDrawer:!1,title:"WorldCup Results 2018"}},name:"App"},a,!1,null,null,null).exports,i=e("/ocq"),l={data:function(){return{worldcups:null,loading:!0,errored:!1,error:null}},mounted:function(){var t=this;fetch("https://worldcupresults.herokuapp.com/api/worldcup").then(function(t){return t.json()}).then(function(r){t.worldcups=r.worldcup.reverse()}).catch(function(r){t.error=r,console.log("Erro: "+r),t.errored=!0}).finally(function(){return t.loading=!1})}},s={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.loading?e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"red"}})],1)],1)],1)],1):t.errored?e("div",[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center"},[e("h2",[t._v("Ops encontramos um erro!")])])],1)],1)],1):e("v-card",[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-slide-y-transition",{attrs:{mode:"out-in"}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.worldcups,function(r){return e("v-flex",{key:r.id,attrs:{xs6:""}},[e("v-card",{staticClass:"default",attrs:{color:"blue-grey lighten-4",height:"100%"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v(t._s(r.countries))]),t._v(" "),e("v-card-text",[e("v-icon",[t._v("poll")]),t._v(" "+t._s(r.result)),e("br"),t._v(" "),e("v-icon",[t._v("timer")]),t._v(" "+t._s(r.status)),e("br"),t._v(" "),e("v-icon",[t._v("stars")]),t._v(" "+t._s(r.winner)),e("br"),t._v(" "),e("v-icon",[t._v("calendar_today")]),t._v(" "+t._s(r.date)),e("br"),t._v(" "),e("v-icon",[t._v("location_on")]),t._v(" "+t._s(r.localization)),e("br")],1)],1)],1)],1)}))],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(l,s,!1,function(t){e("vaKb")},"data-v-b5909dde",null).exports;n.a.use(i.a);var v=new i.a({routes:[{path:"/",name:"Home",component:c}]}),d=e("3EgV"),u=e.n(d);e("7zck");n.a.use(u.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:o},template:"<App/>"})},vaKb:function(t,r){}},["NHnr"]);
//# sourceMappingURL=app.d863ddff0b5587aa399c.js.map