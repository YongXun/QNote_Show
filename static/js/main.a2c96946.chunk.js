(this.webpackJsonpqnote_pc=this.webpackJsonpqnote_pc||[]).push([[0],{146:function(e,t,a){e.exports=a(241)},151:function(e,t,a){},152:function(e,t,a){},170:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},237:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(7),i=a.n(s),r=(a(151),a(152),a(39)),c=a(40),l=a(43),u=a(41),m=a(63),p=a(14),g=a(245),d=a(16),h=a.n(d),f=a(37),v=a(71),N=a(53),b=a(244),S=a(242),E=a(247),k=a(248),y=a(246),w=a(249),I=a(250),O=a(49),C=a(18),x=a.n(C);a(170),a(171);g.b.config({top:100,duration:1,maxCount:1,rtl:!1,getContainer:function(){return document.querySelector(".App")||document.head}});var j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentWillMount=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("123"),null===(t=localStorage.getItem("token"))){e.next=7;break}return e.next=5,x.a.post("https://qnote.qfstudio.net/api/authToken",{token:t}).then((function(e){if(e.data.ok){n.setState({online:!0});var t=JSON.parse(sessionStorage.getItem("user")||"[]"),a=JSON.parse(sessionStorage.getItem("noteList")||"[]");0===t.length?x.a.get("https://qnote.qfstudio.net/api/user/getMessage",{params:{token:localStorage.getItem("token")}}).then((function(e){n.setState({user:e.data.user}),sessionStorage.setItem("user",JSON.stringify(e.data.user)),sessionStorage.setItem("noteList",JSON.stringify(e.data.note)),n.setState({user:e.data.user,noteList:e.data.noteList}),n.hideShowIn()})).catch((function(e){console.log(e)})):n.setState({user:t,noteList:a})}else{localStorage.removeItem("token");var o=JSON.parse(localStorage.getItem("user"));null===o&&(o={noteNum:0,completeNoteNum:0,currentNoteNum:0,giveUpNoteNum:0},localStorage.setItem("user",JSON.stringify(o))),n.setState({user:o})}}));case 5:e.next=10;break;case 7:null===(a=JSON.parse(localStorage.getItem("user")))&&(a={noteNum:0,completeNoteNum:0,currentNoteNum:0,giveUpNoteNum:0},localStorage.setItem("user",JSON.stringify(a))),n.setState({user:a});case 10:case"end":return e.stop()}}),e)}))),n.showSignIn=function(){Object(O.a)({targets:".signinpad",left:"0"})},n.showSignUp=function(){Object(O.a)({targets:".signuppad",right:"0"})},n.hideShowIn=function(){Object(O.a)({targets:".signinpad",left:"-100%"})},n.hideShowUp=function(){Object(O.a)({targets:".signuppad",right:"-100%"})},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){console.log(typeof e),n.signout(),n.setState({visible:!1})},n.handleCancel=function(e){n.setState({visible:!1})},n.signin=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.signinCheck()){e.next=2;break}return e.abrupt("return");case 2:return t=n.state.signin_email,a=n.state.signin_password,e.next=7,x.a.post("https://qnote.qfstudio.net/api/signin",{email:t,password:a}).then((function(e){localStorage.setItem("token",e.data.token),n.setState({online:!0}),g.b.success("\u767b\u5f55\u6210\u529f")})).catch((function(e){g.b.info("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u90ae\u7bb1\u4e0e\u5bc6\u7801")}));case 7:n.setState({signin_email:"",signin_password:""}),x.a.get("https://qnote.qfstudio.net/api/user/getMessage",{params:{token:localStorage.getItem("token")}}).then((function(e){n.setState({user:e.data.user}),sessionStorage.setItem("user",JSON.stringify(e.data.user)),sessionStorage.setItem("noteList",JSON.stringify(e.data.note)),n.hideShowIn()})).catch((function(e){console.log(e)}));case 9:case"end":return e.stop()}}),e)}))),n.signup=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.signupCheck()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x.a.post("https://qnote.qfstudio.net/api/register",{email:n.state.signup_email,username:n.state.signup_username,password:n.state.signup_pwd,verification:n.state.signup_valid}).then((function(e){g.b.success("\u6ce8\u518c\u6210\u529f")})).catch((function(e){console.log(n.state.signup_email),console.log(n.state.signup_username),console.log(n.state.signup_pwd),console.log(n.state.signup_valid),g.b.info("\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u4fe1\u606f\u662f\u5426\u6b63\u786e")}));case 4:case"end":return e.stop()}}),e)}))),n.setWait=function(e){console.log("\u8f6c\u6362"),n.setState({wait:e})},n.sendEmail=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.state.wait?g.b.info("\u8bf7\u7b49\u5f85"):/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(n.state.signup_email)?x.a.post("https://qnote.qfstudio.net/api/sendEmail",{email:n.state.signup_email}).then((function(e){e.data.valid?(g.b.success("\u53d1\u9001\u6210\u529f\uff01"),n.setWait(!0),Object(O.a)({targets:".count",innerHTML:[60,0],easing:"linear",round:1,duration:6e4}),setTimeout(n.setWait.bind(Object(v.a)(n),!1),6e4)):g.b.info("\u53d1\u9001\u5931\u8d25\uff01")})):g.b.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\uff01");case 1:case"end":return e.stop()}}),e)}))),n.signout=function(){localStorage.removeItem("token"),n.setState({online:!1})},n.showUpLoad=function(){Object(O.a)({targets:".ant-avatar",zIndex:"-999"})},n.hideUpLoad=function(){Object(O.a)({targets:".ant-avatar",zIndex:"2"})},n.avatarChange=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,o,s,i,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.online){e.next=3;break}return g.b.info("\u6682\u4e0d\u652f\u6301\u672c\u5730\u7528\u6237\u4e0a\u4f20\u5934\u50cf\uff01"),e.abrupt("return");case 3:if(a=localStorage.getItem("token"),o=new FileReader,"image/jpeg"===(s=document.querySelector("#avatar-loader").files[0]).type||"image/png"===s.type||"image/jpg"===s.type){e.next=10;break}return console.log(s.type),g.b.info("\u4ec5\u652f\u6301JPEG\u548cPNG\u683c\u5f0f\u7684\u56fe\u7247\uff01"),e.abrupt("return");case 10:if(s.size/1024/1024<2){e.next=14;break}return g.b.info("\u56fe\u7247\u5927\u5c0f\u4e0d\u53ef\u5927\u4e8e2MB\uff01"),e.abrupt("return");case 14:o.readAsDataURL(s),o.onload=function(){document.querySelector("#avatar").setAttribute("src",o.result)},i=new FormData,r=new XMLHttpRequest,i.append("avatar",s),r.open("POST","https://qnote.qfstudio.net/api/user/avatar"),r.setRequestHeader("Content-Type","multipart/form-data"),r.setRequestHeader("Token",a),r.onload=function(){200===r.status?console.log("\u4e0a\u4f20\u6210\u529f"):console.log("\u51fa\u9519\u4e86")},r.send(i);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={online:!1,avatarURL:"",signin_email:"",signin_password:"",signup_email:"",signup_username:"",signup_pwd:"",signup_cpwd:"",signup_valid:"",visible:!1,wait:!1,user:{id:"string",username:"string",email:"string",noteNum:0,completeNoteNum:0,currentNoteNum:0,giveUpNoteNum:0},loading:!1,upLoading:!1,imageUrl:""},n}return Object(c.a)(a,[{key:"signinCheck",value:function(){var e=this.state.signin_email,t=this.state.signin_password;return/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)?!(t.length<6||t.length>10)||(g.b.info("\u5bc6\u7801\u957f\u5ea6\u4e0d\u5408\u6cd5"),!1):(g.b.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\uff01"),!1)}},{key:"signupCheck",value:function(){var e=this.state.signup_pwd,t=this.state.signup_cpwd,a=this.state.signup_valid;return/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.state.signup_email)?e.length<6||e.length>10?(g.b.info("\u5bc6\u7801\u957f\u5ea6\u9700\u57286\u4e0e10\u4e4b\u95f4"),!1):t!==e?(g.b.info("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"),!1):!!a||(g.b.info("\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\u9a8c\u8bc1\u7801"),!1):(g.b.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1"),!1)}},{key:"refresh",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),Object(O.a)({targets:".refresh",rotate:[{value:"360deg",duration:1e4,easing:"linear"},{value:"0deg"}]}),e.t0=this.state.online,e.next=!0===e.t0?5:7;break;case 5:return x.a.get("https://qnote.qfstudio.net/api/user/getMessage",{params:{token:localStorage.getItem("token")}}).then((function(e){a.setState({user:e.data.user}),sessionStorage.setItem("user",JSON.stringify(e.data.user)),sessionStorage.setItem("noteList",JSON.stringify(e.data.note)),g.b.success("\u5237\u65b0\u6210\u529f\uff01"),a.setState({loading:!1})})).catch((function(e){console.log(e)})),e.abrupt("break",12);case 7:return null===(t=JSON.parse(localStorage.getItem("user")))&&(t={noteNum:0,completeNoteNum:0,currentNoteNum:0,giveUpNoteNum:0},localStorage.setItem("user",JSON.stringify(t))),g.b.success("\u5237\u65b0\u6210\u529f\uff01"),this.setState({user:t,loading:!1}),e.abrupt("break",12);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"beforeUpload",value:function(e){if(this.state.online){var t="image/jpeg"===e.type||"image/png"===e.type;t||g.b.error("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||g.b.error("Image must smaller than 2MB!"),t&&a}g.b.info("\u6682\u4e0d\u652f\u6301\u672c\u5730\u7528\u6237\u4e0a\u4f20\u5934\u50cf\uff01")}},{key:"render",value:function(){var e=this;this.state.upLoading?w.a:I.a;return o.a.createElement("div",{className:"userpad-wrapper"},o.a.createElement("header",null,o.a.createElement(N.a,{type:"primary",className:"signin-btn",onClick:this.state.online?this.showModal.bind(this):this.showSignIn.bind(this)},this.state.online?"\u9000\u51fa":"\u767b\u5f55"),o.a.createElement(N.a,{type:"primary",className:"signup-btn",onClick:this.showSignUp.bind(this)},"\u6ce8\u518c")),o.a.createElement("main",null,o.a.createElement(b.a,{title:"QNote",visible:this.state.visible,onOk:this.handleOk.bind(this),onCancel:this.handleCancel.bind(this),width:300,centered:!0,okText:"\u9000\u51fa",cancelText:"\u53d6\u6d88"},o.a.createElement("p",null,"\u662f\u5426\u9000\u51fa\u767b\u5f55?")),o.a.createElement("div",{className:"message-box"},o.a.createElement("div",{className:"avatar-area"},o.a.createElement("img",{src:this.state.avatarURL?this.state.avatarURL:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"",id:"avatar",width:"200",height:"200"}),o.a.createElement("div",{className:"uploader"},o.a.createElement("div",null,o.a.createElement(N.a,{type:"primary"},o.a.createElement("label",{htmlFor:"avatar-loader",className:"upload-btn"},"\u4e0a\u4f20\u5934\u50cf")),o.a.createElement("input",{name:"avatar",type:"file",id:"avatar-loader",onChange:this.avatarChange.bind(this)})))),o.a.createElement("div",{className:"username"},"\u7528\u6237:",this.state.online?this.state.user.username:"\u6e38\u5ba2")),o.a.createElement("div",{className:"message"},o.a.createElement("div",{className:"refresh"},o.a.createElement("i",{className:"iconfont icon-shuaxin",title:"\u5237\u65b0\u6570\u636e",onClick:this.refresh.bind(this)})),o.a.createElement(S.a,{spinning:this.state.loading},o.a.createElement(E.a,{gutter:48},o.a.createElement(k.a,{span:6},o.a.createElement(y.a,{title:"\u5f53\u524d\u4e8b\u52a1\u6570",value:this.state.user.currentNoteNum})),o.a.createElement(k.a,{span:6},o.a.createElement(y.a,{title:"\u5386\u53f2\u5b8c\u6210\u6570",value:this.state.user.completeNoteNum})),o.a.createElement(k.a,{span:6},o.a.createElement(y.a,{title:"\u5386\u53f2\u653e\u5f03\u6570",value:this.state.user.giveUpNoteNum})),o.a.createElement(k.a,{span:6},o.a.createElement(y.a,{title:"\u5386\u53f2\u4e8b\u52a1\u6570",value:this.state.user.noteNum}))))),o.a.createElement("div",{className:"signinpad"},o.a.createElement("div",{className:"signin"},o.a.createElement("i",{className:"iconfont icon-quxiao1 signin-cancel",onClick:this.hideShowIn.bind(this)}),o.a.createElement("form",null,o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-youxiang1"})),o.a.createElement("input",{value:this.state.signin_email,type:"text",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1",onChange:function(t){e.setState({signin_email:t.target.value})}})),o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-mima"})),o.a.createElement("input",{value:this.state.signin_password,type:"password",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",onChange:function(t){e.setState({signin_password:t.target.value})}}))),o.a.createElement("div",{className:"signin-submit"},o.a.createElement("i",{className:"iconfont icon-denglu",onClick:this.signin.bind(this)})))),o.a.createElement("div",{className:"signuppad"},o.a.createElement("div",{className:"signup"},o.a.createElement("i",{className:"iconfont icon-quxiao1 signup-cancel",onClick:this.hideShowUp.bind(this)}),o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-youxiang1"})),o.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1",value:this.state.signup_email,onChange:function(t){e.setState({signup_email:t.target.value})}})),o.a.createElement("button",{className:"valid-btn",onClick:this.sendEmail.bind(this)},this.state.wait?o.a.createElement("span",null,"\u7b49\u5019",o.a.createElement("span",{className:"count"}),"s"):o.a.createElement("span",null,"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-yonghu"})),o.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d",value:this.state.signup_username,onChange:function(t){e.setState({signup_username:t.target.value})}})),o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-mima"})),o.a.createElement("input",{type:"password",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",value:this.state.signup_pwd,onChange:function(t){e.setState({signup_pwd:t.target.value})}})),o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-mima"})),o.a.createElement("input",{type:"password",placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u60a8\u7684\u5bc6\u7801",value:this.state.signup_cpwd,onChange:function(t){e.setState({signup_cpwd:t.target.value})}})),o.a.createElement("div",{className:"input-bar"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"iconfont icon-yanzhengma"})),o.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u9a8c\u8bc1\u7801",value:this.state.signup_valid,onChange:function(t){e.setState({signup_valid:t.target.value})}}))),o.a.createElement("div",{className:"signup-submit"},o.a.createElement("i",{className:"iconfont icon-denglu",onClick:this.signup.bind(this)}))))),o.a.createElement("footer",null))}}]),a}(o.a.Component);a(227);g.b.config({top:100,duration:1,maxCount:1,rtl:!1,getContainer:function(){return document.querySelector(".App")||document.head}});var _=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.target.value.length<20?n.setState({info:e.target.value}):g.b.info("\u6ce8\u610f\u8a00\u7b80\u610f\u8d45\u54e6\uff01")},n.handleClick=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,o,s,i,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.info){e.next=5;break}g.b.info("\u8bf7\u8f93\u5165\u4fbf\u7b7e\u5185\u5bb9\uff01"),e.next=27;break;case 5:if(!n.state.online){e.next=18;break}return console.log("\u5728\u7ebf\u7528\u6237\u5b8c\u6210\u4efb\u52a1"),o=localStorage.getItem("token"),e.next=10,x.a.post("https://qnote.qfstudio.net/api/note/addTask",{token:o,noteContent:a,noteRemark:""}).then((function(e){return e.data.noteID}));case 10:s=e.sent,console.log(s),(i=JSON.parse(sessionStorage.getItem("noteList")||"[]")).push({noteID:s,noteContent:a,noteRemark:"",done:!1}),n.setState({noteList:i,info:""}),sessionStorage.setItem("noteList",JSON.stringify(i)),e.next=27;break;case 18:console.log("\u672c\u5730\u7528\u6237\u6dfb\u52a0\u4efb\u52a1"),(r=JSON.parse(localStorage.getItem("noteList")||"[]")).push({noteID:r.length,noteContent:n.state.info,noteRemark:"",done:!1}),(c=JSON.parse(localStorage.getItem("user"))).currentNoteNum++,c.noteNum++,localStorage.setItem("user",JSON.stringify(c)),n.setState({noteList:r,info:"",user:c}),localStorage.setItem("noteList",JSON.stringify(r));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.gNote=function(e){switch(n.state.online){case!0:console.log("\u5728\u7ebf\u7528\u6237\u653e\u5f03\u4e8b\u52a1");var t=localStorage.getItem("token"),a=n.state.noteList;a.forEach((function(t,n){t.noteID===e&&a.splice(n,1)})),n.setState({noteList:a}),sessionStorage.setItem("noteList",JSON.stringify(a)),x.a.post("https://qnote.qfstudio.net/api/note/giveUpTask",{noteID:e,token:t,username:n.state.user.username});break;default:console.log("\u672c\u5730\u7528\u6237\u653e\u5f03\u4e8b\u52a1");var o=n.state.noteList;o.forEach((function(t,a){t.noteID===e&&o.splice(a,1)}));var s=JSON.parse(localStorage.getItem("user"));s.giveUpNoteNum++,s.currentNoteNum--,localStorage.setItem("user",JSON.stringify(s)),n.setState({noteList2:o}),localStorage.setItem("noteList",JSON.stringify(o))}},n.dNote=function(e){switch(n.state.online){case!0:console.log("\u5728\u7ebf\u7528\u6237\u5220\u9664\u5df2\u5b8c\u6210\u4efb\u52a1");var t=localStorage.getItem("token"),a=n.state.noteList;a.forEach((function(t,n){t.noteID===e&&a.splice(n,1)})),n.setState({noteList:a}),sessionStorage.setItem("noteList",JSON.stringify(a)),x.a.post("https://qnote.qfstudio.net/api/note/deleteNote",{noteID:e,token:t,username:n.state.user.username});break;default:console.log("\u672c\u5730\u7528\u6237\u5220\u9664\u5df2\u5b8c\u6210\u4efb\u52a1");var o=n.state.noteList;o.forEach((function(t,a){t.noteID===e&&o.splice(a,1)})),n.setState({noteList2:o}),localStorage.setItem("noteList",JSON.stringify(o))}},n.cNote=function(e){switch(n.state.online){case!0:console.log("\u5728\u7ebf\u7528\u6237\u5b8c\u6210\u4efb\u52a1");var t=localStorage.getItem("token"),a=n.state.noteList;a.forEach((function(t,a){t.noteID===e&&(t.done=!0)})),n.setState({noteList:a}),sessionStorage.setItem("noteList",JSON.stringify(a)),x.a.post("https://qnote.qfstudio.net/api/note/completeTask",{noteID:e,token:t,username:n.state.user.username});break;default:console.log("\u672c\u5730\u7528\u6237\u5b8c\u6210\u4efb\u52a1");var o=n.state.noteList;o.forEach((function(t,a){t.noteID===e&&(t.done=!0)})),n.setState({noteList2:o});var s=JSON.parse(localStorage.getItem("user"));s.completeNoteNum++,s.currentNoteNum--,localStorage.setItem("user",JSON.stringify(s)),localStorage.setItem("noteList",JSON.stringify(o))}},n.state={online:!1,noteList:[],info:"",user:{id:"string",username:"string",email:"string",noteNum:0,completeNoteNum:0,currentNoteNum:0,giveUpNoteNum:0}},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){if(localStorage.getItem("token")){console.log("\u4e8b\u52a1\u5217\u8868-\u767b\u5f55\u72b6\u6001");var e=JSON.parse(sessionStorage.getItem("noteList")||"[]"),t=JSON.parse(sessionStorage.getItem("user")||"[]");this.setState({online:!0,noteList:e,user:t})}else{console.log("\u4e8b\u52a1\u5217\u8868-\u79bb\u7ebf\u72b6\u6001");var a=JSON.parse(localStorage.getItem("noteList")||"[]");this.setState({online:!1,noteList:a})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"notepad-wrapper"},o.a.createElement("header",null,o.a.createElement("input",{className:"note-input-bar",type:"text",placeholder:"\u8f93\u5165\u6807\u7b7e\u5185\u5bb9\u540e\u70b9\u51fb\u6309\u94ae\u6dfb\u52a0",value:this.state.info,onChange:this.handleChange.bind(this)}),o.a.createElement("button",{onClick:this.handleClick.bind(this)},o.a.createElement("i",{className:"iconfont icon-bianjibijishishouxie"}))),o.a.createElement("main",null,o.a.createElement("div",{className:"note-not"},o.a.createElement("span",null,"\u672a\u5b8c\u6210"),this.state.noteList.map((function(t,a){if(!1===t.done)return o.a.createElement("section",{className:"note-n",key:a},o.a.createElement("span",null,t.noteContent),o.a.createElement("div",{className:"tool"},o.a.createElement("i",{className:"iconfont icon-lujing",onClick:e.cNote.bind(e,t.noteID)}),o.a.createElement("i",{className:"iconfont icon-lajitong",onClick:e.gNote.bind(e,t.noteID)})))}))),o.a.createElement("div",{className:"note-done"},o.a.createElement("span",null,"\u5df2\u5b8c\u6210"),this.state.noteList.map((function(t,a){if(!1!==t.done)return o.a.createElement("section",{className:"note-c",key:a},o.a.createElement("span",null,t.noteContent),o.a.createElement("div",{className:"tool"},o.a.createElement("i",{className:"iconfont icon-lajitong",onClick:e.dNote.bind(e,t.noteID)})))})))))}}]),a}(o.a.Component),L=(a(228),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getMotto=function(){x.a.get("https://qnote.qfstudio.net/api/motto").then((function(e){n.setState({motto:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))},n.copy=function(){var e=document.createElement("input");e.setAttribute("id","cp_hgz_input"),e.value=n.state.motto.hitokoto,document.getElementById("copy").appendChild(e),document.getElementById("cp_hgz_input").select(),document.execCommand("copy"),document.getElementById("cp_hgz_input").remove(),g.b.success("\u5df2\u7ecf\u590d\u5236\u5230\u7c98\u8d34\u677f\u4e0a\uff01")},n.state={online:!1,motto:{hitokoto:"\u4f1a\u6709\u90a3\u4e48\u4e00\u5929",from_who:"",from:"\u539f\u521b"}},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this.getMotto()}},{key:"render",value:function(){return o.a.createElement("div",{className:"mottopad-wrapper"},o.a.createElement("div",{className:"motto-wrapper"},o.a.createElement("div",{className:"motto"},o.a.createElement("span",{className:"hitokoto"},this.state.motto.hitokoto),o.a.createElement("span",{className:"from"},"\u2014\u2014".concat(this.state.motto.rom_who?this.state.motto.rom_who:"","\u300a").concat(this.state.motto.from,"\u300b")))),o.a.createElement("div",{className:"tool"},o.a.createElement("button",{onClick:this.getMotto.bind(this)},o.a.createElement("i",{className:"iconfont icon-shuaxin"}),"\u6362\u4e00\u6761"),o.a.createElement("button",{onClick:this.copy.bind(this)},o.a.createElement("i",{className:"iconfont icon-bianjibijishishouxie"}),"\u590d\u5236")),o.a.createElement("div",{id:"copy"}))}}]),a}(o.a.Component)),J=a(143),q=a(243),D=(a(229),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).count=function(e){e=new Date(Date.parse(e.replace(/-/g,"/")));var t=new Date,a=new Date(Date.parse("".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()).replace(/-/g,"/"))),n=e.getTime(),o=a.getTime();return parseInt((n-o)/1e3/3600/24)},n.countString=function(e){var t,a=new Date(e),n=a.getFullYear(),o=a.getMonth()+1,s=a.getDate(),i=new Date,r=(i=new Date(Date.parse("".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate()).replace(/-/g,"/")))).getFullYear(),c=i.getMonth()+1,l=i.getDate(),u=c-o+12*Math.abs(r-n);100*c+l<100*o+s&&u--,t=Math.floor(u/12),u%=12;var m=new Date(a);m.setFullYear(n+t),m.setMonth(a.getMonth()+u);var p=Math.floor((i.getTime()-m.getTime())/24/60/60/1e3),g="";return t&&(g+="".concat(t,"\u5e74")),u&&(g+="".concat(u,"\u6708")),p&&(g+="".concat(p,"\u5929")),console.log(g),g},n.titleChange=function(e){e.target.value.length<10?n.setState({input:{title:e.target.value,date:n.state.input.date}}):g.b.info("\u6ce8\u610f\u8a00\u7b80\u610f\u8d45\u54e6\uff01")},n.dateChange=function(e,t){n.setState({input:{title:n.state.input.title,date:t}})},n.submit=function(){if(n.check())switch(console.log(n.state.online),n.state.online){case!0:var e=localStorage.getItem("token");console.log("\u6dfb\u52a0\u7eaa\u5ff5\u65e5-\u5728\u7ebf\u6a21\u5f0f"),x.a.post("https://qnote.qfstudio.net/api/memorial/add",Object(J.a)({token:e},n.state.input)).then((function(e){g.b.success("\u6dfb\u52a0\u6210\u529f\uff01")})).catch((function(e){g.b.info("\u6dfb\u52a0\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\uff01")}));var t=JSON.parse(sessionStorage.getItem("memorial")||"[]");t.push(n.state.input),sessionStorage.setItem("memorial",JSON.stringify(t)),n.setState({memorial:t,input:{title:"",date:n.state.input.date}});break;default:console.log("\u6dfb\u52a0\u7eaa\u5ff5\u65e5-\u79bb\u7ebf\u6a21\u5f0f");var a=JSON.parse(localStorage.getItem("memorial")||"[]");a.push(n.state.input),localStorage.setItem("memorial",JSON.stringify(a)),n.setState({memorial:a,input:{title:"",date:n.state.input.date}})}else g.b.info("\u8bf7\u786e\u4fdd\u4fe1\u606f\u586b\u5199\u6b63\u786e\uff01")},n.state={online:!1,memorial:[{title:"\u4e2d\u56fd\u4eba\u6c11\u5171\u548c\u56fd\u6210\u7acb",date:"1949-10-01"}],input:{title:"",date:""}},n}return Object(c.a)(a,[{key:"check",value:function(){return this.state.input.title?!!this.state.input.date||(g.b.info("\u8bf7\u9009\u62e9\u65e5\u671f\uff01"),!1):(g.b.info("\u8bf7\u8f93\u5165\u6807\u9898\uff01"),!1)}},{key:"componentWillMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,o=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token")){e.next=7;break}console.log("\u7eaa\u5ff5\u65e5\u5217\u8868-\u79bb\u7ebf\u72b6\u6001"),a=JSON.parse(localStorage.getItem("memorial")||JSON.stringify([{title:"\u4e2d\u56fd\u4eba\u6c11\u5171\u548c\u56fd\u6210\u7acb71\u5468\u5e74",date:"2020-10-01"}])),this.setState({online:!1,memorial:a}),e.next=13;break;case 7:if(console.log("\u7eaa\u5ff5\u65e5\u5217\u8868-\u767b\u5f55\u72b6\u6001"),n=JSON.parse(sessionStorage.getItem("memorial"))){e.next=12;break}return x.a.post("https://qnote.qfstudio.net/api/memorial",{token:t}).then((function(e){o.setState({online:!0,memorial:e.data.memorial})})),e.abrupt("return");case 12:this.setState({online:!0,memorial:n});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"datepad-wrapper"},o.a.createElement("div",{className:"tool"},o.a.createElement("input",{type:"text",value:this.state.input.title,onChange:this.titleChange.bind(this),placeholder:"\u8bf7\u8f93\u5165\u7eaa\u5ff5\u65e5\u4e3b\u9898",className:"title-input"}),o.a.createElement(q.a,{showToday:!0,onChange:this.dateChange.bind(this)}),o.a.createElement(N.a,{type:"primary",onClick:this.submit.bind(this)},"\u6dfb\u52a0\u7eaa\u5ff5\u65e5")),o.a.createElement("div",{className:"date-list"},this.state.memorial.map((function(t,a){return o.a.createElement("section",{className:"date",key:a,style:{backgroundColor:"rgba(".concat(255*Math.random(),",").concat(255*Math.random(),",").concat(255*Math.random(),",.5)"),color:"rgba(".concat(255*Math.random(),",").concat(255*Math.random(),",").concat(255*Math.random(),",.5)")}},o.a.createElement("span",{className:"title"},t.title),o.a.createElement("span",{className:"date"},t.date),o.a.createElement("span",{className:0===e.count(t.date)?"count":"hidden"},"\u4eca\u5929"),o.a.createElement("span",{className:0===e.count(t.date)?"hidden":"count"},"".concat(Math.abs(e.count(t.date))).concat(e.count(t.date)<0?"\u5929\u524d":"\u5929\u540e")))}))))}}]),a}(o.a.Component));a(237);g.b.config({top:100,duration:1,maxCount:1,rtl:!1,getContainer:function(){return document.querySelector(".App")||document.head}});var M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,null,o.a.createElement("nav",null,o.a.createElement("section",null,o.a.createElement("i",{className:"iconfont icon-daohanggerenzhongxin"}),o.a.createElement(m.b,{to:"/"},"QNote")),o.a.createElement("section",null,o.a.createElement("i",{className:"iconfont icon-bianjibijishishouxie"}),o.a.createElement(m.b,{to:"/note"},"\u4e8b\u52a1\u5217\u8868")),o.a.createElement("section",null,o.a.createElement("i",{className:"iconfont icon-rili"}),o.a.createElement(m.b,{to:"./date"},"\u7eaa\u5ff5\u65e5")),o.a.createElement("section",null,o.a.createElement("i",{className:"iconfont icon-liuyan"}),o.a.createElement(m.b,{to:"./motto"},"\u7ecf\u5178\u8bed\u5f55"))),o.a.createElement("main",{className:"container"},o.a.createElement(p.a,{exact:!0,path:"/",component:j}),o.a.createElement(p.a,{path:"/note",component:_}),o.a.createElement(p.a,{path:"/date",component:D}),o.a.createElement(p.a,{path:"/motto",component:L}))))}}]),a}(o.a.Component);i.a.render(o.a.createElement(M,null),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.a2c96946.chunk.js.map