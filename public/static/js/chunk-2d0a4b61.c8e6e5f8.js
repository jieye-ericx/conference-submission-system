(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4b61"],{"0836":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PaperTable",{on:{"open-paper-detail":e.openPaperDetail},scopedSlots:e._u([{key:"column",fn:function(){},proxy:!0},{key:"option",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return n.stopPropagation(),e.handleAccept(t.scope.$index,t.scope.row)}}},[e._v("同意")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return n.stopPropagation(),e.handleRefuse(t.scope.$index,t.scope.row)}}},[e._v("拒绝 ")])]}}])}),n("el-dialog",{attrs:{title:"论文详情",visible:e.dialogPaperDetailVisible,width:"80%"},on:{"update:visible":function(t){e.dialogPaperDetailVisible=t}}},[n("ReviewerPaperDetail",{ref:"ReviewerPaperDetail",attrs:{submitid:e.submitid,mode:3}})],1)],1)},i=[],a=n("1da1"),c=n("5530"),o=(n("96cf"),n("2f62")),s=n("d95a"),u=n("9e34"),l={name:"ReviewerInvites",components:{PaperTable:s["a"],ReviewerPaperDetail:u["a"]},data:function(){return{dialogPaperDetailVisible:!1,submitid:0}},computed:Object(c["a"])({},Object(o["b"])([])),created:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getData:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.curPage,i=void 0===r?1:r,a=e.limit,c=void 0===a?10:a,n.next=3,t.$API.reviewerGetInvites({curPage:i,limit:c});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},openPaperDetail:function(e){this.submitid=e,this.dialogPaperDetailVisible=!0},handleAccept:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$API.reviewerHandleInvites({reviewerInviteId:t.reviewerInviteId,result:0});case 2:return r=e.sent,200===r.code&&n.$message.success("同意成功"),e.next=6,n.$children[0].getData({curPage:n.$children[0].pagination.curPage,limit:n.$children[0].pagination.pageSize});case 6:case"end":return e.stop()}}),e)})))()},handleRefuse:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$API.reviewerHandleInvites({reviewerInviteId:t.reviewerInviteId,result:1});case 2:return r=e.sent,200===r.code&&n.$message.success("拒绝成功"),console.log(n.$children),e.next=7,n.$children[0].getData({curPage:n.$children[0].pagination.curPage,limit:n.$children[0].pagination.pageSize});case 7:case"end":return e.stop()}}),e)})))()}}},p=l,d=n("2877"),v=Object(d["a"])(p,r,i,!1,null,null,null);t["default"]=v.exports}}]);