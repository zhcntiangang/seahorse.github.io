"use strict";(self.webpackChunkseahorse=self.webpackChunkseahorse||[]).push([[9203],{599:function(t,s,n){n.r(s);var d=n(72269),r=n(93359),h=n(61788),a=n(61452),c=n(96057),m=n(85939),i=n(16442),o=n(80936),u=n(67294),_=n(14788),e=n(85893);function l(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u6211\u7684\u5B8F\u547D\u4EE4",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6211\u7684\u5B8F\u547D\u4EE4",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6211\u7684\u5B8F\u547D\u4EE4"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("a",{href:"https://github.com/SoftFever/BambuStudio-SoftFever",children:_.texts[1].value})})}),(0,e.jsxs)("h2",{id:"1print-start\u76F8\u5173",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#1print-start\u76F8\u5173",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"1\u3001PRINT-START\u76F8\u5173"]}),(0,e.jsxs)("h3",{id:"\u539F\u59CB\u4EE3\u7801",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u539F\u59CB\u4EE3\u7801",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u539F\u59CB\u4EE3\u7801"]}),(0,e.jsx)("p",{children:_.texts[2].value}),(0,e.jsx)(a.Z,{lang:"properties",children:_.texts[3].value}),(0,e.jsx)("p",{children:_.texts[4].value}),(0,e.jsx)(a.Z,{lang:"properties",children:_.texts[5].value})]})})})})}s.default=l},14788:function(t,s,n){n.r(s),n.d(s,{texts:function(){return d}});const d=[{value:"\u8BB0\u5F55\u4E86\u6211\u4F7F\u7528\u7684\u5B8F\u547D\u4EE4\u3002",paraId:0,tocIndex:0},{value:"\u62D3\u7AF9\u7684\u914D\u7F6E\u547D\u4EE4",paraId:1,tocIndex:0},{value:"PRINT-START,\u6700\u521D\u7684\u4EE3\u7801\u662F",paraId:2,tocIndex:2},{value:`[gcode_macro PRINT_START]
#   Use PRINT_START for the slicer starting script - please customise for your slicer of choice
gcode:
    G32                            ; home all axes
    G1 Z20 F3000                   ; move nozzle away from bed 
`,paraId:3,tocIndex:2},{value:"\u5907\u6CE8G32\u7684\u5B8F\u547D\u4EE4:\u8FD9\u91CC\u6211\u61D2\u5F97\u628A\u55B7\u5634\u79FB\u52A8\u5230\u70ED\u5E8A\u4E2D\u95F4\u4E86",paraId:4,tocIndex:2},{value:`[gcode_macro G32]
gcode:
    BED_MESH_CLEAR
    G28
    QUAD_GANTRY_LEVEL
    G28
    
    ##	Uncomment for 300 build
    #G0 X150 Y150 Z30 F3600

`,paraId:5,tocIndex:2}]}}]);
