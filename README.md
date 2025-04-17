# Marsha Meredith Experience

## Setup 
Interactive web-based ink simulation using real-time weather data to generate ink colors. 

main.js is the entry point and could be replaced by whatever integration method makes sense for the project. 

## Dev notes

Line 293 of `Fluid.js` is where the color map is calcuated each frame. Here is the snippet:
```
if(config.DENSITY_MAP_ENABLE){
    this.splatColorProgram.bind();
    gl.uniform1f(this.splatColorProgram.uniforms.uFlow, config.FLOW / 1000);
    gl.uniform1f(this.splatColorProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(this.splatColorProgram.uniforms.point, 0, 0);
    gl.uniform1i(this.splatColorProgram.uniforms.uTarget, this.dye.read.attach(0));
    gl.uniform1i(this.splatColorProgram.uniforms.uColor, this.picture.attach(1)); //color map
    gl.uniform1i(this.splatColorProgram.uniforms.uDensityMap, this.picture.attach(2)); //density map
    gl.uniform1i(this.splatVelProgram.uniforms.uClick, 0);
    gl.uniform1f(this.splatColorProgram.uniforms.radius, this.correctRadius(config.SPLAT_RADIUS / 100.0));
    LGL.blit(this.dye.write);
    this.dye.swap();
}
```
- `gl.uniform1i(this.splatColorProgram.uniforms.uColor, this.picture.attach(1));` is where we pass in the color map for the fluid simulation. right now its an image `this.picture.attach(1)`, so this will need to be replaced with our remapped noise color palette based on weather data, someting like `this.weatherColorMap.attach(1)`
- `this.weatherColorMap` is a texture that we will need to create in the `init` function folllwoing the other framebuffers. 
- Then, before this section of the animation loop, we need to: 
    - bind and execute the simple noise shader to lookup color palette values based on weather data 
    - render this to a texture 
    - then bind this texture to the uColor uniform of the `splatColorProgram`