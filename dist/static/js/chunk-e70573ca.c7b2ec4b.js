(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e70573ca"],{"408a":function(e,t,a){var r=a("e330");e.exports=r(1..valueOf)},"55e1":function(e,t,a){},"6fb4":function(e,t,a){"use strict";a("55e1")},"9e34":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-row",[a("el-col",{attrs:{span:17}},[a("PaperDetail",{attrs:{submitid:e.submitid,mode:e.mode,paper:e.paper}})],1),a("el-col",{attrs:{span:6,offset:1}},[a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{name:"1"}},[a("template",{slot:"title"},[e._v(" 撰写建议"),a("i",{staticClass:"el-icon-edit"})]),a("el-input",{attrs:{type:"textarea",rows:20},model:{value:e.suggestion,callback:function(t){e.suggestion=t},expression:"suggestion"}})],2),a("el-collapse-item",{attrs:{name:"2"}},[a("template",{slot:"title"},[e._v(" 操作 ")]),a("el-popconfirm",{attrs:{"confirm-button-text":"对","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定退回吗？"},on:{confirm:e.reject}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("退回")])],1),a("el-divider",{attrs:{direction:"vertical"}}),a("el-popconfirm",{attrs:{"confirm-button-text":"对","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定通过吗？"},on:{confirm:e.acceptA}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"success"},slot:"reference"},[e._v("通过")])],1)],2)],1),a("el-row")],1)],1)],1)},n=[],i=a("1da1"),o=(a("96cf"),a("a9e3"),a("e40e")),s={name:"ReviewerPaperDetail",components:{PaperDetail:o["a"]},props:{submitid:{type:Number,required:!0},mode:{type:Number,require:!0,default:0},reviewerInviteId:{type:Number}},data:function(){return{paper:{},suggestion:"",activeNames:["1","2","3"]}},watch:{submitid:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPaperDetail();case 2:this.paper=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getPaperDetail();case 2:e.paper=t.sent;case 3:case"end":return t.stop()}}),t)})))()},created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{downloadPaper:function(){window.open(this.paper.paperUrl,"_blank")},getPaperDetail:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$API.paperDetail(e.submitid);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))()},acceptA:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("点击通过"),""===e.suggestion){t.next=9;break}return t.next=4,e.$API.reviewerHandlePapers({reviewerInviteId:e.reviewerInviteId,conclusion:0,suggestion:e.suggestion});case 4:a=t.sent,200===a.code&&e.$message.success("通过成功"),e.$emit("change-dialog"),t.next=10;break;case 9:e.$message.error("审稿意见不能为空");case 10:case"end":return t.stop()}}),t)})))()},reject:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.suggestion){t.next=8;break}return t.next=3,e.$API.reviewerHandlePapers({reviewerInviteId:e.reviewerInviteId,conclusion:1,suggestion:e.suggestion});case 3:a=t.sent,200===a.code&&e.$message.success("退回成功"),e.$emit("change-dialog"),t.next=9;break;case 8:e.$message.error("审稿意见不能为空");case 9:case"end":return t.stop()}}),t)})))()}}},c=s,l=(a("6fb4"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null);t["a"]=u.exports},a6d2:function(e,t,a){},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("e330"),o=a("94ca"),s=a("cb2d"),c=a("1a2d"),l=a("7156"),u=a("3a9b"),p=a("d9b5"),d=a("c04e"),f=a("d039"),m=a("241c").f,g=a("06cf").f,b=a("9bf2").f,h=a("408a"),v=a("58a8").trim,w="Number",y=n[w],x=y.prototype,P=n.TypeError,_=i("".slice),k=i("".charCodeAt),I=function(e){var t=d(e,"number");return"bigint"==typeof t?t:N(t)},N=function(e){var t,a,r,n,i,o,s,c,l=d(e,"number");if(p(l))throw P("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=v(l),t=k(l,0),43===t||45===t){if(a=k(l,2),88===a||120===a)return NaN}else if(48===t){switch(k(l,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+l}for(i=_(l,2),o=i.length,s=0;s<o;s++)if(c=k(i,s),c<48||c>n)return NaN;return parseInt(i,r)}return+l};if(o(w,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var R,S=function(e){var t=arguments.length<1?0:y(I(e)),a=this;return u(x,a)&&f((function(){h(a)}))?l(Object(t),a,S):t},C=r?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;C.length>D;D++)c(y,R=C[D])&&!c(S,R)&&b(S,R,g(y,R));S.prototype=x,x.constructor=S,s(n,w,S,{constructor:!0})}},d95a:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{ref:"filterTable",attrs:{data:e.tableData,stripe:"","highlight-current-row":""},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{align:"center",prop:"type",label:"类别",width:"140"}}),a("el-table-column",{attrs:{align:"center",prop:"status",label:"状态",width:"100",filters:e.paperStatus,"filter-method":e.filterPaperStatus,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.paperStatus[t.row.status].color}},[e._v(e._s(e.paperStatus[t.row.status].text))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"提交日期",sortable:"",width:"180","column-key":"date",formatter:e.formatterPaperDate}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",prop:"title",label:"标题",width:"280"}}),e._t("column"),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("option",(function(){return[e._v(" slot ")]}),{scope:t})]}}],null,!0)})],2),a("el-col",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,-> , sizes,total",total:e.pagination.totalCount,"page-size":e.pagination.pageSize,"current-page":e.pagination.currPage},on:{"current-change":e.handlePageChange,"size-change":e.handlePageSizeChange}})],1)],1)},n=[],i=a("5530"),o=a("1da1"),s=(a("99af"),a("96cf"),a("2f62")),c={name:"PaperList",data:function(){return{tableData:[],pagination:{totalCount:1,pageSize:10,totalPage:1,curPage:1}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData({curPage:e.pagination.curPage,limit:e.pagination.pageSize});case 2:case"end":return t.stop()}}),t)})))()},computed:Object(i["a"])({},Object(s["b"])(["paperStatus"])),methods:{getData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,s,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.curPage,n=void 0===r?1:r,i=e.limit,o=void 0===i?10:i,s=e.status,a.next=3,t.$parent.getData({curPage:n,limit:o,status:s});case 3:for(l in c=a.sent.data,t.tableData=c.list,t.pagination)t.pagination[l]=c[l];case 6:case"end":return a.stop()}}),a)})))()},formatterPaperDate:function(e,t,a,r){var n=new Date(a);return"".concat(n.getFullYear(),"年").concat(n.getMonth()+1,"月").concat(n.getDate(),"日")},filterPaperStatus:function(e,t){return t.status===e},filterHandler:function(e,t,a){var r=a["property"];return t[r]===e},handlePageChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getData({curPage:e,limit:t.pagination.pageSize});case 2:case"end":return a.stop()}}),a)})))()},handlePageSizeChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getData({curPage:t.pagination.curPage,limit:e});case 2:case"end":return a.stop()}}),a)})))()},rowClick:function(e,t,a){var r=e.reviewerInviteId?e.reviewerInviteId:-1;this.$emit("open-paper-detail",e.submitId,r)}}},l=c,u=a("2877"),p=Object(u["a"])(l,r,n,!1,null,null,null);t["a"]=p.exports},e40e:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.title,callback:function(t){e.$set(e.paper,"title",t)},expression:"paper.title"}},[a("template",{slot:"prepend"},[e._v("论文标题")])],2),3!==e.mode?a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.firstAuthorName,callback:function(t){e.$set(e.paper,"firstAuthorName",t)},expression:"paper.firstAuthorName"}},[a("template",{slot:"prepend"},[e._v("第一作者")])],2):e._e(),3!==e.mode?a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.otherAuthor,callback:function(t){e.$set(e.paper,"otherAuthor",t)},expression:"paper.otherAuthor"}},[a("template",{slot:"prepend"},[e._v("其他作者")])],2):e._e(),a("el-input",{staticClass:"dd",attrs:{disabled:e.uneditable},model:{value:e.paper.primaryKey,callback:function(t){e.$set(e.paper,"primaryKey",t)},expression:"paper.primaryKey"}},[a("template",{slot:"prepend"},[e._v("关键字")])],2)],1),a("el-collapse-item",{attrs:{title:"摘要",name:"2"}},[a("el-input",{attrs:{disabled:e.uneditable,type:"textarea",autosize:{minRows:15}},model:{value:e.paper.abstractContext,callback:function(t){e.$set(e.paper,"abstractContext",t)},expression:"paper.abstractContext"}})],1),a("el-collapse-item",{attrs:{title:"文件下载",name:"3"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.downloadPaper}},[e._v("下载论文"),a("i",{staticClass:"el-icon-download el-icon--right"})]),1===e.mode?a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",data:e.paperFileData,"file-list":e.paperFileList,"before-upload":e.handleBeforePaperUpload,"on-success":e.handlePaperUploadSuccess,action:"https://paper-submission.oss-cn-shanghai.aliyuncs.com"}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传pdf/docx文件，大小限制100MB")])]):e._e()],1)],1)},n=[],i=a("1da1"),o=(a("96cf"),a("a9e3"),a("b0c0"),a("ec26")),s={name:"PaperDetail",props:{paper:{type:Object,required:!0},submitid:{type:Number,required:!0},mode:{type:Number,require:!0,default:0}},data:function(){return{activeNames:["1","2","3"],paperFileList:[],paperFileData:{},ossPolicy:{}}},computed:{uneditable:function(){return 1!==this.mode}},methods:{downloadPaper:function(){window.open(this.paper.paperUrl,"_blank")},handleChange:function(e){},handleBeforePaperUpload:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,t.$API.getOSSPolicy();case 3:t.ossPolicy=a.sent.data,t.paperFileData={key:t.ossPolicy.dir+Object(o["a"])()+e.name,policy:t.ossPolicy.policy,OSSAccessKeyId:t.ossPolicy.accessid,success_action_status:"200",signature:t.ossPolicy.signature};case 5:case"end":return a.stop()}}),a)})))()},handlePaperUploadSuccess:function(e,t){this.$message.success("文件上传成功"),this.$parent.paper.paperUrl=this.ossPolicy.host+"/"+this.paperFileData.key,console.log(e,t)}}},c=s,l=(a("f03e"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null);t["a"]=u.exports},ec26:function(e,t,a){"use strict";var r,n=new Uint8Array(16);function i(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function s(e){return"string"===typeof e&&o.test(e)}for(var c=s,l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!c(a))throw TypeError("Stringified UUID is invalid");return a}var d=p;function f(e,t,a){e=e||{};var r=e.random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){a=a||0;for(var n=0;n<16;++n)t[a+n]=r[n];return t}return d(r)}t["a"]=f},f03e:function(e,t,a){"use strict";a("a6d2")}}]);