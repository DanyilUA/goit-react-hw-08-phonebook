"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{9988:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(8560),a=n(6582),i=n(1413),o=n(4925),l=n(5597),s=n(6516),c=n(2996),d=n(5812),u=n(6992);var f=n(184),m=["className","align","decoration","casing"],h=(0,l.G)((function(e,t){var n=(0,s.mq)("Text",e),r=(0,c.Lr)(e),a=(r.className,r.align,r.decoration,r.casing,(0,o.Z)(r,m)),l=function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,f.jsx)(d.m.p,(0,i.Z)((0,i.Z)((0,i.Z)({ref:t,className:(0,u.cx)("chakra-text",e.className)},l),a),{},{__css:n}))}));h.displayName="Text";var x=n(9055),p=n(2791),v=["icon","children","isRound","aria-label"],y=(0,l.G)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,l=e["aria-label"],s=(0,o.Z)(e,v),c=n||r,d=(0,p.isValidElement)(c)?(0,p.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return(0,f.jsx)(x.z,(0,i.Z)((0,i.Z)({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":l},s),{},{children:d}))}));y.displayName="IconButton";var g=n(3855),b=n(3634),j=n(9640);var Z=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,r=e.d,a=e.displayName,o=e.defaultProps,s=void 0===o?{}:o,c=p.Children.toArray(e.path),d=(0,l.G)((function(e,t){return(0,f.jsx)(j.J,(0,i.Z)((0,i.Z)((0,i.Z)({ref:t,viewBox:n},s),e),{},{children:c.length?c:(0,f.jsx)("path",{fill:"currentColor",d:r})}))}));return d.displayName=a,d}({displayName:"DeleteIcon",path:(0,f.jsx)("g",{fill:"currentColor",children:(0,f.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),S=function(e){var t=e.contact,n=(0,g.I0)();return(0,f.jsxs)(a.k,{maxW:"480px",bgColor:"white",borderRadius:"7px",p:"4",alignItems:"center",boxShadow:"base",justifyContent:"space-between",mt:5,children:[(0,f.jsxs)(a.k,{justifyContent:"center",children:[(0,f.jsxs)(h,{fontWeight:"bold",fontSize:"lg",mr:5,children:[t.name,":"]}),(0,f.jsx)(h,{color:"gray.500",fontSize:"lg",children:t.number})]}),(0,f.jsx)(y,{"aria-label":"Delete ".concat(t.name),icon:(0,f.jsx)(Z,{}),colorScheme:"red",onClick:function(){return n((0,b.GK)(t.id))}})]})},k=function(e){return e.contactDetails.contacts},C=function(e){return e.contactDetails.selectIsLoading},N=function(e){return e.filterDetails.filter},w=n(4942),z=n(9439),_=n(9886);var L=["children","styleType","stylePosition","spacing"],A=["as"],I=["as"],G=(0,_.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),T=(0,z.Z)(G,2),W=T[0],D=T[1],P=(0,l.G)((function(e,t){var n=(0,s.jC)("List",e),r=(0,c.Lr)(e),a=r.children,l=r.styleType,u=void 0===l?"none":l,m=r.stylePosition,h=r.spacing,x=(0,o.Z)(r,L),v=function(e){return p.Children.toArray(e).filter((function(e){return(0,p.isValidElement)(e)}))}(a),y=h?(0,w.Z)({},"& > *:not(style) ~ *:not(style)",{mt:h}):{};return(0,f.jsx)(W,{value:n,children:(0,f.jsx)(d.m.ul,(0,i.Z)((0,i.Z)({ref:t,listStyleType:u,listStylePosition:m,role:"list",__css:(0,i.Z)((0,i.Z)({},n.container),y)},x),{},{children:v}))})}));P.displayName="List",(0,l.G)((function(e,t){e.as;var n=(0,o.Z)(e,A);return(0,f.jsx)(P,(0,i.Z)({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))})).displayName="OrderedList",(0,l.G)((function(e,t){e.as;var n=(0,o.Z)(e,I);return(0,f.jsx)(P,(0,i.Z)({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))})).displayName="UnorderedList";var F=(0,l.G)((function(e,t){var n=D();return(0,f.jsx)(d.m.li,(0,i.Z)((0,i.Z)({ref:t},e),{},{__css:n.item}))}));function H(){var e=(0,r.v9)(k),t=(0,r.v9)(N),n=Array.isArray(e)&&e.length>0;return(0,f.jsx)(P,{children:n&&e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return(0,f.jsx)(F,{children:(0,f.jsx)(S,{contact:e})},e.id)}))})}F.displayName="ListItem",(0,l.G)((function(e,t){var n=D();return(0,f.jsx)(j.J,(0,i.Z)((0,i.Z)({ref:t,role:"presentation"},e),{},{__css:n.icon}))})).displayName="ListIcon";var M=n(4808),R=n(824),V=n(9657),q=n(930),B=n(6336),E=function(){var e=(0,g.v9)(N),t=(0,g.I0)();return(0,f.jsx)(R.xu,{maxW:"480px",mb:10,children:(0,f.jsx)(V.NI,{children:(0,f.jsxs)(q.l,{style:{fontSize:"24px",fontWeight:"600",fontStyle:"italic",color:"black"},children:["Find contacts by name",(0,f.jsx)(B.I,{type:"text",name:"filter",value:e,onChange:function(e){t((0,M.xO)(e.currentTarget.value))},placeholder:"find your contact",ccolor:"black",fontSize:"20px",letterSpacing:"1.3",_focus:{backgroundColor:"lightblue"},variant:"filled"})]})})})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")};function O(){var e=(0,g.v9)(k),t=J(),n=J(),r=(0,g.I0)(),a={fontSize:"24px",fontWeight:"600",fontStyle:"italic",color:"black"};return(0,f.jsx)(R.xu,{maxW:480,children:(0,f.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var n=t.target,a=n.elements.name.value,i=n.elements.number.value;e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?alert("This contact already exists."):(r((0,b.uK)({id:J(),name:a,number:i})),n.reset())},children:[(0,f.jsxs)(q.l,{htmlFor:t,style:a,children:["Name",(0,f.jsx)(B.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:t,placeholder:"contact name",color:"black",fontSize:"20px",letterSpacing:"1.3",_focus:{backgroundColor:"lightblue"},variant:"filled"})]}),(0,f.jsxs)(q.l,{htmlFor:n,style:a,children:["Phone",(0,f.jsx)(B.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone should contain more then 5 numbers (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) .",required:!0,id:n,placeholder:"contact phone",color:"black",fontSize:"20px",letterSpacing:"1.3",_focus:{backgroundColor:"lightblue"},variant:"filled"})]}),(0,f.jsx)(x.z,{type:"submit",mt:3,colorScheme:"teal",size:"md",fontWeight:"bold",_hover:{bg:"teal.600"},children:"Add contact"})," "]})})}var U=n(5088),K=n(9589),X=n.p+"static/media/vintage-typewriter-old-wooden-desk_627494-648.491dc0f5a7a6fd3787e1.avif";function $(){var e=(0,g.I0)(),t=(0,g.v9)(C);(0,p.useEffect)((function(){e((0,b.yF)())}),[e]);return(0,f.jsxs)(R.xu,{position:"relative",w:"100%",minHeight:"100vh",overflow:"hidden",children:[(0,f.jsx)(K.X,{mb:10,style:{fontWeight:"600",fontStyle:"italic",color:"black"},children:"Phonebook"}),(0,f.jsx)(R.xu,{position:"absolute",top:0,left:0,w:"100%",h:"100%",bg:"url(".concat(X,") center/cover no-repeat"),filter:"blur(2px)",zIndex:-1}),t&&(0,f.jsx)(U.a,{}),(0,f.jsx)(E,{}),(0,f.jsx)(O,{}),(0,f.jsx)(H,{})]})}},9589:function(e,t,n){n.d(t,{X:function(){return f}});var r=n(1413),a=n(4925),i=n(5597),o=n(6516),l=n(2996),s=n(5812),c=n(6992),d=n(184),u=["className"],f=(0,i.G)((function(e,t){var n=(0,o.mq)("Heading",e),i=(0,l.Lr)(e),f=(i.className,(0,a.Z)(i,u));return(0,d.jsx)(s.m.h2,(0,r.Z)((0,r.Z)({ref:t,className:(0,c.cx)("chakra-heading",e.className)},f),{},{__css:n}))}));f.displayName="Heading"}}]);
//# sourceMappingURL=727.859429fc.chunk.js.map