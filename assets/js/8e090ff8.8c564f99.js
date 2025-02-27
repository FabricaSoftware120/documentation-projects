"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1947],{4843:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Components/notification/notification","title":"Notificaci\xf3n","description":"El componente Notification se encarga de mostrar una lista de notificaciones, con opciones para filtrarlas entre todas y las no le\xeddas. Tambi\xe9n incluye un campo de b\xfasqueda y un enlace para ver todas las notificaciones.","source":"@site/docs/Components/notification/Notification.md","sourceDirName":"Components/notification","slug":"/Components/notification/","permalink":"/documentation-projects/docs/Components/notification/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/notification/Notification.md","tags":[],"version":"current","frontMatter":{"id":"notification","title":"Notificaci\xf3n"},"sidebar":"tutorialSidebar","previous":{"title":"Notificaci\xf3n","permalink":"/documentation-projects/docs/category/notificaci\xf3n"},"next":{"title":"Tarjeta de notificaci\xf3n","permalink":"/documentation-projects/docs/Components/notification/notification-card"}}');var o=i(4848),c=i(8453);const t={id:"notification",title:"Notificaci\xf3n"},a="Notificaci\xf3n",r={},d=[{value:"Propiedades",id:"propiedades",level:2},{value:"Comportamiento",id:"comportamiento",level:2},{value:"Ejemplo de uso",id:"ejemplo-de-uso",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"notificaci\xf3n",children:"Notificaci\xf3n"})}),"\n",(0,o.jsxs)(n.p,{children:["El componente ",(0,o.jsx)(n.code,{children:"Notification"})," se encarga de mostrar una lista de notificaciones, con opciones para filtrarlas entre todas y las no le\xeddas. Tambi\xe9n incluye un campo de b\xfasqueda y un enlace para ver todas las notificaciones."]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propiedad"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"isNotification"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.strong,{children:"Opcional"}),": Determina si se est\xe1 viendo la p\xe1gina de notificaciones completas (",(0,o.jsx)(n.code,{children:"true"}),") o un resumen de ellas (",(0,o.jsx)(n.code,{children:"false"}),"). ",(0,o.jsx)("br",{})," ",(0,o.jsx)(n.strong,{children:"Valor predeterminado:"})," ",(0,o.jsx)(n.code,{children:"false"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"notification"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Array<Object>"})}),(0,o.jsx)(n.td,{children:"Lista de notificaciones que se pasar\xe1n al componente. Cada notificaci\xf3n debe tener las siguientes propiedades:"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["- ",(0,o.jsx)(n.code,{children:"nameCase"})," (",(0,o.jsx)(n.code,{children:"string"}),"): Nombre o descripci\xf3n del caso."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["- ",(0,o.jsx)(n.code,{children:"timeCase"})," (",(0,o.jsx)(n.code,{children:"string"}),"): Tiempo transcurrido desde que la notificaci\xf3n fue creada."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["- ",(0,o.jsx)(n.code,{children:"isNotification"})," (",(0,o.jsx)(n.code,{children:"boolean"}),"): Indica si la notificaci\xf3n est\xe1 le\xedda o no."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["- ",(0,o.jsx)(n.code,{children:"linkCase"})," (",(0,o.jsx)(n.code,{children:"string"}),"): Enlace al que se dirige cuando se hace clic en la notificaci\xf3n."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsxs)(n.td,{children:["- ",(0,o.jsx)(n.code,{children:"isExternalLink"})," (",(0,o.jsx)(n.code,{children:"boolean"}),"): Indica si el enlace es externo o no."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"link"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"string"})," (opcional)"]}),(0,o.jsx)(n.td,{children:"Un enlace para redirigir al usuario a una p\xe1gina donde se pueden ver todas las notificaciones."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"infoNotification"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"function"})," (opcional)"]}),(0,o.jsx)(n.td,{children:"Funci\xf3n que se ejecuta al hacer clic en el contenedor de notificaciones."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"onNavigate"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"function"})," (opcional)"]}),(0,o.jsx)(n.td,{children:"Funci\xf3n para manejar la navegaci\xf3n a otras p\xe1ginas."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"isLoginPage"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"boolean"})," (opcional)"]}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.strong,{children:"Nuevo"}),": Indica si el componente se est\xe1 utilizando en la p\xe1gina de inicio de sesi\xf3n. ",(0,o.jsx)("br",{})," - Si es ",(0,o.jsx)(n.code,{children:"true"}),", se ocultan las notificaciones sin afectar el dise\xf1o. ",(0,o.jsx)("br",{})," - Si es ",(0,o.jsx)(n.code,{children:"false"}),", se muestran normalmente. ",(0,o.jsx)(n.strong,{children:"Valor predeterminado:"})," ",(0,o.jsx)(n.code,{children:"false"})]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"comportamiento",children:"Comportamiento"}),"\n",(0,o.jsx)(n.p,{children:"El componente tiene las siguientes caracter\xedsticas:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Filtrar notificaciones:"}),' Puedes filtrar las notificaciones entre "todas" y "no le\xeddas".']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Buscar notificaciones:"})," Permite buscar notificaciones por nombre o tiempo."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ver todas las notificaciones:"})," Incluye un enlace para ver todas las notificaciones en una p\xe1gina separada."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Visualizaci\xf3n en p\xe1gina completa o resumen:"})," La visualizaci\xf3n cambia dependiendo de si ",(0,o.jsx)(n.code,{children:"isNotification"})," es ",(0,o.jsx)(n.code,{children:"true"})," o ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ocultar notificaciones en login:"})," Si ",(0,o.jsx)(n.code,{children:"isLoginPage"})," es ",(0,o.jsx)(n.code,{children:"true"}),", el componente no mostrar\xe1 notificaciones pero mantendr\xe1 el dise\xf1o."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'const notifications = [\r\n  { nameCase: "Caso 1", timeCase: "Hace 2 horas", isNotification: true, linkCase: "/caso/1", isExternalLink: false },\r\n  { nameCase: "Caso 2", timeCase: "Hace 5 horas", isNotification: false, linkCase: "/caso/2", isExternalLink: true }\r\n];\r\n\r\n// Uso normal\r\n<Notification\r\n  isNotification={true}\r\n  notification={notifications}\r\n  link="/notificaciones"\r\n  onNavigate={(url) => console.log("Navegando a:", url)}\r\n  infoNotification={() => console.log("Notificaci\xf3n clickeada")}\r\n/>\r\n\r\n// Uso en la p\xe1gina de inicio de sesi\xf3n\r\n<Notification\r\n  isNotification={false}\r\n  notification={[]}\r\n  isLoginPage={true}\r\n/>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(6540);const o={},c=s.createContext(o);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);