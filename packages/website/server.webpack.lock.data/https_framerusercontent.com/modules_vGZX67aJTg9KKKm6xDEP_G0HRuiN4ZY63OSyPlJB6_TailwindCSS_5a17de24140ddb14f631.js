import{jsxs as _jsxs}from"react/jsx-runtime";import{useEffect}from"react";import{addPropertyControls}from"framer";const href="http://localhost:8001/tailwind-compiled.css" // for Dev
;// const href =
//     "https://gh.ruucm.work/shadergradient/shadergradient@0.3.16/tailwind-compiled.css"
const cssId="shadergradient-app-styles";export function TailwindCSS({isDev,packageVersion}){useEffect(()=>{if(!document.getElementById(cssId)){const link=document.createElement("link");link.id=cssId;link.rel="stylesheet";link.type="text/css";link.href=href;link.media="all";document.head.appendChild(link);}},[]);return /*#__PURE__*/ _jsxs("div",{children:["Compiled ",href," inserted to head."]});}TailwindCSS.defaultProps={};addPropertyControls(TailwindCSS,{});
export const __FramerMetadata__ = {"exports":{"TailwindCSS":{"type":"reactComponent","name":"TailwindCSS","slots":[],"annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./TailwindCSS.map