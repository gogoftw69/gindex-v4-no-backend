(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c2f8bae","chunk-2d0babe1"],{3905:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},a=[],n=e("2877"),c={},l=Object(n["a"])(c,i,a,!1,null,null,null);s["default"]=l.exports},"7b6e":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section"},[e("TopLinks"),e("div",{staticClass:"columns is-mobile is-centered"},[e("div",{staticClass:"field is-grouped-multiline"},[e("div",{staticClass:"control"},[e("div",{staticClass:"loading"},[e("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(s){t.loading=s}}})],1),t.logged?e("div",{staticClass:"tags-has-addons mt-3"},[e("div",{staticClass:"container has-text-white is-fluid"},[e("h1",{staticClass:"title has-text-white has-text-centered"},[t._v("Hey There, Whaat up? "),e("p",{staticClass:"has-text-info is-italic has-text-weight-bold is-family-monospace"},[t._v(t._s(t.user.name))])]),e("article",{staticClass:"message is-danger"},[t._m(0),e("div",{staticClass:"message-body"},[t._v(" Remember!! Your Token will Expire on "),e("strong",[e("em",[t._v(t._s(t._f("moment")(t.tokendata.expirydate,"dddd, MMMM Do YYYY [at] hh:mm A")))])])])]),e("div",{staticClass:"tile is-ancestor has-text-centered"},[e("div",{staticClass:"tile is-6 is-vertical is-parent"},[e("div",{staticClass:"tile is-child notification is-primary box"},[e("p",{staticClass:"title has-text-dark"},[t._v("Currently You are..")]),e("div",{staticClass:"content"},[e("p",{staticClass:"subtitle"},[t._v(t._s(t.user.role))]),t.logged&&t.admin&&t.superadmin?e("p",{staticClass:"has-text-black is-italic has-text-weight-semibold is-family-monospace"},[t._v("You have Maximum Access to this Website")]):t._e(),!t.logged||t.superadmin||t.admin?t._e():e("button",{staticClass:"button is-danger is-light mb-3",on:{click:function(s){return t.gotoPage("/0:register/request/admin/")}}},[t._v("Request Admin Access")]),t.logged&&t.admin&&!t.superadmin?e("button",{staticClass:"button is-danger is-light",on:{click:function(s){return t.gotoPage("/0:register/request/superadmin/")}}},[t._v("Request Super Admin Access")]):t._e()])]),e("div",{staticClass:"tile is-child notification is-warning box"},[e("p",{staticClass:"title"},[t._v("Your Email..")]),e("div",{staticClass:"content"},[e("p",{staticClass:"subtitle"},[t._v(t._s(t.user.email))]),t.logged?e("button",{staticClass:"button is-danger is-light",on:{click:function(s){return t.gotoPage("/0:settings/changepassword/")}}},[t._m(1),e("span",[t._v("Change Your Password")])]):t._e()])])]),e("div",{staticClass:"tile is-parent is-vertical"},[e("div",{staticClass:"tile is-child notification is-success box"},[e("p",{staticClass:"title"},[t._v("Quick Access")]),e("div",{staticClass:"columns is-multiline is-vcentered is-centered"},[t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-success is-light",on:{click:function(s){return t.gotoPage("/0:/Anime/")}}},[t._m(2),e("span",[t._v("Anime")])])]):t._e(),t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-success is-light",on:{click:function(s){return t.gotoPage("/0:/Movies/")}}},[t._m(3),e("span",[t._v("The Cinema :-)")])])]):t._e(),t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-success is-light",on:{click:function(s){return t.gotoPage("/0:/Series/")}}},[t._m(4),e("span",[t._v("TV Series")])])]):t._e(),t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-success is-light",on:{click:function(s){return t.gotoPage("/0:/Courses/")}}},[t._m(5),e("span",[t._v("Courses")])])]):t._e(),t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-success is-light",on:{click:function(s){return t.gotoPage("/0:/Music/")}}},[t._m(6),e("span",[t._v("Music")])])]):t._e(),t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-success is-light",on:{click:function(s){return t.gotoPage("/0:/")}}},[t._m(7),e("span",[t._v("View Full List")])])]):t._e()])]),e("div",{staticClass:"tile is-child notification is-danger box"},[e("p",{staticClass:"title"},[t._v("Personal")]),e("div",{staticClass:"columns is-multiline is-vcentered is-centered"},[t.logged?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-danger is-light",on:{click:function(s){return t.gotoPage("/0:settings/")}}},[t._m(8),e("span",[t._v("Go to my Settings")])])]):t._e(),t.logged&&t.admin?e("div",{staticClass:"column is-half"},[e("button",{staticClass:"button is-danger is-light",on:{click:function(s){return t.gotoPage("/0:admin/")}}},[t._m(9),e("span",[t._v("Your Admin Panel")])])]):t._e()])])])])])]):e("div",{staticClass:"tags-has-addons mt-3"},[e("div",{staticClass:"container has-text-white is-fluid"},[t._m(10),t._m(11),e("div",{staticClass:"columns is-multiline is-centered  has-text-centered"},[t._m(12),e("div",{staticClass:"column is-quarter"},[e("button",{staticClass:"button is-outlined is-medium is-success is-rounded",on:{click:function(s){return t.gotoPage("/0:login/")}}},[t._m(13),e("span",[t._v("Login")])])]),e("div",{staticClass:"column is-quarter"},[e("button",{staticClass:"button is-outlined is-medium is-warning is-rounded",on:{click:function(s){return t.gotoPage("/0:register/request/user")}}},[t._m(14),e("span",[t._v("Request Access")])])]),e("div",{staticClass:"column is-quarter"},[e("button",{staticClass:"button is-outlined is-medium is-danger is-rounded",on:{click:function(s){return t.gotoPage("/0:register/otp/")}}},[t._m(15),e("span",[t._v("Register with OTP")])])])])])])])])])],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message-header"},[e("p",[t._v("Token Details")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-cog"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-heart"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-video"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-tv"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-glasses"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-play"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-folder-open"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-cog"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-users-cog"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"title has-text-white has-text-centered"},[t._v("Ah! You "),e("p",{staticClass:"has-text-info is-italic has-text-weight-bold is-family-monospace"},[t._v("Anonymous !!")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",{staticClass:"message is-danger has-text-centered"},[e("div",{staticClass:"message-header"},[e("p",[t._v("Important")])]),e("div",{staticClass:"message-body"},[e("strong",[e("p",[t._v("You are Not Registered / Logged in. Please Login to Continue")]),e("p",[t._v("If You Have OTP, then Register with OTP.")])]),e("p",[t._v("If You are Not Registered, Please Request Access to Get OTP through Email")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-full"},[e("p",{staticClass:"subtitle has-text-white"},[t._v(" Quick Links ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fas fa-power-off"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fas fa-user-check"})])}],n=(e("fb6a"),e("d3b7"),e("25f0"),e("3905")),c=e("9062"),l=e.n(c),o=(e("e40d"),{components:{TopLinks:n["default"],Loading:l.a},data:function(){return{user:{},tokendata:{},truncatedApi:"",logged:!1,admin:!1,superadmin:!1,loading:!0,fullpage:!0}},methods:{gotoPage:function(t){this.$router.push({name:"results",params:{id:0,cmd:"result",success:!0,data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:t}})}},created:function(){var t=this,s=localStorage.getItem("tokendata"),e=localStorage.getItem("userdata");if(null!=e&&null!=s){var i=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8)),a=JSON.parse(this.$hash.AES.decrypt(e,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:i.token}).then((function(e){e.data.auth||e.data.registered||null!=e.data.tokenuser?a.admin&&a.superadmin?(t.superadmin=!0,t.admin=!0,t.user=a,t.tokendata=i,t.truncatedApi=i.token.slice(0,10)+"......."+s.slice(s.length-6,s.length-1),t.logged=!0,setTimeout((function(){t.loading=!1}),1e3)):a.admin&&!a.superadmin?(t.admin=!0,t.user=a,t.tokendata=i,t.truncatedApi=i.token.slice(0,10)+"......."+s.slice(s.length-6,s.length-1),t.logged=!0,setTimeout((function(){t.loading=!1}),1e3)):(t.user=a,t.tokendata=i,t.truncatedApi=i.token.slice(0,10)+"......."+s.slice(s.length-6,s.length-1),t.logged=!0,setTimeout((function(){t.loading=!1}),1e3)):(t.loading=!1,t.$router.push({name:"results",params:{id:0,cmd:"result",success:!1,data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}}))}))}else this.logged=!1,this.loading=!1}}),r=o,u=e("2877"),d=Object(u["a"])(r,i,a,!1,null,null,null);s["default"]=d.exports},fb6a:function(t,s,e){"use strict";var i=e("23e7"),a=e("861d"),n=e("e8b5"),c=e("23cb"),l=e("50c4"),o=e("fc6a"),r=e("8418"),u=e("b622"),d=e("1dde"),g=e("ae40"),m=d("slice"),f=g("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),v=[].slice,p=Math.max;i({target:"Array",proto:!0,forced:!m||!f},{slice:function(t,s){var e,i,u,d=o(this),g=l(d.length),m=c(t,g),f=c(void 0===s?g:s,g);if(n(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)?a(e)&&(e=e[h],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return v.call(d,m,f);for(i=new(void 0===e?Array:e)(p(f-m,0)),u=0;m<f;m++,u++)m in d&&r(i,u,d[m]);return i.length=u,i}})}}]);