"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1947],{4843:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Components/notification/Notification","title":"Notificaci\xf3n","description":"El componente Notification se encarga de mostrar una lista de notificaciones, con opciones para filtrarlas entre todas y las no le\xeddas. Tambi\xe9n incluye un campo de b\xfasqueda y un enlace para ver todas las notificaciones.","source":"@site/docs/Components/notification/Notification.md","sourceDirName":"Components/notification","slug":"/Components/notification/","permalink":"/docs/Components/notification/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/notification/Notification.md","tags":[],"version":"current","frontMatter":{"title":"Notificaci\xf3n"},"sidebar":"tutorialSidebar","previous":{"title":"Notificaci\xf3n","permalink":"/docs/category/notificaci\xf3n"},"next":{"title":"Tarjeta de notificaci\xf3n","permalink":"/docs/Components/notification/NotificationCard"}}');var t=n(4848),o=n(8453);const c={title:"Notificaci\xf3n"},a="Notificaci\xf3n",r={},d=[{value:"Propiedades",id:"propiedades",level:2},{value:"Comportamiento",id:"comportamiento",level:2},{value:"Ejemplo de uso",id:"ejemplo-de-uso",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"notificaci\xf3n",children:"Notificaci\xf3n"})}),"\n",(0,t.jsxs)(i.p,{children:["El componente ",(0,t.jsx)(i.code,{children:"Notification"})," se encarga de mostrar una lista de notificaciones, con opciones para filtrarlas entre todas y las no le\xeddas. Tambi\xe9n incluye un campo de b\xfasqueda y un enlace para ver todas las notificaciones."]}),"\n",(0,t.jsx)(i.h2,{id:"propiedades",children:"Propiedades"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Propiedad"}),(0,t.jsx)(i.th,{children:"Tipo"}),(0,t.jsx)(i.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"isNotification"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Opcional"}),": Determina si se est\xe1 viendo la p\xe1gina de notificaciones completas (",(0,t.jsx)(i.code,{children:"true"}),") o un resumen de ellas (",(0,t.jsx)(i.code,{children:"false"}),"). ",(0,t.jsx)("br",{})," ",(0,t.jsx)(i.strong,{children:"Valor predeterminado:"})," ",(0,t.jsx)(i.code,{children:"false"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"notification"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<Object>"})}),(0,t.jsx)(i.td,{children:"Lista de notificaciones que se pasar\xe1n al componente. Cada notificaci\xf3n debe tener las siguientes propiedades:"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["- ",(0,t.jsx)(i.code,{children:"nameCase"})," (",(0,t.jsx)(i.code,{children:"string"}),"): Nombre o descripci\xf3n del caso."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["- ",(0,t.jsx)(i.code,{children:"timeCase"})," (",(0,t.jsx)(i.code,{children:"string"}),"): Tiempo transcurrido desde que la notificaci\xf3n fue creada."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["- ",(0,t.jsx)(i.code,{children:"isNotification"})," (",(0,t.jsx)(i.code,{children:"boolean"}),"): Indica si la notificaci\xf3n est\xe1 le\xedda o no."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["- ",(0,t.jsx)(i.code,{children:"linkCase"})," (",(0,t.jsx)(i.code,{children:"string"}),"): Enlace al que se dirige cuando se hace clic en la notificaci\xf3n."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["- ",(0,t.jsx)(i.code,{children:"isExternalLink"})," (",(0,t.jsx)(i.code,{children:"boolean"}),"): Indica si el enlace es externo o no."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"link"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Un enlace para redirigir al usuario a una p\xe1gina donde se pueden ver todas las notificaciones."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"comportamiento",children:"Comportamiento"}),"\n",(0,t.jsx)(i.p,{children:"El componente tiene las siguientes caracter\xedsticas:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Filtrar notificaciones:"}),' Puedes filtrar las notificaciones entre "todas" y "no le\xeddas".']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Buscar notificaciones:"})," Permite buscar notificaciones por nombre o tiempo."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Ver todas las notificaciones:"})," Incluye un enlace para ver todas las notificaciones en una p\xe1gina separada."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Visualizaci\xf3n en p\xe1gina completa o resumen:"})," La visualizaci\xf3n cambia dependiendo de si ",(0,t.jsx)(i.code,{children:"isNotification"})," es ",(0,t.jsx)(i.code,{children:"true"})," o ",(0,t.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:'const notifications = [\r\n  { nameCase: "Caso 1", timeCase: "Hace 2 horas", isNotification: true, linkCase: "/caso/1", isExternalLink: false },\r\n  { nameCase: "Caso 2", timeCase: "Hace 5 horas", isNotification: false, linkCase: "/caso/2", isExternalLink: true }\r\n];\r\n\r\n<Notification\r\n  isNotification={true}\r\n  notification={notifications}\r\n  link="/notificaciones"\r\n/>\n'})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>a});var s=n(6540);const t={},o=s.createContext(t);function c(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);