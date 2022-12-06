(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f36d67a0"],{"01c7":function(e,t,o){"use strict";o("31cd")},"31cd":function(e,t,o){},"34c8":function(e,t,o){},"81cd":function(e,t,o){"use strict";o("34c8")},"9ed6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("期刊投稿系统")])]),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),o("el-form-item",[o("el-button",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v("登陆")]),o("el-button",{staticStyle:{width:"100%",margin:"0px"},attrs:{type:"info"},nativeOn:{click:function(t){t.preventDefault(),e.dialogRegisterFormVisible=!0}}},[e._v("注册")])],1)],1),o("el-dialog",{attrs:{title:"用户注册",visible:e.dialogRegisterFormVisible},on:{"update:visible":function(t){e.dialogRegisterFormVisible=t}}},[o("el-form",{attrs:{model:e.registerForm}},[o("el-form-item",{attrs:{label:"邮箱","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),o("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.registerForm.userName,callback:function(t){e.$set(e.registerForm,"userName",t)},expression:"registerForm.userName"}})],1),o("el-form-item",{attrs:{label:"真名","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.registerForm.realName,callback:function(t){e.$set(e.registerForm,"realName",t)},expression:"registerForm.realName"}})],1),o("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"show-password":"",autocomplete:"off"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogRegisterFormVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.handleRegister}},[e._v("确 定")])],1)],1)],1)},r=[],n=o("c7eb"),a=o("1da1"),i=(o("d9e2"),o("61f7")),l={name:"Login",data:function(){var e=function(e,t,o){Object(i["b"])(t)?o():o(new Error("Please enter the correct user name"))},t=function(e,t,o){t.length<4?o(new Error("The password can not be less than 4 digits")):o()};return{dialogRegisterFormVisible:!1,registerForm:{userName:"",password:"",email:"",realName:""},loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},formLabelWidth:"120px",loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return e.$message.error("登录信息校验不通过"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(Object(a["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$router.push({path:"/"}),t.next=3,e.$store.dispatch("user/getInfo");case 3:e.$goeasy.connect({id:e.$store.getters.userInfo.id,onSuccess:function(){console.log("GoEasy connect successfully.")},onFailed:function(e){console.log("Failed to connect GoEasy, code:"+e.code+",error:"+e.content)},onProgress:function(e){console.log("GoEasy is connecting",e)}}),e.$goeasy.pubsub.subscribe({channel:"my_channel_"+e.$store.getters.userInfo.id,onSuccess:function(){console.log("GoEasy 订阅成功")},onFailed:function(e){console.log("GoEasy 订阅失败: "+e.content)},onMessage:function(e){console.log("GoEasy Channel:"+e.channel+" content:"+e.content)}}),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))).catch((function(){e.loading=!1}))}))},handleRegister:function(){var e=this;return Object(a["a"])(Object(n["a"])().mark((function t(){var o;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/register",e.registerForm);case 2:o=t.sent,200===o.code&&(e.$message.success("注册成功，请登录"),e.dialogRegisterFormVisible=!1);case 4:case"end":return t.stop()}}),t)})))()}}},c=l,u=(o("01c7"),o("81cd"),o("2877")),d=Object(u["a"])(c,s,r,!1,null,"1487c6e4",null);t["default"]=d.exports}}]);