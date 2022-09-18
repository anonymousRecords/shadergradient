import{jsx as _jsx}from"react/jsx-runtime";import*as shadergradient from"https://gh.ruucm.work/shadergradient/shadergradient@0.3.16/index.js";import{useRealtimeComponent}from"https://gh.ruucm.work/shadergradient/shadergradient@0.3.16/utils/useRealtimeComponent/index.js";// import * as shadergradient from "http://127.0.0.1:8001/index.js"
// import { useRealtimeComponent } from "http://127.0.0.1:8001/utils/useRealtimeComponent/index.js"
import{addPropertyControls,Color,ControlType,RenderTarget}from"framer";import*as fiber from"@react-three/fiber";import*as drei from"@react-three/drei";import*as reactSpring from"@react-spring/three";const isCanvas=RenderTarget.current()!==RenderTarget.preview;function DebugWrap({children}){return isCanvas?/*#__PURE__*/ _jsx("div",{style:{background:"hsla(100, 50%, 50%, 0.5)"},children:children}):children;}export const Gradient=({color1,color2,color3,...props})=>/*#__PURE__*/ _jsx(shadergradient.LCanvas,{importedFiber:{...fiber,...drei,...reactSpring},children:/*#__PURE__*/ _jsx(shadergradient.Gradient,{color1:Color.toHex(Color(color1)),color2:Color.toHex(Color(color2)),color3:Color.toHex(Color(color3)),...props})});Gradient.defaultProps={control:"props",animate:"on",brightness:1.2,cDistance:3.6,cAzimuthAngle:180,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",type:"plane",uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,wireframe:"false",zoomOut:false};addPropertyControls(Gradient,{control:{type:ControlType.Enum,options:["props","query"],displaySegmentedControl:true},activeTab:{title:"Settings Group",type:ControlType.Enum,options:["Shape","Colors","Effects","View","🧰"],hidden:props=>props.control==="query"},// Shape
type:{type:ControlType.Enum,options:["plane","sphere","waterPlane"],optionTitles:["Plane","Sphere","Water"],displaySegmentedControl:true,hidden:props=>props.control==="query"||props.activeTab!=="Shape"},shader:{type:ControlType.Enum,options:["defaults","snakeHalftone","noise"],displaySegmentedControl:true,hidden:props=>props.control==="query"||props.activeTab!=="Shape"},animate:{type:ControlType.Enum,options:["on","off"],optionTitles:["On","Off"],displaySegmentedControl:true,hidden:props=>props.control==="query"||props.activeTab!=="Shape"&&props.activeTab!=="URL"},uTime:{title:"Movements",type:ControlType.Number,step:.1,displayStepper:true,hidden:props=>props.animate==="on"||props.control==="query"||props.activeTab!=="Shape"},uSpeed:{title:"Speed",type:ControlType.Number,step:.1,min:.1,displayStepper:true,hidden:props=>props.animate==="off"||props.control==="query"||props.activeTab!=="Shape"},uStrength:{type:ControlType.Number,step:.1,min:.1,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="Shape"},uDensity:{type:ControlType.Number,step:.1,min:.1,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="Shape"},uFrequency:{type:ControlType.Number,step:.1,min:.1,displayStepper:true,hidden:props=>props.type!=="sphere"||props.control==="query"||props.activeTab!=="Shape"},uAmplitude:{type:ControlType.Number,step:.1,min:.1,displayStepper:true,hidden:props=>props.type!=="sphere"||props.control==="query"||props.activeTab!=="Shape"},// Effects
grain:{type:ControlType.Enum,options:["on","off"],displaySegmentedControl:true,hidden:props=>props.control==="query"||props.activeTab!=="Effects"},lightType:{type:ControlType.Enum,options:["env","3d"],displaySegmentedControl:true,hidden:props=>props.control==="query"||props.activeTab!=="Effects"},envPreset:{type:ControlType.Enum,options:["city","dawn","lobby"],displaySegmentedControl:true,hidden:props=>props.lightType==="3d"||props.control==="query"||props.activeTab!=="Effects"},brightness:{type:ControlType.Number,step:.1,min:.1,max:3,hidden:props=>props.lightType==="env"||props.control==="query"||props.activeTab!=="Effects"||props.url},reflection:{type:ControlType.Number,step:.1,min:0,max:1,hidden:props=>props.lightType==="3d"||props.control==="query"||props.activeTab!=="Effects"||props.url},// Colors
color1:{type:ControlType.Color,hidden:props=>props.control==="query"||props.activeTab!=="Colors"},color2:{type:ControlType.Color,hidden:props=>props.control==="query"||props.activeTab!=="Colors"},color3:{type:ControlType.Color,hidden:props=>props.control==="query"||props.activeTab!=="Colors"},// View
cDistance:{type:ControlType.Number,displayStepper:true,min:0,max:20,hidden:props=>props.type==="sphere"||props.control==="query"||props.activeTab!=="View"},cameraZoom:{type:ControlType.Number,displayStepper:true,step:.1,min:.1,max:30,hidden:props=>props.type!=="sphere"||props.control==="query"||props.activeTab!=="View"},cAzimuthAngle:{type:ControlType.Number,displayStepper:true,step:10,min:0,max:360,hidden:props=>props.control==="query"||props.activeTab!=="View"},cPolarAngle:{type:ControlType.Number,displayStepper:true,step:10,min:0,max:180,hidden:props=>props.control==="query"||props.activeTab!=="View"},positionX:{type:ControlType.Number,step:.1,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="View"},positionY:{type:ControlType.Number,step:.1,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="View"},positionZ:{type:ControlType.Number,step:.1,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="View"},rotationX:{type:ControlType.Number,step:10,min:-360,max:360,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="View"},rotationY:{type:ControlType.Number,step:10,min:-360,max:360,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="View"},rotationZ:{type:ControlType.Number,step:10,min:-360,max:360,displayStepper:true,hidden:props=>props.control==="query"||props.activeTab!=="View"},// Tools (🧰)
zoomOut:{type:ControlType.Boolean,hidden:props=>props.control==="query"||props.activeTab!=="🧰"}});export const Button=props=>/*#__PURE__*/ _jsx(shadergradient.Button,{...props});addPropertyControls(Button,{title:{title:"Title",type:ControlType.String,defaultValue:"Title"}});export const NumberInput=props=>/*#__PURE__*/ _jsx(shadergradient.NumberInput,{...props});// export const Radio: React.ComponentType = (props) => (
//     <shadergradient.Radio {...props} />
// )
// export const ShapeControls: React.ComponentType = (props) => (
//     <shadergradient.ShapeControls {...props} />
// )
// only "RealTimeRadio" works now
const RealTimeRadio=props=>{const Component=useRealtimeComponent(shadergradient.Radio,"Radio");return /*#__PURE__*/ _jsx(Component,{...props});};export const Radio=RealTimeRadio;addPropertyControls(Radio,{label:{type:ControlType.String},check:{type:ControlType.Boolean}});const RealTimeShapeControls=props=>{const Component=useRealtimeComponent(shadergradient.ShapeControls,"ShapeControls");return /*#__PURE__*/ _jsx(Component,{...props});};export const ShapeControls=RealTimeShapeControls;export const ToolsBox=props=>/*#__PURE__*/ _jsx(shadergradient.ToolsBox,{...props});export const TestControl=props=>/*#__PURE__*/ _jsx(shadergradient.TestControl,{...props});export const TextHover=props=>/*#__PURE__*/ _jsx(DebugWrap,{children:/*#__PURE__*/ _jsx(shadergradient.TextHover,{...props})});TextHover.defaultProps={content:"Text Hover",fontSize:16,delay:0,color:"#FF430A",border:false};addPropertyControls(TextHover,{content:{type:ControlType.String},fontSize:{type:ControlType.Number,displayStepper:true,min:1},delay:{type:ControlType.Number,displayStepper:true,min:0},color:{type:ControlType.Color},border:{type:ControlType.Boolean},onClick:{type:ControlType.EventHandler}});export const PreviewBtn=props=>/*#__PURE__*/ _jsx(shadergradient.PreviewBtn,{...props});export const PreviewWrapper=props=>/*#__PURE__*/ _jsx(shadergradient.PreviewWrapper,{...props});PreviewWrapper.defaultProps={mode:"full"};export const PresetTitle=props=>/*#__PURE__*/ _jsx(DebugWrap,{children:/*#__PURE__*/ _jsx(shadergradient.PresetTitle,{...props})});PresetTitle.defaultProps={title:"title",fontSize:120,color:"#FF430A",index:0};addPropertyControls(PresetTitle,{title:{type:ControlType.String},fontSize:{type:ControlType.Number,displayStepper:true,min:1},color:{type:ControlType.Color},index:{type:ControlType.Number,displayStepper:true,min:0}});export const PresetTitles=props=>/*#__PURE__*/ _jsx(DebugWrap,{children:/*#__PURE__*/ _jsx(shadergradient.PresetTitles,{...props})});PresetTitles.defaultProps={isMobile:false,fontSize:120};addPropertyControls(PresetTitles,{isMobile:{type:ControlType.Boolean},fontSize:{type:ControlType.Number,displayStepper:true,min:10}});export const Header=props=>/*#__PURE__*/ _jsx(DebugWrap,{children:/*#__PURE__*/ _jsx(shadergradient.Header,{...props})});Header.defaultProps={mode:"full",isMobile:false,inAbout:false,aboutBtn:false};addPropertyControls(Header,{mode:{type:ControlType.Enum,options:["full","web","mobile"],displaySegmentedControl:true},activePreset:{type:ControlType.Number,displayStepper:true,min:0},isMobile:{type:ControlType.Boolean},inAbout:{type:ControlType.Boolean},aboutBtn:{type:ControlType.Boolean},onLogoClick:{type:ControlType.EventHandler},onAboutClick:{type:ControlType.EventHandler}});export const Links=props=>/*#__PURE__*/ _jsx(shadergradient.Links,{...props});export const AllControls=props=>/*#__PURE__*/ _jsx(DebugWrap,{children:/*#__PURE__*/ _jsx(shadergradient.AllControls,{...props})});AllControls.defaultProps={isMobile:false,isFigma:false};addPropertyControls(AllControls,{isMobile:{type:ControlType.Boolean},isFigma:{type:ControlType.Boolean}});
export const __FramerMetadata__ = {"exports":{"Radio":{"type":"reactComponent","name":"Radio","slots":[],"annotations":{"framerContractVersion":"1"}},"PresetTitle":{"type":"reactComponent","name":"PresetTitle","slots":[],"annotations":{"framerContractVersion":"1"}},"TestControl":{"type":"reactComponent","name":"TestControl","slots":[],"annotations":{"framerContractVersion":"1"}},"TextHover":{"type":"reactComponent","name":"TextHover","slots":[],"annotations":{"framerContractVersion":"1"}},"Header":{"type":"reactComponent","name":"Header","slots":[],"annotations":{"framerContractVersion":"1"}},"Gradient":{"type":"reactComponent","name":"Gradient","slots":[],"annotations":{"framerContractVersion":"1"}},"Button":{"type":"reactComponent","name":"Button","slots":[],"annotations":{"framerContractVersion":"1"}},"Links":{"type":"reactComponent","name":"Links","slots":[],"annotations":{"framerContractVersion":"1"}},"ShapeControls":{"type":"reactComponent","name":"ShapeControls","slots":[],"annotations":{"framerContractVersion":"1"}},"ToolsBox":{"type":"reactComponent","name":"ToolsBox","slots":[],"annotations":{"framerContractVersion":"1"}},"PreviewBtn":{"type":"reactComponent","name":"PreviewBtn","slots":[],"annotations":{"framerContractVersion":"1"}},"PreviewWrapper":{"type":"reactComponent","name":"PreviewWrapper","slots":[],"annotations":{"framerContractVersion":"1"}},"PresetTitles":{"type":"reactComponent","name":"PresetTitles","slots":[],"annotations":{"framerContractVersion":"1"}},"NumberInput":{"type":"reactComponent","name":"NumberInput","slots":[],"annotations":{"framerContractVersion":"1"}},"AllControls":{"type":"reactComponent","name":"AllControls","slots":[],"annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./DesignSystem.map