(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){e.exports=n(365)},352:function(e,t,n){},354:function(e,t,n){},356:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),s=n(11),l=n(52),i=n.n(l)()({palette:{type:"dark",primary:{light:"#6fbf73",main:"#357a38",dark:"#357a38"},secondary:{light:"#33eaff",main:"#00e5ff",dark:"#00a0b2"}},typography:{useNextVariants:!0}}),u=n(367),d=n(368),p=n(17),m=n(92),f=n.n(m),h=n(93),b=n.n(h),g=n(26),v=n.n(g),y=n(141),w=n.n(y),E=n(27),x=n.n(E),O=n(42),j=n.n(O),C=n(66),k=n.n(C),S=n(24),I=n.n(S),T=n(7),N=n.n(T),B=n(18),L=n(43),F=n.n(L),R=n(63),P=n.n(R),D=n(64),M=n.n(D),U=n(65),V=n.n(U),z=n(89),W=n.n(z),_=r.a.createContext({});var A=function(e){var t=e.open,n=e.onClose,o=Object(a.useState)(""),c=Object(p.a)(o,2),s=c[0],l=c[1],i=Object(a.useState)(""),u=Object(p.a)(i,2),d=u[0],m=u[1],f=Object(a.useContext)(_).login,h=function(){var e=Object(B.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f(s,d),l(""),m(""),n();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(F.a,{open:t,onClose:n},r.a.createElement("form",{onSubmit:h},r.a.createElement(P.a,null,"Log in"),r.a.createElement(M.a,null,r.a.createElement(W.a,{autoFocus:!0,margin:"dense",label:"Username",type:"text",fullWidth:!0,onChange:function(e){return l(e.target.value)}}),r.a.createElement(W.a,{margin:"dense",label:"Password",type:"password",fullWidth:!0,onChange:function(e){return m(e.target.value)}})),r.a.createElement(V.a,null,r.a.createElement(I.a,{onClick:n},"Cancel"),r.a.createElement(I.a,{type:"submit"},"Log in"))))};var J=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{onClick:function(){return o(!0)}},"Log in"),r.a.createElement(A,{open:n,onClose:function(){return o(!1)}}))};var Y=function(e){var t=e.onClick,n=Object(a.useContext)(_).logout;return r.a.createElement(x.a,{onClick:function(){t&&t(),n()}},"Logout")},H=n(135),q=n.n(H),G=n(134),K=n.n(G);var Q=function(){var e=Object(a.useContext)(_),t=e.isLoggedIn,n=e.username,o=Object(a.useState)(null),c=Object(p.a)(o,2),s=c[0],l=c[1];return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:function(e){return l(e.target)}},r.a.createElement(K.a,null)),s&&r.a.createElement(k.a,{keepMounted:!0,open:!!s,anchorEl:s,onClose:function(){return l(null)}},r.a.createElement(x.a,{disabled:!0},n),r.a.createElement(q.a,null),r.a.createElement(Y,{onClick:function(){return l(null)}}))):r.a.createElement(J,null)},X=n(21),Z=n.n(X),$=n(90),ee=n.n($),te=n(67),ne=n.n(te),ae=r.a.createContext({});var re=Object(s.withStyles)({badge:{top:12}})(function(e){var t=e.classes,n=Object(a.useContext)(ae),o=n.newThreads,c=n.refreshChatty,s=o&&o.length>0,l=s?"Refresh Thread Order (".concat(o.length," new threads)"):"Refresh Thread Order";return r.a.createElement(Z.a,{disableFocusListener:!0,title:l,enterDelay:350},r.a.createElement(v.a,{onClick:c},s?r.a.createElement(ne.a,{badgeContent:o.length,color:"secondary",classes:{badge:t.badge}},r.a.createElement(ee.a,null)):r.a.createElement(ee.a,null)))}),oe=n(137),ce=n.n(oe),se=n(69),le=n.n(se),ie=n(136),ue=n.n(ie),de=n(71),pe=n.n(de),me=n(70),fe=n.n(me),he=n(53),be=n.n(he),ge=n(19),ve=n(68),ye=n.n(ve),we=function(){var e=Object(B.a)(N.a.mark(function e(t){var n,a,r,o,c,s,l=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=l.length>1&&void 0!==l[1]?l[1]:{}).body&&(n=Object(ge.a)({},n,{headers:Object(ge.a)({"Content-Type":"application/x-www-form-urlencoded"},n.headers),body:ye.a.stringify(n.body)})),e.next=4,fetch("".concat("https://winchatty.com/v2","/").concat(t),n);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,Ee(a);case 8:return e.abrupt("return",e.sent);case 11:return e.next=13,Ee(a);case 13:return r=e.sent,o=a.status,c=a.statusText,s={status:o,statusText:c,body:r},console.error("Http Error:",s),e.abrupt("return",Promise.reject(s));case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(B.a)(N.a.mark(function e(t){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.prev=3,e.abrupt("return",JSON.parse(n));case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this,[[3,7]])}));return function(t){return e.apply(this,arguments)}}(),xe=n(5),Oe=n.n(xe),je=r.a.createContext({});var Ce=Object(s.withStyles)({card:{backgroundColor:"#202224",borderRadius:0,border:"1px solid #656565"},actions:{margin:"-8px 0 8px 8px"},flexRow:{display:"flex",flexDirection:"row"},textarea:{flex:1,backgroundColor:"#000",padding:4}})(function(e){var t=this,n=e.classes,o=e.onCloseReplyBox,c=e.parentId,s=e.className,l=Object(a.useContext)(_),i=l.username,u=l.password,d=Object(a.useContext)(je).setLoading,m=Object(a.useState)(""),f=Object(p.a)(m,2),h=f[0],b=f[1],g=Object(a.useState)(!1),v=Object(p.a)(g,2),y=v[0],w=v[1],E=function(){var e=Object(B.a)(N.a.mark(function e(){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.text,e.prev=1,d("async"),w(!0),e.next=6,we("postComment",{method:"POST",body:{username:i,password:u,parentId:c,text:n}});case 6:"success"===e.sent.result&&t.props.onCloseReplyBox(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error while posting comment",e.t0);case 13:return e.prev=13,w(!0),d(!1),e.finish(13);case 17:case"end":return e.stop()}},e,this,[[1,10,13,17]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(le.a,{className:Oe()(s,n.card)},0===c&&r.a.createElement(ue.a,{title:"New Thread"}),r.a.createElement(fe.a,null,r.a.createElement("div",{className:n.flexRow},r.a.createElement(be.a,{multiline:!0,autoFocus:!0,disableUnderline:!0,rows:5,fullWidth:!0,className:n.textarea,placeholder:"Type something interesting...",name:"replyBody",required:!0,onChange:function(e){return b(e.target.value)}}))),r.a.createElement(pe.a,{className:n.actions},r.a.createElement(I.a,{color:"primary",variant:"outlined",disabled:y||!h.length,onClick:E},"Post"),r.a.createElement(I.a,{variant:"outlined",disabled:y,onClick:o},"Cancel")))});var ke=Object(s.withStyles)({dialogPaper:{width:"85vw"}})(function(e){var t=e.classes,n=Object(a.useContext)(_).isLoggedIn,o=Object(a.useState)(!1),c=Object(p.a)(o,2),s=c[0],l=c[1];return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{disableFocusListener:!0,title:"New Thread",enterDelay:350},r.a.createElement(v.a,{onClick:function(){return l(!0)}},r.a.createElement(ce.a,null))),r.a.createElement(F.a,{open:s,onClose:function(){return l(!1)},classes:{paper:t.dialogPaper}},r.a.createElement(Ce,{parentId:0,onCloseReplyBox:function(){return l(!1)}}))):null}),Se=n(91),Ie=n.n(Se);var Te=Object(s.withStyles)({badge:{top:12}})(function(e){var t=e.classes,n=Object(a.useContext)(_),o=n.isLoggedIn,c=n.username,s=n.password,l=Object(a.useState)(0),i=Object(p.a)(l,2),u=i[0],d=i[1],m=Object(a.useState)(0),f=Object(p.a)(m,2),h=f[0],b=f[1],g=h>0,y="( ".concat(h," / ").concat(u," ) unread messages"),w=function(){var e=Object(B.a)(N.a.mark(function e(){var t,n,a,r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=9;break}return t={method:"POST",body:{username:c,password:s}},e.next=4,we("getMessageCount",t);case 4:n=e.sent,a=n.total,r=n.unread,d(a),b(r);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){w();var e=setInterval(function(){return w()},9e5);return function(){return clearInterval(e)}},[o]),o?r.a.createElement(Z.a,{disableFocusListener:!0,title:y,enterDelay:350},r.a.createElement(v.a,{href:"https://www.shacknews.com/messages",target:"_blank"},g?r.a.createElement(ne.a,{badgeContent:h,color:"secondary",classes:{badge:t.badge}},r.a.createElement(Ie.a,null)):r.a.createElement(Ie.a,null))):null}),Ne=n(87),Be=n.n(Ne),Le=n(140),Fe=n.n(Le),Re=n(88),Pe=n.n(Re),De=r.a.createContext({}),Me=n(138),Ue=n.n(Me),Ve=n(139),ze=n.n(Ve);var We=Object(s.withStyles)({content:{display:"flex",flexDirection:"column"}})(function(e){var t=e.classes,n=e.open,o=e.onClose,c=Object(a.useContext)(De),s=c.filterSettings,l=c.updateFilterSettings,i=Object(a.useState)(s.showCollapsed),u=Object(p.a)(i,2),d=u[0],m=u[1];return r.a.createElement(F.a,{open:n,onClose:o},r.a.createElement(P.a,null,"Filter Threads/Posts"),r.a.createElement(M.a,{className:t.content},r.a.createElement(Ue.a,{label:"Show Collapsed Threads",control:r.a.createElement(ze.a,{checked:d,onChange:function(){return m(!d)},value:"showCollapsed"})})),r.a.createElement(V.a,null,r.a.createElement(I.a,{onClick:o},"Cancel"),r.a.createElement(I.a,{onClick:function(){o(),l({showCollapsed:d})}},"Save")))});var _e=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe.a,{disableFocusListener:!0,title:"Filter Threads/Posts",enterDelay:350},r.a.createElement(Be.a,{onClick:function(){return o(!0)}},r.a.createElement(Fe.a,null))),r.a.createElement(We,{open:n,onClose:function(){return o(!1)}}))},Ae=n(142),Je=n.n(Ae);var Ye=Object(s.withStyles)({white:{color:"#fff"},title:{color:"#fff",flex:1},menuButton:{marginLeft:-15,marginRight:8},menuItem:{textDecoration:"none",color:"inherit"}})(function(e){var t=e.classes,n=Object(a.useState)(!1),o=Object(p.a)(n,2),c=o[0],s=o[1],l=function(){return s(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{elevation:0},r.a.createElement(b.a,null,r.a.createElement(v.a,{className:t.menuButton,onClick:function(){return s(!c)}},r.a.createElement(w.a,{className:t.white})),r.a.createElement(j.a,{variant:"h5",className:t.title},"Chatty"),r.a.createElement(_e,null),r.a.createElement(ke,null),r.a.createElement(Te,null),r.a.createElement(re,null),r.a.createElement(Q,null))),r.a.createElement(Je.a,{open:c,onClose:l,className:t.drawer},r.a.createElement(f.a,{position:"static",color:"primary",className:t.drawerAppBar},r.a.createElement(b.a,null,r.a.createElement(j.a,{variant:"h6",className:t.title},"Latest Chatty"))),r.a.createElement("a",{href:"https://github.com/latestchatty/chatty",className:t.menuItem},r.a.createElement(x.a,{onClick:l},"Contribute")),r.a.createElement("a",{href:"https://github.com/latestchatty/chatty/issues",className:t.menuItem},r.a.createElement(x.a,{onClick:l},"Feedback"))))}),He=n(147),qe=n.n(He),Ge=n(149),Ke=n.n(Ge),Qe=n(150),Xe=n.n(Qe),Ze=n(151),$e=n.n(Ze),et=n(148),tt=n.n(et);var nt=Object(s.withStyles)({wrapper:{height:8,width:48,margin:7,background:"rgb(221, 221, 221) -webkit-gradient(\n                linear,\n                0% 0%,\n                0% 100%,\n                from(rgb(170, 170, 170)),\n                color-stop(0.4, rgb(204, 204, 204)),\n                color-stop(0.6, rgb(204, 204, 204)),\n                to(rgb(238, 238, 238))\n            )"},value:{height:8,backgroundImage:"-webkit-gradient(\n                linear,\n                0 100%,\n                100% 0,\n                color-stop(0.25, rgba(255, 255, 255, 0.4)),\n                color-stop(0.25, transparent),\n                color-stop(0.5, transparent),\n                color-stop(0.5, rgba(255, 255, 255, 0.4)),\n                color-stop(0.75, rgba(255, 255, 255, 0.4)),\n                color-stop(0.75, transparent),\n                to(transparent)\n            )",backgroundSize:"25px 25px",boxShadow:"rgba(255, 255, 255, 0.298039) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 -2px 3px inset"}})(function(e){var t=e.classes,n=e.date,a=(new Date).getTime(),o=new Date(n).getTime(),c=Math.min((a-o)/36e5/18*100,100),s="red";return c<=25?s="springgreen":c<=50?s="yellow":c<=75&&(s="orange"),r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.value,style:{width:"".concat(c,"%"),backgroundColor:s}}))}),at=n(143),rt=n.n(at),ot=n(144),ct=n.n(ot);var st=Object(s.withStyles)({date:{fontSize:10,color:"#888",paddingTop:3,marginRight:3}})(function(e){var t=e.classes,n=e.date;return r.a.createElement(Z.a,{disableFocusListener:!0,title:rt()(n,"MMM DD, YYYY h:mma"),enterDelay:350},r.a.createElement("div",{className:t.date},ct()(n)," ago"))});var lt=["themanwiththebriefcase","shacknews"],it=[],ut=Object(s.withStyles)({user:{fontSize:14,fontWeight:"bold",cursor:"pointer","&:hover":{textDecoration:"underline"}},normal:{color:"#f3e7b5"},self:{color:"#6cf"},op:{color:"#6aff94"},mod:{color:"#d20000"},employee:{color:"#9370db"}})(function(e){var t=e.classes,n=e.post,o=void 0===n?{}:n,c=e.thread,s=void 0===c?{}:c,l=Object(a.useContext)(_).username,i=o.author,u=void 0===i?"":i,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.toLowerCase().replace(/\s/g,"")===t.toLowerCase().replace(/\s/g,"")},p=Object(a.useMemo)(function(){return l&&d(u,l)?"self":s.id!==o.id&&d(s.author,u)?"op":lt.find(function(e){return d(e,u)})?"employee":it.find(function(e){return d(e,u)})?"mod":"normal"},[l,u,s.id,o.id,s.author]),m=Object(a.useMemo)(function(){return u.replace(/\s/g,String.fromCharCode(160))},[u]);return r.a.createElement("span",{className:Oe()(t.user,t[p])},m)}),dt=n(55),pt=n(145),mt=n.n(pt),ft=["lol","inf","unf","wtf"];var ht=Object(s.withStyles)({containerPost:{marginLeft:12},containerOneline:{marginLeft:4,whiteSpace:"nowrap"},chip:{height:16,marginTop:2,marginRight:6,fontSize:10},nonChip:{marginRight:4,fontSize:9},lolBorder:{border:"1px solid #f80"},infBorder:{border:"1px solid #09c"},unfBorder:{border:"1px solid #f00"},wtfBorder:{border:"1px solid #c000c0"},tagBorder:{border:"1px solid #bbaf57"},lol:{color:"#f80"},inf:{color:"#09c"},unf:{color:"#f00"},wtf:{color:"#c000c0"},tag:{color:"#bbaf57"}})(function(e){var t=e.classes,n=e.tags,o=void 0===n?[]:n,c=e.variant,s=Object(a.useMemo)(function(){var e=o.filter(function(e){return ft.includes(e.tag)}),t=o.filter(function(e){return!ft.includes(e.tag)}).reduce(function(e,t){return e+t.count},0);return[].concat(Object(dt.a)(e),[{tag:"tag",count:t}])},[o]);return r.a.createElement("div",{className:"post"===c?t.containerPost:t.containerOneline},s.map(function(e){return e.count<1?null:"post"===c?r.a.createElement(mt.a,{key:e.tag,className:Oe()(t.chip,t[e.tag],t["".concat(e.tag,"Border")]),label:"".concat(e.count," ").concat(e.tag),variant:"outlined"}):"oneline"===c?r.a.createElement("span",{key:e.tag,className:Oe()(t.nonChip,t[e.tag])},"".concat(e.count," ").concat(e.tag)):null}))}),bt=n(146),gt=n.n(bt);var vt=function(e){var t=e.className,n=e.postId,o=Object(a.useContext)(_),c=o.isLoggedIn,s=o.username,l=Object(a.useContext)(je).setLoading,i=Object(a.useState)(null),u=Object(p.a)(i,2),d=u[0],m=u[1],f=ft.map(function(e){return e.toUpperCase()}),h=function(){var e=Object(B.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l("async"),m(null),e.next=5,b(s,n,t);case 5:if(!(a=e.sent).includes("already tagged")){e.next=10;break}return e.next=9,b(s,n,t,"untag");case 9:a=e.sent;case 10:a.match(/^ok /)||console.warn("Error tagging post",a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Exception while tagging post",e.t0);case 16:return e.prev=16,l(!1),e.finish(16);case 19:case"end":return e.stop()}},e,this,[[0,13,16,19]])}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(B.a)(N.a.mark(function e(t,n,a,r){var o,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=ye.a.stringify({who:t,what:n,tag:a,version:"-1"}),r&&(o.action=r),e.next=5,fetch("".concat("https://www.lmnopc.com/greasemonkey/shacklol/report.php","?").concat(o));case 5:return c=e.sent,e.abrupt("return",c.text());case 7:case"end":return e.stop()}},e,this)}));return function(t,n,a,r){return e.apply(this,arguments)}}();return c?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{disableFocusListener:!0,title:"Tag Post",enterDelay:350},r.a.createElement(gt.a,{className:t,onClick:function(e){return m(e.target)}})),d&&r.a.createElement(k.a,{keepMounted:!0,open:!!d,anchorEl:d,onClose:function(){return m(null)}},f.map(function(e){return r.a.createElement(x.a,{onClick:function(){return h(e)}},e)}))):null};var yt=Object(s.withStyles)({card:{backgroundColor:"#202224",borderRadius:0,marginBottom:3},replyBorder:{border:"1px solid #656565"},replyBox:{marginTop:-3},tagNws:{borderLeft:"3px solid red !important"},tagInformative:{borderLeft:"3px solid #00bff3 !important"},tagFrontpage:{borderLeft:"3px solid mediumpurple !important"},content:{maxWidth:"calc(100vw - 32)",color:"lightgray",fontSize:13,padding:"8px 16px"},header:{backgroundColor:"#373a3c",padding:"3px 3px 3px 16px",display:"flex",flexDirection:"row"},actions:{height:34},flex:{flex:1},toolbarButton:{width:18,height:18,cursor:"pointer",color:"#fff",marginRight:6},collapsed:{color:"#f00"}})(function(e){var t=e.classes,n=e.post,o=e.thread,c=e.onCollapse,s=e.onPinned,l=e.replyBoxOpenForId,i=e.onOpenReplyBox,u=e.onCloseReplyBox,d=Object(a.useContext)(_).isLoggedIn,p=Object(a.useContext)(De).isPostVisible,m=Object(a.useMemo)(function(){var e=n.body;return"Shacknews"===n.author&&(e=n.body.replace('href="/','href="https://www.shacknews.com/')),{__html:e}},[n.body]),f=Object(a.useMemo)(function(){return"nuked"===n.category?null:"nws"===n.category?"tagNws":"informative"===n.category?"tagInformative":/shacknews/i.test(n.author)?"tagFrontpage":null},[n.category,n.author]),h=n.parentId>0?"replyBorder":null;return p(o,n)?r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{className:Oe()(t.card,t[f],t[h])},r.a.createElement("div",{className:t.header},r.a.createElement(ut,{post:n,thread:o}),r.a.createElement(ht,{tags:n.lols,variant:"post"}),r.a.createElement("span",{className:t.flex}),r.a.createElement(st,{date:n.date}),0===n.parentId&&r.a.createElement(nt,{date:n.date})),r.a.createElement(fe.a,{className:Oe()("postbody",t.content)},r.a.createElement("span",{dangerouslySetInnerHTML:m})),r.a.createElement(pe.a,{className:t.actions,disableActionSpacing:!0},r.a.createElement(Z.a,{disableFocusListener:!0,title:n.collapsed?"Uncollapse":"Collapse",enterDelay:350},r.a.createElement(qe.a,{className:Oe()(t.toolbarButton,n.collapsed?t.collapsed:null),onClick:c})),d&&r.a.createElement(Z.a,{disableFocusListener:!0,title:"Reply",enterDelay:350},r.a.createElement(tt.a,{className:t.toolbarButton,onClick:function(){return i(n.id)}})),d&&0===n.parentId&&r.a.createElement(r.a.Fragment,null,n.pinned&&r.a.createElement(Z.a,{disableFocusListener:!0,title:"Unpin Thread",enterDelay:350},r.a.createElement(Ke.a,{className:t.toolbarButton,onClick:s})),!n.pinned&&r.a.createElement(Z.a,{disableFocusListener:!0,title:"Pin Thread",enterDelay:350},r.a.createElement(Xe.a,{className:t.toolbarButton,onClick:s}))),r.a.createElement(vt,{postId:n.id,className:t.toolbarButton}),r.a.createElement(Z.a,{disableFocusListener:!0,title:"View Post @ Shacknews.com",enterDelay:350},r.a.createElement("a",{className:t.toolbarButton,target:"_blank",rel:"noopener noreferrer",href:"http://www.shacknews.com/chatty?id=".concat(n.id,"#item_").concat(n.id)},r.a.createElement($e.a,{className:t.toolbarButton}))))),l===n.id&&r.a.createElement(Ce,{parentId:n.id,onCloseReplyBox:u,className:t.replyBox})):null});var wt=Object(s.withStyles)({container:{display:"flex",flexDirection:"row"},separator:{padding:"0 3px",fontSize:11,color:"#fff"},oneline:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","&:hover":{color:"#fff",backgroundColor:"#233548",cursor:"pointer"}},oneline10:{color:"#777"},oneline9:{color:"#888"},oneline8:{color:"#999"},oneline7:{color:"#aaa"},oneline6:{color:"#bbb"},oneline5:{color:"#ccc"},oneline4:{color:"#ddd"},oneline3:{color:"#eee"},oneline2:{color:"#fff"},oneline1:{color:"#eee",fontWeight:"bold"}})(function(e){var t=e.classes,n=e.post,o=e.thread,c=e.onExpandReply,s="oneline".concat(n.recentReplyNumber||9),l=Object(a.useMemo)(function(){return function(e){for(var t=e.replace(/(<(?!span)(?!\/span)[^>]+>| tabindex="1")/gm," "),n=0,a=0,r=!1,o=!1;n<t.length&&a<106;)"<"===t[n]?r=!0:">"===t[n]?r=!1:"&"===t[n]?o=!0:""===t[n]&&o?(o=!1,a++):r||a++,n++;var c=t.slice(0,n).trim();return(n<t.length||!c)&&(c+="..."),c}(n.body)},[n.body]);return r.a.createElement("div",{className:t.container},r.a.createElement("span",{className:Oe()(t.oneline,t[s]),dangerouslySetInnerHTML:{__html:l},onClick:function(){return c(n.id)}}),r.a.createElement(ht,{tags:n.lols,variant:"oneline"}),r.a.createElement(ut,{post:n,thread:o}))});var Et=function e(t){var n=t.thread,o=void 0===n?{}:n,c=t.parent,s=void 0===c?o:c,l=t.onCollapseReply,i=t.onExpandReply,u=t.onOpenReplyBox,d=t.expandedReplyId,p=t.replyBoxOpenForId,m=t.onCloseReplyBox,f=Object(a.useContext)(De).isPostVisible;return r.a.createElement("ul",{className:"comments"},o.posts.filter(function(e){return e.parentId===s.id}).filter(function(e){return f(o,e)}).map(function(t){return r.a.createElement("li",{key:t.id},d===t.id?r.a.createElement(yt,{post:t,thread:o,onCollapse:l,replyBoxOpenForId:p,onOpenReplyBox:u,onCloseReplyBox:m}):r.a.createElement(wt,{post:t,thread:o,onExpandReply:i}),r.a.createElement(e,{thread:o,parent:t,expandedReplyId:d,replyBoxOpenForId:p,onExpandReply:i,onCollapseReply:l,onOpenReplyBox:u,onCloseReplyBox:m}))}))};var xt=Object(s.withStyles)({thread:{marginBottom:15}})(function(e){var t=e.classes,n=e.thread,o=Object(a.useState)(null),c=Object(p.a)(o,2),s=c[0],l=c[1],i=Object(a.useState)(null),u=Object(p.a)(i,2),d=u[0],m=u[1],f=Object(a.useContext)(ae).markThread,h=Object(a.useContext)(De).isPostVisible,b=Object(a.useMemo)(function(){var e=n.posts?n.posts.sort(function(e,t){return e.id-t.id}):[];e.slice(-10).reverse().forEach(function(e,t){return e.recentReplyNumber=t+1});var t=Object(p.a)(e,1)[0];return Object(ge.a)({},n,t,{id:+n.threadId,posts:e})},[n]);if(!h(n))return null;var g=function(e){return m(e)},v=function(){return m(null)};return r.a.createElement("div",{className:t.thread},r.a.createElement(yt,{post:b,thread:b,replyBoxOpenForId:d,onCollapse:function(){return f(b.threadId,b.collapsed?"unmarked":"collapsed")},onOpenReplyBox:g,onCloseReplyBox:v,onPinned:function(){return f(b.threadId,b.pinned?"unmarked":"pinned")}}),r.a.createElement(Et,{thread:b,expandedReplyId:s,replyBoxOpenForId:d,onExpandReply:function(e){l(e),m(null)},onCollapseReply:function(){l(null),m(null)},onOpenReplyBox:g,onCloseReplyBox:v}))});var Ot={chatty:{margin:"72px 8px 8px 8px",font:"12px/1.5 arial, helvetica, clean, sans-serif"}},jt=function(){var e=Object(a.useContext)(ae).threads;return r.a.createElement("div",{style:Ot.chatty},e.map(function(e){return r.a.createElement(xt,{key:e.threadId,thread:e})}))};var Ct=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null),r.a.createElement(u.a,null,r.a.createElement(d.a,{path:"/chatty",component:jt}),r.a.createElement(d.a,{component:jt})))},kt=n(31),St=n(32),It=n(34),Tt=n(33),Nt=n(35),Bt=function(e){return function(t){return r.a.createElement(je.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,n))})}},Lt=Bt(function(e){function t(e){var n;Object(kt.a)(this,t),(n=Object(It.a)(this,Object(Tt.a)(t).call(this,e))).login=function(){var e=Object(B.a)(N.a.mark(function e(t,a){var r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props.setLoading,e.prev=1,r("async"),e.next=5,we("verifyCredentials",{method:"POST",body:{username:t,password:a}});case 5:e.sent.isValid?(localStorage.setItem("auth",JSON.stringify({username:t,password:a})),n.setState({isLoggedIn:!0,username:t,password:a})):console.log("Invalid login credentials."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error while logging in",e.t0);case 12:return e.prev=12,r(!1),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[1,9,12,15]])}));return function(t,n){return e.apply(this,arguments)}}(),n.logout=function(){localStorage.removeItem("auth"),n.setState({isLoggedIn:!1,username:null,password:null})};var a=n.loadStorage(),r=a.username,o=a.password;return n.state={isLoggedIn:r&&o,username:r,password:o},n}return Object(Nt.a)(t,e),Object(St.a)(t,[{key:"loadStorage",value:function(){try{var e=localStorage.getItem("auth")||"{}";return JSON.parse(e)||{}}catch(t){console.log("Invalid storage value: auth",t)}}},{key:"render",value:function(){var e=Object(ge.a)({},this.state,{login:this.login,logout:this.logout});return r.a.createElement(_.Provider,{value:e},this.props.children)}}]),t}(r.a.PureComponent)),Ft=n(54),Rt=Bt(function(e){return function(t){return r.a.createElement(_.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,n))})}}(function(e){function t(){var e,n;Object(kt.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(It.a)(this,(e=Object(Tt.a)(t)).call.apply(e,[this].concat(r)))).state={threads:[],newThreads:[]},n.refreshChatty=Object(B.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.updateThreads(!1,!1,!0);case 2:window.scrollTo(0,0);case 3:case"end":return e.stop()}},e,this)})),n.markThread=function(){var e=Object(B.a)(N.a.mark(function e(t,a){var r,o,c,s,l=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!(l.length>2&&void 0!==l[2])||l[2],o=n.props,c=o.isLoggedIn,s=o.username,!c){e.next=5;break}return e.next=5,we("clientData/markPost",{method:"POST",body:{username:s,postId:t,type:a}});case 5:r&&n.setState(function(e){var n="".concat(t);return{threads:e.threads.map(function(e){return e.threadId===n?Object(ge.a)({},e,{pinned:"pinned"===a,collapsed:"collapsed"===a}):e})}});case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(Nt.a)(t,e),Object(St.a)(t,[{key:"componentDidMount",value:function(){return this.mounted=!0,this.fullReload()}},{key:"componentDidUpdate",value:function(){var e=Object(B.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.isLoggedIn!==this.props.isLoggedIn&&this.updateThreads(!1,!0,!0);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fullReload",value:function(){var e=Object(B.a)(N.a.mark(function e(){var t,n,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setLoading,e.prev=1,t("async"),e.next=5,we("getNewestEventId");case 5:return n=e.sent,a=n.eventId,e.next=9,this.updateThreads(!0,!0,!1);case 9:this.waitForEvent(a);case 10:return e.prev=10,t(!1),e.finish(10);case 13:case"end":return e.stop()}},e,this,[[1,,10,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"updateThreads",value:function(){var e=Object(B.a)(N.a.mark(function e(){var t,n,a,r,o,c,s,l=this,i=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]&&i[0],n=i.length>1&&void 0!==i[1]&&i[1],a=i.length>2&&void 0!==i[2]&&i[2],!t){e.next=9;break}return e.next=6,this.getChatty();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0={};case 10:if(r=e.t0,o=r.threads,!n){e.next=16;break}return e.next=15,this.getMarkedPosts(n);case 15:c=e.sent;case 16:this.setState(function(e){o=o||e.threads,o=a?e.newThreads.concat(o):o;var t=a?[]:e.newThreads;if(c){var n=c.reduce(function(e,t){return Object(ge.a)({},e,Object(Ft.a)({},t.id,t.type))},{});o=o.map(function(e){return Object(ge.a)({},e,{pinned:"pinned"===n[e.threadId],collapsed:"collapsed"===n[e.threadId]})})}return s=o.reduce(function(e,t){return e[t.threadId]=t.posts.reduce(function(e,t){return Math.max(t.id,e)},0),e},{}),{threads:o=o.sort(function(e,t){return s[t.threadId]-s[e.threadId]}).sort(function(e,t){return t.pinned-e.pinned}),newThreads:t}},Object(B.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=4;break}return t=c.filter(function(e){return!s[e.id]}).map(function(e){var t=e.id;return l.markThread(t,"unmarked",!1)}),e.next=4,Promise.all(t);case 4:case"end":return e.stop()}},e,this)})));case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMarkedPosts",value:function(){var e=Object(B.a)(N.a.mark(function e(){var t,n,a,r,o;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.isLoggedIn,a=t.username,!n){e.next=7;break}return e.next=4,we("clientData/getMarkedPosts?username=".concat(encodeURIComponent(a)));case 4:return r=e.sent,o=r.markedPosts,e.abrupt("return",o);case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getChatty",value:function(){var e=Object(B.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we("getChatty".concat(t>0?"?count=".concat(t):""));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"waitForEvent",value:function(){var e=Object(B.a)(N.a.mark(function e(t){var n,a,r,o,c=this;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.mounted){e.next=14;break}return e.next=3,we("waitForEvent?lastEventId=".concat(t));case 3:if(n=e.sent,a=n.lastEventId,r=n.events,o=n.error,!this.mounted){e.next=14;break}if(o){e.next=13;break}return r.forEach(function(e){return c.handleEvent(e)}),e.abrupt("return",this.waitForEvent(a));case 13:console.log("Error from API:waitForLastEvent call.",o);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleEvent",value:function(){var e=Object(B.a)(N.a.mark(function e(){var t,n,a,r,o,c,s,l,i,u,d,p,m=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=m.length>0&&void 0!==m[0]?m[0]:{},n=t.eventType,a=t.eventData,"newPost"===n?(r=a.post).parentId?(o="".concat(r.threadId),c=function(e){return e.threadId===o?Object(ge.a)({},e,{posts:[].concat(Object(dt.a)(e.posts),[r])}):e},this.setState(function(e){return{threads:e.threads.map(c),newThreads:e.newThreads.map(c)}})):this.setState(function(e){return{newThreads:[].concat(Object(dt.a)(e.newThreads),[{threadId:"".concat(r.id),posts:[r]}])}}):"categoryChange"===n?(s=a.postId,l=a.category,i=function(e){if(e.posts.find(function(e){return e.id===s})){var t=e.posts.map(function(e){return e.id===s?Object(ge.a)({},e,{category:l}):e});return Object(ge.a)({},e,{posts:t})}return e},this.setState(function(e){return{threads:e.threads.map(i),newThreads:e.newThreads.map(i)}})):"lolCountsUpdate"===n?(u=a.updates,d=u.reduce(function(e,t){var n=t.postId,a=t.tag,r=t.count;return Object(ge.a)({},e,Object(Ft.a)({},n,{tag:a,count:r}))},{}),p=function(e){if(e.posts.find(function(e){return d[e.id]})){var t=e.posts.map(function(e){var t=d[e.id];if(t){var n=(e.lols||[]).filter(function(e){return e.tag!==t.tag}).concat([t]);return Object(ge.a)({},e,{lols:n})}return e});return Object(ge.a)({},e,{posts:t})}return e},this.setState(function(e){return{threads:e.threads.map(p),newThreads:e.newThreads.map(p)}})):console.debug("Unhandled event type:",t);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(ge.a)({},this.state,{refreshChatty:this.refreshChatty,markThread:this.markThread});return r.a.createElement(ae.Provider,{value:e},this.props.children)}}]),t}(r.a.PureComponent))),Pt=(n(352),n(354),n(356),n(153)),Dt=n.n(Pt);var Mt=Object(s.withStyles)({progress:{zIndex:9999,position:"fixed",top:0,width:"100vw"}})(function(e){var t=e.classes;return"async"!==e.loading?null:r.a.createElement(Dt.a,{className:t.progress,color:"secondary"})}),Ut=function(e){function t(){var e,n;Object(kt.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(It.a)(this,(e=Object(Tt.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,toast:!1},n.setLoading=function(e){return n.setState({loading:e})},n.showToast=function(e){},n}return Object(Nt.a)(t,e),Object(St.a)(t,[{key:"render",value:function(){var e=this.state.loading,t={setLoading:this.setLoading,showToast:this.showToast};return r.a.createElement(je.Provider,{value:t},r.a.createElement(Mt,{loading:e}),this.props.children)}}]),t}(r.a.PureComponent),Vt=function(e){function t(){var e,n;Object(kt.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(It.a)(this,(e=Object(Tt.a)(t)).call.apply(e,[this].concat(r)))).state={showCollapsed:!1,showFilteredUsers:!1,filteredUsers:[],showFilteredTerms:!1,filteredTerms:[]},n}return Object(Nt.a)(t,e),Object(St.a)(t,[{key:"isPostVisible",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=this.state,a=n.showCollapsed,r=n.showFilteredUsers,o=n.filteredUsers,c=n.showFilteredTerms,s=n.filteredTerms;return!(!a&&e.collapsed)&&(!(!r&&o.some(function(e){return e.regex.test(t.author)}))&&!(!c&&s.some(function(e){return e.regex.test(t.body)})))}},{key:"render",value:function(){var e=this,t={filterSettings:Object(ge.a)({},this.state),updateFilterSettings:function(t){return e.setState(Object(ge.a)({},t))},isPostVisible:function(t,n){return e.isPostVisible(t,n)}};return r.a.createElement(De.Provider,{value:t},this.props.children)}}]),t}(r.a.PureComponent),zt=n(366),Wt=n(154),_t=n.n(Wt)()({});var At;At=function(){return r.a.createElement(zt.a,{history:_t},r.a.createElement(s.MuiThemeProvider,{theme:i},r.a.createElement(Ut,null,r.a.createElement(Lt,null,r.a.createElement(Rt,null,r.a.createElement(Vt,null,r.a.createElement(Ct,null)))))))},c.a.render(r.a.createElement(At,null),document.getElementById("root"))}},[[156,2,1]]]);
//# sourceMappingURL=main.7cfab87e.chunk.js.map