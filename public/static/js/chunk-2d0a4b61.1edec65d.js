(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4b61"],{"0836":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PaperTable",{on:{"open-paper-detail":e.openPaperDetail},scopedSlots:e._u([{key:"column",fn:function(){},proxy:!0},{key:"option",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return n.stopPropagation(),e.handleAccept(t.scope.$index,t.scope.row)}}},[e._v("同意")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return n.stopPropagation(),e.handleRefuse(t.scope.$index,t.scope.row)}}},[e._v("拒绝 ")])]}}])}),n("el-dialog",{attrs:{title:"论文详情",visible:e.dialogPaperDetailVisible,width:"80%"},on:{"update:visible":function(t){e.dialogPaperDetailVisible=t}}},[n("ReviewerPaperDetail",{ref:"ReviewerPaperDetail",attrs:{submitid:e.submitid,mode:3}})],1)],1)},r=[],a=n("c7eb"),c=n("1da1"),s=n("5530"),o=n("2f62"),u=n("d95a"),l=n("9e34"),p={name:"ReviewerInvites",components:{PaperTable:u["a"],ReviewerPaperDetail:l["a"]},data:function(){return{dialogPaperDetailVisible:!1,submitid:0}},computed:Object(s["a"])({},Object(o["b"])([])),created:function(){return Object(c["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getData:function(e){var t=this;return Object(c["a"])(Object(a["a"])().mark((function n(){var i,r,c,s;return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.curPage,r=void 0===i?1:i,c=e.limit,s=void 0===c?10:c,n.next=3,t.$API.reviewerGetInvites({curPage:r,limit:s});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},openPaperDetail:function(e){this.submitid=e,this.dialogPaperDetailVisible=!0},handleAccept:function(e,t){var n=this;return Object(c["a"])(Object(a["a"])().mark((function e(){var i;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$API.reviewerHandleInvites({reviewerInviteId:t.reviewerInviteId,result:0});case 2:return i=e.sent,200===i.code&&n.$message.success("同意成功"),e.next=6,n.$children[0].getData({curPage:n.$children[0].pagination.curPage,limit:n.$children[0].pagination.pageSize});case 6:case"end":return e.stop()}}),e)})))()},handleRefuse:function(e,t){var n=this;return Object(c["a"])(Object(a["a"])().mark((function e(){var i;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$API.reviewerHandleInvites({reviewerInviteId:t.reviewerInviteId,result:1});case 2:return i=e.sent,200===i.code&&n.$message.success("拒绝成功"),console.log(n.$children),e.next=7,n.$children[0].getData({curPage:n.$children[0].pagination.curPage,limit:n.$children[0].pagination.pageSize});case 7:case"end":return e.stop()}}),e)})))()}}},d=p,v=n("2877"),b=Object(v["a"])(d,i,r,!1,null,null,null);t["default"]=b.exports}}]);