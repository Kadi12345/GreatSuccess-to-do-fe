(function(t){function e(e){for(var a,n,l=e[0],i=e[1],c=e[2],u=0,f=[];u<l.length;u++)n=l[u],o[n]&&f.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,l=1;l<s.length;l++){var i=s[l];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"38ba":function(t,e,s){},"39ed":function(t,e,s){"use strict";s("38ba")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=r(t);return s(e)}function r(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n=s("2877"),l={},i=Object(n["a"])(l,o,r,!1,null,null,null),c=i.exports,d=s("5f5b"),u=s("b1e0"),f=s("310e"),m=s.n(f),p=s("fa33"),b=(s("f9e3"),s("2dd8"),s("8c4f")),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"flex justify-center"},[s("div",{staticClass:"min-h-screen flex overflow-x-scroll py-12"},[s("div",{staticClass:"bg-gray-100 rounded-lg px-3 py-3 column-double-width rounded mr-4"},[s("button",{staticClass:"bg-green-400 px-4 py-2 rounded mb-3",on:{click:t.backToEnterName}},[t._v("\n        Change author\n      ")]),s("p",{staticClass:"text-gray-700 font-semibold font-sans tracking-wide text-sm"},[t._v("\n          Add new todo\n        ")]),s("new-task",{staticClass:"my-3",on:{"task-added":t.getTasks}})],1)]),s("div",{staticClass:"min-h-screen flex overflow-x-scroll py-12"},t._l(t.columns,(function(e){return s("div",{key:e.title,staticClass:"bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"},[s("p",{staticClass:"text-gray-700 font-semibold font-sans tracking-wide text-sm"},[t._v("\n          "+t._s(e.title)+"\n        ")]),s("draggable",{style:{height:e.tasks.length?"":"300px"},attrs:{list:e.tasks,animation:200,"ghost-class":"ghost-card",group:"tasks"},on:{change:function(s){return t.moveTask(s,e)}}},t._l(e.tasks,(function(e){return s("task-card",{key:e.id,staticClass:"mt-3 cursor-move",attrs:{task:e},on:{"task-deleted":t.getTasks}})})),1)],1)})),0)])])},v=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white shadow rounded px-1 pt-2 pb-3 border-2",class:"border-"+t.task.color.toLowerCase()+"-400"},[s("div",{staticClass:"flex justify-between"},[s("p",{staticClass:"text-gray-700 font-semibold font-sans tracking-wide text-sm"},[t._v("\n      Author: "+t._s(t.task.author)+"\n    ")])]),s("div",{staticClass:"flex justify-between"},[s("p",{staticClass:"text-gray-700 font-semibold font-sans tracking-wide text-sm"},[t._v("\n      Task: "+t._s(t.task.title)+"\n    ")])]),s("div",{staticClass:"flex justify-between"},[s("p",[t._v("Due-date:")]),s("span",{staticClass:"text-sm text-gray-600"},[t._v("\n      "+t._s(t.moment(t.task.date).format("DD.MM.YYYY")))]),t.task.priority?s("badge",{attrs:{color:t.badgeColor}},[s("span",{staticClass:"capitalize"},[t._v(t._s(t.task.priority.toLowerCase()))])]):t._e(),s("button",{staticClass:"bg-red-200 px-2 py-2 rounded",on:{click:t.deleteTodo}},[t._v("\n      X\n    ")])],1)])},h=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 h-6 rounded-full text-xs font-semibold flex items-center",class:"bg-"+t.color+"-100 text-"+t.color+"-700"},[s("span",{staticClass:"w-2 h-2 rounded-full mr-1",class:"bg-"+t.color+"-400"}),s("span",[t._t("default")],2)])},y=[],w={props:{color:{type:String,default:"teal"}}},x=w,C=Object(n["a"])(x,k,y,!1,null,null,null),_=C.exports,T=s("c1df"),E=s.n(T),O=s("bc3a"),z=s.n(O),M={components:{Badge:_},props:{task:{priority:Object,default:()=>({})}},computed:{badgeColor(){const t={HIGH:"red",MEDIUM:"yellow",LOW:"green",default:"teal"};return t[this.task.priority]||t.default}},methods:{moment:E.a,async deleteTodo(){await z()({url:"api/deleteTask",method:"DELETE",data:this.task}),this.$emit("task-deleted")}}},D=M,$=Object(n["a"])(D,g,h,!1,null,null,null),A=$.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white shadow rounded px-3 pt-3 pb-5 border border-white"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"author"}},[t._v("Author")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.author,expression:"form.author"}],staticClass:"mt-1 block w-full border-gray p-1",attrs:{type:"text",name:"author"},domProps:{value:t.form.author},on:{input:function(e){e.target.composing||t.$set(t.form,"author",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"mt-1 block w-full border-gray p-1",attrs:{type:"text",name:"title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})])]),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col"},[s("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"first_name"}},[t._v("Date")]),s("datepicker",{staticClass:"block text-sm font-medium text-gray-700 p-1",attrs:{placeholder:"Select Date",format:"dd.MM.yyyy"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)]),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col"},[s("div",{staticClass:"inline-block w-2 h-2 rounded-full mr-2",class:"bg-"+t.priorityColor+"-400"}),s("label",{staticClass:"inline-block text-sm font-medium text-gray-700",attrs:{for:"priority"}},[t._v("Priority")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.priority,expression:"form.priority"}],staticClass:"mt-1 block w-full border-gray p-1",attrs:{name:"priority"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"priority",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"HIGH"}},[t._v("High")]),s("option",{attrs:{value:"MEDIUM"}},[t._v("Medium")]),s("option",{attrs:{value:"LOW"}},[t._v("Low")])])]),s("div",{staticClass:"col"},[s("div",{staticClass:"inline-block w-2 h-2 rounded-full mr-2",class:"bg-"+t.form.color.toLowerCase()+"-400"}),s("label",{staticClass:"inline-block text-sm font-medium text-gray-700",attrs:{for:"color"}},[t._v("Color")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.color,expression:"form.color"}],staticClass:"mt-1 block w-full border-gray p-1",attrs:{name:"color"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"color",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"GRAY"}},[t._v("Gray")]),s("option",{attrs:{value:"BLUE"}},[t._v("Blue")]),s("option",{attrs:{value:"INDIGO"}},[t._v("Indigo")]),s("option",{attrs:{value:"PURPLE"}},[t._v("Purple")]),s("option",{attrs:{value:"PINK"}},[t._v("Pink")])])])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col text-right"},[s("button",{staticClass:"bg-green-400 px-4 py-2 rounded",on:{click:t.addTodo}},[t._v("\n        Add todo\n      ")])])])])},N=[],I={data(){return{form:{author:"",title:"",date:new Date,priority:"MEDIUM",color:"GRAY"}}},components:{Datepicker:p["a"]},computed:{priorityColor(){const t={HIGH:"red",MEDIUM:"yellow",LOW:"green",default:"teal"};return t[this.form.priority]||t.default}},methods:{async addTodo(){await z()({url:"https://greatsuccess-todo.herokuapp.com/api/createTask",method:"POST",data:this.form}),this.$emit("task-added"),this.form={author:"",title:"",date:new Date,priority:"MEDIUM",color:"GRAY"}}}},L=I,G=(s("83a3"),Object(n["a"])(L,P,N,!1,null,"127c842d",null)),S=G.exports,U={name:"App",components:{TaskCard:A,draggable:m.a,NewTask:S},data(){return{columns:[{title:"Todo",tasks:[]},{title:"Done",tasks:[]}]}},async created(){await this.getTasks()},methods:{async getTasks(){const t=await z()({url:"https://greatsuccess-todo.herokuapp.com/api/tasks",method:"GET"});this.columns=t.data},async moveTask(t,e){t.added&&("Done"===e.title?await z()({url:`https://greatsuccess-todo.herokuapp.com/api/moveTask/${t.added.element._id}/done`,method:"GET"}):"Todo"===e.title&&await z()({url:`https://greatsuccess-todo.herokuapp.com/api/moveTask/${t.added.element._id}/todo`,method:"GET"}))},backToEnterName:function(t){this.$router.push("/")}}},Y=U,H=(s("39ed"),Object(n["a"])(Y,j,v,!1,null,"7ed7dafe",null)),B=H.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[s("form",{staticClass:"text-center border border-grey p-5",staticStyle:{"margin-top":"30px",height:"auto","padding-top":"100px !important"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"author",placeholder:"Enter your name here"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),s("center",[s("button",{staticClass:"bg-green-400 px-4 py-2 rounded",attrs:{type:"submit"},on:{click:t.btnClick}},[t._v("\n            View my tasks\n          ")])])],1)])])])},q=[],F={data(){return{author:""}},methods:{btnClick:function(t){this.$router.push("tasks")}}},W=F,J=Object(n["a"])(W,R,q,!1,null,null,null),K=J.exports;a["default"].use(b["a"]);const V=[{path:"/",name:"Your name",components:{default:K}},{path:"/tasks",name:"Your tasks",components:{default:B}}],X=new b["a"]({routes:V,linkActiveClass:"active",mode:"history"});var Q=X,Z=s("9483");const tt=["/","./img/icons/favicon-32x32.png","./img/icons/android-chrome-192x192.png","style/main.css","images/still_life_medium.jpg","index.html","pages/offline.html","pages/404.html"],et="pages-cache-v4";console.log("production"),Object(Z["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered."),self.addEventListener("install",t=>{console.log("Attempting to install service worker and cache static assets"),t.waitUntil(caches.open(et).then(t=>t.addAll(tt)))})},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,a["default"].use(d["a"]),a["default"].use(u["a"]),a["default"].use(m.a),a["default"].use(p["a"]),new a["default"]({render:t=>t(c),router:Q}).$mount("#app")},"83a3":function(t,e,s){"use strict";s("b667")},b667:function(t,e,s){}});
//# sourceMappingURL=app.18556f88.js.map