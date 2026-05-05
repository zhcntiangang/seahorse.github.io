"use strict";(self.webpackChunkseahorse=self.webpackChunkseahorse||[]).push([[539],{30539:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"klipper \u4E2D\u7684",paraId:0,tocIndex:0},{value:"config.cfg",paraId:0,tocIndex:0},{value:"\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u7F51\u4E0A\u6709\u4E00\u4E9B\u914D\u7F6E\u6A21\u677F\uFF0C\u8FD9\u91CC\u505A\u4E00\u4E9B\u5BF9\u6BD4\u4E0E\u5206\u6790\u3002",paraId:0,tocIndex:0},{value:"Spider \u4E3B\u677F\u63D0\u4F9B\u7684",paraId:1,tocIndex:0},{value:"config.cfg",paraId:1,tocIndex:0},{value:"\u8475\u82B1\u5B9D\u5178\u4E4B\u8718\u86DB VORON \u4E2D\u7684",paraId:1,tocIndex:0},{value:"config.cfg",paraId:1,tocIndex:0},{value:"\u5982\u679C\u9047\u5230\u4E0D\u660E\u767D\u7684\u5730\u65B9\u53EF\u4EE5\u770B Klipper \u5B98\u65B9\u7684\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u8FD9\u4E2A\u505A\u5B8C 4 \u8F74\u8C03\u5E73\u540E\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210",paraId:3,tocIndex:2},{value:"\u6324\u51FA\u673A\u53D1\u70ED\u6BD4\u8F83\u4E25\u91CD\uFF0C\u9ED8\u8BA4\u5DF2\u7ECF\u901A\u8FC7",paraId:4,tocIndex:4},{value:"run_current =0.5",paraId:4,tocIndex:4},{value:"\u964D\u4F4E\u4E86\u7535\u6D41\u3002",paraId:4,tocIndex:4},{value:"rotation_distance",paraId:5,tocIndex:4},{value:"\u628A\u70ED\u5E8A\u7684\u529F\u8017\u8C03\u9AD8\u4E86\uFF0C\u52A0\u5FEB\u5347\u6E29\u901F\u5EA6",paraId:6,tocIndex:5},{value:"\u8C03\u6574\u5F00\u5173\u65B9\u5411\uFF0C\u4E0D\u540C\u673A\u5668\uFF0C\u5177\u4F53\u4E0D\u540C\u3002",paraId:7,tocIndex:6},{value:"\u8FD9\u4E2A\u662F\u8FFD\u52A0\u7684",paraId:8,tocIndex:8},{value:`[gcode_macro CANCEL_PRINT]
rename_existing: BASE_CANCEL_PRINT
gcode:
    TURN_OFF_HEATERS
    CLEAR_PAUSE
    SDCARD_RESET_FILE
	BASE_CANCEL_PRINT
`,paraId:9,tocIndex:12},{value:"\u65B0\u589E",paraId:10,tocIndex:13},{value:`## Virtual SD Card                  # \u865A\u62DFSD\u5361
[virtual_sdcard]                    # \u542F\u7528\u865A\u62DFSD\u5361
path: /home/klipper/printer_data/gcodes             # \u8BBE\u5B9Aoctoprint\u4E0A\u4F20\u76EE\u5F55\u4E3A\u865A\u62DFSD\u5361\u6839\u76EE\u5F55
`,paraId:11,tocIndex:13},{value:"\u65B0\u589E",paraId:12,tocIndex:14},{value:`# Pause/Resume Functionality
[pause_resume]
`,paraId:13,tocIndex:14},{value:"\u91CD\u6784",paraId:14,tocIndex:15},{value:`[gcode_macro QUAD_GANTRY_LEVEL]
rename_existing: QUAD_GANTRY_LEVEL_ORIGINAL
gcode:
    STATUS_LEVELING
    #M401
    QUAD_GANTRY_LEVEL_ORIGINAL
    #M402
    STATUS_READY
`,paraId:15,tocIndex:15},{value:`# This file contains common pin mappings for the Fysetc Spider board.
# To use this config, the firmware should be compiled for the STM32F446.
# When calling "menuconfig", enable "extra low-level configuration setup"
# and select the "12MHz crystal" as clock reference
# For flashing, write the compiled klipper.bin to memory location 0x08000000

# See docs/Config_Reference.md for a description of parameters.

### 5.Voron Design VORON2 250/300/350mm Spider TMC2209 UART config

### 5.*** THINGS TO CHANGE/CHECK: ***
### 5.MCU paths							[mcu] section
### 5.Thermistor types						[extruder] and [heater_bed] sections - See 'sensor types' list at end of file
### 5.Z Endstop Switch location			[safe_z_home] section
### 5.Homing end position				    [gcode_macro G32] section
### 5.Z Endstop Switch  offset for Z0		[stepper_z] section
### 5.Probe points							[quad_gantry_level] section
### 5.Min & Max gantry corner postions		[quad_gantry_level] section
### 5.PID tune								[extruder] and [heater_bed] sections
### 5.Fine tune E steps					[extruder] section

[mcu]
### 5.Uncomment below if you're using the Raspberry uart0 to communicate with Spider
#restart_method: command

### 5. You need to select 'Communication interface' to USB in 'make menuconfig'
### 5. when you compile Klipper for Spider
##	Obtain definition by "ls -l /dev/serial/by-id/" then unplug to verify
##--------------------------------------------------------------------
serial: /dev/serial/by-id/usb-Klipper_stm32f446xx_230032000851363131363530-if00
##	If you want to use the Raspberry uart0 to communicate with Spider,
### 5. you need to select 'Communication interface' to 'Serial (on USART1 PA10/PA9)'
### 5. in 'make menuconfig' when you compile klipper and set the serial as below
##--------------------------------------------------------------------
#serial: /dev/ttyAMA0
##--------------------------------------------------------------------

[printer]
kinematics: corexy
max_velocity: 300
max_accel: 3000			        #Max 4000
max_z_velocity: 15			#Max 15 for 12V TMC Drivers, can increase for 24V
max_z_accel: 350
square_corner_velocity: 5.0

####################################################
#      X/Y Stepper Settings
####################################################

[stepper_x]
##	Connected to X-MOT (B Motor)
step_pin: PE11
dir_pin: !PE10
enable_pin: !PE9
rotation_distance: 40
microsteps: 16
full_steps_per_rotation:200  #set to 400 for 0.9 degree stepper
endstop_pin: ^PB14
position_min: 0

##--------------------------------------------------------------------

##	Uncomment below for 250mm build
#position_endstop: 250
#position_max: 250

##	Uncomment for 300mm build
#position_endstop: 300
#position_max: 300

##	Uncomment for 350mm build
#position_endstop: 350
#position_max: 350

##--------------------------------------------------------------------
homing_speed: 25   #Max 100
homing_retract_dist: 5
homing_positive_dir: true

##	Make sure to update below for your relevant driver (2208 or 2209)
[tmc2209 stepper_x]
uart_pin: PE7
interpolate: True
run_current: 0.7
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 0

[stepper_y]
##	Connected to Y-MOT (A Motor)
step_pin: PD8
dir_pin: !PB12
enable_pin: !PD9
rotation_distance: 40
microsteps: 16
full_steps_per_rotation:200  #set to 400 for 0.9 degree stepper
endstop_pin: ^PB13
position_min: 0
##--------------------------------------------------------------------

##	Uncomment for 250mm build
#position_endstop: 250
#position_max: 250

##	Uncomment for 300mm build
#position_endstop: 300
#position_max: 300

##	Uncomment for 350mm build
#position_endstop: 350
#position_max: 350

##--------------------------------------------------------------------
homing_speed: 25  #Max 100
homing_retract_dist: 5
homing_positive_dir: true

##	Make sure to update below for your relevant driver (2208 or 2209)
[tmc2209 stepper_y]
uart_pin: PE15
interpolate: True
run_current: 0.7
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 0

####################################################
#   Z Stepper Settings
####################################################

### 5.In Z-MOT Position
### 5.Z0 Stepper - Front Left
[stepper_z]
step_pin: PD14
dir_pin: !PD13
enable_pin: !PD15
rotation_distance: 40
gear_ratio: 80:16
microsteps: 16
### 5. In Z- Position
endstop_pin: ^PA0
### 5. Z-position of nozzle (in mm) to z-endstop trigger point relative to print surface (Z0)
### 5. (+) value = endstop above Z0, (-) value = endstop below
##	Increasing position_endstop brings nozzle closer to the bed
### 5. After you run Z_ENDSTOP_CALIBRATE, position_endstop will be stored at the very end of your config
position_endstop: -0.5
##--------------------------------------------------------------------

##	Uncomment below for 250mm build
#position_max: 240

##	Uncomment below for 300mm build
#position_max: 290

##	Uncomment below for 350mm build
#position_max: 340

##--------------------------------------------------------------------
position_min: -5
homing_speed: 8
second_homing_speed: 3
homing_retract_dist: 3

##	Make sure to update below for your relevant driver (2208 or 2209)
[tmc2209 stepper_z]
uart_pin: PD10
uart_address: 0
interpolate: True
run_current: 0.7
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 0

##	In E1-MOT Position
##	Z1 Stepper - Rear Left
[stepper_z1]
step_pin: PE6
dir_pin: PC13
enable_pin: !PE5
rotation_distance: 40
gear_ratio: 80:16
microsteps: 16

##	Make sure to update below for your relevant driver (2208 or 2209)
[tmc2209 stepper_z1]
uart_pin: PC14
interpolate: True
run_current: 0.7
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 0

##	In E2-MOT Position
##	Z2 Stepper - Rear Right
[stepper_z2]
step_pin: PE2
dir_pin: !PE4
enable_pin: !PE3
rotation_distance: 40
gear_ratio: 80:16
microsteps: 16

##	Make sure to update below for your relevant driver (2208 or 2209)
[tmc2209 stepper_z2]
uart_pin: PC15
interpolate: true
run_current: 0.7
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 0

##	In E3-MOT Position
##	Z3 Stepper - Front Right
[stepper_z3]
step_pin: PD12
dir_pin: PC4
enable_pin: !PE8
rotation_distance: 40
gear_ratio: 80:16
microsteps: 16

[tmc2209 stepper_z3]
uart_pin: PA15
interpolate: true
run_current: 0.7
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 0

####################################################
#   Extruder
####################################################

##	In E0-MOT Position
[extruder]
step_pin: PD5
dir_pin: !PD6
enable_pin: !PD4

##	Update value below when you perform extruder calibration
##	If you ask for 100mm of filament, but in reality it is 98mm:
##	rotation_distance = <previous_rotation_distance> * <actual_extrude_distance> / 100
### 5. 22.6789511 is a good starting point
rotation_distance: 22.6789511	#Bondtech 5mm Drive Gears
##	Update Gear Ratio depending on your Extruder Type
##	Use 50:17 for Afterburner/Clockwork (BMG Gear Ratio)
##	Use 80:20 for M4, M3.1
gear_ratio: 50:17				#BMG Gear Ratio
microsteps: 16
full_steps_per_rotation: 200	#200 for 1.8 degree, 400 for 0.9 degree
nozzle_diameter: 0.400
filament_diameter: 1.75
### 5.     In E0 OUT Position
heater_pin: PB15
##	Validate the following thermistor type to make sure it is correct
sensor_type: ATC Semitec 104GT-2
sensor_pin: PC0 # TE0 Position
min_temp: 10
max_temp: 270
max_power: 1.0
min_extrude_temp: 170
control = pid
pid_kp = 26.213
pid_ki = 1.304
pid_kd = 131.721
##	Try to keep pressure_advance below 1.0
pressure_advance: 0.05
##	Default is 0.040, leave stock
pressure_advance_smooth_time: 0.040

##	In E0-MOT Position
##	Make sure to update below for your relevant driver (2208 or 2209)
[tmc2209 extruder]
uart_pin: PD7
interpolate: false
run_current: 0.5
hold_current: 0.2
sense_resistor: 0.110
stealthchop_threshold: 0

####################################################
#   Bed Heater
####################################################
[heater_bed]
##	SSR Pin - In BED OUT position
heater_pin: PB4
sensor_type: NTC 100K beta 3950
sensor_pin: PC3 # Spider v1.x TB Position
#sensor_pin: PB0 # Spider v2.x TB Position
##	Adjust Max Power so your heater doesn't warp your bed
max_power: 0.6
min_temp: 0
max_temp: 120
control: pid
pid_kp: 58.437
pid_ki: 2.347
pid_kd: 363.769

####################################################
#	Probe
####################################################

[probe]
##	Inductive Probe - If you use this section , please comment the [bltouch] section
##	This probe is not used for Z height, only Quad Gantry Leveling
##	In Z+ position
##	If your probe is NC instead of NO, add change pin to ^PA3
pin: ^!PA3
x_offset: 0
y_offset: 25.0
z_offset: 0
speed: 10.0
samples: 3
samples_result: median
sample_retract_dist: 3.0
samples_tolerance: 0.006
samples_tolerance_retries: 3

####################################################
#	Bltouch
####################################################

#[bltouch]
##	Bltouch - If you use this section , please comment the [probe] section
##	More infomation at : https://www.klipper3d.org/BLTouch.html
##	This bltouch is not used for Z height, only Quad Gantry Leveling
##	In Z+ Position
#sensor_pin: PA0
##	In Y+ Position
#control_pin: PA2
#x_offset: 0
#y_offset: 25.0
#z_offset: 0
#speed: 10.0
#samples: 3
#samples_result: median
#sample_retract_dist: 3.0
#samples_tolerance: 0.006
#samples_tolerance_retries: 3

####################################################
#	Fan Control
####################################################

[heater_fan hotend_fan]
##	Hotend Fan - FAN0 Connector
pin: PB0 # Spider v1.x
#pin: PA13 # Spider v2.x
max_power: 1.0
kick_start_time: 0.5
heater: extruder
heater_temp: 50.0
##	If you are experiencing back flow, you can reduce fan_speed
#fan_speed: 1.0

[fan]
##	Print Cooling Fan - FAN1 Connector
pin: PB1 # Spider v1.x
#pin: PA14 # Spider v2.x
max_power: 0.4
kick_start_time: 0.5
##	Depending on your fan, you may need to increase this value
##	if your fan will not start. Can change cycle_time (increase)
##	if your fan is not able to slow down effectively
off_below: 0.10

[heater_fan controller_fan]
##	Controller fan - FAN2 Connector
pin: PB2
kick_start_time: 0.5
heater: heater_bed
heater_temp: 45.0

#[heater_fan exhaust_fan]
### 5. Exhaust fan - In E2 OUT Positon
#pin: PB3
#max_power: 1.0
#shutdown_speed: 0.0
#kick_start_time: 5.0
#heater: heater_bed
#heater_temp: 60
#fan_speed: 1.0

####################################################
#	LED Control
####################################################

#[output_pin caselight ]
### 5. Chamber Lighting - In 5V-RGB Position
#pin: PD3
#pwm: true
#shutdown_value: 0
#value:100
#cycle_time: 0.01

####################################################
#	Homing and Gantry Adjustment Routines
####################################################

[idle_timeout]
timeout: 1800

[safe_z_home]
##	XY Location of the Z Endstop Switch
##	Update -10,-10 to the XY coordinates of your endstop pin
##	(such as 157,305) after going through Z Endstop Pin
##	Location Definition step.
home_xy_position:-10,-10
speed:100
z_hop:10

[quad_gantry_level]
##	Use QUAD_GANTRY_LEVEL to level a gantry.
##	Min & Max gantry corners - measure from nozzle at MIN (0,0) and
##	MAX (250, 250), (300,300), or (350,350) depending on your printer size
##	to respective belt positions

#--------------------------------------------------------------------
##	Gantry Corners for 250mm Build
##	Uncomment for 250mm build
#gantry_corners:
#	-60,-10
#	310, 320
##	Probe points
#points:
#	50,25
#	50,175
#	200,175
#	200,25

##	Gantry Corners for 300mm Build
##	Uncomment for 300mm build
#gantry_corners:
#	-60,-10
#	360,370
##	Probe points
#points:
#	50,25
#	50,225
#	250,225
#	250,25

##	Gantry Corners for 350mm Build
##	Uncomment for 350mm build
#gantry_corners:
#	-60,-10
#	410,420
##	Probe points
#points:
#	50,25
#	50,275
#	300,275
#	300,25

#--------------------------------------------------------------------
speed: 100
horizontal_move_z: 10
retries: 5
retry_tolerance: 0.0075
max_adjust: 10

####################################################
#	Displays
####################################################

#--------------------------------------------------------------------

[display]
#	mini12864 LCD Display
lcd_type: uc1701
cs_pin: PC11
a0_pin: PD2
rst_pin: PC10
encoder_pins: ^PC6,^PC7
click_pin: ^!PA8
contrast: 63
#spi_bus: spi1
spi_software_mosi_pin: PA7
spi_software_miso_pin: PA6
spi_software_sclk_pin: PA5

[neopixel fysetc_mini12864]
#	To control Neopixel RGB in mini12864 display
pin: PC12
chain_count: 3
initial_RED: 0.1
initial_GREEN: 0.5
initial_BLUE: 0.0
color_order: RGB

#	Set RGB values on boot up for each Neopixel.
#	Index 1 = display, Index 2 and 3 = Knob
[delayed_gcode setdisplayneopixel]
initial_duration: 1
gcode:
        SET_LED LED=fysetc_mini12864 RED=1 GREEN=1 BLUE=1 INDEX=1 TRANSMIT=0
        SET_LED LED=fysetc_mini12864 RED=1 GREEN=0 BLUE=0 INDEX=2 TRANSMIT=0
        SET_LED LED=fysetc_mini12864 RED=1 GREEN=0 BLUE=0 INDEX=3

#--------------------------------------------------------------------


####################################################
#	Macros
####################################################

[gcode_macro G32]
gcode:
    BED_MESH_CLEAR
    G28
    QUAD_GANTRY_LEVEL
    G28
    ##	Uncomment for for your size printer:
    #--------------------------------------------------------------------
    ##	Uncomment for 250mm build
    #G0 X125 Y125 Z30 F3600

    ##	Uncomment for 300 build
    #G0 X150 Y150 Z30 F3600

    ##	Uncomment for 350mm build
    #G0 X175 Y175 Z30 F3600
    #--------------------------------------------------------------------

[gcode_macro PRINT_START]
#   Use PRINT_START for the slicer starting script - please customise for your slicer of choice
gcode:
    G32                            ; home all axes
    G1 Z20 F3000                   ; move nozzle away from bed

[gcode_macro PRINT_END]
#   Use PRINT_END for the slicer ending script - please customise for your slicer of choice
gcode:
    M400                           ; wait for buffer to clear
    G92 E0                         ; zero the extruder
    G1 E-1.0 F3600                 ; retract filament
    G91                            ; relative positioning
    G0 Z1.00 X20.0 Y20.0 F20000    ; move nozzle to remove stringing
    TURN_OFF_HEATERS
    M107                           ; turn off fan
    G1 Z2 F3000                    ; move nozzle up 2mm
    G90                            ; absolute positioning
    G0  X125 Y250 F3600            ; park nozzle at rear
    BED_MESH_CLEAR

### 5.	Thermistor Types
### 5.  "EPCOS 100K B57560G104F"
### 5.  "ATC Semitec 104GT-2"
### 5.  "NTC 100K beta 3950"
### 5.  "Honeywell 100K 135-104LAG-J01"
### 5.  "NTC 100K MGB18-104F39050L32" (Keenovo Heater Pad)
### 5.  "AD595"
### 5.  "PT100 INA826"
`,paraId:16,tocIndex:17},{value:"\u5F15\u7528\u4E86",paraId:17,tocIndex:18},{value:"\u8475\u82B1\u5B9D\u5178\u4E4B\u8718\u86DBVORON",paraId:17,tocIndex:18},{value:"\u9644\u5F55",paraId:17,tocIndex:18},{value:`####################################################
# \u57FA\u7840\u914D\u7F6E\uFF0C\u5B9A\u4E49\u8718\u86DB\u4E3B\u677F\u5E76\u5BF9\u6253\u5370\u673A\u7C7B\u578B\u505A\u8BBE\u7F6E
# For Fysetc Spider V1.0&V1.1
#\u8718\u86DB\u4E3B\u677F\u56FA\u4EF6\u751F\u6210\u65F6\uFF0C\u6676\u632F\u9009\u62E912Mhz\uFF0CBootloader\u9009\u62E932Kib
####################################################
[include fluidd.cfg]
[mcu]
#\u4E3B\u677F\u901A\u4FE1\u6CE2\u7279\u7387\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u6539\u52A8
baud: 250000
#\u4E3B\u677F\u901A\u4FE1\u7AEF\u53E3\u8BBE\u7F6E\uFF0C\u4F7F\u7528$ ls /dev/serial/by-id/* \u8BFB\u53D6\u4E3B\u63A7\u677FID\u5E76\u66FF\u6362\u4EE5\u4E0B\u4FE1\u606F
serial: /dev/serial0
[printer]
# \u8FD0\u52A8\u5B66\u7ED3\u6784 \u5206\u4E3A\u7B1B\u5361\u5C14\u548Ccorexy\u7B49\u7B49\uFF0CVoron2.4\u662Fcorexy
kinematics: corexy
# \u6700\u5927\u901F\u5EA6
max_velocity: 300
# \u6700\u5927\u52A0\u901F\u5EA6
max_accel: 3000
# z\u8F74\u6700\u5927\u901F\u5EA6
max_z_velocity: 15
# z\u8F74\u6700\u5927\u52A0\u901F\u5EA6
max_z_accel: 300
# \u65B9\u5F62\u62D0\u89D2\u901F\u5EA6\uFF0C\u5C0F\u4E00\u70B9\u53EF\u4EE5\u6709\u6548\u907F\u514D\u5E73\u53F0\u91CD\u5E26\u6765\u7684\u60EF\u6027
square_corner_velocity: 5.0
####################################################
# \u6B65\u8FDB\u7535\u673A\u914D\u7F6E
####################################################
################## X\u8F74\u8BBE\u7F6E ##################
[stepper_x]
# X\u8F74\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PE11
# X\u8F74\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: !PE10
# X\u8F74\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PE9
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
# \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E
microsteps: 16
# \u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09
rotation_distance: 40
# \u7535\u673A\u5355\u5708\u6240\u9700\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
# X\u8F74\u6700\u5C0F\u884C\u7A0B--\u8F6F\u4EF6\u9650\u4F4D
position_min: 0
# X\u8F74\u6700\u5927\u884C\u7A0B--\u8F6F\u4EF6\u9650\u4F4D\uFF08\u5982\u679C\u662F350\u673A\u578B\uFF0C\u9700\u66F4\u6539\u4E3A350\uFF09
position_max: 300
# X\u8F74\u7684\u673A\u68B0\u590D\u4F4D\u70B9\u5750\u6807\uFF08\u5982\u679C\u662F350\u673A\u578B\uFF0C\u9700\u66F4\u6539\u4E3A350\uFF09
position_endstop: 300
# \u590D\u4F4D\u901F\u5EA6
homing_speed: 25
# \u7B2C\u4E00\u6B21\u89E6\u53D1\u590D\u4F4D\u5F00\u5173\u4E4B\u540E\u7684\u540E\u9000\u8DDD\u79BB
homing_retract_dist: 5
# \u590D\u4F4D\u65B9\u5411\uFF08\u4E00\u822C\u4E0D\u9700\u8981\u6539\u52A8\uFF09
homing_positive_dir: true
# \u9650\u4F4D\u5F00\u5173PIN\u811A\u8BBE\u7F6E\uFF08X-\uFF09
endstop_pin: ^PB14
################## y\u8F74\u8BBE\u7F6E ##################
[stepper_y]
#Y\u8F74\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PD8
#Y\u8F74\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: !PB12
#Y\u8F74\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PD9
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
#\u7535\u673A\u7EC6\u5206
microsteps: 16
#\u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09
rotation_distance: 40
#\u7535\u673A\u5355\u5708\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
# Y\u8F74\u6700\u5C0F\u884C\u7A0B--\u8F6F\u4EF6\u9650\u4F4D
position_min: 0
# Y\u8F74\u6700\u5927\u884C\u7A0B--\u8F6F\u4EF6\u9650\u4F4D\uFF08\u5982\u679C\u662F350\u673A\u578B\uFF0C\u9700\u66F4\u6539\u4E3A350\uFF09
position_max: 300
# Y\u8F74\u7684\u673A\u68B0\u590D\u4F4D\u70B9\u5750\u6807\uFF08\u5982\u679C\u662F350\u673A\u578B\uFF0C\u9700\u66F4\u6539\u4E3A350\uFF09
position_endstop: 300
# \u590D\u4F4D\u901F\u5EA6
homing_speed: 25
# \u7B2C\u4E00\u6B21\u89E6\u53D1\u590D\u4F4D\u5F00\u5173\u4E4B\u540E\u7684\u540E\u9000\u8DDD\u79BB
homing_retract_dist: 5
# \u590D\u4F4D\u65B9\u5411\uFF08\u4E00\u822C\u4E0D\u9700\u8981\u6539\u52A8\uFF09
homing_positive_dir: true
# \u9650\u4F4D\u5F00\u5173PIN\u811A\u8BBE\u7F6E\uFF08Y-\uFF09
endstop_pin: ^PB13
################## E0\u6324\u51FA\u673A\u8BBE\u7F6E ##################
[extruder]
# \u6324\u51FA\u673A\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PD12
# \u6324\u51FA\u673A\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: !PC4
# \u6324\u51FA\u673A\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PE8
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
# \u7535\u673A\u7EC6\u5206
microsteps: 16
# \u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF08BMG\uFF09
rotation_distance: 25.12
# \u7535\u673A\u5355\u5708\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
# \u51CF\u901F\u6BD4\uFF08BMG\u9F7F\u8F6E\u6BD4\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09
gear_ratio: 50:17
# \u8017\u6750\u76F4\u5F84
filament_diameter: 1.75
# \u6324\u51FA\u5934\u52A0\u70ED\u68D2\u63A7\u5236Pin\u811A\u8BBE\u7F6E(e0)
heater_pin: PB15
# \u52A0\u70ED\u68D2\u6700\u4F4E\u6E29\u5EA6\u9600\u503C\uFF0C\u70ED\u5E8A\u6E29\u5EA6\u4F4E\u4E8E\u6B64\u503C\u4F1A\u51FA\u73B0ADC\u62A5\u9519
min_temp: 0
# \u52A0\u70ED\u68D2\u6700\u9AD8\u6E29\u5EA6\u9600\u503C\uFF0C\u70ED\u5E8A\u6E29\u5EA6\u9AD8\u4E8E\u6B64\u503C\u4F1A\u51FA\u73B0ADC\u62A5\u9519
max_temp: 270
# \u6324\u51FA\u5934\u4F20\u611F\u5668\u7C7B\u578B\u53CAPin\u811A\uFF08TE0\uFF09
sensor_type: NTC 100K MGB18-104F39050L32
sensor_pin: PC0
# \u55B7\u5634\u76F4\u5F84
nozzle_diameter: 0.400
# \u52A0\u70ED\u68D2PWM\u6700\u5927\u8F93\u51FA\u529F\u7387
max_power: 1.0
# \u52A0\u70ED\u68D2\u6700\u4F4E\u6324\u51FA\u6E29\u5EA6\uFF08\u8FBE\u5230\u6B64\u6E29\u5EA6\u6324\u51FA\u673A\u624D\u80FD\u6709\u6324\u51FA\u52A8\u4F5C\uFF09
min_extrude_temp: 170
# pid\u63A7\u5236\u53C2\u6570
control = pid
pid_kp = 26.213
pid_ki = 1.304
pid_kd = 131.721
pressure_advance: 0.05
pressure_advance_smooth_time: 0.040
################## Z0\u8F74\u8BBE\u7F6E ##################
[stepper_z]
#Z0\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PD14
#Z0\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: PD13
#Z0\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PD15
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
#\u7535\u673A\u7EC6\u5206
microsteps: 16
#\u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09
rotation_distance: 40
#\u7535\u673A\u5355\u5708\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
#\u51CF\u901F\u6BD4\uFF08Z\u8F74\u5927\u5C0F\u5E26\u8F6E\u6BD4\u4E3A80\uFF1A16\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09
gear_ratio: 80:16
# z\u8F74\u6700\u5C0F\u884C\u7A0B--\u8F6F\u4EF6\u9650\u4F4Dposition_max: 300
position_min: -1
# Z\u8F74\u6700\u5927\u884C\u7A0B--\u8F6F\u4EF6\u9650\u4F4D\uFF08\u5982\u679C\u662F350\u673A\u578B\uFF0C\u9700\u66F4\u6539\u4E3A350\uFF09
position_max: 300
# Z\u8F74\u7684\u673A\u68B0\u590D\u4F4D\u70B9\u5750\u6807\uFF0CY\u53EF\u4EE5\u7406\u89E3\u4E3A\u55B7\u5634\u7684\u504F\u79FB\u503C\uFF0C\u503C\u8D8A\u5927\uFF0C\u55B7\u5634\u79BB\u70ED\u5E8A\u8D8A\u8FD1\uFF08\u8D1F\u503C\u4E5F\u4E00\u6837\uFF0C
eg.-1>-2\uFF09
position_endstop: 3.56
# \u590D\u4F4D\u901F\u5EA6
homing_speed: 16.0
# \u7B2C\u4E8C\u6B21\u7CBE\u786E\u590D\u4F4D\u7684\u901F\u5EA6
second_homing_speed: 3.0
# \u7B2C\u4E00\u6B21\u89E6\u53D1\u590D\u4F4D\u5F00\u5173\u4E4B\u540E\u7684\u540E\u9000\u8DDD\u79BB
homing_retract_dist: 3.0
# \u9650\u4F4D\u5F00\u5173PIN\u811A\u8BBE\u7F6E\uFF08Z-\uFF09
endstop_pin: PA0
################## Z1\u8F74\u8BBE\u7F6E ##################
[stepper_z1]
#Z1\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PD5
#Z1\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: !PD6
#Z1\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PD4
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
#\u7535\u673A\u7EC6\u5206
microsteps: 16
#\u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09
rotation_distance: 40
#\u7535\u673A\u5355\u5708\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
#\u51CF\u901F\u6BD4\uFF08Z\u8F74\u5E26\u8F6E\u6BD4\u4E3A80\uFF1A16\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09
gear_ratio: 80:16
################## Z2\u8F74\u8BBE\u7F6E ##################
[stepper_z2]
#Z2\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PE6
#Z2\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: PC13
#Z2\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PE5
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
#\u7535\u673A\u7EC6\u5206
microsteps: 16
#\u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09
rotation_distance: 40
#\u7535\u673A\u5355\u5708\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
#\u51CF\u901F\u6BD4\uFF08Z\u8F74\u5E26\u8F6E\u6BD4\u4E3A80\uFF1A16\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09
gear_ratio: 80:16
################## Z3\u8F74\u8BBE\u7F6E ##################
[stepper_z3]
#Z3\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E
step_pin: PE2
#Z3\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u6216\u5220\u9664\u5F15\u811A\u524D\u9762\u7684!\u6765\u6539\u53D8\u7535\u673A\u7684\u8FD0\u8F6C\u65B9\u5411
dir_pin: !PE4
#Z3\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E
enable_pin: !PE3
#---Klipper0.9\u4EE5\u4E0A\u7248\u672C\u8BBE\u7F6E---
#\u7535\u673A\u7EC6\u5206
microsteps: 16
#\u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09
rotation_distance: 40
#\u7535\u673A\u5355\u5708\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09
full_steps_per_rotation: 200
#\u51CF\u901F\u6BD4\uFF08Z\u8F74\u5E26\u8F6E\u6BD4\u4E3A80\uFF1A16\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09
gear_ratio: 80:16
####################################################
# TMC2209 \u9A71\u52A8\u914D\u7F6E
####################################################
[tmc2209 stepper_x]
#\u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49
uart_pin: PE7
#\u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C
interpolate: True
#\u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C
run_current: 0.9
#\u7535\u673A\u9759\u6001\u529B\u77E9\u4FDD\u6301\u7535\u6D41\u503C
hold_current: 0.6
#\u9A71\u52A8\u91C7\u6837\u7535\u963B\u503C\uFF08\u4E0D\u8981\u4FEE\u6539\uFF09
sense_resistor: 0.110
#TMC2209\u7684\u9759\u97F3\u9600\u503C\uFF08\u4F7F\u7528LDO0.9\u5EA6\u7535\u673A\uFF0C\u8BBE\u7F6E100\uFF09
stealthchop_threshold: 200
[tmc2209 stepper_y]
uart_pin: PE15
#microsteps: 16
interpolate: True
run_current: 0.9
hold_current: 0.7
sense_resistor: 0.110
stealthchop_threshold: 200
[tmc2209 extruder]
uart_pin: PA15
#microsteps: 16
interpolate: True
run_current: 0.6
hold_current: 0.4
sense_resistor: 0.110
stealthchop_threshold: 200
[tmc2209 stepper_z]
uart_pin: PD10
#microsteps: 16
interpolate: True
run_current: 0.9
hold_current: 0.7
sense_resistor: 0.110
stealthchop_threshold: 200
[tmc2209 stepper_z1]
uart_pin: PD7
#microsteps: 16
interpolate: True
run_current: 0.9
hold_current: 0.7
sense_resistor: 0.110
stealthchop_threshold: 200
[tmc2209 stepper_z2]
uart_pin: PC14
#microsteps: 16
interpolate: True
run_current: 0.9
hold_current: 0.7
sense_resistor: 0.110
stealthchop_threshold: 200
[tmc2209 stepper_z3]
uart_pin: PC15
#microsteps: 16
interpolate: True
run_current: 0.9
hold_current: 0.7
sense_resistor: 0.110
stealthchop_threshold: 200
####################################################
# Heater Bed \u70ED\u5E8A\u8BBE\u7F6E
####################################################
[heater_bed]
#\u70ED\u5E8A\u52A0\u70ED\u5668\u63A7\u5236Pin\u811A \uFF08BED OUT\uFF09
heater_pin: PB4
#\u70ED\u5E8A\u6E29\u5EA6\u4F20\u611F\u5668\u89C4\u683C\u53CAPin\u811A(TE3)
sensor_type: NTC 100K MGB18-104F39050L32
sensor_pin: PC3
# \u70ED\u5E8APWM\u6700\u5927\u8F93\u51FA\u529F\u7387
max_power: 1.0
#\u70ED\u5E8A\u6700\u4F4E\u6E29\u5EA6\u9600\u503C\uFF0C\u70ED\u5E8A\u6E29\u5EA6\u4F4E\u4E8E\u6B64\u503C\u4F1A\u51FA\u73B0ADC\u62A5\u9519
min_temp: 0
#\u70ED\u5E8A\u6700\u9AD8\u6E29\u5EA6\u9600\u503C\uFF0C\u70ED\u5E8A\u6E29\u5EA6\u9AD8\u4E8E\u6B64\u503C\u4F1A\u51FA\u73B0ADC\u62A5\u9519
max_temp: 125
# pid\u63A7\u5236\u53C2\u6570
control: pid
pid_kp: 58.437
pid_ki: 2.347
pid_kd: 363.769
####################################################
# Fan \u98CE\u6247\u8BBE\u7F6E
####################################################
################### \u5589\u7BA1\u6563\u70ED\u98CE\u6247(FAN0) ##################
[heater_fan hotend_fan]
#\u5589\u7BA1\u6563\u70ED\u98CE\u6247\u5F15\u811A\u8BBE\u7F6E\uFF08FAN0\uFF09
pin: PB0
#\u5589\u7BA1\u6563\u70ED\u98CE\u6247\u6700\u5927\u8F93\u51FA\u529F\u7387\uFF08\u9ED8\u8BA4\uFF1A1.0\uFF09
max_power: 1.0
kick_start_time: 0.5
heater: extruder
#\u5589\u7BA1\u6563\u70ED\u98CE\u6247\u542F\u52A8\u9600\u503C
heater_temp: 50.0
## If you are experiencing back flow, you can reduce fan_speed
fan_speed: 1.0
shutdown_speed: 1.0
################## \u6253\u5370\u51B7\u5374\u98CE\u6247(FAN1) ##################
[fan]
#\u6A21\u578B\u51B7\u5374\u98CE\u6247\u5F15\u811A\u8BBE\u7F6E(FAN1)
pin: PB1
kick_start_time: 0.75
#\u6A21\u578B\u6563\u70ED\u98CE\u6247\u6700\u5927\u8F93\u51FA\u529F\u7387\uFF08\u9ED8\u8BA4\uFF1A1.0\uFF09
max_power: 1.0
################## \u7535\u8DEF\u4ED3\u6563\u70ED\u98CE\u6247(\u53EF\u4EE5\u5E76\u8054\u5728\u5589\u7BA1\u98CE\u6247\u63A5\u53E3\u4E0A)
##################
#[temperature_fan controller_fan]
#pin: PB6
#max_power: 0.7
#shutdown_speed: 0.0
#kick_start_time: 0.500
#sensor_type: NTC 100K MGB18-104F39050L32
#sensor_pin: z:P0.25
#min_temp: 0
#max_temp: 50
#target_temp: 24
#gcode_id: T1
#control: watermark
################## \u6253\u5370\u4ED3\u5185\u6392\u6C14\u6247(FAN2) ##################
#[temperature_fan exhaust_fan]
#pin: PB2
#max_power: 0.7
#shutdown_speed: 0.0
#kick_start_time: 5.0
#sensor_type: NTC 100K MGB18-104F39050L32
#sensor_pin: PC1
#min_temp: 0
#max_temp: 60
#target_temp: 40
#gcode_id: C
#control: watermark
# \u4E2D\u65AD\u8D85\u65F6\u65F6\u95F4
[idle_timeout]
timeout: 3600
####################################################
# Probe 4z\u8C03\u5E73\u4F20\u611F\u5668
####################################################
################## Z\u8C03\u5E73\u4F20\u611F\u5668\u5355\u70B9\u63A2\u6D4B\u5B8F(Z+) ##################
[probe]
#\u8C03\u5E73\u4F20\u611F\u5668\u5F15\u811A\u8BBE\u7F6E\uFF08X+\uFF09
pin: PA3
#\u4F20\u611F\u5668\u5BF9\u5E94\u55B7\u5634\u7684\u504F\u79FB\u6570\u503C
x_offset: 0
y_offset: 25.0
z_offset: 0
#\u8C03\u5E73\u65F6\u7684\u901F\u5EA6
speed: 10.0
#\u91C7\u6837\u6B21\u6570
samples: 3
samples_result: median
sample_retract_dist: 3.0
#\u91C7\u6837\u516C\u5DEE
samples_tolerance: 0.01
#\u8D85\u516C\u5DEE\u91CD\u8BD5\u6B21\u6570
samples_tolerance_retries: 3
####################################################
# Homing and Gantry Adjustment Routines\u5F52\u4F4D\u4E0E\u673A\u67B6\u8C03\u6574
####################################################
################## XYZ\u590D\u4F4D ##################
[homing_override]
axes: z
set_position_z: 0
gcode:
G90
G0 Z10 F600
G28 X Y
## XY Location of the Z Endstop Switch
## Update X0 and Y0 to your values (such as X157, Y305) after going through
## Z Endstop Pin Location Definition step.
#\u4EE5\u4E0B\u4E00\u884CXY\u5750\u6807\u6839\u636E\u81EA\u5DF1\u7684Z\u9650\u4F4D\u4F20\u611F\u5668\u4F4D\u7F6E\u4FEE\u6539\u4FDD\u5B58
G0 X232 Y338 F3600
#\u4EE5\u4E0BXYZ\u5750\u6807\u673A\u5668\u5B8C\u6210\u590D\u4F4D\u540E\uFF0C\u55B7\u5934\u505C\u7559\u7684\u4F4D\u7F6E\uFF0C\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u53EF\u4EE5\u8C03\u6574
G28 Z
G0 Z10 F1800
G0 X150 Y150 Z20.05 F3600
################## Voron2 4Z\u8C03\u5E73 ##################
[quad_gantry_level]
gantry_corners:
-60,-10
360,370
#4Z\u8C03\u5E73\u91C7\u96C6\u70B9\u5750\u6807\u8BBE\u7F6E\uFF08300\u673A\u578B\uFF09
points:
25,25
25,250
275,250
275,25
#4Z\u8C03\u5E73\u91C7\u96C6\u70B9\u5750\u6807\u8BBE\u7F6E\uFF08300\u673A\u578B\uFF09
#points:
# 25,25
# 25,300
# 325,300
# 325,25
# 4Z\u8C03\u5E73\u7684\u901F\u5EA6
speed: 100
#4Z\u8C03\u5E73\u65F6\uFF0CZ\u7684\u8D77\u59CB\u9AD8\u5EA6
horizontal_move_z: 10
#\u91C7\u6837\u5931\u8D25\u91CD\u8BD5\u6B21\u6570
retries: 5
#\u91C7\u6837\u516C\u5DEE
retry_tolerance: 0.01
#\u91C7\u6837\u65F6Z\u7684\u6700\u5927\u884C\u7A0B
max_adjust: 10
####################################################
# Displays
####################################################
[display]
#\u63A5Mini12864\u663E\u793A\u5C4F\u7684\u8BBE\u7F6E
#\u663E\u793A\u5C4F\u9A71\u52A8\u7C7B\u578B
lcd_type: uc1701
# \u663E\u793A\u5C4F\u7247\u9009cs\u5F15\u811A\u8BBE\u7F6E
cs_pin: PC11
# \u663E\u793A\u5C4F\u6570\u636Ea0\u5F15\u811A\u8BBE\u7F6E
a0_pin: PD2
# \u663E\u793A\u5C4F\u590D\u4F4Drst\u811A\u8BBE\u7F6E
rst_pin: PC10
# \u65CB\u8F6C\u7F16\u7801\u5668\uFF08\u65CB\u94AE\u5F00\u5173\uFF09\u5F15\u811A\u8BBE\u7F6E
encoder_pins: ^PC6,^PC7
# \u65CB\u8F6C\u7F16\u7801\u5668\uFF08\u65CB\u94AE\u5F00\u5173\uFF09\u786E\u8BA4\u6309\u952E\u7684\u5F15\u811A\u8BBE\u7F6E
click_pin: ^!PA8
# \u5BF9\u6BD4\u5EA6
contrast: 63
# \u83DC\u5355\u8D85\u65F6\u65F6\u95F4
menu_timeout: 30
# SPI\u603B\u7EBF\u8BBE\u7F6E
spi_bus: spi1
[neopixel my_neopixel]
# To control Neopixel RGB in mini12864 display
#\u663E\u793A\u5C4F\u80CC\u5149\u706F\u63A7\u5236\u5F15\u811A\u8BBE\u7F6E
pin: PC12
chain_count: 3
#\u7EA2\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09
initial_RED: 1.0
#\u7EFF\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09
initial_GREEN: 0.0
#\u84DD\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09
initial_BLUE: 0.0
\u9644\u5F552 SpiderV1.0 & V1.1 Pin Definition
####################################################
# Macros Gcode\u5B8F
####################################################
[gcode_macro G32]
gcode:
BED_MESH_CLEAR
G28
QUAD_GANTRY_LEVEL
G28
G0 X150 Y150 Z20 F6000
[gcode_macro PRINT_START]
# Use PRINT_START for the slicer starting script - please customise for your
slicer of choice
gcode:
G32 ; home all axes
G1 Z20 F3000 ; move nozzle away from bed
[gcode_macro PRINT_END]
# Use PRINT_END for the slicer ending script - please customise for your slicer
of choice
gcode:
M400 ; wait for buffer to clear
G92 E0 ; zero the extruder
G1 E-10.0 F3600 ; retract filament
G91 ; relative positioning
G0 Z1.00 X20.0 Y20.0 F20000 ; move nozzle to remove stringing
TURN_OFF_HEATERS
M107 ; turn off fan
G1 Z2 F3000 ; move nozzle up 2mm
G90 ; absolute positioning
G0 X125 Y250 F3600 ; park nozzle at rear
BED_MESH_CLEAR
## Thermistor Types
## "EPCOS 100K B57560G104F"
## "ATC Semitec 104GT-2"
## "NTC 100K beta 3950"
## "Honeywell 100K 135-104LAG-J01"
## "NTC 100K MGB18-104F39050L32" (Keenovo Heater Pad)
## "AD595"
## "PT100 INA826
`,paraId:18,tocIndex:18}]}}]);
