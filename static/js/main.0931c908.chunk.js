(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{122:function(e,t,a){e.exports=a(136)},136:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),s=(a(64),a(127),a(104)),i=a(39),o=a(42),m=a(43),u=a(46),d=a(45),h=a(75),_=a(194),p=a(109),f=a(184),E=a(186),b=a(188),v=a(180),w=a(185),j=a(187),x=a(213),g=a(189),y=a(193),k=a(191),O=a(192),F=a(190);function S(e){return function(e){return l.a.createElement(v.a,{component:p.a},l.a.createElement(f.a,{"aria-label":"simple table"},l.a.createElement(w.a,null,e.header_row),l.a.createElement(E.a,null,e.body_rows)))}({header_row:l.a.createElement(j.a,null,e.cols.map((function(e){return l.a.createElement(b.a,null,e.ja_name)}))),body_rows:e.rows.map((function(t){return l.a.createElement(j.a,{key:t.name},e.cols.map((function(e){return l.a.createElement(b.a,{component:"th",scope:"row"},t[e.name])})))}))})}function M(e){var t=l.a.useState(!1),a=Object(h.a)(t,2),n=a[0],c=a[1],r=function(){c(!1)};return l.a.createElement("div",null,l.a.createElement(g.a,{open:n,onClose:r,"aria-labelledby":"form-dialog-title"},l.a.createElement(F.a,{id:"form-dialog-title"},e.button_text),l.a.createElement(k.a,null,l.a.createElement(O.a,null,"\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),e.text_fields),l.a.createElement(y.a,null,l.a.createElement(_.a,{onClick:function(){e.handleSubmit(),r()},color:"primary"},"\u8ffd\u52a0"),l.a.createElement(_.a,{onClick:r,color:"secondary"},"\u30ad\u30e3\u30f3\u30bb\u30eb"))),l.a.createElement(_.a,{onClick:function(){c(!0)},color:"primary",variant:"contained"},e.button_text))}var A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).cols=e.cols;var c=[];return e.rows&&(c=e.rows),n.state={rows:c},n.title=e.title,n.button_text=e.button_text,n.process_name=e.name,n.textField={},n.text_fields=n.cols.map((function(e){return l.a.createElement(x.a,{autoFocus:!0,label:e.ja_name,inputRef:function(t){return n.textField[e.name]=t},fullWidth:!0})})),n}return Object(m.a)(a,[{key:"add_process",value:function(){var e=this,t={};this.cols.forEach((function(a){t[a.name]=e.textField[a.name].value})),this.setState((function(e){return{rows:e.rows.concat(t)}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,this.title),l.a.createElement(M,{handleSubmit:function(t){return e.add_process(t)},text_fields:this.text_fields,button_text:this.button_text}),l.a.createElement(S,{rows:this.state.rows,cols:this.cols}))}}]),a}(l.a.Component),C=a(215),W=a(211),N=a(199),R=a(198),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).classes=Object(R.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),n.schedule=e.schedule,n.processes=e.processes,n.process_confs=e.process_confs,n.call_back=e.call_back,n.state={rows:n.schedule.steps.map((function(e){return{process:n.processes[e.process_id].name,process_conf:n.process_confs[e.process_conf_id].name}}))},n.schedule_name=n.schedule.name,n.selectField={},n.cols=[{name:"process",ja_name:"\u30d7\u30ed\u30bb\u30b9"},{name:"process_conf",ja_name:"\u30d7\u30ed\u30bb\u30b9\u8a2d\u5b9a"}],n.selectField={},n.text_fields=l.a.createElement("div",null,l.a.createElement(C.a,null,"\u30d7\u30ed\u30bb\u30b9"),l.a.createElement(W.a,{inputRef:function(e){return n.selectField.process=e},fullWidth:!0},Object.keys(n.processes).map((function(e){return l.a.createElement(N.a,{value:e},n.processes[e].name)}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,null,"\u30d7\u30ed\u30bb\u30b9\u8a2d\u5b9a"),l.a.createElement(W.a,{inputRef:function(e){return n.selectField.process_conf=e},fullWidth:!0},Object.keys(n.process_confs).map((function(e){return l.a.createElement(N.a,{value:e},n.process_confs[e].name)})))),n}return Object(m.a)(a,[{key:"add_step",value:function(){var e=this.selectField.process.value,t=this.selectField.process_conf.value,a={process:this.processes[e].name,process_conf:this.process_confs[t].name},n=this.schedule.id;this.call_back({schedule_id:n,process_id:e,process_conf_id:t}),this.setState((function(e){return{rows:e.rows.concat(a)}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,this.schedule_name),l.a.createElement(M,{handleSubmit:function(t){return e.add_step()},text_fields:this.text_fields,button_text:this.schedule_name+"\u306b\u65b0\u898f\u30b9\u30c6\u30c3\u30d7\u3092\u8ffd\u52a0"}),l.a.createElement(S,{rows:this.state.rows,cols:this.cols}))}}]),a}(l.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).name="a",n.state={schedules:{1:{id:1,name:"\u54c1\u756a01420-40710\u7528\u5de5\u7a0b",steps:[{process_id:1,process_conf_id:4},{process_id:3,process_conf_id:6}]},2:{id:2,name:"\u54c1\u756a060027-0031\u7528\u5de5\u7a0b",steps:[{process_id:1,process_conf_id:1},{process_id:2,process_conf_id:5}]},3:{id:3,name:"\u54c1\u756aGN642-00600-H\u7528\u5de5\u7a0b",steps:[{process_id:1,process_conf_id:1},{process_id:2,process_conf_id:5}]}},processes:{1:{name:"\u30e1\u30c3\u30ad"},2:{name:"\u30aa\u30fc\u30d6\u30f31"},3:{name:"\u30aa\u30fc\u30d6\u30f32"}},process_confs:{1:{name:"\u30e1\u30c3\u30ad120\u79d2"},2:{name:"\u30e1\u30c3\u30ad140\u79d2"},3:{name:"\u30e1\u30c3\u30ad150\u79d2"},4:{name:"\u30e1\u30c3\u30ad180\u79d2"},5:{name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb=1, 120\u5206"},6:{name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb=1, 180\u5206"},7:{name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb=2, 120\u5206"},8:{name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb=2, 180\u5206"}}},n.schedule_id=n.state.schedules.length,n.text_fields=l.a.createElement(x.a,{autoFocus:!0,label:"\u5de5\u7a0b\u540d",inputRef:function(e){return n.textField=e},fullWidth:!0}),n}return Object(m.a)(a,[{key:"addSchedule",value:function(){console.log(this.textField.value);var e=this.schedule_id+1,t={id:e,name:this.textField.value,steps:[]};this.setState((function(a){return a.schedules[e]=t,a}))}},{key:"add_step",value:function(e){var t=e.schedule_id,a=e.process_id,n=e.process_conf_id;this.setState((function(e){var l={process_id:a,process_conf_id:n};return e.schedules[t].steps=e.schedules[t].steps.concat(l),e}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null,"\u52a0\u5de5\u5de5\u7a0b\u7ba1\u7406"),l.a.createElement(M,{handleSubmit:function(){return e.addSchedule()},text_fields:this.text_fields,button_text:"\u65b0\u898f\u5de5\u7a0b\u3092\u8ffd\u52a0"}),Object.keys(this.state.schedules).map((function(t){var a=e.state.schedules[t];return l.a.createElement(P,{schedule:a,processes:e.state.processes,process_confs:e.state.process_confs,call_back:function(t){return e.add_step(t)}})})))}}]),a}(l.a.Component),B=a(76),H=a(205),I=a(203),D=a(200),T=a(216),J=a(212),L=a(139),Z=a(99),q=a.n(Z),z=a(197),U=a(138),K=a(201),Q=a(202),V=a(101),X=a.n(V),Y=a(102),$=a.n(Y),ee=a(204),te=a(55),ae=a(13),ne=a(98),le=a.n(ne),ce=a(100),re=a.n(ce),se=a(97),ie=a.n(se),oe=Object(R.a)((function(e){return{root:{display:"flex"},drawer:Object(B.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(B.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(B.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));function me(e){var t=e.container,a=oe(),n=Object(ae.a)(),c=l.a.useState(!1),r=Object(h.a)(c,2),s=r[0],i=r[1],o=function(){i(!s)},m=l.a.createElement("div",null,l.a.createElement("div",{className:a.toolbar}),l.a.createElement(D.a,null),l.a.createElement(z.a,null,l.a.createElement(U.a,{component:"a",href:"simulation.html"},l.a.createElement(K.a,null,l.a.createElement(ie.a,null)),l.a.createElement(Q.a,{primary:"\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"})),l.a.createElement(U.a,{component:"a",href:"schedule.html"},l.a.createElement(K.a,null,l.a.createElement(le.a,null)),l.a.createElement(Q.a,{primary:"\u52a0\u5de5\u5de5\u7a0b\u7ba1\u7406"})),l.a.createElement(U.a,{component:"a",href:"process.html"},l.a.createElement(K.a,null,l.a.createElement(q.a,null)),l.a.createElement(Q.a,{primary:"\u30de\u30b7\u30f3\u7ba1\u7406"})),l.a.createElement(U.a,{component:"a",href:"process_config.html"},l.a.createElement(K.a,null,l.a.createElement(re.a,null)),l.a.createElement(Q.a,{primary:"\u30de\u30b7\u30f3\u8a2d\u5b9a\u7ba1\u7406"}))),l.a.createElement(D.a,null),l.a.createElement(z.a,null,l.a.createElement(U.a,{button:!0,key:"inquiry"},l.a.createElement(K.a,null,l.a.createElement(X.a,null)),l.a.createElement(Q.a,{primary:"\u304a\u554f\u3044\u5408\u308f\u305b"}))));return l.a.createElement("div",null,l.a.createElement(I.a,{position:"fixed",className:a.appBar},l.a.createElement(ee.a,null,l.a.createElement(L.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:o,className:a.menuButton},l.a.createElement($.a,null)),l.a.createElement(te.a,{variant:"h6",noWrap:!0},"\u751f\u7523\u30d7\u30ed\u30bb\u30b9\u30b7\u30df\u30e5\u30ec\u30fc\u30bf IZAWA"))),l.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},l.a.createElement(J.a,{smUp:!0,implementation:"css"},l.a.createElement(T.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:s,onClose:o,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},m)),l.a.createElement(J.a,{xsDown:!0,implementation:"css"},l.a.createElement(T.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},m))),l.a.createElement("main",null,l.a.createElement(H.a,{container:!0,spacing:2},l.a.createElement(H.a,{item:!0,xs:3}),l.a.createElement(H.a,{item:!0,xs:9},e.content))))}var ue=a(14),de=a(210),he=a(106),_e=a(208),pe=a(214),fe=a(206),Ee=a(207),be=a(103),ve=a.n(be),we=Object(R.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function je(e){var t=we();return l.a.createElement("div",{className:t.root},l.a.createElement("h3",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u5b9f\u884c\u7d50\u679c"),l.a.createElement("p",null,"\u5168\u3066\u306e\u5de5\u7a0b\u304c\u7d42\u308f\u308b\u6642\u523b: 18:10"),l.a.createElement("h4",null,"\u30d7\u30ed\u30bb\u30b9\u3054\u3068\u306e\u7d50\u679c"),e.process_histories.map((function(e){return l.a.createElement(pe.a,null,l.a.createElement(fe.a,{expandIcon:l.a.createElement(ve.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l.a.createElement(te.a,{className:t.heading},e.name,"\u306e\u5b9f\u884c\u5c65\u6b74")),l.a.createElement(Ee.a,null,l.a.createElement(S,{rows:e.rows,cols:e.cols})))})))}var xe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rows:[{item_name:"\u54c1\u756a01420-40710",schedule_id:1,length:13},{item_name:"\u54c1\u756a060027-0031",schedule_id:2,length:3},{item_name:"\u54c1\u756aGN642-00600-H",schedule_id:3,length:24}],selectedDate:"2020 4/20 07:30:00",show_result:!1,show_circular:!1},n.cols=[{name:"item_name",ja_name:"\u30a2\u30a4\u30c6\u30e0\u540d"},{name:"schedule_id",ja_name:"\u5de5\u7a0b"},{name:"length",ja_name:"\u30d0\u30ec\u30eb\u6570"}],n.schedules={1:{name:"\u54c1\u756a01420-40710\u7528\u5de5\u7a0b"},2:{name:"\u54c1\u756a060027-0031\u7528\u5de5\u7a0b"},3:{name:"\u54c1\u756aGN642-00600-H\u7528\u5de5\u7a0b"}},n.history_cols=[{name:"item_name",ja_name:"\u30a2\u30a4\u30c6\u30e0\u540d"},{name:"action",ja_name:"\u30a2\u30af\u30b7\u30e7\u30f3"},{name:"time",ja_name:"\u6642\u523b"}],n.process_histories=[{name:"\u30e1\u30c3\u30ad1",rows:[{item_name:"\u54c1\u756a01420-40710_0",action:"\u958b\u59cb",time:"AM07:30"},{item_name:"\u54c1\u756a01420-40710_1",action:"\u958b\u59cb",time:"AM07:31"},{item_name:"\u54c1\u756a01420-40710_2",action:"\u958b\u59cb",time:"AM07:32"},{item_name:"\u54c1\u756a060027-0031_0",action:"\u958b\u59cb",time:"AM07:33"},{item_name:"\u54c1\u756a060027-0031_1",action:"\u958b\u59cb",time:"AM07:34"},{item_name:"\u54c1\u756a060027-0031_2",action:"\u958b\u59cb",time:"AM07:35"},{item_name:"\u54c1\u756aGN642-00600-H_0",action:"\u958b\u59cb",time:"AM07:36"},{item_name:"\u54c1\u756aGN642-00600-H_1",action:"\u958b\u59cb",time:"AM07:37"},{item_name:"\u54c1\u756aGN642-00600-H_2",action:"\u958b\u59cb",time:"AM07:38"}],cols:[{name:"item_name",ja_name:"\u30a2\u30a4\u30c6\u30e0\u540d"},{name:"action",ja_name:"\u30a2\u30af\u30b7\u30e7\u30f3"},{name:"time",ja_name:"\u6642\u523b"}]},{name:"\u30aa\u30fc\u30d6\u30f31",rows:[{schedule_id:"1",start_time:"AM11:30",finish_time:"PM03:30"},{schedule_id:"2",start_time:"PM04:30",finish_time:"PM05:30"}],cols:[{name:"schedule_id",ja_name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30ebid"},{name:"start_time",ja_name:"\u958b\u59cb\u6642\u523b"},{name:"finish_time",ja_name:"\u7d42\u4e86\u6642\u523b"}]},{name:"\u30aa\u30fc\u30d6\u30f32",rows:[{schedule_id:"1",start_time:"AM10:30",finish_time:"PM02:30"}],cols:[{name:"schedule_id",ja_name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30ebid"},{name:"start_time",ja_name:"\u958b\u59cb\u6642\u523b"},{name:"finish_time",ja_name:"\u7d42\u4e86\u6642\u523b"}]}],n.text_fields=l.a.createElement("div",null,l.a.createElement(x.a,{autoFocus:!0,label:"\u30a2\u30a4\u30c6\u30e0\u540d",inputRef:function(e){return n.itemField=e},fullWidth:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,null,"\u4f5c\u696d\u5de5\u7a0b"),l.a.createElement(W.a,{inputRef:function(e){return n.selectField=e},label:"\u4f5c\u696d\u5de5\u7a0b",fullWidth:!0},Object.keys(n.schedules).map((function(e){return l.a.createElement(N.a,{value:e},n.schedules[e].name)}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{autoFocus:!0,label:"\u30d0\u30ec\u30eb\u6570",inputRef:function(e){return n.lengthField=e},fullWidth:!0})),n}return Object(m.a)(a,[{key:"add_schedule",value:function(){this.setState({rows:this.state.rows.concat({schedule_id:this.selectField.value,length:this.lengthField.value,item_name:this.itemField.value})})}},{key:"change",value:function(e){console.log(e),this.setState({selectedDate:e})}},{key:"run",value:function(){var e=this;this.setState({show_result:!1,show_circular:!0});var t;(t=1e3,new Promise((function(e){return setTimeout(e,t)}))).then((function(){e.show_result_func()}))}},{key:"show_result_func",value:function(){this.setState({show_result:!0,show_circular:!1})}},{key:"sleep",value:function(e,t){var a=0,n=setInterval((function(){++a>=e&&(clearInterval(n),t&&t())}),1e3)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(H.a,{container:!0,spacing:3},l.a.createElement(H.a,{item:!0,xs:12},l.a.createElement("h3",null,"\u6295\u5165\u30a2\u30a4\u30c6\u30e0\u306e\u767b\u9332"),l.a.createElement("p",null,"\u5b9f\u969b\u306b\u5de5\u5834\u3067\u51e6\u7406\u3092\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u3092\u51e6\u7406\u3092\u884c\u3046\u9806\u5e8f\u3067\u767b\u9332\u3057\u307e\u3059\u3002 \u767b\u9332\u3059\u308b\u3068\u304d\u306b\u3001\u30a2\u30a4\u30c6\u30e0\u306b\u5bfe\u3057\u3066\u3069\u306e\u3088\u3046\u306a\u52a0\u5de5\u3092\u884c\u3046\u306e\u304b\u3092\u4f5c\u696d\u5de5\u7a0b\u306b\u3088\u3063\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4eca\u5f8c\u3001\u6a5f\u80fd\u62e1\u5f35\u306b\u3088\u308a\u3001\u30a2\u30a4\u30c6\u30e0\u306e\u6295\u5165\u9806\u5e8f\u3082\u7de8\u96c6\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u4e88\u5b9a\u3067\u3059\u3002"),l.a.createElement(M,{handleSubmit:function(t){return e.add_schedule()},text_fields:this.text_fields,button_text:"\u30a2\u30a4\u30c6\u30e0\u3092\u767b\u9332"}),l.a.createElement(S,{rows:this.state.rows,cols:this.cols})),l.a.createElement(H.a,{item:!0,xs:12},l.a.createElement("h3",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u5b9f\u884c"),l.a.createElement(ue.a,{utils:he.a},l.a.createElement(de.a,{showTodayButton:!0,todayLabel:"now",label:"\u958b\u59cb\u6642\u9593",value:this.state.selectedDate,minutesStep:1,onChange:function(t){return e.change(t)}})),l.a.createElement(_.a,{color:"primary",variant:"contained",onClick:function(){return e.run()}},"\u5b9f\u884c")),l.a.createElement(H.a,{item:!0,xs:12},this.state.show_circular&&l.a.createElement(_e.a,null),this.state.show_result&&l.a.createElement(je,{process_histories:this.process_histories,cols:this.history_cols}))))}}]),a}(l.a.Component),ge=a(107),ye=a(209),ke=Object(ge.a)({palette:{}});function Oe(){return l.a.createElement("div",null,l.a.createElement(A,{name:"plating",rows:[{name:"\u30e1\u30c3\u30ad\u66f91",length:34,time:"07:30"}],title:"\u30e1\u30c3\u30ad\u66f9\u4e00\u89a7",button_text:"\u30e1\u30c3\u30ad\u66f9\u3092\u65b0\u898f\u767b\u9332",cols:[{name:"name",ja_name:"\u540d\u524d"},{name:"length",ja_name:"\u30e1\u30c3\u30ad\u66f9\u306e\u6570"},{name:"time",ja_name:"\u5229\u7528\u53ef\u80fd\u6642\u523b"}]}),l.a.createElement(A,{name:"oven",rows:[{name:"\u30aa\u30fc\u30d6\u30f31",time:"07:30"},{name:"\u30aa\u30fc\u30d6\u30f32",time:"07:30"}],title:"\u30aa\u30fc\u30d6\u30f3\u4e00\u89a7",button_text:"\u30aa\u30fc\u30d6\u30f3\u3092\u65b0\u898f\u767b\u9332",cols:[{name:"name",ja_name:"\u540d\u524d"},{name:"time",ja_name:"\u5229\u7528\u53ef\u80fd\u6642\u523b"}]}))}function Fe(){return l.a.createElement("div",null,l.a.createElement(A,{name:"plating_conf",rows:[{bath_time:120},{bath_time:140},{bath_time:150},{bath_time:180}],title:"\u30e1\u30c3\u30ad\u66f9\u306e\u8a2d\u5b9a\u4e00\u89a7",button_text:"\u30e1\u30c3\u30ad\u66f9\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0",cols:[{name:"bath_time",ja_name:"\u30e1\u30c3\u30ad\u6642\u9593(\u79d2)"}]}),l.a.createElement(A,{name:"oven_conf",rows:[{schedule_id:1,baking_time:180},{schedule_id:1,baking_time:120},{schedule_id:2,baking_time:120},{schedule_id:2,baking_time:180}],title:"\u30aa\u30fc\u30d6\u30f3\u306e\u8a2d\u5b9a\u4e00\u89a7",button_text:"\u30aa\u30fc\u30d6\u30f3\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0",cols:[{name:"schedule_id",ja_name:"\u30b9\u30b1\u30b8\u30e5\u30fc\u30ebid"},{name:"baking_time",ja_name:"\u30d9\u30fc\u30ad\u30f3\u30b0\u6642\u9593(\u5206)"}]}))}function Se(){return l.a.createElement("div",null,l.a.createElement(G,null))}function Me(){return l.a.createElement(xe,null)}var Ae=function(){return l.a.createElement("h1",null,"\u751f\u7523\u30d7\u30ed\u30bb\u30b9\u30b7\u30df\u30e5\u30ec\u30fc\u30bf IZAWA v0.0.1")};function Ce(e){var t=l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.a,{path:"/",exact:!0,component:Ae}),l.a.createElement(i.a,{path:"/process.html",component:Oe}),l.a.createElement(i.a,{path:"/process_config.html",component:Fe}),l.a.createElement(i.a,{path:"/schedule.html",component:Se}),l.a.createElement(i.a,{path:"/simulation.html",component:Me})));return l.a.createElement(me,{content:t})}r.a.render(l.a.createElement(ye.a,{theme:ke},l.a.createElement(Ce,null)),document.getElementById("root"))},64:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.0931c908.chunk.js.map