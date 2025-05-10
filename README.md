# Marsha Meredith Experience

## Setup 
Interactive web-based ink simulation using real-time weather data to generate ink colors. 

main.js is the entry point and could be replaced by whatever integration method makes sense for the project. 

## Dev notes

- use gui to change config values , some of the buttons are broken and will eventually be removed 
- palette slider is hooked up to the weather color map, simulating palette change based on weather data 
- palette texture is hooked up to the fluid sim, but palettes are all hardcoded. Right now using uPalette unform to select between them. This should be replaced with a texture lookup based on weather data. (data -> palette texture logic should probably happen in js, not a shader)


## TODO
- integrate weather data into palette lookup 
- hardcode ink palettes to json 
    - load json into js and format as uniform array for shaders
    - pass array to weatherColorProgram 
- or just hardcode all palette values in the shader 
- fix canvas resize frame jitter 