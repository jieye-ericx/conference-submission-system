(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bce44"],{"2a54":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("PaperTable",{on:{"open-paper-detail":e.openPaperDetail},scopedSlots:e._u([{key:"column",fn:function(){return[i("el-table-column",{attrs:{align:"center",prop:"firstAuthor",label:"第一作者",width:"100"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",prop:"inviteNum",label:"可分配审稿人"}})]},proxy:!0},{key:"option",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary",plain:""}},[e._v(" 分配 ")])]}}])}),i("el-dialog",{attrs:{title:"论文详情",visible:e.dialogPaperDetailVisible,width:"80%"},on:{"update:visible":function(t){e.dialogPaperDetailVisible=t}}},[i("AdminPaperDetail",{attrs:{submitid:e.submitid}})],1)],1)},n=[],r=i("c7eb"),l=i("1da1"),o=i("5530"),u=i("2f62"),c=i("d95a"),s=i("1d21"),p={name:"AdminAllocate",components:{PaperTable:c["a"],AdminPaperDetail:s["a"]},data:function(){return{dialogPaperDetailVisible:!1,submitid:0}},computed:Object(o["a"])({},Object(u["b"])([])),created:function(){return Object(l["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getData:function(e){var t=this;return Object(l["a"])(Object(r["a"])().mark((function i(){var a,n,l,o,u,c;return Object(r["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.curPage,n=void 0===a?1:a,l=e.limit,o=void 0===l?10:l,u=e.status,c=void 0===u?10:u,i.next=3,t.$API.adminPaperList({curPage:n,limit:o,status:c});case 3:return i.abrupt("return",i.sent);case 4:case"end":return i.stop()}}),i)})))()},openPaperDetail:function(e){this.submitid=e,this.dialogPaperDetailVisible=!0},handleReject:function(e,t){console.log("tuihui")}}},d=p,b=i("2877"),m=Object(b["a"])(d,a,n,!1,null,null,null);t["default"]=m.exports}}]);