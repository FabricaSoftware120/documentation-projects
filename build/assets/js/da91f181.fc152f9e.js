"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7638],{8890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Components/buttons/ButtonsNavigation","title":"ButtonsNavigation","description":"Descripci\xf3n","source":"@site/docs/Components/buttons/ButtonsNavigation.md","sourceDirName":"Components/buttons","slug":"/Components/buttons/ButtonsNavigation","permalink":"/documentation-projects/docs/Components/buttons/ButtonsNavigation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/buttons/ButtonsNavigation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Bot\xf3n de bloqueo","permalink":"/documentation-projects/docs/Components/buttons/bloq-button"},"next":{"title":"Bot\xf3n carta","permalink":"/documentation-projects/docs/Components/buttons/card-button"}}');var r=n(4848),s=n(8453);const i={},c="ButtonsNavigation",a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Props",id:"props",level:2},{value:"Ejemplo de uso",id:"ejemplo-de-uso",level:2}];function l(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"buttonsnavigation",children:"ButtonsNavigation"})}),"\n",(0,r.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ButtonsNavigation"})," es un bot\xf3n de navegaci\xf3n que permite cambiar la ruta activa dentro de la aplicaci\xf3n.",(0,r.jsx)(t.br,{}),"\n","Puede incluir un icono opcional junto con una etiqueta de texto."]}),"\n",(0,r.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prop"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"label"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"Texto que se muestra en el bot\xf3n."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"route"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"Ruta asociada al bot\xf3n."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"handleClick"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(route: string) => void"})}),(0,r.jsx)(t.td,{children:"Funci\xf3n que cambia la ruta activa al hacer clic."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"icon"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"ReactNode"})," ",(0,r.jsx)(t.em,{children:"(opcional)"})]}),(0,r.jsx)(t.td,{children:"Icono opcional a mostrar junto al texto."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { ButtonsNavigation } from "./ButtonsNavigation";\r\nimport { FaHome } from "react-icons/fa";\r\n\r\nexport default function Example() {\r\n  const handleRouteChange = (route: string) => {\r\n    console.log("Ruta activa:", route);\r\n  };\r\n\r\n  return (\r\n    <ButtonsNavigation\r\n      label="Inicio"\r\n      route="home"\r\n      handleClick={handleRouteChange}\r\n      icon={<FaHome />}\r\n    />\r\n  );\r\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);