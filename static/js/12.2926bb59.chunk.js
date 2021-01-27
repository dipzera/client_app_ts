(this["webpackJsonpclient-portal-app"]=this["webpackJsonpclient-portal-app"]||[]).push([[12],{241:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(1),l=n.n(c),o=n(76),i=n.n(o),s=n(0),u=n(2),p=n.n(u),f=n(405),d=n(44),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var v=s.forwardRef((function(e,t){var n=function(n){var a,c=n.getPrefixCls,o=n.direction,u=e.prefixCls,d=e.span,v=e.order,b=e.offset,h=e.push,y=e.pull,g=e.className,O=e.children,E=e.flex,x=e.style,j=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=c("col",u),k={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var n,a={},c=e[t];"number"===typeof c?a.span=c:"object"===i()(c)&&(a=c||{}),delete j[t],k=l()(l()({},k),(n={},r()(n,"".concat(C,"-").concat(t,"-").concat(a.span),void 0!==a.span),r()(n,"".concat(C,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),r()(n,"".concat(C,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),r()(n,"".concat(C,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),r()(n,"".concat(C,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),r()(n,"".concat(C,"-rtl"),"rtl"===o),n))}));var w=p()(C,(a={},r()(a,"".concat(C,"-").concat(d),void 0!==d),r()(a,"".concat(C,"-order-").concat(v),v),r()(a,"".concat(C,"-offset-").concat(b),b),r()(a,"".concat(C,"-push-").concat(h),h),r()(a,"".concat(C,"-pull-").concat(y),y),a),g,k);return s.createElement(f.a.Consumer,null,(function(e){var n=e.gutter,a=l()({},x);return n&&(a=l()(l()(l()({},n[0]>0?{paddingLeft:n[0]/2,paddingRight:n[0]/2}:{}),n[1]>0?{paddingTop:n[1]/2,paddingBottom:n[1]/2}:{}),a)),E&&(a.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E)),s.createElement("div",l()({},j,{style:a,className:w,ref:t}),O)}))};return s.createElement(d.a,null,n)}));v.displayName="Col",t.a=v},242:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(3),l=n.n(c),o=n(76),i=n.n(o),s=n(24),u=n.n(s),p=n(0),f=n(2),d=n.n(f),m=n(44),v=n(405),b=n(58),h=n(157),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),p.forwardRef((function(e,t){var n=p.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),a=u()(n,2),c=a[0],o=a[1],s=p.useRef();s.current=e.gutter,p.useEffect((function(){var e=h.a.subscribe((function(e){var t=s.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&o(e)}));return function(){h.a.unsubscribe(e)}}),[]);var f=function(n){var a,o=n.getPrefixCls,s=n.direction,u=e.prefixCls,f=e.justify,m=e.align,b=e.className,g=e.style,O=e.children,E=y(e,["prefixCls","justify","align","className","style","children"]),x=o("row",u),j=function(){var t=[0,0],n=e.gutter,a=void 0===n?0:n;return(Array.isArray(a)?a:[a,0]).forEach((function(e,n){if("object"===i()(e))for(var a=0;a<h.b.length;a++){var r=h.b[a];if(c[r]&&void 0!==e[r]){t[n]=e[r];break}}else t[n]=e||0})),t}(),C=d()(x,(a={},l()(a,"".concat(x,"-").concat(f),f),l()(a,"".concat(x,"-").concat(m),m),l()(a,"".concat(x,"-rtl"),"rtl"===s),a),b),k=r()(r()(r()({},j[0]>0?{marginLeft:j[0]/-2,marginRight:j[0]/-2}:{}),j[1]>0?{marginTop:j[1]/-2,marginBottom:j[1]/2}:{}),g),w=r()({},E);return delete w.gutter,p.createElement(v.a.Provider,{value:{gutter:j}},p.createElement("div",r()({},w,{className:C,style:k,ref:t}),O))};return p.createElement(m.a,null,f)})));g.displayName="Row",t.a=g},405:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({});t.a=r},411:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(1),l=n.n(c),o=n(25),i=n.n(o),s=n(26),u=n.n(s),p=n(104),f=n.n(p),d=n(27),m=n.n(d),v=n(28),b=n.n(v),h=n(0),y=n(2),g=n.n(y),O=n(188),E=n(103),x=n.n(E),j=n(40),C=n(44),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=h.createContext(null),N=function(e){m()(n,e);var t=b()(n);function n(e){var a;return i()(this,n),(a=t.call(this,e)).cancelValue=function(e){a.setState((function(t){return{registeredValues:t.registeredValues.filter((function(t){return t!==e}))}}))},a.registerValue=function(e){a.setState((function(t){var n=t.registeredValues;return{registeredValues:[].concat(x()(n),[e])}}))},a.toggleOption=function(e){var t=a.state.registeredValues,n=a.state.value.indexOf(e.value),r=x()(a.state.value);-1===n?r.push(e.value):r.splice(n,1),"value"in a.props||a.setState({value:r});var c=a.props.onChange;if(c){var l=a.getOptions();c(r.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return l.findIndex((function(t){return t.value===e}))-l.findIndex((function(e){return e.value===t}))})))}},a.renderGroup=function(e){var t=e.getPrefixCls,n=e.direction,c=f()(a),o=c.props,i=c.state,s=o.prefixCls,u=o.className,p=o.style,d=o.options,m=k(o,["prefixCls","className","style","options"]),v=t("checkbox",s),b="".concat(v,"-group"),y=Object(j.default)(m,["children","defaultValue","value","onChange","disabled"]),O=o.children;d&&d.length>0&&(O=a.getOptions().map((function(e){return h.createElement(V,{prefixCls:v,key:e.value.toString(),disabled:"disabled"in e?e.disabled:o.disabled,value:e.value,checked:-1!==i.value.indexOf(e.value),onChange:e.onChange,className:"".concat(b,"-item"),style:e.style},e.label)})));var E={toggleOption:a.toggleOption,value:a.state.value,disabled:a.props.disabled,name:a.props.name,registerValue:a.registerValue,cancelValue:a.cancelValue},x=g()(b,u,r()({},"".concat(b,"-rtl"),"rtl"===n));return h.createElement("div",l()({className:x,style:p},y),h.createElement(w.Provider,{value:E},O))},a.state={value:e.value||e.defaultValue||[],registeredValues:[]},a}return u()(n,[{key:"getOptions",value:function(){return this.props.options.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}},{key:"render",value:function(){return h.createElement(C.a,null,this.renderGroup)}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}]),n}(h.PureComponent);N.defaultProps={options:[]};var A=N,S=n(33),P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},I=function(e){m()(n,e);var t=b()(n);function n(){var e;return i()(this,n),(e=t.apply(this,arguments)).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,a=t.getPrefixCls,c=t.direction,o=f()(e),i=o.props,s=o.context,u=i.prefixCls,p=i.className,d=i.children,m=i.indeterminate,v=i.style,b=i.onMouseEnter,y=i.onMouseLeave,E=P(i,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),x=s,j=a("checkbox",u),C=l()({},E);x&&(C.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),x.toggleOption({label:d,value:i.value})},C.name=x.name,C.checked=-1!==x.value.indexOf(i.value),C.disabled=i.disabled||x.disabled);var k=g()(p,(n={},r()(n,"".concat(j,"-wrapper"),!0),r()(n,"".concat(j,"-rtl"),"rtl"===c),r()(n,"".concat(j,"-wrapper-checked"),C.checked),r()(n,"".concat(j,"-wrapper-disabled"),C.disabled),n)),w=g()(r()({},"".concat(j,"-indeterminate"),m));return h.createElement("label",{className:k,style:v,onMouseEnter:b,onMouseLeave:y},h.createElement(O.a,l()({},C,{prefixCls:j,className:w,ref:e.saveCheckbox})),void 0!==d&&h.createElement("span",null,d))},e}return u()(n,[{key:"componentDidMount",value:function(){var e,t=this.props.value;null===(e=this.context)||void 0===e||e.registerValue(t),Object(S.a)("checked"in this.props||this.context||!("value"in this.props),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}},{key:"componentDidUpdate",value:function(e){var t,n,a=e.value,r=this.props.value;r!==a&&(null===(t=this.context)||void 0===t||t.cancelValue(a),null===(n=this.context)||void 0===n||n.registerValue(r))}},{key:"componentWillUnmount",value:function(){var e,t=this.props.value;null===(e=this.context)||void 0===e||e.cancelValue(t)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return h.createElement(C.a,null,this.renderCheckbox)}}]),n}(h.PureComponent);I.__ANT_CHECKBOX=!0,I.defaultProps={indeterminate:!1},I.contextType=w;var V=I;V.Group=A;t.a=V},412:function(e,t,n){"use strict";var a=n(242);t.a=a.a},413:function(e,t,n){"use strict";var a=n(241);t.a=a.a},422:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(1),l=n.n(c),o=n(24),i=n.n(o),s=n(0),u=n(2),p=n.n(u),f=n(40),d=n(89),m=n.n(d),v=n(44),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},h=function(e){var t,n=s.useContext(v.b).getPrefixCls,a=e.prefixCls,c=e.className,o=e.checked,i=b(e,["prefixCls","className","checked"]),u=n("tag",a),f=p()(u,(t={},r()(t,"".concat(u,"-checkable"),!0),r()(t,"".concat(u,"-checkable-checked"),o),t),c);return delete i.onChange,s.createElement("span",l()({},i,{className:f,onClick:function(t){var n=e.checked,a=e.onChange,r=e.onClick;a&&a(!n),r&&r(t)}}))},y=n(180),g=n(136),O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=new RegExp("^(".concat(y.a.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(y.b.join("|"),")$")),j=function(e,t){var n,a=e.prefixCls,c=e.className,o=e.style,u=e.children,d=e.icon,b=e.color,h=e.onClose,y=e.closeIcon,j=e.closable,C=void 0!==j&&j,k=O(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=s.useContext(v.b),N=w.getPrefixCls,A=w.direction,S=s.useState(!0),P=i()(S,2),I=P[0],V=P[1];s.useEffect((function(){"visible"in k&&V(k.visible)}),[k.visible]);var M=function(){return!!b&&(E.test(b)||x.test(b))},T=l()({backgroundColor:b&&!M()?b:void 0},o),z=M(),D=N("tag",a),L=p()(D,(n={},r()(n,"".concat(D,"-").concat(b),z),r()(n,"".concat(D,"-has-color"),b&&!z),r()(n,"".concat(D,"-hidden"),!I),r()(n,"".concat(D,"-rtl"),"rtl"===A),n),c),R=function(e){e.stopPropagation(),h&&h(e),e.defaultPrevented||"visible"in k||V(!1)},H="onClick"in k||u&&"a"===u.type,B=Object(f.default)(k,["visible"]),F=d||null,_=F?s.createElement(s.Fragment,null,F,s.createElement("span",null,u)):u,G=s.createElement("span",l()({},B,{ref:t,className:L,style:T}),_,C?y?s.createElement("div",{className:"".concat(D,"-close-icon"),onClick:R},y):s.createElement(m.a,{className:"".concat(D,"-close-icon"),onClick:R}):null);return H?s.createElement(g.a,null,G):G},C=s.forwardRef(j);C.displayName="Tag",C.CheckableTag=h;t.a=C},565:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},c=n(10),l=function(e,t){return a.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};l.displayName="CheckCircleOutlined";t.a=a.forwardRef(l)},901:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(11),l=n(87),o=n(0),i=n.n(o),s=n(564),u=n(377),p=n(422),f=n(67),d=n(264),m=n(412),v=n(413),b=n(111),h=n(402),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"}}]},name:"vertical-align-bottom",theme:"outlined"},g=n(10),O=function(e,t){return o.createElement(g.a,Object.assign({},e,{ref:t,icon:y}))};O.displayName="VerticalAlignBottomOutlined";var E=o.forwardRef(O),x=n(565),j=n(156),C=n(41),k=n(9),w=n(29),N=n(106),A=n(78),S=n(18),P=n(66),I=i.a.createContext({}),V=n(91),M=function(e){return e.isInstalled?o.createElement(j.a,{justifyContent:"center",alignItems:"center"},o.createElement("div",{style:{textAlign:"center"}},o.createElement("div",{className:"mb-3"},o.createElement("img",{width:"150",src:"".concat("/testclientportal","/img/check.svg")})),o.createElement("h3",null,o.createElement(S.a,{id:"wizard.install.success.title"})),o.createElement("p",null,o.createElement(S.a,{id:"wizard.install.success.content"})))):o.createElement(j.a,{justifyContent:"center",alignItems:"center"},o.createElement("div",{style:{textAlign:"center"}},o.createElement("div",{className:"mb-3"},o.createElement("img",{width:"150",src:"".concat("/testclientportal","/img/remove.svg")})),o.createElement("h3",null,o.createElement(S.a,{id:"wizard.install.error.title"})),o.createElement("p",null,o.createElement(S.a,{id:"message.Error"}))))},T=function(){var e=Object(o.useContext)(I),t=e.selectedApp,n=(e.getMarketApps,Object(w.d)((function(e){return e.auth.loading}))),a=Object(o.useState)(!0),r=Object(l.a)(a,2),c=r[0],s=r[1],u=Object(w.c)();return Object(o.useLayoutEffect)((function(){u(Object(V.g)()),setTimeout((function(){return(new A.a).ActivateApp(t.ID).then((function(e){e&&0===e.ErrorCode?(u(Object(V.d)()),s(!0)):s(!1)}))}),2500)}),[]),i.a.createElement(i.a.Fragment,null,n?i.a.createElement(N.a,null):i.a.createElement(M,{isInstalled:c}))},z=n(411),D=function(){var e,t=i.a.useContext(I),n=t.setIsAccepted,a=t.isAccepted,r=t.selectedApp,c=Object(o.useState)(),s=Object(l.a)(c,2),u=s[0],p=s[1];Object(o.useEffect)((function(){try{p(JSON.parse(window.atob(r.TermsOfUse)))}catch(e){p({en:"",ru:"",ro:""})}}),[]);var f=null!==(e=Object(w.d)((function(e){return e.theme.locale})))&&void 0!==e?e:"en";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{maxHeight:500,overflowY:"scroll"},dangerouslySetInnerHTML:{__html:u&&u[f]}}),i.a.createElement(z.a,{checked:a,className:"mt-4",onChange:function(){return n(!a)}},i.a.createElement(S.a,{id:"wizard.terms"})))},L=[{title:"Terms",content:i.a.createElement(D,null)},{title:"Loading",content:i.a.createElement(T,null)}],R=function(e){e.apps;var t=Object(w.d)((function(e){return e.auth.loading})),n=(Object(w.d)((function(e){return e.theme.locale})),Object(o.useContext)(I)),a=n.current,l=n.visibleModal,s=n.handleCancel,u=n.setCurrent,p=n.isAccepted,m=(n.setIsAccepted,n.termsAccepted),v=n.setTermsAccepted,b=(n.appInstalled,n.setAppInstalled,n.selectedApp),h=n.getMarketApps;return i.a.createElement(d.a,{title:Object(P.a)("wizard.title"),visible:l,onOk:function(){return u(a+1)},destroyOnClose:!0,footer:[i.a.createElement(f.a,{key:"cancel",onClick:Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(),e.t0=m,!e.t0){e.next=5;break}return e.next=5,h();case 5:case"end":return e.stop()}}),e)}))),disabled:t},m?Object(P.a)("wizard.ok"):Object(P.a)("wizard.cancel")),i.a.createElement(f.a,{key:"next",type:"primary",onClick:Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(a+1),!m&&v(!0);case 2:case"end":return e.stop()}}),e)}))),disabled:!p||t},m?i.a.createElement(C.b,{to:"".concat(k.e,"/applications/").concat(b.AppType)},i.a.createElement(S.a,{id:"wizard.go"})):i.a.createElement(S.a,{id:"wizard.next"}))]},i.a.createElement("div",null,L[a].content))},H=n(57),B=(n(260),function(e){var t,n=e.deactivateApp,a=e.setVisibleModal,r=e.setSelectedApp,c=e.data,d=Object(o.useState)({}),m=Object(l.a)(d,2),v=m[0],b=m[1],y=null!==(t=Object(w.d)((function(e){return e.theme.locale})))&&void 0!==t?t:"en";return Object(o.useEffect)((function(){if(c.ShortDescription)try{b(JSON.parse(window.atob(c.ShortDescription.toString())))}catch(e){b({en:"",ru:"",ro:""})}}),[]),i.a.createElement(s.a,{style:{maxHeight:368}},i.a.createElement(j.a,{className:"mb-3 ",justifyContent:"between"},i.a.createElement(C.b,{to:"".concat(k.e,"/id/").concat(c.AppType)},i.a.createElement("div",{className:"cursor-pointer app-avatar"},i.a.createElement(u.a,{src:c.Photo,icon:i.a.createElement(h.a,null),shape:"square",size:60}))),0===c.Status?i.a.createElement(p.a,{className:"text-capitalize cursor-pointer",color:"default",onClick:function(){a(!0),r(c)}},i.a.createElement(E,null),i.a.createElement("span",{className:"ml-2 font-weight-semibold"},i.a.createElement(S.a,{id:"app.status.NotInstalled"}))):i.a.createElement(p.a,{className:"text-capitalize",color:"cyan"},i.a.createElement(x.a,null),i.a.createElement("span",{className:"ml-2 font-weight-semibold"},i.a.createElement(S.a,{id:"app.status.Installed"})))),i.a.createElement("div",null,i.a.createElement(C.b,{to:"".concat(k.e,"/id/").concat(c.AppType)},i.a.createElement("h3",{className:"app-link mb-0 cursor-pointer"},c.Name)),i.a.createElement("p",{className:"text-muted"},"By IntelectSoft"),i.a.createElement("div",{style:{minHeight:"70px"}},v?v[y]:null)),i.a.createElement(j.a,{justifyContent:"between",alignItems:"center"},i.a.createElement("div",{className:"text-muted"},"Free"),i.a.createElement(f.a,{onClick:function(){return n(c.ID,c.Name)},danger:!0,type:"link",style:{visibility:1===c.Status?"visible":"hidden"}},i.a.createElement(S.a,{id:"app.Delete"}))))});t.default=function(){var e=new A.a,t=Object(o.useState)([]),n=Object(l.a)(t,2),a=n[0],s=n[1],u=Object(o.useState)(!0),p=Object(l.a)(u,2),f=p[0],h=p[1],y=Object(o.useState)({}),g=Object(l.a)(y,2),O=g[0],E=(g[1],Object(o.useState)(!1)),x=Object(l.a)(E,2),C=x[0],k=x[1],w=d.a.confirm,S=Object(o.useState)(0),V=Object(l.a)(S,2),M=V[0],T=V[1],z=Object(o.useState)(!1),D=Object(l.a)(z,2),L=D[0],F=D[1],_=Object(o.useState)(!1),G=Object(l.a)(_,2),J=G[0],U=G[1],$=Object(o.useState)(),q=Object(l.a)($,2),K=q[0],W=q[1],X=Object(o.useState)(!1),Y=Object(l.a)(X,2),Q=Y[0],Z=Y[1],ee=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.GetMarketAppList().then((function(e){if(h(!1),e&&0===e.ErrorCode){var t=H.a.sortData(e.MarketAppList,"ID");s(t)}})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){return ee(),function(){return e._source.cancel()}}),[]);var te=function(e,t){w({title:"".concat(Object(P.a)("app.uninstall.title")," ").concat(t,"?"),onOk:function(){return new Promise((function(t){setTimeout((function(){return t((new A.a).DeactivateApp(e).then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}if(0!==t.ErrorCode){e.next=4;break}return e.next=4,ee();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),1e3)}))},onCancel:function(){}})};return Object(o.useEffect)((function(){C||setTimeout((function(){T(0),F(!1),U(!1)}),250)}),[C]),i.a.createElement(i.a.Fragment,null,f?i.a.createElement(N.a,{cover:"content"}):i.a.createElement(I.Provider,{value:{visibleModal:C,appInstalled:Q,setAppInstalled:Z,handleOk:function(){k(!1)},handleCancel:function(){k(!1)},terms:O,current:M,setCurrent:T,isAccepted:L,setIsAccepted:F,selectedApp:K,termsAccepted:J,setTermsAccepted:U,getMarketApps:ee}},i.a.createElement(R,{apps:a}),i.a.createElement("div",{className:"my-4 \n                    container-fluid"},i.a.createElement(m.a,{gutter:16},a.length>0&&!f?a.map((function(e){return i.a.createElement(v.a,{xs:24,sm:24,lg:12,xl:8,xxl:6,key:e.AppType},i.a.createElement(B,{setVisibleModal:k,deactivateApp:te,data:e,key:e.AppType,setSelectedApp:W}))})):i.a.createElement(j.a,{justifyContent:"center",className:"w-100"},i.a.createElement(b.a,null))))))}}}]);
//# sourceMappingURL=12.2926bb59.chunk.js.map