"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3640],{1197:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Components/inputs/select-input","title":"Input selecci\xf3n","description":"El componente SelectInput es un campo de selecci\xf3n (select) reutilizable y personalizable que permite al usuario elegir una opci\xf3n de una lista desplegable. Incluye una flecha para indicar el estado del desplegable y maneja errores si no se selecciona ninguna opci\xf3n cuando es requerido.","source":"@site/docs/Components/inputs/SelectInput.md","sourceDirName":"Components/inputs","slug":"/Components/inputs/select-input","permalink":"/documentation-projects/docs/Components/inputs/select-input","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/inputs/SelectInput.md","tags":[],"version":"current","frontMatter":{"id":"select-input","title":"Input selecci\xf3n"},"sidebar":"tutorialSidebar","previous":{"title":"Input busqueda","permalink":"/documentation-projects/docs/Components/inputs/search-input"},"next":{"title":"Input simple","permalink":"/documentation-projects/docs/Components/inputs/simple-button"}}');var r=s(4848),i=s(8453);const c={id:"select-input",title:"Input selecci\xf3n"},l="Input selecci\xf3n",d={},o=[{value:"Propiedades",id:"propiedades",level:2},{value:"<strong>Uso</strong>",id:"uso",level:2},{value:"<strong>Ejemplo b\xe1sico</strong>",id:"ejemplo-b\xe1sico",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"input-selecci\xf3n",children:"Input selecci\xf3n"})}),"\n",(0,r.jsxs)(n.p,{children:["El componente ",(0,r.jsx)(n.code,{children:"SelectInput"})," es un campo de selecci\xf3n (select) reutilizable y personalizable que permite al usuario elegir una opci\xf3n de una lista desplegable. Incluye una flecha para indicar el estado del desplegable y maneja errores si no se selecciona ninguna opci\xf3n cuando es requerido."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Prop"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Requerido"}),(0,r.jsx)(n.th,{children:"Valor Predeterminado"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"label"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"El texto que se mostrar\xe1 como etiqueta para el campo select."}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"option"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Array<{label: string, value: string}>"})}),(0,r.jsx)(n.td,{children:"Lista de opciones disponibles para el select."}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Valor actual seleccionado."}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"isDisabled"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indica si el select est\xe1 deshabilitado."}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onChange"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"(value: string) => void"})}),(0,r.jsx)(n.td,{children:"Funci\xf3n que se ejecuta cuando se selecciona una opci\xf3n."}),(0,r.jsx)(n.td,{children:"S\xed"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"isError"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Indica si se debe mostrar un mensaje de error si no se selecciona ninguna opci\xf3n."}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"uso",children:(0,r.jsx)(n.strong,{children:"Uso"})}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo-b\xe1sico",children:(0,r.jsx)(n.strong,{children:"Ejemplo b\xe1sico"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import SelectInput from "./SelectInput";\r\n\r\nfunction App() {\r\n  const options = [\r\n    { label: "Opci\xf3n 1", value: "1" },\r\n    { label: "Opci\xf3n 2", value: "2" },\r\n    { label: "Opci\xf3n 3", value: "3" },\r\n  ];\r\n\r\n  const handleChange = (value: string) => {\r\n    console.log("Valor seleccionado:", value);\r\n  };\r\n\r\n  return (\r\n    <SelectInput\r\n      label="Selecciona una opci\xf3n"\r\n      option={options}\r\n      value=""\r\n      onChange={handleChange}\r\n    />\r\n  );\r\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(6540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);