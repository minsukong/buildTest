import{j as e}from"./iframe-CIrth_ce.js";import{I as o}from"./input-C0TtJ5CZ.js";import{L as i}from"./label-Ck-SzYeW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bk382tBs.js";import"./useRenderElement-C7lpV1d1.js";import"./useTimeout-hPF90eJK.js";import"./useOnMount-Cujjd3LE.js";import"./useValueChanged-7FdY16i9.js";const g={title:"Components/Input",component:o,tags:["autodocs"],args:{id:"story-email",type:"email",placeholder:"name@example.com"},decorators:[t=>e.jsxs("div",{className:"max-w-sm space-y-2",children:[e.jsx(i,{htmlFor:"story-email",children:"이메일"}),e.jsx(t,{})]})]},r={},a={args:{disabled:!0,defaultValue:"review@example.com"}},s={args:{"aria-invalid":!0,"aria-describedby":"story-email-error"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...t}),e.jsx("p",{id:"story-email-error",className:"text-sm text-destructive",children:"올바른 이메일 주소를 입력해 주세요."})]})},y=["Default","Disabled","Invalid"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "review@example.com"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true,
    "aria-describedby": "story-email-error"
  },
  render: args => <><Input {...args} /><p id="story-email-error" className="text-sm text-destructive">올바른 이메일 주소를 입력해 주세요.</p></>
}`,...s.parameters?.docs?.source}}};export{r as Default,a as Disabled,s as Invalid,y as __namedExportsOrder,g as default};
