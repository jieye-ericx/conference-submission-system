(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c00aab20"],{"598f":function(e,t,a){},"73ba":function(e,t,a){},"9e34":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-row",[a("el-col",{attrs:{span:17}},[a("PaperDetail",{attrs:{submitid:e.submitid,mode:e.mode,paper:e.paper}})],1),a("el-col",{attrs:{span:6,offset:1}},[a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{name:"1"}},[a("template",{slot:"title"},[e._v(" 撰写建议"),a("i",{staticClass:"el-icon-edit"})]),a("el-input",{attrs:{type:"textarea",rows:20},model:{value:e.suggestion,callback:function(t){e.suggestion=t},expression:"suggestion"}})],2),a("el-collapse-item",{attrs:{name:"2"}},[a("template",{slot:"title"},[e._v(" 操作 ")]),a("el-popconfirm",{attrs:{"confirm-button-text":"对","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定退回吗？"},on:{confirm:e.reject}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("退回")])],1),a("el-divider",{attrs:{direction:"vertical"}}),a("el-popconfirm",{attrs:{"confirm-button-text":"对","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定通过吗？"},on:{confirm:e.acceptA}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"success"},slot:"reference"},[e._v("通过")])],1)],2)],1),a("el-row")],1)],1)],1)},r=[],i=a("c7eb"),s=a("1da1"),o=(a("a9e3"),a("e40e")),c={name:"ReviewerPaperDetail",components:{PaperDetail:o["a"]},props:{submitid:{type:Number,required:!0},mode:{type:Number,require:!0,default:0},reviewerInviteId:{type:Number,default:-1}},data:function(){return{paper:{},suggestion:"",activeNames:["1","2","3"]}},watch:{submitid:function(){var e=Object(s["a"])(Object(i["a"])().mark((function e(t,a){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPaperDetail();case 2:this.paper=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;return Object(s["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getPaperDetail();case 2:e.paper=t.sent;case 3:case"end":return t.stop()}}),t)})))()},created:function(){return Object(s["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{downloadPaper:function(){window.open(this.paper.paperUrl,"_blank")},getPaperDetail:function(){var e=this;return Object(s["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$API.paperDetail(e.submitid);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))()},acceptA:function(){var e=this;return Object(s["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("点击通过"),""===e.suggestion){t.next=9;break}return t.next=4,e.$API.reviewerHandlePapers({reviewerInviteId:e.reviewerInviteId,conclusion:0,suggestion:e.suggestion});case 4:a=t.sent,200===a.code&&e.$message.success("通过成功"),e.$emit("change-dialog"),t.next=10;break;case 9:e.$message.error("审稿意见不能为空");case 10:case"end":return t.stop()}}),t)})))()},reject:function(){var e=this;return Object(s["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.suggestion){t.next=8;break}return t.next=3,e.$API.reviewerHandlePapers({reviewerInviteId:e.reviewerInviteId,conclusion:1,suggestion:e.suggestion});case 3:a=t.sent,200===a.code&&e.$message.success("退回成功"),e.$emit("change-dialog"),t.next=9;break;case 8:e.$message.error("审稿意见不能为空");case 9:case"end":return t.stop()}}),t)})))()}}},l=c,u=(a("c468"),a("2877")),p=Object(u["a"])(l,n,r,!1,null,null,null);t["a"]=p.exports},b2b9:function(e,t,a){"use strict";a("598f")},b2f9:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("PaperTable",{on:{"open-paper-detail":e.openPaperDetail},scopedSlots:e._u([{key:"column",fn:function(){},proxy:!0},{key:"option",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleReview(t.scope.$index,t.scope.row)}}},[e._v(" 审阅 ")])]}}])}),a("el-dialog",{attrs:{title:"论文详情",visible:e.dialogPaperDetailVisible,width:"80%"},on:{"update:visible":function(t){e.dialogPaperDetailVisible=t}}},[a("ReviewerPaperDetail",{attrs:{submitid:e.submitid,mode:3,"reviewer-invite-id":e.reviewerInviteId},on:{"change-dialog":e.changeDialog}})],1)],1)},r=[],i=a("c7eb"),s=a("1da1"),o=a("5530"),c=a("2f62"),l=a("d95a"),u=a("9e34"),p={name:"ReviewerReview",components:{PaperTable:l["a"],ReviewerPaperDetail:u["a"]},data:function(){return{dialogPaperDetailVisible:!1,submitid:-1,reviewerInviteId:-1}},computed:Object(o["a"])({},Object(c["b"])([])),created:function(){return Object(s["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getData:function(e){var t=this;return Object(s["a"])(Object(i["a"])().mark((function a(){var n,r,s,o,c,l;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.curPage,r=void 0===n?1:n,s=e.limit,o=void 0===s?10:s,c=e.status,l=void 0===c?0:c,a.next=3,t.$API.reviewerGetPapers({curPage:r,limit:o,status:l});case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}),a)})))()},openPaperDetail:function(e,t){this.submitid=e,this.reviewerInviteId=t,this.dialogPaperDetailVisible=!0},changeDialog:function(){var e=this;return Object(s["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("changeDialog"),e.dialogPaperDetailVisible=!0!==e.dialogPaperDetailVisible,t.next=4,e.$children[0].getData({curPage:e.$children[0].pagination.curPage,limit:e.$children[0].pagination.pageSize,status:0});case 4:case"end":return t.stop()}}),t)})))()},handleReview:function(e,t){console.log(t),this.openPaperDetail(t.submitId)}}},d=p,f=a("2877"),b=Object(f["a"])(d,n,r,!1,null,null,null);t["default"]=b.exports},c468:function(e,t,a){"use strict";a("73ba")},d95a:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{ref:"filterTable",attrs:{data:e.tableData,stripe:"","highlight-current-row":""},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{align:"center",prop:"type",label:"类别",width:"140"}}),a("el-table-column",{attrs:{align:"center",prop:"status",label:"状态",width:"100",filters:e.paperStatus,"filter-method":e.filterPaperStatus,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.paperStatus[t.row.status].color}},[e._v(e._s(e.paperStatus[t.row.status].text))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"提交日期",sortable:"",width:"180","column-key":"date",formatter:e.formatterPaperDate}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",prop:"title",label:"标题",width:"280"}}),e._t("column"),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("option",(function(){return[e._v(" slot ")]}),{scope:t})]}}],null,!0)})],2),a("el-col",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,-> , sizes,total",total:e.pagination.totalCount,"page-size":e.pagination.pageSize,"current-page":e.pagination.currPage},on:{"current-change":e.handlePageChange,"size-change":e.handlePageSizeChange}})],1)],1)},r=[],i=a("c7eb"),s=a("1da1"),o=a("5530"),c=(a("99af"),a("2f62")),l={name:"PaperList",data:function(){return{tableData:[],pagination:{totalCount:1,pageSize:10,totalPage:1,curPage:1}}},computed:Object(o["a"])({},Object(c["b"])(["paperStatus"])),created:function(){var e=this;return Object(s["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData({curPage:e.pagination.curPage,limit:e.pagination.pageSize});case 2:case"end":return t.stop()}}),t)})))()},methods:{getData:function(e){var t=this;return Object(s["a"])(Object(i["a"])().mark((function a(){var n,r,s,o,c,l,u;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.curPage,r=void 0===n?1:n,s=e.limit,o=void 0===s?10:s,c=e.status,a.next=3,t.$parent.getData({curPage:r,limit:o,status:c});case 3:for(u in l=a.sent.data,t.tableData=l.list,t.pagination)t.pagination[u]=l[u];case 6:case"end":return a.stop()}}),a)})))()},formatterPaperDate:function(e,t,a,n){var r=new Date(a);return"".concat(r.getFullYear(),"年").concat(r.getMonth()+1,"月").concat(r.getDate(),"日")},filterPaperStatus:function(e,t){return t.status===e},filterHandler:function(e,t,a){var n=a["property"];return t[n]===e},handlePageChange:function(e){var t=this;return Object(s["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getData({curPage:e,limit:t.pagination.pageSize});case 2:case"end":return a.stop()}}),a)})))()},handlePageSizeChange:function(e){var t=this;return Object(s["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getData({curPage:t.pagination.curPage,limit:e});case 2:case"end":return a.stop()}}),a)})))()},rowClick:function(e,t,a){var n=e.reviewerInviteId?e.reviewerInviteId:-1;this.$emit("open-paper-detail",e.submitId,n)}}},u=l,p=a("2877"),d=Object(p["a"])(u,n,r,!1,null,null,null);t["a"]=d.exports},e40e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.title,callback:function(t){e.$set(e.paper,"title",t)},expression:"paper.title"}},[a("template",{slot:"prepend"},[e._v("论文标题")])],2),3!==e.mode?a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.firstAuthorName,callback:function(t){e.$set(e.paper,"firstAuthorName",t)},expression:"paper.firstAuthorName"}},[a("template",{slot:"prepend"},[e._v("第一作者")])],2):e._e(),3!==e.mode?a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.otherAuthor,callback:function(t){e.$set(e.paper,"otherAuthor",t)},expression:"paper.otherAuthor"}},[a("template",{slot:"prepend"},[e._v("其他作者")])],2):e._e(),a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.primaryKey,callback:function(t){e.$set(e.paper,"primaryKey",t)},expression:"paper.primaryKey"}},[a("template",{slot:"prepend"},[e._v("关键字")])],2)],1),a("el-collapse-item",{attrs:{title:"摘要",name:"2"}},[a("el-input",{attrs:{disabled:e.uneditable,type:"textarea",autosize:{minRows:15}},model:{value:e.paper.abstractContext,callback:function(t){e.$set(e.paper,"abstractContext",t)},expression:"paper.abstractContext"}})],1),a("el-collapse-item",{attrs:{title:"文件下载",name:"3"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.downloadPaper}},[e._v("下载论文"),a("i",{staticClass:"el-icon-download el-icon--right"})]),1===e.mode?a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",data:e.paperFileData,"file-list":e.paperFileList,"before-upload":e.handleBeforePaperUpload,"on-success":e.handlePaperUploadSuccess,action:"https://paper-submission.oss-cn-shanghai.aliyuncs.com"}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传pdf/docx文件，大小限制100MB")])]):e._e()],1)],1)},r=[],i=a("c7eb"),s=a("1da1"),o=(a("a9e3"),a("b0c0"),a("ec26")),c={name:"PaperDetail",props:{paper:{type:Object,required:!0},submitid:{type:Number,required:!0},mode:{type:Number,require:!0,default:0}},data:function(){return{activeNames:["1","2","3"],paperFileList:[],paperFileData:{},ossPolicy:{}}},computed:{uneditable:function(){return 1!==this.mode}},methods:{downloadPaper:function(){window.open(this.paper.paperUrl,"_blank")},handleChange:function(e){},handleBeforePaperUpload:function(e){var t=this;return Object(s["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,t.$API.getOSSPolicy();case 3:t.ossPolicy=a.sent.data,t.paperFileData={key:t.ossPolicy.dir+Object(o["a"])()+e.name,policy:t.ossPolicy.policy,OSSAccessKeyId:t.ossPolicy.accessid,success_action_status:"200",signature:t.ossPolicy.signature};case 5:case"end":return a.stop()}}),a)})))()},handlePaperUploadSuccess:function(e,t){this.$message.success("文件上传成功"),this.$parent.paper.paperUrl=this.ossPolicy.host+"/"+this.paperFileData.key,console.log(e,t)}}},l=c,u=(a("b2b9"),a("2877")),p=Object(u["a"])(l,n,r,!1,null,null,null);t["a"]=p.exports},ec26:function(e,t,a){"use strict";var n,r=new Uint8Array(16);function i(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function o(e){return"string"===typeof e&&s.test(e)}for(var c=o,l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!c(a))throw TypeError("Stringified UUID is invalid");return a}var d=p;function f(e,t,a){e=e||{};var n=e.random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var r=0;r<16;++r)t[a+r]=n[r];return t}return d(n)}t["a"]=f}}]);