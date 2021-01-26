(this["webpackJsonpclient-portal-app"]=this["webpackJsonpclient-portal-app"]||[]).push([[26],{453:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDaVSHFHzNcQmY4KALL2U6QJWDzi73trsb8fd9fL7JrCJe471hjWB7Mg/CN4liv+YEVsigw5xjzo149ZC0YsqG16QlS9poa+vRlCjZDMh3HJowR+8ooZTwzhoyc6SWQYkGj/wFUhll5TWuuuAStAQ+5ds8eWtL5eW0TAWEmRhzOzQIDAQAB"},903:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(5),s=t.n(l),c=t(7),i=t(11),m=t(87),o=t(29),u=t(517),d=t(882),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},g=t(10),h=function(e,a){return r.createElement(g.a,Object.assign({},e,{ref:a,icon:E}))};h.displayName="WarningOutlined";var p=r.forwardRef(h),f=t(562),v=t(140),b=t(516),w=t(375),y=t(374),N=t(132),x=t(67),I=t(91),A=t(563),C=t(57),j=t(453),M=t(18),O=t(78),k={JuridicalName:[{required:!0,message:n.a.createElement(M.a,{id:"auth.MessageInsertJuridicalName"})}],IDNO:[{required:!0,message:n.a.createElement(M.a,{id:"auth.MessageInsertIDNO"})},{pattern:/^(\d{13})?$/,message:n.a.createElement(M.a,{id:"auth.IDNOValidation"})}],VATCode:[{required:!0,message:n.a.createElement(M.a,{id:"auth.MessageInsertVATCode"})}],email:[{required:!0,message:n.a.createElement(M.a,{id:"auth.MessageInsertEmail"})},{type:"email",message:n.a.createElement(M.a,{id:"auth.MessageInsertValidEmail"})}],password:[{required:!0,message:n.a.createElement(M.a,{id:"auth.MessageInsertPassword"})},{required:!0,pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,.\\\/;':"-]).{8,}$/,message:n.a.createElement(M.a,{id:"auth.PasswordValidation"})}],confirm:[{required:!0,message:n.a.createElement(M.a,{id:"auth.MessageInsertConfirmPassword"})},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject(n.a.createElement(M.a,{id:"auth.MessagePasswordsMatch"})):Promise.resolve()}}}]},V={showAuthMessage:I.f,hideAuthMessage:I.c,showLoading:I.g,hideLoading:I.d},D=Object(o.b)((function(e){var a=e.auth,t=e.theme,r=a;return{loading:r.loading,message:r.message,showMessage:r.showMessage,locale:t.locale}}),V)((function(e){var a=e.showLoading,t=e.loading,l=e.showMessage,o=e.hideAuthMessage,E=e.hideLoading,g=e.locale,h=e.history,I=f.a.useForm(),V=Object(m.a)(I,1)[0],D=Object(r.useState)(!1),T=Object(m.a)(D,2),F=T[0],P=(T[1],Object(r.useState)(!1)),z=Object(m.a)(P,2),J=z[0],L=z[1];Object(r.useEffect)((function(){l&&setTimeout((function(){o()}),3e3)}),[l]);v.a.Option;return n.a.createElement(n.a.Fragment,null,n.a.createElement(A.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:l?1:0,marginBottom:l?20:0}},n.a.createElement(b.a,{type:"error",showIcon:!0,message:e.message})),n.a.createElement(f.a,{form:V,layout:"vertical",name:"register-form",onFinish:function(){V.validateFields().then((function(e){var t={IDNO:e.IDNO,JuridicalName:e.JuridicalName,UiLanguage:"ro"===g?0:"ru"===g?1:2,VATCode:J?e.VATCode:"",UsrEmail:e.email,UsrPassword:C.a.encryptInput(e.password,j.a)};a(),setTimeout(Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.abrupt("return",(new O.b).RegisterCompany(Object(c.a)({},t)).then((function(e){108===e.ErrorCode&&h.push("/auth/confirm")})));case 2:case"end":return e.stop()}}),e)}))),1500)})).catch((function(e){console.log("Validate Failed:",e)}))}},n.a.createElement(f.a.Item,{name:"JuridicalName",label:n.a.createElement(M.a,{id:"auth.JuridicalName"}),rules:k.JuridicalName,hasFeedback:!0},n.a.createElement(w.a,{prefix:n.a.createElement(u.a,{className:"text-primary"})})),n.a.createElement(f.a.Item,{name:"IDNO",label:n.a.createElement(M.a,{id:"auth.IDNO"}),rules:k.IDNO,hasFeedback:!0},n.a.createElement(w.a,{prefix:n.a.createElement(u.a,{className:"text-primary"})})),n.a.createElement(f.a.Item,null,n.a.createElement(y.a.Group,{defaultValue:!1,onChange:function(){return L(!J)}},n.a.createElement(y.a.Button,{value:!1},n.a.createElement(M.a,{id:"auth.NotVATPayer"})),n.a.createElement(y.a.Button,{value:!0},n.a.createElement(M.a,{id:"auth.VATPayer"})))),n.a.createElement(A.a.div,{initial:{display:"none",opacity:0},animate:{display:J?"block":"none",opacity:J?1:0}},n.a.createElement(f.a.Item,{name:"VATCode",label:n.a.createElement(M.a,{id:"auth.VATCode"}),rules:[{required:J,message:n.a.createElement(M.a,{id:"auth.MessageInsertVATCode"})}],hasFeedback:!0},n.a.createElement(w.a,{prefix:n.a.createElement(u.a,{className:"text-primary"})}))),n.a.createElement(f.a.Item,{name:"email",label:n.a.createElement(M.a,{id:"auth.Email"}),rules:k.email,hasFeedback:!0},n.a.createElement(w.a,{prefix:n.a.createElement(u.a,{className:"text-primary"})})),n.a.createElement(f.a.Item,{name:"password",label:n.a.createElement(M.a,{id:"auth.Password"}),rules:k.password,hasFeedback:!0},n.a.createElement(w.a.Password,{mode:"multiple",prefix:[n.a.createElement(d.a,{className:"text-primary"}),F&&n.a.createElement(N.a,{title:"CapsLock is on"},n.a.createElement(p,{className:"text-danger ml-1"}))],type:"password"})),n.a.createElement(f.a.Item,{name:"confirm",label:n.a.createElement(M.a,{id:"auth.ConfirmPassword"}),rules:k.confirm,hasFeedback:!0},n.a.createElement(w.a,{prefix:[n.a.createElement(d.a,{className:"text-primary"}),F&&n.a.createElement(N.a,{title:"CapsLock is on"},n.a.createElement(p,{className:"text-danger ml-1"}))],type:"password"})),n.a.createElement(f.a.Item,null,n.a.createElement(x.a,{type:"primary",htmlType:"submit",block:!0,loading:t}," ",n.a.createElement(M.a,{id:"auth.SignUp"})))))})),T=t(412),F=t(413),P=t(41),z=t(195),J={backgroundImage:"url(".concat("/testclientportal","/img/others/img-17.jpg)"),backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh"};a.default=function(e){var a=function(e){var a=e.name,t=e.selector,r=e.disabled,l=e.vertical;return n.a.createElement("div",{className:"my-4 ".concat(l?"":"d-flex align-items-center justify-content-between")},n.a.createElement("div",{className:"".concat(r?"opacity-0-3":""," ").concat(l?"mb-3":"")},a),n.a.createElement("div",null,t))};return n.a.createElement("div",{className:"bg-white"},n.a.createElement(T.a,{justify:"center",className:"align-items-stretch"},n.a.createElement(F.a,{xs:20,sm:20,md:24,lg:16},n.a.createElement("div",{className:"container d-flex flex-column justify-content-center min-vh-100"},n.a.createElement(T.a,{justify:"center"},n.a.createElement(F.a,{xs:24,sm:24,md:20,lg:12,xl:9},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement(M.a,{id:"auth.SignUp"})),n.a.createElement("p",null,n.a.createElement(M.a,{id:"auth.AlreadyHaveAnAccount"})," ",n.a.createElement(P.c,{to:"/auth/login"},n.a.createElement(M.a,{id:"auth.SignIn"})))),n.a.createElement("div",null,n.a.createElement(a,{selector:n.a.createElement(z.a,{triggerType:"click"})}))),n.a.createElement("div",null,n.a.createElement(D,e)))))),n.a.createElement(F.a,{xs:0,sm:0,md:0,lg:8},n.a.createElement("div",{className:"d-flex flex-column justify-content-between h-100 px-4 position-fixed",style:J},n.a.createElement("div",{className:"text-right"},n.a.createElement("img",{className:"mt-2",src:"/testclientportal/img/rsz_is_logo-efactura.png",alt:"logo"})),n.a.createElement(T.a,{justify:"center"},n.a.createElement(F.a,{xs:0,sm:0,md:0,lg:20},n.a.createElement("img",{className:"img-fluid mb-5",src:"/testclientportal/img/others/img-19.png",alt:""}),n.a.createElement("h1",{className:"text-white"},n.a.createElement(M.a,{id:"auth.WelcomeMessage"})),n.a.createElement("p",{className:"text-white"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."))),n.a.createElement("div",{className:"d-flex justify-content-end pb-4"},n.a.createElement("div",null,n.a.createElement("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()}},n.a.createElement(M.a,{id:"auth.Terms&Conditions"})),n.a.createElement("span",{className:"mx-2 text-white"}," | "),n.a.createElement("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()}},n.a.createElement(M.a,{id:"auth.Privacy&Policy"}))))))))}}}]);
//# sourceMappingURL=26.fae3c9e9.chunk.js.map