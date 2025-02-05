"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9901],{5938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Components/inputs/FiltrableMultiselect","title":"FilterableMultiSelect","description":"Descripci\xf3n","source":"@site/docs/Components/inputs/FiltrableMultiselect.md","sourceDirName":"Components/inputs","slug":"/Components/inputs/FiltrableMultiselect","permalink":"/documentation-projects/docs/Components/inputs/FiltrableMultiselect","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/inputs/FiltrableMultiselect.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Input fecha","permalink":"/documentation-projects/docs/Components/inputs/delete-input"},"next":{"title":"Input busqueda","permalink":"/documentation-projects/docs/Components/inputs/search-input"}}');var i=t(4848),l=t(8453);const r={},c="FilterableMultiSelect",o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Props",id:"props",level:2},{value:"Ejemplo de uso",id:"ejemplo-de-uso",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"filterablemultiselect",children:"FilterableMultiSelect"})}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El componente ",(0,i.jsx)(n.code,{children:"FilterableMultiSelect"})," proporciona un selector de opciones filtrables con m\xfaltiples selecciones. Permite a los usuarios buscar y seleccionar varias opciones de una lista desplegable. La selecci\xf3n se notifica a trav\xe9s de la funci\xf3n ",(0,i.jsx)(n.code,{children:"onChange"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{children:"Opcional"}),(0,i.jsx)(n.th,{children:"Valor por defecto"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{ id: string; label: string; }[]"})}),(0,i.jsx)(n.td,{children:"Lista de opciones disponibles para seleccionar."}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onChange"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(selectedValues: string[]) => void"})}),(0,i.jsx)(n.td,{children:"Funci\xf3n que recibe el array de valores seleccionados."}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-de-uso",children:"Ejemplo de uso"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import FilterableMultiSelect from "./components/FiltrableMultiselect";\r\n\r\nfunction App() {\r\n  const options = [\r\n    { id: "1", label: "Opci\xf3n 1" },\r\n    { id: "2", label: "Opci\xf3n 2" },\r\n    { id: "3", label: "Opci\xf3n 3" },\r\n  ];\r\n\r\n  const handleSelectionChange = (selectedValues: string[]) => {\r\n    console.log("Opciones seleccionadas:", selectedValues);\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <h1>Ejemplo de FilterableMultiSelect</h1>\r\n      <FilterableMultiSelect\r\n        options={options}\r\n        onChange={handleSelectionChange}\r\n      />\r\n    </div>\r\n  );\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);