//copyright lake heckaman 2025
//all rights reserved
//do not distribute without permission, copy or modify without permission
//this code is provided as is, without any warranty
//use at own risk
//no guarantees of any kind
//do not sell or use for commercial purposes without permission
//do not remove this copyright notice

'use strict';

import {gl, ext, canvas} from "./js/WebGL.js";
import {Fluid} from "./js/Fluid.js";

let fluid = new Fluid(gl); //initialize the fluid simulation

// Example of using class members to control the fluid palettes 
// you can set these in other ways, for example using a function call or event listener
// so it should hopefully be quite flexible to integrate with other systems
let otherGUI = new dat.GUI();
otherGUI.add(fluid, 'seasonIndex', 0, 3).name('Season').step(1);
otherGUI.add(fluid, 'subPaletteIndex', 0, 2).name('Sub-Palette').step(1);

await fluid.asyncInit(); //initialize the fluid simulation, async so we can load the palettes from json 
fluid.startGUI(); //dont need this for production deployment unless you want to give users the ability to change settings
fluid.simulate(); //start the fluid simulation


