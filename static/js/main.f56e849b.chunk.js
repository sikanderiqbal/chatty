(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,n){e.exports=n(422)},403:function(e,t,n){},405:function(e,t,n){},407:function(e,t,n){},422:function(e,t,n){"use strict";n.r(t);var a=n(12);Object(a.b)();var r=n(0),o=n.n(r),c=n(22),l=n.n(c),s=n(54),i=n.n(s)()({palette:{type:"dark",primary:{light:"#6fbf73",main:"#357a38",dark:"#357a38"},secondary:{light:"#33eaff",main:"#00e5ff",dark:"#00a0b2"}},typography:{useNextVariants:!0}}),u=n(426),d=n(425),p=n(10),m=n(105),f=n.n(m),h=n(106),b=n.n(h),g=n(29),v=n.n(g),E=n(163),x=n.n(E),y=n(33),w=n.n(y),O=n(38),j=n.n(O),C=n(73),k=n.n(C),I=n(25),S=n.n(I),T=n(11),N=n.n(T),B=n(18),R=n(47),F=n.n(R),L=n(70),P=n.n(L),D=n(71),M=n.n(D),U=n(72),z=n.n(U),_=n(102),V=n.n(_),W=o.a.createContext({}),H=o.a.createContext({});var J=function(e){var t=e.open,n=e.onClose,a=Object(r.useState)(""),c=Object(p.a)(a,2),l=c[0],s=c[1],i=Object(r.useState)(""),u=Object(p.a)(i,2),d=u[0],m=u[1],f=Object(r.useContext)(W).login,h=Object(r.useContext)(H).setLoading,b=function(){var e=Object(B.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,h("sync"),e.next=5,f(l,d);case 5:n();case 6:return e.prev=6,h(!1),e.finish(6);case 9:case"end":return e.stop()}},e,this,[[1,,6,9]])}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(F.a,{open:t,onClose:n},o.a.createElement("form",{onSubmit:b},o.a.createElement(P.a,null,"Log in"),o.a.createElement(M.a,null,o.a.createElement(V.a,{autoFocus:!0,margin:"dense",label:"Username",type:"text",fullWidth:!0,onChange:function(e){return s(e.target.value)}}),o.a.createElement(V.a,{margin:"dense",label:"Password",type:"password",fullWidth:!0,onChange:function(e){return m(e.target.value)}})),o.a.createElement(z.a,null,o.a.createElement(S.a,{onClick:n},"Cancel"),o.a.createElement(S.a,{type:"submit"},"Log in"))))};var Y=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{onClick:function(){return a(!0)}},"Log in"),o.a.createElement(J,{open:n,onClose:function(){return a(!1)}}))};var A=function(e){var t=e.onClick,n=Object(r.useContext)(W).logout;return o.a.createElement(w.a,{onClick:function(){t&&t(),n()}},"Logout")},q=n(157),G=n.n(q),K=n(156),Q=n.n(K);var X=function(){var e=Object(r.useContext)(W),t=e.isLoggedIn,n=e.username,a=Object(r.useState)(null),c=Object(p.a)(a,2),l=c[0],s=c[1];return t?o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{onClick:function(e){return s(e.target)}},o.a.createElement(Q.a,null)),l&&o.a.createElement(k.a,{keepMounted:!0,open:!!l,anchorEl:l,onClose:function(){return s(null)}},o.a.createElement(w.a,{disabled:!0},n),o.a.createElement(G.a,null),o.a.createElement(A,{onClick:function(){return s(null)}}))):o.a.createElement(Y,null)},Z=n(21),$=n.n(Z),ee=n(103),te=n.n(ee),ne=n(74),ae=n.n(ne),re=o.a.createContext({});var oe=Object(a.c)({badge:{top:12}}),ce=function(){var e=oe(),t=Object(r.useContext)(re),n=t.newThreads,a=t.refreshChatty,c=n&&n.length>0,l=c?"Refresh Thread Order (".concat(n.length," new threads)"):"Refresh Thread Order";return o.a.createElement($.a,{disableFocusListener:!0,title:l,enterDelay:350},o.a.createElement(v.a,{onClick:a},c?o.a.createElement(ae.a,{badgeContent:n.length,color:"secondary",classes:{badge:e.badge}},o.a.createElement(te.a,null)):o.a.createElement(te.a,null)))},le=n(159),se=n.n(le),ie=n(76),ue=n.n(ie),de=n(158),pe=n.n(de),me=n(78),fe=n.n(me),he=n(77),be=n.n(he),ge=n(55),ve=n.n(ge),Ee=n(20),xe=n(75),ye=n.n(xe),we=function(){var e=Object(B.a)(N.a.mark(function e(t){var n,a,r,o,c,l,s=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=s.length>1&&void 0!==s[1]?s[1]:{}).body&&(n=Object(Ee.a)({},n,{headers:Object(Ee.a)({"Content-Type":"application/x-www-form-urlencoded"},n.headers),body:ye.a.stringify(n.body)})),e.next=4,fetch("".concat("https://winchatty.com/v2","/").concat(t),n);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,Oe(a);case 8:return e.abrupt("return",e.sent);case 11:return e.next=13,Oe(a);case 13:return r=e.sent,o=a.status,c=a.statusText,l={status:o,statusText:c,body:r},console.error("Http Error:",l),e.abrupt("return",Promise.reject(l));case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(B.a)(N.a.mark(function e(t){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.prev=3,e.abrupt("return",JSON.parse(n));case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this,[[3,7]])}));return function(t){return e.apply(this,arguments)}}(),je=n(5),Ce=n.n(je);var ke=Object(a.c)({card:{backgroundColor:"#202224",borderRadius:0,border:"1px solid #656565"},actions:{margin:"-8px 0 8px 8px"},flexRow:{display:"flex",flexDirection:"row"},textarea:{flex:1,backgroundColor:"#000",padding:4}}),Ie=function(e){var t=e.onCloseReplyBox,n=e.parentId,a=e.className,c=ke(),l=Object(r.useContext)(W),s=l.username,i=l.password,u=Object(r.useContext)(H),d=u.setLoading,m=u.showSnackbar,f=Object(r.useState)(""),h=Object(p.a)(f,2),b=h[0],g=h[1],v=Object(r.useState)(!1),E=Object(p.a)(v,2),x=E[0],y=E[1],w=function(){var e=Object(B.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d("async"),y(!0),e.next=5,we("postComment",{method:"POST",body:{username:s,password:i,parentId:n,text:b}});case 5:"success"===e.sent.result&&t(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error while posting comment",e.t0),m("Error while posting. Please try again later."),y(!1);case 14:return e.prev=14,d(!1),e.finish(14);case 17:case"end":return e.stop()}},e,this,[[0,9,14,17]])}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(ue.a,{className:Ce()(a,c.card)},0===n&&o.a.createElement(pe.a,{title:"New Thread"}),o.a.createElement(be.a,null,o.a.createElement("div",{className:c.flexRow},o.a.createElement(ve.a,{multiline:!0,autoFocus:!0,disableUnderline:!0,rows:5,fullWidth:!0,className:c.textarea,placeholder:"Type something interesting...",name:"replyBody",required:!0,disabled:x,onChange:function(e){return g(e.target.value)}}))),o.a.createElement(fe.a,{className:c.actions},o.a.createElement(S.a,{color:"primary",variant:"outlined",disabled:x||!b.length,onClick:w},"Post"),o.a.createElement(S.a,{variant:"outlined",disabled:x,onClick:t},"Cancel")))};var Se=Object(a.c)({dialogPaper:{width:"85vw"}}),Te=function(){var e=Se(),t=Object(r.useContext)(W).isLoggedIn,n=Object(r.useState)(!1),a=Object(p.a)(n,2),c=a[0],l=a[1];return t?o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{disableFocusListener:!0,title:"New Thread",enterDelay:350},o.a.createElement(v.a,{onClick:function(){return l(!0)}},o.a.createElement(se.a,null))),o.a.createElement(F.a,{open:c,onClose:function(){return l(!1)},classes:{paper:e.dialogPaper}},o.a.createElement(Ie,{parentId:0,onCloseReplyBox:function(){return l(!1)}}))):null},Ne=n(104),Be=n.n(Ne);var Re=Object(a.c)({badge:{top:12}}),Fe=function(){var e=Re(),t=Object(r.useContext)(W),n=t.isLoggedIn,a=t.username,c=t.password,l=Object(r.useState)(0),s=Object(p.a)(l,2),i=s[0],u=s[1],d=Object(r.useState)(0),m=Object(p.a)(d,2),f=m[0],h=m[1],b=f>0,g="( ".concat(f," / ").concat(i," ) unread messages"),E=function(){var e=Object(B.a)(N.a.mark(function e(){var t,r,o,l;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=9;break}return t={method:"POST",body:{username:a,password:c}},e.next=4,we("getMessageCount",t);case 4:r=e.sent,o=r.total,l=r.unread,u(o),h(l);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){E();var e=setInterval(function(){return E()},9e5);return function(){return clearInterval(e)}},[n]),n?o.a.createElement($.a,{disableFocusListener:!0,title:g,enterDelay:350},o.a.createElement(v.a,{href:"https://www.shacknews.com/messages",target:"_blank"},b?o.a.createElement(ae.a,{badgeContent:f,color:"secondary",classes:{badge:e.badge}},o.a.createElement(Be.a,null)):o.a.createElement(Be.a,null))):null},Le=n(98),Pe=n.n(Le),De=n(162),Me=n.n(De),Ue=n(99),ze=n.n(Ue),_e=o.a.createContext({}),Ve=n(160),We=n.n(Ve),He=n(161),Je=n.n(He);var Ye=Object(a.c)({content:{display:"flex",flexDirection:"column"}}),Ae=function(e){var t=e.open,n=e.onClose,a=Ye(),c=Object(r.useContext)(_e),l=c.filterSettings,s=c.setFilterSettings,i=Object(r.useState)(l.showCollapsed),u=Object(p.a)(i,2),d=u[0],m=u[1];return o.a.createElement(F.a,{open:t,onClose:n},o.a.createElement(P.a,null,"Filter Threads/Posts"),o.a.createElement(M.a,{className:a.content},o.a.createElement(We.a,{label:"Show Collapsed Threads",control:o.a.createElement(Je.a,{checked:d,onChange:function(){return m(!d)},value:"showCollapsed"})})),o.a.createElement(z.a,null,o.a.createElement(S.a,{onClick:n},"Cancel"),o.a.createElement(S.a,{onClick:function(){n(),s({showCollapsed:d})}},"Save")))};var qe=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(ze.a,{disableFocusListener:!0,title:"Filter Threads/Posts",enterDelay:350},o.a.createElement(Pe.a,{onClick:function(){return a(!0)}},o.a.createElement(Me.a,null))),o.a.createElement(Ae,{open:n,onClose:function(){return a(!1)}}))},Ge=n(164),Ke=n.n(Ge);var Qe=Object(a.c)({white:{color:"#fff"},title:{color:"#fff",flex:1},menuButton:{marginLeft:-15,marginRight:8},menuItem:{textDecoration:"none",color:"inherit"}}),Xe=function(){var e=Qe(),t=Object(r.useState)(!1),n=Object(p.a)(t,2),a=n[0],c=n[1],l=function(){return c(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{elevation:0},o.a.createElement(b.a,null,o.a.createElement(v.a,{className:e.menuButton,onClick:function(){return c(!a)}},o.a.createElement(x.a,{className:e.white})),o.a.createElement(j.a,{variant:"h5",className:e.title},"Chatty"),o.a.createElement(qe,null),o.a.createElement(Te,null),o.a.createElement(Fe,null),o.a.createElement(ce,null),o.a.createElement(X,null))),o.a.createElement(Ke.a,{open:a,onClose:l,className:e.drawer},o.a.createElement(f.a,{position:"static",color:"primary",className:e.drawerAppBar},o.a.createElement(b.a,null,o.a.createElement(j.a,{variant:"h6",className:e.title},"Latest Chatty"))),o.a.createElement("a",{href:"https://github.com/latestchatty/chatty",target:"_blank",rel:"noopener noreferrer",className:e.menuItem},o.a.createElement(w.a,{onClick:l},"Contribute")),o.a.createElement("a",{href:"https://github.com/latestchatty/chatty/issues",target:"_blank",rel:"noopener noreferrer",className:e.menuItem},o.a.createElement(w.a,{onClick:l},"Feedback"))))},Ze=n(169),$e=n.n(Ze),et=n(171),tt=n.n(et),nt=n(172),at=n.n(nt),rt=n(173),ot=n.n(rt),ct=n(170),lt=n.n(ct);var st=Object(a.c)({wrapper:{height:8,width:48,margin:7,background:"rgb(221, 221, 221) -webkit-gradient(\n                linear,\n                0% 0%,\n                0% 100%,\n                from(rgb(170, 170, 170)),\n                color-stop(0.4, rgb(204, 204, 204)),\n                color-stop(0.6, rgb(204, 204, 204)),\n                to(rgb(238, 238, 238))\n            )"},value:{height:8,backgroundImage:"-webkit-gradient(\n                linear,\n                0 100%,\n                100% 0,\n                color-stop(0.25, rgba(255, 255, 255, 0.4)),\n                color-stop(0.25, transparent),\n                color-stop(0.5, transparent),\n                color-stop(0.5, rgba(255, 255, 255, 0.4)),\n                color-stop(0.75, rgba(255, 255, 255, 0.4)),\n                color-stop(0.75, transparent),\n                to(transparent)\n            )",backgroundSize:"25px 25px",boxShadow:"rgba(255, 255, 255, 0.298039) 0 2px 4px inset, rgba(0, 0, 0, 0.4) 0 -2px 3px inset"}}),it=function(e){var t=e.date,n=st(),a=(new Date).getTime(),r=new Date(t).getTime(),c=Math.min((a-r)/36e5/18*100,100),l="red";return c<=25?l="springgreen":c<=50?l="yellow":c<=75&&(l="orange"),o.a.createElement("div",{className:n.wrapper},o.a.createElement("div",{className:n.value,style:{width:"".concat(c,"%"),backgroundColor:l}}))},ut=n(165),dt=n.n(ut),pt=n(166),mt=n.n(pt);var ft=Object(a.c)({date:{fontSize:10,color:"#888",paddingTop:3,marginRight:3}}),ht=function(e){var t=e.date,n=ft();return o.a.createElement($.a,{disableFocusListener:!0,title:dt()(t,"MMM DD, YYYY h:mma"),enterDelay:350},o.a.createElement("div",{className:n.date},mt()(t)," ago"))};var bt=["themanwiththebriefcase","shacknews"],gt=[],vt=Object(a.c)({user:{fontSize:14,fontWeight:"bold",cursor:"pointer","&:hover":{textDecoration:"underline"}},normal:{color:"#f3e7b5"},self:{color:"#6cf"},op:{color:"#6aff94"},mod:{color:"#d20000"},employee:{color:"#9370db"}}),Et=function(e){var t=e.post,n=void 0===t?{}:t,a=e.thread,c=void 0===a?{}:a,l=vt(),s=Object(r.useContext)(W).username,i=n.author,u=void 0===i?"":i,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.toLowerCase().replace(/\s/g,"")===t.toLowerCase().replace(/\s/g,"")},p=Object(r.useMemo)(function(){return s&&d(u,s)?"self":c.id!==n.id&&d(c.author,u)?"op":bt.find(function(e){return d(e,u)})?"employee":gt.find(function(e){return d(e,u)})?"mod":"normal"},[s,u,c.id,n.id,c.author]),m=Object(r.useMemo)(function(){return u.replace(/\s/g,String.fromCharCode(160))},[u]);return o.a.createElement("span",{className:Ce()(l.user,l[p])},m)},xt=n(57),yt=n(167),wt=n.n(yt),Ot=["lol","inf","unf","wtf"];var jt=Object(a.c)({containerPost:{marginLeft:12},containerOneline:{marginLeft:4,whiteSpace:"nowrap"},chip:{height:16,marginTop:2,marginRight:6,fontSize:10},nonChip:{marginRight:4,fontSize:9},lolBorder:{border:"1px solid #f80"},infBorder:{border:"1px solid #09c"},unfBorder:{border:"1px solid #f00"},wtfBorder:{border:"1px solid #c000c0"},tagBorder:{border:"1px solid #bbaf57"},lol:{color:"#f80"},inf:{color:"#09c"},unf:{color:"#f00"},wtf:{color:"#c000c0"},tag:{color:"#bbaf57"}}),Ct=function(e){var t=e.tags,n=void 0===t?[]:t,a=e.variant,c=jt(),l=Object(r.useMemo)(function(){var e=n.filter(function(e){return Ot.includes(e.tag)}),t=n.filter(function(e){return!Ot.includes(e.tag)}).reduce(function(e,t){return e+t.count},0);return[].concat(Object(xt.a)(e),[{tag:"tag",count:t}])},[n]);return o.a.createElement("div",{className:"post"===a?c.containerPost:c.containerOneline},l.map(function(e){return e.count<1?null:"post"===a?o.a.createElement(wt.a,{key:e.tag,className:Ce()(c.chip,c[e.tag],c["".concat(e.tag,"Border")]),label:"".concat(e.count," ").concat(e.tag),variant:"outlined"}):"oneline"===a?o.a.createElement("span",{key:e.tag,className:Ce()(c.nonChip,c[e.tag])},"".concat(e.count," ").concat(e.tag)):null}))},kt=n(168),It=n.n(kt);var St=function(e){var t=e.className,n=e.postId,a=Object(r.useContext)(W),c=a.isLoggedIn,l=a.username,s=Object(r.useContext)(H),i=s.setLoading,u=s.showSnackbar,d=Object(r.useState)(null),m=Object(p.a)(d,2),f=m[0],h=m[1],b=Ot.map(function(e){return e.toUpperCase()}),g=function(){var e=Object(B.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i("async"),h(null),e.next=5,v(l,n,t);case 5:if(!(a=e.sent).includes("already tagged")){e.next=10;break}return e.next=9,v(l,n,t,"untag");case 9:a=e.sent;case 10:a.match(/^ok /)||console.warn("Error tagging post",a),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Exception while tagging post",e.t0),u("Error while tagging post. Please try again later.");case 17:return e.prev=17,i(!1),e.finish(17);case 20:case"end":return e.stop()}},e,this,[[0,13,17,20]])}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(B.a)(N.a.mark(function e(t,n,a,r){var o,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={who:t,what:n,tag:a,version:-1},r&&(o.action=r),e.next=5,fetch("".concat("https://lol.lmnopc.com/report.php","?").concat(ye.a.stringify(o)),{method:"POST"});case 5:return c=e.sent,e.abrupt("return",c.text());case 7:case"end":return e.stop()}},e,this)}));return function(t,n,a,r){return e.apply(this,arguments)}}();return c?o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{disableFocusListener:!0,title:"Tag Post",enterDelay:350},o.a.createElement(It.a,{className:t,onClick:function(e){return h(e.target)}})),f&&o.a.createElement(k.a,{keepMounted:!0,open:!!f,anchorEl:f,onClose:function(){return h(null)}},b.map(function(e){return o.a.createElement(w.a,{key:e,onClick:function(){return g(e)}},e)}))):null};var Tt=Object(a.c)({card:{backgroundColor:"#202224",borderRadius:0,marginBottom:3},replyBorder:{border:"1px solid #656565"},replyBox:{marginTop:-3},tagNws:{borderLeft:"3px solid red !important"},tagInformative:{borderLeft:"3px solid #00bff3 !important"},tagFrontpage:{borderLeft:"3px solid mediumpurple !important"},content:{maxWidth:"calc(100vw - 32)",color:"lightgray",fontSize:13,padding:"8px 16px"},header:{backgroundColor:"#373a3c",padding:"3px 3px 3px 16px",display:"flex",flexDirection:"row"},actions:{height:34},flex:{flex:1},toolbarButton:{width:18,height:18,cursor:"pointer",color:"#fff",marginRight:6},collapsed:{color:"#f00"}}),Nt=function(e){var t=e.post,n=e.thread,a=e.onCollapse,c=e.onPinned,l=e.replyBoxOpenForId,s=e.onOpenReplyBox,i=e.onCloseReplyBox,u=Tt(),d=Object(r.useRef)(null),p=Object(r.useContext)(W).isLoggedIn,m=Object(r.useContext)(_e).isPostVisible,f=Object(r.useMemo)(function(){var e=t.body;return"Shacknews"===t.author&&(e=t.body.replace('href="/','href="https://www.shacknews.com/')),{__html:e}},[t.body]),h=Object(r.useMemo)(function(){return"nuked"===t.category?null:"nws"===t.category?"tagNws":"informative"===t.category?"tagInformative":/shacknews/i.test(t.author)?"tagFrontpage":null},[t.category,t.author]),b=t.parentId>0,g=b?"replyBorder":null;return m(n,t)?(Object(r.useEffect)(function(){if(b){var e=d.current.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight),n=e.bottom<0,a=e.top-t>=0;n?window.scrollTo({left:0,top:d.current.offsetTop-75,behavior:"smooth"}):a&&window.scrollTo({left:0,top:d.current.offsetTop-t+e.height+24,behavior:"smooth"})}},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:d},o.a.createElement(ue.a,{className:Ce()(u.card,u[h],u[g])},o.a.createElement("div",{className:u.header},o.a.createElement(Et,{post:t,thread:n}),o.a.createElement(Ct,{tags:t.lols,variant:"post"}),o.a.createElement("span",{className:u.flex}),o.a.createElement(ht,{date:t.date}),0===t.parentId&&o.a.createElement(it,{date:t.date})),o.a.createElement(be.a,{className:Ce()("postbody",u.content)},o.a.createElement("span",{dangerouslySetInnerHTML:f})),o.a.createElement(fe.a,{className:u.actions,disableActionSpacing:!0},o.a.createElement($.a,{disableFocusListener:!0,title:"collapsed"===t.markType?"Uncollapse":"Collapse",enterDelay:350},o.a.createElement($e.a,{className:Ce()(u.toolbarButton,"collapsed"===t.markType?u.collapsed:null),onClick:a})),p&&o.a.createElement($.a,{disableFocusListener:!0,title:"Reply",enterDelay:350},o.a.createElement(lt.a,{className:u.toolbarButton,onClick:function(){return s(t.id)}})),p&&0===t.parentId&&o.a.createElement(o.a.Fragment,null,"pinned"===t.markType&&o.a.createElement($.a,{disableFocusListener:!0,title:"Unpin Thread",enterDelay:350},o.a.createElement(tt.a,{className:u.toolbarButton,onClick:c})),"pinned"!==t.markType&&o.a.createElement($.a,{disableFocusListener:!0,title:"Pin Thread",enterDelay:350},o.a.createElement(at.a,{className:u.toolbarButton,onClick:c}))),o.a.createElement(St,{postId:t.id,className:u.toolbarButton}),o.a.createElement($.a,{disableFocusListener:!0,title:"View Post @ Shacknews.com",enterDelay:350},o.a.createElement("a",{className:u.toolbarButton,target:"_blank",rel:"noopener noreferrer",href:"http://www.shacknews.com/chatty?id=".concat(t.id,"#item_").concat(t.id)},o.a.createElement(ot.a,{className:u.toolbarButton})))))),l===t.id&&o.a.createElement(Ie,{parentId:t.id,onCloseReplyBox:i,className:u.replyBox}))):null};var Bt=Object(a.c)({container:{display:"flex",flexDirection:"row"},separator:{padding:"0 3px",fontSize:11,color:"#fff"},oneline:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","&:hover":{color:"#fff",backgroundColor:"#233548",cursor:"pointer"}},oneline10:{color:"#777"},oneline9:{color:"#888"},oneline8:{color:"#999"},oneline7:{color:"#aaa"},oneline6:{color:"#bbb"},oneline5:{color:"#ccc"},oneline4:{color:"#ddd"},oneline3:{color:"#eee"},oneline2:{color:"#fff"},oneline1:{color:"#eee",fontWeight:"bold"}}),Rt=function(e){var t=e.post,n=e.thread,a=e.onExpandReply,c=Bt(),l="oneline".concat(t.recentReplyNumber||9),s=Object(r.useMemo)(function(){return function(e){for(var t=e.replace(/(<(?!span)(?!\/span)[^>]+>| tabindex="1")/gm," "),n=0,a=0,r=!1,o=!1;n<t.length&&a<106;)"<"===t[n]?r=!0:">"===t[n]?r=!1:"&"===t[n]?o=!0:""===t[n]&&o?(o=!1,a++):r||a++,n++;var c=t.slice(0,n).trim();return(n<t.length||!c)&&(c+="..."),c}(t.body)},[t.body]);return o.a.createElement("div",{className:c.container},o.a.createElement("span",{className:Ce()(c.oneline,c[l]),dangerouslySetInnerHTML:{__html:s},onClick:function(){return a(t.id)}}),o.a.createElement(Ct,{tags:t.lols,variant:"oneline"}),o.a.createElement(Et,{post:t,thread:n}))};var Ft=function e(t){var n=t.className,a=t.thread,c=void 0===a?{}:a,l=t.parent,s=void 0===l?c:l,i=t.onCollapseReply,u=t.onExpandReply,d=t.onOpenReplyBox,p=t.expandedReplyId,m=t.replyBoxOpenForId,f=t.onCloseReplyBox,h=Object(r.useContext)(_e).isPostVisible;return o.a.createElement("ul",{className:Ce()("comments",n)},c.posts.filter(function(e){return e.parentId===s.id}).filter(function(e){return h(c,e)}).map(function(t){return o.a.createElement("li",{key:t.id},p===t.id?o.a.createElement(Nt,{post:t,thread:c,onCollapse:i,replyBoxOpenForId:m,onOpenReplyBox:d,onCloseReplyBox:f}):o.a.createElement(Rt,{post:t,thread:c,onExpandReply:u}),o.a.createElement(e,{thread:c,parent:t,expandedReplyId:p,replyBoxOpenForId:m,onExpandReply:u,onCollapseReply:i,onOpenReplyBox:d,onCloseReplyBox:f}))}))};var Lt=Object(a.c)({thread:{marginBottom:15},truncatedMessage:{color:"#fff",fontWeight:"bold",borderTop:"1px solid #656565",borderBottom:"1px dotted #fff",backgroundColor:"#181818",cursor:"pointer",marginTop:-3,"&:hover":{backgroundColor:"#282828"}},replyCount:{color:"#00bff3"},truncatedContainer:{height:300,overflow:"hidden",position:"relative"},truncatedComments:{position:"absolute !important",bottom:0}}),Pt=o.a.memo(function(e){var t=e.thread,n=Lt(),a=Object(r.useState)(null),c=Object(p.a)(a,2),l=c[0],s=c[1],i=Object(r.useState)(null),u=Object(p.a)(i,2),d=u[0],m=u[1],f=Object(r.useState)(t.posts.length>20),h=Object(p.a)(f,2),b=h[0],g=h[1],v=Object(r.useState)(t.markType),E=Object(p.a)(v,2),x=E[0],y=E[1],w=Object(r.useContext)(W).username,O=Object(r.useContext)(_e).isPostVisible,j=Object(r.useMemo)(function(){var e=t.posts?t.posts.sort(function(e,t){return e.id-t.id}):[];e.slice(-10).reverse().forEach(function(e,t){return e.recentReplyNumber=t+1});var n=Object(p.a)(e,1)[0];return Object(Ee.a)({},t,n,{id:+t.threadId,posts:e,markType:x})},[t,x]),C=function(){var e=Object(B.a)(N.a.mark(function e(t,n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we("clientData/markPost",{method:"POST",body:{username:w,postId:t,type:n}});case 2:y(n);case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),k=function(e){return m(e)},I=function(){return m(null)};return O(j)?o.a.createElement("div",{className:n.thread},o.a.createElement(Nt,{post:j,thread:j,replyBoxOpenForId:d,onCollapse:function(){return C(j.threadId,"unmarked"===j.markType?"collapsed":"unmarked")},onOpenReplyBox:k,onCloseReplyBox:I,onPinned:function(){return C(j.threadId,"unmarked"===j.markType?"pinned":"unmarked")}}),b&&o.a.createElement("div",{className:n.truncatedMessage,onClick:function(){return g(!1)}},"Thread truncated. Click to see all\xa0",o.a.createElement("span",{className:n.replyCount},j.posts.length-1),"\xa0replies."),o.a.createElement("div",{className:b?n.truncatedContainer:null},o.a.createElement(Ft,{className:b?n.truncatedComments:null,thread:j,expandedReplyId:l,replyBoxOpenForId:d,onExpandReply:function(e){s(e),m(null),g(!1)},onCollapseReply:function(){s(null),m(null)},onOpenReplyBox:k,onCloseReplyBox:I}))):null});var Dt=Object(a.c)({chatty:{margin:"72px 8px 8px 8px",font:"12px/1.5 arial, helvetica, clean, sans-serif"}}),Mt=function(){var e=Dt(),t=Object(r.useContext)(re).threads;return o.a.createElement("div",{className:e.chatty},t.map(function(e){return o.a.createElement(Pt,{key:e.threadId,thread:e})}))};var Ut=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Xe,null),o.a.createElement(u.a,null,o.a.createElement(d.a,{path:"/chatty",component:Mt}),o.a.createElement(d.a,{component:Mt})))};var zt=function(e){var t=e.children,n=Object(r.useContext)(H),a=n.setLoading,c=n.showSnackbar,l=Object(r.useState)(function(){try{var e=localStorage.getItem("auth")||"{}",t=JSON.parse(e)||{};return{username:t.username,password:t.password}}catch(n){return console.log("Invalid storage value: auth",n),localStorage.removeItem("auth"),{username:null,password:null}}}),s=Object(p.a)(l,2),i=s[0],u=s[1],d=function(){var e=Object(B.a)(N.a.mark(function e(t,n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a("async"),e.next=4,we("verifyCredentials",{method:"POST",body:{username:t,password:n}});case 4:e.sent.isValid?(localStorage.setItem("auth",JSON.stringify({username:t,password:n})),u({username:t,password:n})):(console.log("Invalid login credentials."),c("Invalid username/password. Please check them and try again")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error while logging in",e.t0),c("Error while logging in. Please try again later.");case 12:return e.prev=12,a(!1),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,8,12,15]])}));return function(t,n){return e.apply(this,arguments)}}(),m=i.username&&i.password,f=Object(Ee.a)({},i,{isLoggedIn:m,login:d,logout:function(){localStorage.removeItem("auth"),u({username:null,password:null})}});return o.a.createElement(W.Provider,{value:f},t)},_t=n(56);var Vt=function(e){var t=e.children,n=!0,a=Object(r.useContext)(W),c=a.isLoggedIn,l=a.username,s=Object(r.useContext)(H),i=s.setLoading,u=s.showSnackbar,d=Object(r.useState)({threads:[],newThreads:[]}),m=Object(p.a)(d,2),f=m[0],h=m[1],b=Object(r.useState)([]),g=Object(p.a)(b,2),v=g[0],E=g[1],x=Object(r.useState)(null),y=Object(p.a)(x,2),w=y[0],O=y[1],j=function(){var e=Object(B.a)(N.a.mark(function e(){var t,n,a,r,o,c,s,i,u,d,p=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=p.length>0&&void 0!==p[0]&&p[0],n=p.length>1&&void 0!==p[1]&&p[1],a=p.length>2&&void 0!==p[2]&&p[2],!t){e.next=9;break}return e.next=6,S();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0={};case 10:if(r=e.t0,o=r.threads,!n){e.next=16;break}return e.next=15,I(n);case 15:c=e.sent;case 16:if(o=o||f.threads,o=a?f.newThreads.concat(o):o,s=a?[]:f.newThreads,c&&(i=c.reduce(function(e,t){return Object(Ee.a)({},e,Object(_t.a)({},t.id,t.type))},{}),o=o.map(function(e){return Object(Ee.a)({},e,{markType:i[e.threadId]||"unmarked"})})),u=o.reduce(function(e,t){return e[t.threadId]=t.posts.reduce(function(e,t){return Math.max(t.id,e)},0),e},{}),o=o.sort(function(e,t){return u[t.threadId]-u[e.threadId]}).sort(function(e,t){return e.markType===t.markType==="pinned"?0:"pinned"===e.markType?-1:1}),h({threads:o,newThreads:s}),!c){e.next=27;break}return d=c.filter(function(e){return!u[e.id]}).map(function(e){var t=e.id;return we("clientData/markPost",{method:"POST",body:{username:l,postId:t,type:"unmarked"}})}),e.next=27,Promise.all(d);case 27:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(B.a)(N.a.mark(function e(){var t,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i("async"),e.next=4,we("getNewestEventId");case 4:return t=e.sent,n=t.eventId,e.next=8,j(!0,!0,!1);case 8:O(n);case 9:return e.prev=9,i(!1),e.finish(9);case 12:case"end":return e.stop()}},e,this,[[0,,9,12]])}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(B.a)(N.a.mark(function e(){var t,a,r,o;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!w){e.next=8;break}return e.next=3,we("waitForEvent?lastEventId=".concat(w));case 3:t=e.sent,a=t.lastEventId,r=t.events,o=t.error,n&&(o?(console.log("Error from API:waitForLastEvent call.",o),u("Error receiving events. Please refresh page.")):(E(r),O(a)));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(B.a)(N.a.mark(function e(){var t,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=6;break}return e.next=3,we("clientData/getMarkedPosts?username=".concat(encodeURIComponent(l)));case 3:return t=e.sent,n=t.markedPosts,e.abrupt("return",n);case 6:return e.abrupt("return",[]);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(B.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we("getChatty".concat(t>0?"?count=".concat(t):""));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(B.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(!1,!1,!0);case 2:window.scrollTo(0,0);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){return C(),function(){return n=!1}},[c]),Object(r.useEffect)(function(){k(w)},[w]),Object(r.useEffect)(function(){var e=v.reduce(function(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.eventType,a=e.eventData;if("newPost"===n){var r=a.post;if(r.parentId){var o="".concat(r.threadId),c=function(e){return e.threadId===o?Object(Ee.a)({},e,{posts:[].concat(Object(xt.a)(e.posts),[r])}):e};return{threads:t.threads.map(c),newThreads:t.newThreads.map(c)}}return{threads:t.threads,newThreads:[].concat(Object(xt.a)(t.newThreads),[{threadId:"".concat(r.id),posts:[r]}])}}if("categoryChange"===n){var l=a.postId,s=a.category,i=function(e){if(e.posts.find(function(e){return e.id===l})){var t=e.posts.map(function(e){return e.id===l?Object(Ee.a)({},e,{category:s}):e});return Object(Ee.a)({},e,{posts:t})}return e};return{threads:t.threads.map(i),newThreads:t.newThreads.map(i)}}if("lolCountsUpdate"===n){var u=a.updates.reduce(function(e,t){var n=t.postId,a=t.tag,r=t.count;return Object(Ee.a)({},e,Object(_t.a)({},n,{tag:a,count:r}))},{}),d=function(e){if(e.posts.find(function(e){return u[e.id]})){var t=e.posts.map(function(e){var t=u[e.id];if(t){var n=(e.lols||[]).filter(function(e){return e.tag!==t.tag}).concat([t]);return Object(Ee.a)({},e,{lols:n})}return e});return Object(Ee.a)({},e,{posts:t})}return e};return{threads:t.threads.map(d),newThreads:t.newThreads.map(d)}}console.debug("Unhandled event type:",e)}(t,e)},f);h(e)},[v]);var R=Object(Ee.a)({},f,{refreshChatty:T});return o.a.createElement(re.Provider,{value:R},t)},Wt=(n(403),n(405),n(407),n(175)),Ht=n.n(Wt);var Jt=Object(a.c)({progress:{zIndex:9999,position:"fixed",top:0,width:"100vw"}}),Yt=function(e){var t=e.loading,n=Jt();return"async"!==t?null:o.a.createElement(Ht.a,{className:n.progress,color:"secondary"})},At=n(176),qt=n.n(At);var Gt=Object(a.c)({container:{zIndex:99999,position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.2)"},progress:{position:"absolute",top:"calc(50% - 60px)",left:"calc(50% - 60px)"}}),Kt=function(e){var t=e.loading,n=Gt();return"sync"!==t?null:o.a.createElement("div",{className:n.container},o.a.createElement(qt.a,{className:n.progress,size:60,thickness:4,color:"secondary"}))},Qt=n(177),Xt=n.n(Qt);var Zt=function(e){var t=e.snackbars,n=e.setSnackbars,a=function(){return n(t.slice(1))},r=!1,c="";return t.length&&(r=!0,c=t[0]),o.a.createElement(Xt.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:6e3,open:r,onClose:a,onExited:a,message:o.a.createElement("span",null,c)})};var $t=function(e){var t=e.children,n=Object(r.useState)(!1),a=Object(p.a)(n,2),c=a[0],l=a[1],s=Object(r.useState)([]),i=Object(p.a)(s,2),u=i[0],d=i[1],m={setLoading:l,showSnackbar:function(e){return d(u.concat([e]))}};return o.a.createElement(H.Provider,{value:m},o.a.createElement(Kt,{loading:c}),o.a.createElement(Yt,{loading:c}),o.a.createElement(Zt,{snackbars:u,setSnackbars:d}),t)};var en=function(e){var t=e.children,n=Object(r.useState)({showCollapsed:!1,showFilteredUsers:!1,filteredUsers:[],showFilteredTerms:!1,filteredTerms:[]}),a=Object(p.a)(n,2),c=a[0],l=a[1],s={filterSettings:c,setFilterSettings:l,isPostVisible:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=c.showCollapsed,a=c.showFilteredUsers,r=c.filteredUsers,o=c.showFilteredTerms,l=c.filteredTerms;return!(!n&&"collapsed"===e.markType)&&!(!a&&r.some(function(e){return e.regex.test(t.author)}))&&!(!o&&l.some(function(e){return e.regex.test(t.body)}))}};return o.a.createElement(_e.Provider,{value:s},t)},tn=n(424),nn=n(178),an=n.n(nn)()({});var rn;rn=function(){return o.a.createElement(tn.a,{history:an},o.a.createElement(a.a,{theme:i},o.a.createElement($t,null,o.a.createElement(zt,null,o.a.createElement(Vt,null,o.a.createElement(en,null,o.a.createElement(Ut,null)))))))},l.a.render(o.a.createElement(rn,null),document.getElementById("root"))}},[[183,2,1]]]);
//# sourceMappingURL=main.f56e849b.chunk.js.map