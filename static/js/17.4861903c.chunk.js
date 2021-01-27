(this["webpackJsonpclient-portal-app"]=this["webpackJsonpclient-portal-app"]||[]).push([[17],{241:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(1),o=a.n(c),l=a(76),s=a.n(l),i=a(0),u=a(2),f=a.n(u),m=a(405),p=a(44),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var y=i.forwardRef((function(e,t){var a=function(a){var n,c=a.getPrefixCls,l=a.direction,u=e.prefixCls,p=e.span,y=e.order,g=e.offset,b=e.push,v=e.pull,h=e.className,x=e.children,E=e.flex,w=e.style,O=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=c("col",u),N={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var a,n={},c=e[t];"number"===typeof c?n.span=c:"object"===s()(c)&&(n=c||{}),delete O[t],N=o()(o()({},N),(a={},r()(a,"".concat(j,"-").concat(t,"-").concat(n.span),void 0!==n.span),r()(a,"".concat(j,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),r()(a,"".concat(j,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),r()(a,"".concat(j,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),r()(a,"".concat(j,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),r()(a,"".concat(j,"-rtl"),"rtl"===l),a))}));var C=f()(j,(n={},r()(n,"".concat(j,"-").concat(p),void 0!==p),r()(n,"".concat(j,"-order-").concat(y),y),r()(n,"".concat(j,"-offset-").concat(g),g),r()(n,"".concat(j,"-push-").concat(b),b),r()(n,"".concat(j,"-pull-").concat(v),v),n),h,N);return i.createElement(m.a.Consumer,null,(function(e){var a=e.gutter,n=o()({},w);return a&&(n=o()(o()(o()({},a[0]>0?{paddingLeft:a[0]/2,paddingRight:a[0]/2}:{}),a[1]>0?{paddingTop:a[1]/2,paddingBottom:a[1]/2}:{}),n)),E&&(n.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E)),i.createElement("div",o()({},O,{style:n,className:C,ref:t}),x)}))};return i.createElement(p.a,null,a)}));y.displayName="Col",t.a=y},242:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(3),o=a.n(c),l=a(76),s=a.n(l),i=a(24),u=a.n(i),f=a(0),m=a(2),p=a.n(m),d=a(44),y=a(405),g=a(58),b=a(157),v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},h=(Object(g.a)("top","middle","bottom","stretch"),Object(g.a)("start","end","center","space-around","space-between"),f.forwardRef((function(e,t){var a=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),n=u()(a,2),c=n[0],l=n[1],i=f.useRef();i.current=e.gutter,f.useEffect((function(){var e=b.a.subscribe((function(e){var t=i.current||0;(!Array.isArray(t)&&"object"===s()(t)||Array.isArray(t)&&("object"===s()(t[0])||"object"===s()(t[1])))&&l(e)}));return function(){b.a.unsubscribe(e)}}),[]);var m=function(a){var n,l=a.getPrefixCls,i=a.direction,u=e.prefixCls,m=e.justify,d=e.align,g=e.className,h=e.style,x=e.children,E=v(e,["prefixCls","justify","align","className","style","children"]),w=l("row",u),O=function(){var t=[0,0],a=e.gutter,n=void 0===a?0:a;return(Array.isArray(n)?n:[n,0]).forEach((function(e,a){if("object"===s()(e))for(var n=0;n<b.b.length;n++){var r=b.b[n];if(c[r]&&void 0!==e[r]){t[a]=e[r];break}}else t[a]=e||0})),t}(),j=p()(w,(n={},o()(n,"".concat(w,"-").concat(m),m),o()(n,"".concat(w,"-").concat(d),d),o()(n,"".concat(w,"-rtl"),"rtl"===i),n),g),N=r()(r()(r()({},O[0]>0?{marginLeft:O[0]/-2,marginRight:O[0]/-2}:{}),O[1]>0?{marginTop:O[1]/-2,marginBottom:O[1]/2}:{}),h),C=r()({},E);return delete C.gutter,f.createElement(y.a.Provider,{value:{gutter:O}},f.createElement("div",r()({},C,{className:j,style:N,ref:t}),x))};return f.createElement(d.a,null,m)})));h.displayName="Row",t.a=h},405:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({});t.a=r},412:function(e,t,a){"use strict";var n=a(242);t.a=n.a},413:function(e,t,a){"use strict";var n=a(241);t.a=n.a},561:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(412),o=a(413),l=a(67),s=a(394),i=a(9),u=a(41),f=a(156);t.default=function(){return r.a.createElement("div",{className:"h-100 bg-white"},r.a.createElement("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1"},r.a.createElement("div",null,r.a.createElement("img",{className:"img-fluid",src:"/testclientportal/img/rsz_is-logo-dark.png",alt:""})),r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{align:"middle"},r.a.createElement(o.a,{xs:24,sm:24,md:8},r.a.createElement("h1",{className:"font-weight-bold mb-4 display-4"},"Page not found"),r.a.createElement("p",{className:"font-size-md mb-4"},"We've noticed you lost your way, no worries, we will help you to found the correct path."),r.a.createElement(u.b,{to:"/app"},r.a.createElement(l.a,{type:"primary",icon:r.a.createElement(s.a,null)},"Go to login"))),r.a.createElement(o.a,{xs:24,sm:24,md:{span:14,offset:2}},r.a.createElement("img",{className:"img-fluid mt-md-0 mt-4",src:"/testclientportal/img/others/img-20.png",alt:""})))),r.a.createElement(f.a,{mobileFlex:!1,justifyContent:"between"},r.a.createElement("span",null,"Copyright \xa9 ","".concat((new Date).getFullYear())," ",r.a.createElement("span",{className:"font-weight-semibold"},"".concat(i.d))),r.a.createElement("div",null,r.a.createElement("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()}},"Term & Conditions"),r.a.createElement("span",{className:"mx-2 text-muted"}," | "),r.a.createElement("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()}},"Privacy & Policy")))))}}}]);
//# sourceMappingURL=17.4861903c.chunk.js.map