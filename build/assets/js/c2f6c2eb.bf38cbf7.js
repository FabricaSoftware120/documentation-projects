"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7210],{4927:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Components/nav-bar","title":"NavBar","description":"Una barra de navegaci\xf3n interactiva que incluye elementos de navegaci\xf3n, notificaciones y un panel de informaci\xf3n de usuario.","source":"@site/docs/Components/NavBar.md","sourceDirName":"Components","slug":"/Components/nav-bar","permalink":"/docs/Components/nav-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/NavBar.md","tags":[],"version":"current","frontMatter":{"id":"nav-bar","title":"NavBar"},"sidebar":"tutorialSidebar","previous":{"title":"Descripci\xf3n de archivo","permalink":"/docs/Components/file-description"},"next":{"title":"Instalaci\xf3n","permalink":"/docs/intro"}}');var o=i(4848),d=i(8453);const t={id:"nav-bar",title:"NavBar"},c="NavBar",s={},a=[{value:"Propiedades",id:"propiedades",level:2},{value:"Comportamiento",id:"comportamiento",level:2},{value:"Ejemplo de uso",id:"ejemplo-de-uso",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"navbar",children:"NavBar"})}),"\n",(0,o.jsx)(n.p,{children:"Una barra de navegaci\xf3n interactiva que incluye elementos de navegaci\xf3n, notificaciones y un panel de informaci\xf3n de usuario."}),"\n",(0,o.jsx)(n.p,{children:"Este componente es flexible y personalizable, permitiendo manejar acciones como clics en notificaciones, navegaci\xf3n a diferentes rutas, y opciones del men\xfa. Tambi\xe9n puede mostrar el nombre y la foto del usuario actual."}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Prop"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{children:"Requerido"}),(0,o.jsx)(n.th,{children:"Valor Predeterminado"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"navItems"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Array<NavItem>"})}),(0,o.jsx)(n.td,{children:"Lista de elementos de navegaci\xf3n que se mostrar\xe1n en la barra. Cada elemento puede incluir nombre, ruta y submen\xfas."}),(0,o.jsx)(n.td,{children:"S\xed"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"notificationCount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),(0,o.jsx)(n.td,{children:'N\xfamero de notificaciones que se mostrar\xe1n en el icono de campana. Si el n\xfamero excede 99, se mostrar\xe1 "+99".'}),(0,o.jsx)(n.td,{children:"S\xed"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"photo"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"URL de la foto de perfil del usuario, que se muestra junto al nombre en el panel de usuario."}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"undefined"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"userName"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Nombre del usuario que se mostrar\xe1 en la barra de navegaci\xf3n."}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"undefined"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"onNotificationClick"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Function"})}),(0,o.jsx)(n.td,{children:"Funci\xf3n opcional que se ejecuta al hacer clic en el icono de notificaciones."}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"undefined"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"onOptionsMenuClick"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Function"})}),(0,o.jsx)(n.td,{children:"Funci\xf3n opcional que se ejecuta al hacer clic en el icono de men\xfa de opciones."}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"undefined"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"onNavigate"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Function"})}),(0,o.jsx)(n.td,{children:"Funci\xf3n que se ejecuta al hacer clic en un elemento del men\xfa de navegaci\xf3n. Recibe la ruta del elemento como argumento."}),(0,o.jsx)(n.td,{children:"S\xed"}),(0,o.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"comportamiento",children:"Comportamiento"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Detecta clics fuera del componente para cerrar men\xfas desplegados."}),"\n",(0,o.jsx)(n.li,{children:"Permite la navegaci\xf3n mediante los elementos del men\xfa, con soporte para submen\xfas anidados."}),"\n",(0,o.jsx)(n.li,{children:"Muestra notificaciones con un contador interactivo."}),"\n",(0,o.jsx)(n.li,{children:"Proporciona accesibilidad mediante eventos de clic y comportamiento responsivo."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'const navItems = [\r\n  {\r\n    name: "Inicio",\r\n    link: "/home",\r\n    subItems: [\r\n      { name: "Perfil", link: "/home/profile" },\r\n      { name: "Ajustes", link: "/home/settings" },\r\n    ],\r\n  },\r\n  { name: "Acerca de", link: "/about" },\r\n];\r\n\r\n<NavBar\r\n  navItems={navItems}\r\n  notificationCount={5}\r\n  photo="https://example.com/photo.jpg"\r\n  userName="Juan P\xe9rez"\r\n  onNotificationClick={() => console.log("Notificaciones abiertas")}\r\n  onOptionsMenuClick={() => console.log("Men\xfa de opciones abierto")}\r\n  onNavigate={(link) => console.log(`Navegando a: ${link}`)}\r\n/>;\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(6540);const o={},d=r.createContext(o);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);