import{j as e}from"./iframe-CIrth_ce.js";import{C as u}from"./card-0aVZiVBk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bk382tBs.js";const n=[{name:"Gray 50",hex:"#FAFAFA"},{name:"Gray 100",hex:"#F6F7F8"},{name:"Gray 150",hex:"#EFF1F4"},{name:"Gray 200",hex:"#E8EBF0"},{name:"Gray 300",hex:"#D8DDE4"},{name:"Gray 400",hex:"#A5A8AD"},{name:"Gray 500",hex:"#808790"},{name:"Gray 600",hex:"#696F75"},{name:"Gray 700",hex:"#4C5054"},{name:"Gray 800",hex:"#303438"},{name:"Gray 900",hex:"#111111"}],o=[{id:"grayscale",title:"Grayscale Color",description:"텍스트, 배경, 선에 사용하는 회색입니다.",colors:n},{id:"brand",title:"Brand Color",description:"버튼과 주요 요소, 콘텐츠 강조에 사용하는 브랜드 색상입니다.",colors:[{name:"Blue 100",hex:"#ECEFF8"},{name:"Blue 200",hex:"#D9DEF2"},{name:"Blue 300",hex:"#B4BEE4"},{name:"Blue 400",hex:"#697CC9"},{name:"Blue 500",hex:"#435CBC"},{name:"Blue 600",hex:"#364996"},{name:"Blue 700",hex:"#1B254B",image:"./lounge-colors-blue700.svg"},{name:"Blue 800",hex:"#131920",image:"./lounge-colors-blue800.svg"}]},{id:"black-white",title:"Black & White",description:"제목, 본문, 배경과 오버레이에 사용하는 기본 색상입니다.",colors:[{name:"Black",hex:"#000000"},{name:"White",hex:"#FFFFFF"}]},{id:"status",title:"Status & Error",description:"오류, 경고, 안내와 성공 상태를 나타내는 색상입니다.",colors:[{name:"Red",hex:"#E63838"},{name:"Orange",hex:"#FF7752"},{name:"Blue",hex:"#217DE2"},{name:"Green",hex:"#16B06B"}]},{id:"grid-table-tab",title:"Grid / Table / Tab Color",description:"표와 탭의 배경·구분선에 사용하는 색상입니다.",colors:n.slice(0,5)}],p="https://www.figma.com/design/H8jvaSH1hEZYgxoxZftE4d/The-Lounge-3.0-UXUI?node-id=7935-1379";function h({color:r}){return e.jsx("li",{children:e.jsxs(u,{className:"color-preview__swatch",children:[r.image?e.jsx("img",{src:r.image,alt:"",width:110,height:80,className:"color-preview__chip"}):e.jsx("div",{"aria-hidden":"true",className:"color-preview__chip",style:{backgroundColor:r.hex}}),e.jsxs("div",{className:"color-preview__label",children:[e.jsx("span",{children:r.name}),e.jsx("code",{children:r.hex})]})]})})}function x({groups:r=o}){return e.jsxs("main",{className:"color-preview",children:[e.jsxs("header",{className:"color-preview__header",children:[e.jsx("p",{children:"THE LOUNGE / DESIGN SYSTEM"}),e.jsx("h1",{children:"Color"}),e.jsx("p",{children:"더라운지에서 사용하는 색상을 확인합니다."})]}),e.jsxs("div",{className:"color-preview__body",children:[e.jsxs("div",{className:"color-preview__intro",children:[e.jsx("h2",{children:"Colors"}),e.jsxs("p",{children:[e.jsx("strong",{children:"디자인 작업 중인 초안"})," · 2026-10-14 기준"]}),e.jsx("p",{children:"Figma의 실제 색상값을 기준으로 표시했습니다. 이 색상표는 앱의 현재 테마와 별도로 검수합니다."}),e.jsx("a",{href:p,target:"_blank",rel:"noreferrer",children:"Figma 색상 기준 보기"})]}),e.jsx("div",{className:"color-preview__sections",children:r.map(a=>e.jsxs("section",{"aria-labelledby":`color-title-${a.id}`,children:[e.jsx("h3",{id:`color-title-${a.id}`,children:a.title}),e.jsx("p",{className:"color-preview__description",children:a.description}),e.jsxs("div",{className:"color-preview__panel",children:[e.jsx("ul",{className:"color-preview__list",children:a.colors.map(s=>e.jsx(h,{color:s},s.name))}),a.id==="grid-table-tab"&&e.jsx("div",{className:"color-preview__pairs","aria-label":"배경과 구분선 조합",children:n.slice(0,2).map(s=>e.jsxs("figure",{children:[e.jsx("div",{"aria-hidden":"true",className:"color-preview__sample",style:{backgroundColor:s.hex,borderColor:n[3].hex}}),e.jsxs("figcaption",{children:["Bg: ",s.name,e.jsx("br",{}),"Line: ",n[3].name]})]},s.name))})]})]},a.id))})]})]})}const _={title:"Foundations/Colors",component:x,parameters:{layout:"fullscreen",controls:{disable:!0}}},l={name:"전체 색상"},c={name:"회색",args:{groups:[o[0]]}},i={name:"브랜드",args:{groups:[o[1]]}},t={name:"흑백",args:{groups:[o[2]]}},d={name:"상태와 오류",args:{groups:[o[3]]}},m={name:"표와 탭",args:{groups:[o[4]]}},G=["AllColors","Grayscale","Brand","BlackAndWhite","StatusAndError","GridTableTab"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "전체 색상"
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "회색",
  args: {
    groups: [colorGroups[0]]
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "브랜드",
  args: {
    groups: [colorGroups[1]]
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "흑백",
  args: {
    groups: [colorGroups[2]]
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "상태와 오류",
  args: {
    groups: [colorGroups[3]]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "표와 탭",
  args: {
    groups: [colorGroups[4]]
  }
}`,...m.parameters?.docs?.source}}};export{l as AllColors,t as BlackAndWhite,i as Brand,c as Grayscale,m as GridTableTab,d as StatusAndError,G as __namedExportsOrder,_ as default};
