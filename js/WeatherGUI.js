import { config } from "./config.js";

export class WeatherGUI {
    constructor(fluid) {
        this.fluid = fluid;
        this.gui = null;
    }

    start() {
        this.gui = new dat.GUI({ width: 300 });
        
        // Add season slider (0-3 for Spring, Summer, Autumn, Winter)
        this.gui.add(config, 'PALETTE', 0, 3).name('Season').step(1);
        
        // Add sub-palette slider (0-2 for different variations within each season)
        this.gui.add(config, 'SUB_PALETTE', 0, 2).name('Sub-Palette').step(1);
        
        // Add a pause toggle for convenience
        this.gui.add(config, 'PAUSED').name('Paused').listen();

        if (LGL.isMobile()) {
            this.gui.close();
        }
    }

    updateWeatherData(weatherData) {
        if (weatherData.season !== undefined) {
            config.PALETTE = weatherData.season;
        }
        if (weatherData.subPalette !== undefined) {
            config.SUB_PALETTE = weatherData.subPalette;
        }
        // Update GUI if it exists
        if (this.gui) {
            this.gui.updateDisplay();
        }
    }
} 