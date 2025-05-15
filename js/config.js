//copyright lake heckaman 2025
//all rights reserved
//do not distribute without permission, copy or modify without permission
//this code is provided as is, without any warranty
//use at own risk
//no guarantees of any kind
//do not sell or use for commercial purposes without permission
//do not remove this copyright notice
export const config = {
    SIM_RESOLUTION: 256, //simres
    DYE_RESOLUTION: 512, //output res 
    ASPECT: 1.0,
    FLOW: 8.4,
    SPLAT_FLOW: 0.15,
    VELOCITYSCALE: 1.0,
    CAPTURE_RESOLUTION: 1024, //screen capture res 
    DENSITY_DISSIPATION: .85, //def need to figure out this one, think perhaps bc im squaring the color in splatColor
    VELOCITY_DISSIPATION: .7,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 30,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6000,
    SHADING: false,
    COLORFUL: false,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
    BLOOM: false,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: false,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 0.4,
    FORCE_MAP_ENABLE: true,
    DENSITY_MAP_ENABLE: true, 
    COLOR_MAP_ENABLE:true,
    EXPONENT: 1.0,
    PERIOD: 3.0,
    RIDGE: 1.0,
    AMP: 1.0,
    LACUNARITY: 2.0,
    GAIN: 0.5,
    OCTAVES: 4,
    MONO: false,
    NOISE_TRANSLATE_SPEED: 0.15,
    DISPLAY_FLUID: true,
    RESET: false,
    RANDOM: false,
    PALETTE: 1,
    SUB_PALETTE: 1,  // Sub-palette selection
    PALETTE_NOISE_PERIOD: 5.0,
    PALETTE_NOISE_GAIN: 0.5,
    PALETTE_NOISE_LACUNARITY: 2.0,
    PALETTE_NOISE_OCTAVES: 6,
    PALETTE_NOISE_SPEED: 0.015,
    BRIGHTNESS: 1.250,
    CONTRAST: 0.150,
    GAMMA: 1.5,
    LUT_MIX: 1.0,
    LUT_SIZE: 0.0
};
