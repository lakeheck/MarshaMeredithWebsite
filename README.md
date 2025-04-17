# Marsha Meredith Experience

## Setup 
Interactive web-based ink simulation using real-time weather data to generate ink colors. 

main.js is the entry point and could be replaced by whatever integration method makes sense for the project. 

## Dev notes

palete texture is hooked up to the fluid sim, but palettes are all hardcoded. Right now using uPalette unform to select between them. This should be replaced with a texture lookup based on weather data. (data -> palette texture logic should probably happen in js, not a shader)