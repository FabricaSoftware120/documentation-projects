"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[457],{5071:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"Components/surface/EditBar","title":"Barra de edici\xf3n","description":"Este componente renderiza una barra de edici\xf3n que incluye tres botones: \\"Editar\\", \\"Guardar\\" y \\"Cancelar\\". Dependiendo del estado de isEditable, el bot\xf3n \\"Editar\\" es visible o se muestran los botones \\"Guardar\\" y \\"Cancelar\\".","source":"@site/docs/Components/surface/EditBar.md","sourceDirName":"Components/surface","slug":"/Components/surface/EditBar","permalink":"/docs/Components/surface/EditBar","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/surface/EditBar.md","tags":[],"version":"current","frontMatter":{"title":"Barra de edici\xf3n"},"sidebar":"tutorialSidebar","previous":{"title":"Men\xfa de configuraci\xf3n","permalink":"/docs/Components/surface/ConfigMenu"},"next":{"title":"Cargar archivo","permalink":"/docs/Components/surface/FileUploader"}}');var s=r(4848),c=r(8453);const t={title:"Barra de edici\xf3n"},a="Barra de edici\xf3n",i={},o=[{value:"Propiedades",id:"propiedades",level:3},{value:"Ejemplo de uso",id:"ejemplo-de-uso",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"barra-de-edici\xf3n",children:"Barra de edici\xf3n"})}),"\n",(0,s.jsxs)(n.p,{children:['Este componente renderiza una barra de edici\xf3n que incluye tres botones: "Editar", "Guardar" y "Cancelar". Dependiendo del estado de ',(0,s.jsx)(n.code,{children:"isEditable"}),', el bot\xf3n "Editar" es visible o se muestran los botones "Guardar" y "Cancelar".']}),"\n",(0,s.jsxs)(n.p,{children:["Las funciones para manejar las acciones de estos botones (editar, guardar, cancelar) pueden ser personalizadas a trav\xe9s de las props ",(0,s.jsx)(n.code,{children:"onEdit"}),", ",(0,s.jsx)(n.code,{children:"onSave"}),", y ",(0,s.jsx)(n.code,{children:"onCancel"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"propiedades",children:"Propiedades"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{children:"Requerido"}),(0,s.jsx)(n.th,{children:"Valor Predeterminado"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"isEditable"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Define si la barra est\xe1 en modo de edici\xf3n. Si es ",(0,s.jsx)(n.code,{children:"true"}),', el bot\xf3n "Editar" se muestra; si es ',(0,s.jsx)(n.code,{children:"false"}),', se muestran "Guardar" y "Cancelar".']}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onEdit"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Function"})}),(0,s.jsx)(n.td,{children:'Funci\xf3n que se ejecuta al hacer clic en el bot\xf3n "Editar". Por defecto es una funci\xf3n vac\xeda.'}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"() => {}"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onSave"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Function"})}),(0,s.jsx)(n.td,{children:'Funci\xf3n que se ejecuta al hacer clic en el bot\xf3n "Guardar". Por defecto es una funci\xf3n vac\xeda.'}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"() => {}"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onCancel"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Function"})}),(0,s.jsx)(n.td,{children:'Funci\xf3n que se ejecuta al hacer clic en el bot\xf3n "Cancelar". Por defecto es una funci\xf3n vac\xeda.'}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"() => {}"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<EditBar\r\n  isEditable={true}\r\n  onEdit={() => console.log("Editar acci\xf3n")}\r\n  onSave={() => console.log("Guardar acci\xf3n")}\r\n  onCancel={() => console.log("Cancelar acci\xf3n")}\r\n/>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var d=r(6540);const s={},c=d.createContext(s);function t(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);