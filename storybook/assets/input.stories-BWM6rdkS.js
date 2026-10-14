import{j as e}from"./iframe-E0gGS0Ei.js";import{I as o}from"./input-Bu0LKxx3.js";import{L as i}from"./label-DZEQMHXj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bk382tBs.js";import"./useRenderElement-BJExwZdx.js";import"./useTimeout-mF9emuJK.js";import"./useOnMount-_Q4USR5r.js";import"./useValueChanged-DDvXyx7a.js";const g={title:"Components/Input",component:o,tags:["autodocs"],args:{id:"story-email",type:"email",placeholder:"name@example.com"},decorators:[t=>e.jsxs("div",{className:"max-w-sm space-y-2",children:[e.jsx(i,{htmlFor:"story-email",children:"이메일"}),e.jsx(t,{})]})]},r={},a={args:{disabled:!0,defaultValue:"review@example.com"}},s={args:{"aria-invalid":!0,"aria-describedby":"story-email-error"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...t}),e.jsx("p",{id:"story-email-error",className:"text-sm text-destructive",children:"올바른 이메일 주소를 입력해 주세요."})]})},y=["Default","Disabled","Invalid"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
