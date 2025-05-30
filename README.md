# Marsha Meredith Experience

An interactive, web-based ink simulation using real-time weather data to generate ink colors. 

## Usage 

The ink simulation is structured as class to allow easy import into other projects. `main.js` and `index.html` in this repo are placeholders and examples, but you should just import the class and use in your current logic as follows:

0. Copy `assets` and `js` folders into the target directory, and import appropriately, eg: 
    ```
    import {gl, ext, canvas} from "./js/WebGL.js";
    import {Fluid} from "./js/Fluid.js";
    ```

    Set up the fluid object, init and start the simulation as follows: 
    ```
    let fluid = new Fluid(gl); //initialize the fluid simulation
    await fluid.asyncInit(); //initialize the fluid simulation, async so we can load the palettes from json 
    //fluid.startGUI(); //dont need this for production deployment unless you want to give users the ability to change settings
    fluid.simulate(); //start the fluid simulation
    ```    
1. Define palettes in `assets/palettes.json`
    - Each palette should have 5 colors, and each color should have r,g,b,a values 
2. Update palette programatically by changing config.PALETTE and config.SUB_PALETTE (e.g. based on weather API data, update those values, the visual will update automatically)
    - There are some GUI sliders hooked up in the demo version for easy exploration
3. `main.js` is the current entry point and could be replaced by whatever integration method makes sense for the project
    - You can interactively update the palette selection by updating `fluid.seasonIndex` and `fluid.subPaletteIndex` from the main loop, all other logic for interaction and operation is contained in `Fluid.js` 
    - Simulation is locked to 60 fps

## Credits
Artistic Direction: Marsha Meredith
Technical Artist + Programmer: Lake Heckaman (www.lakeheckaman.com)