"use strict";(self.webpackChunkseahorse=self.webpackChunkseahorse||[]).push([[6752],{46374:function(r,t,n){n.r(t);var _=n(72269),u=n(93359),m=n(61788),i=n(61452),h=n(96057),c=n(85939),s=n(16442),o=n(80936),d=n(67294),a=n(93678),e=n(85893);function l(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(d.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u65AD\u7EBF\u76D1\u6D4B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65AD\u7EBF\u76D1\u6D4B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u65AD\u7EBF\u76D1\u6D4B"]}),(0,e.jsxs)("p",{children:[a.texts[0].value,(0,e.jsx)(s.rU,{to:"/assembling/hardware/hardware-spider#71-%E8%9C%98%E8%9B%9B%E7%AE%A1%E8%84%9A%E4%B8%8E%E5%88%86%E9%85%8D",children:a.texts[1].value}),a.texts[2].value]}),(0,e.jsx)("p",{children:a.texts[3].value}),(0,e.jsx)("p",{children:a.texts[4].value}),(0,e.jsxs)("p",{children:[a.texts[5].value,(0,e.jsx)("a",{href:"https://www.youtube.com/watch?v=bgfuH7Ktyk0",children:a.texts[6].value})]}),(0,e.jsx)("p",{children:a.texts[7].value}),(0,e.jsx)(i.Z,{children:a.texts[8].value}),(0,e.jsx)("p",{children:a.texts[9].value})]})})})})}t.default=l},93678:function(r,t,n){n.r(t),n.d(t,{texts:function(){return _}});const _=[{value:"\u53EF\u4EE5\u4F7F\u7528Z-max\u4F5C\u4E3A\u65AD\u7EBF\u76D1\u6D4B\u63A5\u53E3\uFF0C\u8BE6\u7EC6\u89C1",paraId:0,tocIndex:0},{value:"Spider2.3\u4E3B\u677F\u8718\u86DB\u7BA1\u811A\u4E0E\u5206\u914D",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"klipper filament sensor",paraId:2,tocIndex:0},{value:`X+/Y+\u8FDE\u63A5\u5668\u3002\u6211\u4EEC\u53EF\u4EE5\u9009\u62E95v\u62163.3v\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u4F8B\u5982BLTouch\u4F20\u611F\u5668\u76845v\u8868\u793A\u3002
X-/Y-/Z-\u8FDE\u63A5\u5668\u3002\u6211\u4EEC\u53EF\u4EE5\u9009\u62E924v\u62163.3v\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u8FDE\u63A5\u7535\u611F\u5F0F\u6C34\u5E73\u4F20\u611F\u5668/\u7535\u5BB9\u5F0F
Z+\u8FDE\u63A5\u5668\u3002\u4E3A\u8FDE\u63A5\u5E26\u6709\u4F3A\u670D\u529F\u80FD\u7684\u6C34\u5E73\u4EEA\u4F20\u611F\u5668\u800C\u51C6\u5907\u7684\uFF08PA3 PWM\u9488\u811A\uFF09\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7Z-\u65C1\u8FB9\u7684\u8DF3\u7EBF\u6765\u9009\u62E9\u677F\u7535\u538B24v\u62165v\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528BLTouch\u98CE\u683C\u7684\u4F20\u611F\u5668\u7684\u8BDD\u3002`,paraId:3,tocIndex:0},{value:`Install a Filament Runout Sensor on your 3D Printer and Klipper
`,paraId:4,tocIndex:0},{value:"https://www.youtube.com/watch?v=bgfuH7Ktyk0",paraId:4,tocIndex:0},{value:"\u8FD9\u4E2A\u89C6\u9891\u4E0A\u7684github\u5730\u5740",paraId:5,tocIndex:0},{value:`#####################################################################
#       RefillPlease - Filament Runout Sensor
#####################################################################

[filament_switch_sensor RunoutSensor]
switch_pin: !PG12 # Pin ESTOP4 for Octopus mcu

# Without M600 macro (uncomment the line below and comment the two lines in the "With Filament change M600 macro"
# pause_on_runout: true

# With M600 Filament change macro
pause_on_runout: false
runout_gcode: M600

#####################################################################
#       Filament change macro M600
#####################################################################

[gcode_macro M600]
variable_park_x: 175
variable_park_y: 345
variable_z_lift: 20
variable_velocity: 60
variable_retract: 1
gcode:
    SAVE_GCODE_STATE NAME=STATE_M600

    # remembers the position
    # fluidd annoyingly redefines this macro to retract and park the toolhead at the rear
    PAUSE

    # safe park coords
    {% set th = printer.toolhead %}
    {% set park_x = [params.X|default(park_x)|int, th.axis_maximum.x-2]|min %}
    {% set park_y = [params.Y|default(park_y)|int, th.axis_maximum.y-10]|min %}
    {% set park_z = [th.position.z + params.Z_LIFT|default(z_lift)|int, th.axis_maximum.z]|min %}
    {% set park_feedrate = params.VELOCITY|default(velocity)|int * 60 %}

    # retract at 50mm/sec
    G91
    G1 E-{retract} F3000

    # park toolhead
    G90
    G0 X{park_x} Y{park_y} Z{park_z} F{park_feedrate}

    # unload 60mm of filament
    G91
    G1 E-50 F3600
    G1 E-10 F3600

    # ask the waiter for a refill
    M117 Refill please

    RESTORE_GCODE_STATE NAME=STATE_M600
`,paraId:6,tocIndex:0},{value:"filament switch sesor runout Sensor",paraId:7,tocIndex:0}]}}]);
