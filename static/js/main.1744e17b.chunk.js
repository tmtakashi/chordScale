(this["webpackJsonpchord-scale"]=this["webpackJsonpchord-scale"]||[]).push([[0],{18:function(e,t,n){e.exports={chordPallete:"chordPallete_chordPallete__3airV",title:"chordPallete_title__3Ydpp",options:"chordPallete_options__1cq5m"}},36:function(e,t,n){e.exports=n(59)},41:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),o=n.n(c),i=(n(41),n(30)),l=n(8),s=n(9),u=n(11),d=n(10),h=n(12),f=n(31),p=n.n(f),m=n(4),v=n(7),b=n(1),g=n(5),y=n(2),S={primaryColor:"#21a1c7",secondaryColor:"#2ec721",headerTextColor:"#ffffff",cardTitleColor:"#837f7f",btnTextColor:"#ffffff",scaleSelectorColor:"#333",cardTitleFontSize:"1.7rem"};function w(){var e=Object(b.a)(["\n  font-size: ",";\n  color: ",";\n  user-select: none;\n"]);return w=function(){return e},e}var j=y.a.span(w(),S.cardTitleFontSize,S.cardTitleColor),E=function(e){return a.a.createElement(j,null,e.children)},O=n(17),x=n.n(O);function C(){var e=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n"]);return C=function(){return e},e}var k=y.a.div(C()),N=function(e){return Object(r.useEffect)((function(){document.getElementById("chordNotes").innerHTML="";var t=new x.a.Flow.Factory({renderer:{elementId:"chordNotes"}}),n=t.EasyScore();t.System().addStave({voices:[n.voice(n.notes("(".concat(e.notes.join(" "),")/w")))]}).addClef("treble");var r=t.context.svg;r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("viewBox","0 0 150 150"),r.setAttribute("preserveAspectRatio","xMidYMid"),t.draw()})),a.a.createElement(k,{id:"chordNotes"})},A=n(13),T=n(14);function M(){var e=Object(b.a)(["\n  margin-left: 10%;\n"]);return M=function(){return e},e}function q(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  border: none;\n  height: 30%;\n  min-width: 15%;\n  padding: 0 2%;\n  color: ",";\n  background: ",";\n  cursor: pointer;\n  font-size: 1rem;\n"]);return q=function(){return e},e}var B=y.a.div(q(),S.btnTextColor,S.primaryColor),R=y.a.span(M()),P=function(e){return a.a.createElement(B,{onClick:function(){return e.onClick()}},a.a.createElement(A.a,{icon:T.b}),a.a.createElement(R,null,e.children))},F=function(e,t){m.Transport.cancel(),e.triggerAttackRelease(t,"1m")},_=function(e){var t=new m.PolySynth(4,m.Synth).connect(new m.Gain(.1).toMaster());return a.a.createElement(P,{onClick:function(){F(t,e.notes)}},"Play chord")};function D(){var e=Object(b.a)(["\n  border-radius: 5%;\n  box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.5);\n  min-width: 45%;\n  height: 60%;\n  background-color: #fff;\n"]);return D=function(){return e},e}var G=y.a.div(D());function W(){var e=Object(b.a)(["\n  cursor: pointer;\n"]);return W=function(){return e},e}var z=y.a.div(W()),I=function(e){return a.a.createElement(z,null,a.a.createElement(A.a,{color:S.primaryColor,icon:T.a,onClick:function(){return e.onClick()}}))},L=n(26),Y=n.n(L);function J(){var e=Object(b.a)(["\n  font-size: 0.8rem;\n"]);return J=function(){return e},e}function U(){var e=Object(b.a)(["\n  display: flex;\n  margin: 2px 2px;\n  width: 20%;\n  height: 50px;\n  border: 1px solid lightgrey;\n  border-radius: 10%;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  transition: background-color 0.5s;\n"]);return U=function(){return e},e}var V=y.a.div(U()),H=y.a.span(J()),$=function(e){return a.a.createElement(V,{onClick:function(){e.selectOption(e.children)}},a.a.createElement(H,null,e.children))},K=n(18),Q=n.n(K),X=function(e){return a.a.createElement("div",{className:Q.a.chordPallete},a.a.createElement("span",{className:Q.a.title},e.title),a.a.createElement("div",{className:Q.a.options},e.choices.map((function(t){return a.a.createElement($,{key:t,selectOption:function(){e.selectOption(t)}},t)}))))};function Z(){var e=Object(b.a)(["\n  margin-top: 5%;\n  padding: 0 10%;\n"]);return Z=function(){return e},e}function ee(){var e=Object(b.a)(["\n  width: 35%;\n  top: 0px;\n  right: 15%;\n"]);return ee=function(){return e},e}function te(){var e=Object(b.a)(["\n  width: 35%;\n  top: 0px;\n  left: 15%;\n"]);return te=function(){return e},e}function ne(){var e=Object(b.a)(["\n  margin-top: 2%;\n  display: flex;\n  justify-content: space-around;\n"]);return ne=function(){return e},e}Y.a.setAppElement("#root");var re={content:{top:"50%",left:"50%",width:"70%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ae=y.a.div(ne()),ce=y.a.div(te()),oe=y.a.div(ee()),ie=y.a.div(Z()),le=function(e){return a.a.createElement(Y.a,{style:re,isOpen:e.modalIsOpen,onRequestClose:e.closeModal},a.a.createElement(ae,null,a.a.createElement(ce,null,a.a.createElement(X,Object.assign({selectOption:function(t){return e.selectOption(t,"root")}},e.pallete.roots))),a.a.createElement(oe,null,a.a.createElement(X,Object.assign({selectOption:function(t){return e.selectOption(t,"type")}},e.pallete.types)))),a.a.createElement(ie,null,a.a.createElement("button",{onClick:e.closeModal},"Close")))},se=function(e){var t=v.a.chord(Object.values(e)).notes,n=v.c.note(t[0]).chroma<7?4:3;return t=t.map((function(e,r){return r>0&&v.c.note(e).chroma<v.c.note(t[r-1]).chroma&&(n+=1),e+n.toString()}))};function ue(){var e=Object(b.a)(["\n  margin-left: 5%;\n  width: 30%;\n"]);return ue=function(){return e},e}function de(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 50%;\n  padding 0 5%;\n"]);return de=function(){return e},e}function he(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20%;\n  width: 20%;\n  margin-right: 5%;\n"]);return he=function(){return e},e}function fe(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 30%;\n  padding: 3% 3%;\n"]);return fe=function(){return e},e}var pe=y.a.div(fe()),me=y.a.div(he()),ve=y.a.div(de()),be=y.a.div(ue()),ge=function(e){var t=se(e.chord),n=Object.values(e.chord).join(""),c=Object(r.useState)(!1),o=Object(g.a)(c,2),i=o[0],l=o[1];return a.a.createElement(G,null,a.a.createElement(pe,null,a.a.createElement(me,null,a.a.createElement(E,null,n)),a.a.createElement(I,{onClick:function(){l(!0)}})),a.a.createElement(ve,null,a.a.createElement(_,{notes:t}),a.a.createElement(be,null,a.a.createElement(N,{notes:t}))),a.a.createElement(le,{modalIsOpen:i,closeModal:function(){l(!1)},selectOption:function(t,n){e.editChord(t,n)},pallete:e.pallete}))};function ye(){var e=Object(b.a)(["\n  margin-left: 10%;\n"]);return ye=function(){return e},e}function Se(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  border: none;\n  height: 60%;\n  min-width: 15%;\n  padding: 0 10%;\n  color: ",";\n  background: ",";\n  cursor: pointer;\n  font-size: 1rem;\n"]);return Se=function(){return e},e}var we=y.a.div(Se(),S.btnTextColor,S.secondaryColor),je=y.a.span(ye()),Ee=function(e){return a.a.createElement(we,{onClick:function(){return e.onClick()}},a.a.createElement(A.a,{icon:T.b}),a.a.createElement(je,null,e.children))},Oe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={synth:new m.Synth({oscillator:{type:"square"}}).connect(new m.Gain(.1).toMaster()),polySynth:new m.PolySynth(4,m.Synth).connect(new m.Gain(.1).toMaster())},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getNewSequence",value:function(){var e=this;m.Transport.cancel();var t=se(this.props.chord);new m.Part((function(t,n){e.state.polySynth.triggerAttackRelease(n,"2m",t)}),[[0,t]]).start(0).loop=!1,new m.Sequence((function(t,n){e.state.synth.triggerAttackRelease(n,"4n",t)}),this.props.notes,"4n").start(0).loop=!1}},{key:"playChordScale",value:function(){this.getNewSequence(),m.Transport.stop(),m.Transport.position=0,m.Transport.start()}},{key:"render",value:function(){return a.a.createElement(Ee,{onClick:this.playChordScale.bind(this)},"Play Both")}}]),t}(r.Component);function xe(){var e=Object(b.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 5%;\n  position: fixed;\n  bottom: 0;\n"]);return xe=function(){return e},e}var Ce=y.a.footer(xe(),S.primaryColor);function ke(){var e=Object(b.a)(["\n  margin-left: 3%;\n  user-select: none;\n  color: ",";\n  font-weight: lighter;\n"]);return ke=function(){return e},e}function Ne(){var e=Object(b.a)(["\n  background-color: ",";\n  position: fixed;\n  width: 100%;\n"]);return Ne=function(){return e},e}var Ae=y.a.header(Ne(),S.primaryColor),Te=y.a.h1(ke(),S.headerTextColor),Me=function(e){return a.a.createElement(Ae,null,a.a.createElement(Te,null,e.children))};function qe(){var e=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n"]);return qe=function(){return e},e}var Be=x.a.Flow,Re=Be.Accidental,Pe=Be.Formatter,Fe=Be.Stave,_e=Be.StaveNote,De=Be.Renderer,Ge=/[#b]+/,We=/\d/,ze=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).wrapperRef=a.a.createRef(),n.state={renderer:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({renderer:new De(this.wrapperRef.current,De.Backends.SVG)})}},{key:"componentDidUpdate",value:function(){this.renderScale()}},{key:"firstStaveNotes",value:function(){return this.props.notes.slice(0,4).map((function(e){var t=e.match(Ge),n=e.match(We)[0],r=new _e({clef:"treble",keys:[e.slice(0,1).toLowerCase()+"/"+n],duration:"q"});return t&&r.addAccidental(0,new Re(t[0])),r}))}},{key:"secondStaveNotes",value:function(){for(var e=this.props.notes.slice(4,this.props.notes.length),t=e.map((function(e){var t=e.match(Ge),n=e.match(We)[0],r=new _e({clef:"treble",keys:[e.substring(0,1).toLowerCase()+"/"+n],duration:"q"});return t&&r.addAccidental(0,new Re(t[0])),r})),n=4-e.length,r=0;r<n;r++)t.push(new _e({clef:"treble",keys:["b/4"],duration:"qr"}));return t}},{key:"renderScale",value:function(){var e=this.state.renderer.getContext();e.clear();var t=e.svg;t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("viewBox","0 0 580 120"),t.setAttribute("preserveAspectRatio","xMidYMid");var n=new Fe(20,0,300);n.addClef("treble"),n.setContext(e).draw();var r=this.firstStaveNotes();Pe.FormatAndDraw(e,n,r);var a=new Fe(320,0,300);a.setContext(e).draw();var c=this.secondStaveNotes();Pe.FormatAndDraw(e,a,c)}},{key:"render",value:function(){return a.a.createElement(Ie,{id:"scaleNotes",ref:this.wrapperRef})}}]),t}(r.Component),Ie=y.a.div(qe()),Le=ze,Ye=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={synth:new m.Synth({oscillator:{type:"square"}}).connect(new m.Gain(.1).toMaster()),sequence:n.getNewSequence()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getNewSequence",value:function(){var e=this;m.Transport.cancel();var t=new m.Sequence((function(t,n){e.state.synth.triggerAttackRelease(n,"4n",t)}),this.props.notes,"4n").start(0);return t.loop=!1,t}},{key:"playScale",value:function(){this.getNewSequence(),m.Transport.stop(),m.Transport.position=0,m.Transport.start()}},{key:"render",value:function(){return a.a.createElement(P,{onClick:this.playScale.bind(this),id:"playChord"},"Play scale")}}]),t}(r.Component);function Je(){var e=Object(b.a)(["\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n  box-shadow: none;\n  color: ",";\n"]);return Je=function(){return e},e}var Ue=y.a.select(Je(),S.scaleSelectorColor),Ve=function(e){return a.a.createElement(Ue,{value:e.currentScale,onChange:function(t){return e.onScaleChange(t.target.value)}},e.chordScales.map((function(e){return a.a.createElement("option",{value:e,key:e},e)})))};function He(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 5%;\n  height: 100%;\n  width: 85%;\n"]);return He=function(){return e},e}function $e(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 50%;\n  padding 0 5%;\n"]);return $e=function(){return e},e}function Ke(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 20%;\n  min-width: 60%;\n  margin-right: 5%;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 30%;\n  padding: 3% 3%;\n"]);return Qe=function(){return e},e}var Xe=y.a.div(Qe()),Ze=y.a.div(Ke()),et=y.a.div($e()),tt=y.a.div(He()),nt=function(e){return a.a.createElement(G,null,a.a.createElement(Xe,null,a.a.createElement(Ze,null,a.a.createElement(E,null,e.chord.root+" "+e.currentScale)),a.a.createElement(Ve,{currentScale:e.currentScale,chordScales:e.chordScales,onScaleChange:function(t){e.onScaleChange(t)}})),a.a.createElement(et,null,a.a.createElement(Ye,{notes:e.currentScaleNotes}),a.a.createElement(tt,null,a.a.createElement(Le,{notes:e.currentScaleNotes}))))},rt=function(e){var t=Object(r.useState)(120),n=Object(g.a)(t,2),c=n[0],o=n[1];return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"bpmSlider"},"BPM"),a.a.createElement("input",{name:"bpmSlider",type:"range",min:"60",max:"200",value:c,onChange:function(t){var n=t.target.value;e.onBpmChange(n),o(n)}}),c)},at=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={chord:{root:"C",type:"M7"},pallete:{roots:{title:"Roots",choices:["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]},types:{title:"Chord Types",choices:["M","m","M7","m7","7","mM7"]}},chordScales:[],currentScale:"",currentScaleNotes:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateScale()}},{key:"componentDidUpdate",value:function(e,t){t.chord!==this.state.chord&&this.updateScale()}},{key:"getChordScales",value:function(){return v.a.chordScales(Object.values(this.state.chord).join(""))}},{key:"getScaleNotes",value:function(e){return v.b.scale(this.state.chord.root+"4 "+e).notes}},{key:"updateScale",value:function(){var e=this.getChordScales()[0];this.setState({chordScales:this.getChordScales(),currentScale:e,currentScaleNotes:this.getScaleNotes(e)})}},{key:"handleEditChord",value:function(e,t){var n=Object(i.a)({},this.state.chord);n[t]=e,this.setState({chord:n})}},{key:"handleScaleChange",value:function(e){this.setState({currentScale:e,currentScaleNotes:v.b.scale(this.state.chord.root+"4 "+e).notes})}},{key:"handleBpmChange",value:function(e){m.Transport.bpm.value=e}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"jsx-3123105050 wrapper"},a.a.createElement(Me,null,"ScaleGrasper"),a.a.createElement("div",{className:"jsx-3123105050 container"},a.a.createElement("div",{className:"jsx-3123105050 cardsWrapper"},a.a.createElement(ge,{chord:this.state.chord,pallete:this.state.pallete,editChord:function(t,n){e.handleEditChord(t,n)}}),a.a.createElement(nt,{chord:this.state.chord,chordScales:this.state.chordScales,currentScale:this.state.currentScale,currentScaleNotes:this.state.currentScaleNotes,onScaleChange:function(t){return e.handleScaleChange(t)}})),a.a.createElement("div",{className:"jsx-3123105050 controllerWrapper"},a.a.createElement(rt,{onBpmChange:function(t){return e.handleBpmChange(t)}})),a.a.createElement("div",{className:"jsx-3123105050 chordScaleWrapper"},a.a.createElement(Oe,{notes:this.state.currentScaleNotes,chord:this.state.chord}))),a.a.createElement(Ce,null),a.a.createElement(p.a,{id:"3123105050"},[".wrapper.jsx-3123105050{height:100%;}",".container.jsx-3123105050{display:flex: justify-content:center;padding:0 5%;margin:0 auto;height:100%;}",".cardsWrapper.jsx-3123105050{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:75%;}",".controllerWrapper.jsx-3123105050{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;}",".chordScaleWrapper.jsx-3123105050{width:10%;height:10%;margin:0 auto;margin-top:3%;}"]))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1744e17b.chunk.js.map