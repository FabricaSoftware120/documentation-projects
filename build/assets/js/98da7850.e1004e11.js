"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9875],{6131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Components/buttons/card-button","title":"Bot\xf3n carta","description":"El componente CardButtons permite crear botones estilizados con funcionalidad de redirecci\xf3n y soporte para \xedconos principales y adicionales. Es \xfatil para crear interfaces de usuario visualmente atractivas.","source":"@site/docs/Components/buttons/CardButton.md","sourceDirName":"Components/buttons","slug":"/Components/buttons/card-button","permalink":"/documentation-projects/docs/Components/buttons/card-button","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/buttons/CardButton.md","tags":[],"version":"current","frontMatter":{"id":"card-button","title":"Bot\xf3n carta"},"sidebar":"tutorialSidebar","previous":{"title":"ButtonsNavigation","permalink":"/documentation-projects/docs/Components/buttons/ButtonsNavigation"},"next":{"title":"Boton de configuraci\xf3n","permalink":"/documentation-projects/docs/Components/buttons/config-button"}}');var o=t(4848),s=t(8453);const c={id:"card-button",title:"Bot\xf3n carta"},d="Bot\xf3n carta",i={},a=[{value:"Propiedades",id:"propiedades",level:2},{value:"<strong>Uso</strong>",id:"uso",level:2},{value:"<strong>Ejemplo b\xe1sico</strong>",id:"ejemplo-b\xe1sico",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"bot\xf3n-carta",children:"Bot\xf3n carta"})}),"\n",(0,o.jsxs)(n.p,{children:["El componente ",(0,o.jsx)(n.code,{children:"CardButtons"})," permite crear botones estilizados con funcionalidad de redirecci\xf3n y soporte para \xedconos principales y adicionales. Es \xfatil para crear interfaces de usuario visualmente atractivas."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Prop"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{children:"Requerido"}),(0,o.jsx)(n.th,{children:"Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"nameButton"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Texto visible en el bot\xf3n."}),(0,o.jsx)(n.td,{children:"S\xed"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"mainIcon"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ReactNode"})}),(0,o.jsx)(n.td,{children:"\xcdcono principal que aparece en el centro del bot\xf3n."}),(0,o.jsx)(n.td,{children:"S\xed"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"icons"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"ReactNode[]"})," (opcional)"]}),(0,o.jsx)(n.td,{children:"Array de \xedconos adicionales que se mostrar\xe1n alrededor del \xedcono principal."}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"[]"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"link"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"URL o ruta a la que se redirigir\xe1 cuando se haga clic en el bot\xf3n."}),(0,o.jsx)(n.td,{children:"S\xed"}),(0,o.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"uso",children:(0,o.jsx)(n.strong,{children:"Uso"})}),"\n",(0,o.jsx)(n.h3,{id:"ejemplo-b\xe1sico",children:(0,o.jsx)(n.strong,{children:"Ejemplo b\xe1sico"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import CardButtons from "./CardButtons";\r\nimport { FaHome, FaUser, FaCog } from "react-icons/fa";\r\n\r\nconst App = () => {\r\n  return (\r\n    <CardButtons\r\n      nameButton="Inicio"\r\n      mainIcon={<FaHome />}\r\n      icons={[<FaUser key="1" />, <FaCog key="2" />]}\r\n      link="/home"\r\n    />\r\n  );\r\n};\r\n\r\nexport default App;\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(6540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);