"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[457],{5071:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Components/surface/edit-bar","title":"Barra de edici\xf3n","description":"Este componente proporciona una barra de edici\xf3n con los botones \\"Editar\\", \\"Agregar\\", \\"Guardar\\" y \\"Cancelar\\".","source":"@site/docs/Components/surface/EditBar.md","sourceDirName":"Components/surface","slug":"/Components/surface/edit-bar","permalink":"/documentation-projects/docs/Components/surface/edit-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/surface/EditBar.md","tags":[],"version":"current","frontMatter":{"id":"edit-bar","title":"Barra de edici\xf3n"},"sidebar":"tutorialSidebar","previous":{"title":"Men\xfa de configuraci\xf3n","permalink":"/documentation-projects/docs/Components/surface/config-menu"},"next":{"title":"Cargar archivo","permalink":"/documentation-projects/docs/Components/surface/file-uploader"}}');var d=r(4848),o=r(8453);const t={id:"edit-bar",title:"Barra de edici\xf3n"},c="Componente EditBar",i={},l=[{value:"\ud83d\udccc <strong>Estados y Comportamiento</strong>",id:"-estados-y-comportamiento",level:2},{value:"\u2699\ufe0f <strong>Props</strong>",id:"\ufe0f-props",level:2},{value:"\ud83d\udee0 <strong>Ejemplo de Uso</strong>",id:"-ejemplo-de-uso",level:2}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsxs)(n.h1,{id:"componente-editbar",children:["Componente ",(0,d.jsx)(n.code,{children:"EditBar"})]})}),"\n",(0,d.jsxs)(n.p,{children:["Este componente proporciona una barra de edici\xf3n con los botones ",(0,d.jsx)(n.strong,{children:'"Editar"'}),", ",(0,d.jsx)(n.strong,{children:'"Agregar"'}),", ",(0,d.jsx)(n.strong,{children:'"Guardar"'})," y ",(0,d.jsx)(n.strong,{children:'"Cancelar"'}),".",(0,d.jsx)(n.br,{}),"\n","Su comportamiento depende del estado de ",(0,d.jsx)(n.code,{children:"isEditable"})," y de la acci\xf3n de agregar (",(0,d.jsx)(n.code,{children:"isAdding"}),")."]}),"\n",(0,d.jsxs)(n.h2,{id:"-estados-y-comportamiento",children:["\ud83d\udccc ",(0,d.jsx)(n.strong,{children:"Estados y Comportamiento"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:["Modo normal (",(0,d.jsx)(n.code,{children:"isEditable=false"}),", ",(0,d.jsx)(n.code,{children:"isAdding=false"}),")"]}),":",(0,d.jsx)(n.br,{}),"\n","Muestra los botones ",(0,d.jsx)(n.strong,{children:'"Editar"'})," y, opcionalmente, ",(0,d.jsx)(n.strong,{children:'"Agregar"'}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:["Modo agregar (",(0,d.jsx)(n.code,{children:"isAdding=true"}),")"]}),":",(0,d.jsx)(n.br,{}),"\n","Se oculta la barra y se muestra solo un bot\xf3n ",(0,d.jsx)(n.strong,{children:'"Volver"'})," para regresar al estado anterior."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:["Modo edici\xf3n (",(0,d.jsx)(n.code,{children:"isEditable=true"}),")"]}),":",(0,d.jsx)(n.br,{}),"\n","Se ocultan ",(0,d.jsx)(n.strong,{children:'"Editar"'})," y ",(0,d.jsx)(n.strong,{children:'"Agregar"'}),", y se muestran ",(0,d.jsx)(n.strong,{children:'"Guardar"'})," y ",(0,d.jsx)(n.strong,{children:'"Cancelar"'}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\ufe0f-props",children:["\u2699\ufe0f ",(0,d.jsx)(n.strong,{children:"Props"})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedad"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isEditable"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Define si el componente est\xe1 en modo de edici\xf3n."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"showAddButton"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsxs)(n.td,{children:["Define si se muestra el bot\xf3n ",(0,d.jsx)(n.strong,{children:'"Agregar"'}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onEdit"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"function"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"() => {}"})}),(0,d.jsxs)(n.td,{children:["Funci\xf3n ejecutada al hacer clic en ",(0,d.jsx)(n.strong,{children:'"Editar"'}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onAdd"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"function"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"() => {}"})}),(0,d.jsxs)(n.td,{children:["Funci\xf3n ejecutada al hacer clic en ",(0,d.jsx)(n.strong,{children:'"Agregar"'}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onCancel"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"function"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"() => {}"})}),(0,d.jsxs)(n.td,{children:["Funci\xf3n ejecutada al hacer clic en ",(0,d.jsx)(n.strong,{children:'"Cancelar"'}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onSave"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"function"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"() => {}"})}),(0,d.jsxs)(n.td,{children:["Funci\xf3n ejecutada al hacer clic en ",(0,d.jsx)(n.strong,{children:'"Guardar"'}),"."]})]})]})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"-ejemplo-de-uso",children:["\ud83d\udee0 ",(0,d.jsx)(n.strong,{children:"Ejemplo de Uso"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:'<EditBar\r\n  isEditable={false}\r\n  showAddButton={true}\r\n  onEdit={() => console.log("Modo edici\xf3n activado")}\r\n  onAdd={() => console.log("Agregando nuevo elemento")}\r\n  onCancel={() => console.log("Cancelando edici\xf3n")}\r\n  onSave={() => console.log("Guardando cambios")}\r\n/>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(6540);const d={},o=s.createContext(d);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);