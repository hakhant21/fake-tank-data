// Helper function to generate random numbers in a range
const randomInRange = (min, max, decimals = 0) => {
    const value = Math.random() * (max - min) + min;
    return decimals ? parseFloat(value.toFixed(decimals)) : Math.floor(value);
};

// Generate randomized tank data
const generateRandomTank = (id) => {
    const oilTypes = ["Petrol 92", "95 Octane", "Diesel", "Super Diesel"];
    const volume = randomInRange(1000, 99999);
    
    return {
        stateInfo: "No alarm",
        oilType: oilTypes[id - 1] || "Unknown",
        weight: 0,
        level: randomInRange(1000, 9999), // Random level (independent of volume)
        oilRatio: randomInRange(0.1, 0.9, 4), // Random ratio (0.1 - 0.9)
        waterRatio: 0,
        canAddOilWeight: 0,
        temperature: randomInRange(20, 40, 2), // Random temp (20°C - 40°C)
        volume: volume,
        connect: 3,
        id: id
    };
};

// Initialize with fully randomized data
const initialData = Array.from({ length: 4 }, (_, i) => generateRandomTank(i + 1));

// Simulate fuel consumption (decreases volume over time)
const simulateConsumption = (tank) => {
    const consumptionRate = 0.95 + Math.random() * 0.05; // 95-100% of previous volume
    tank.volume = Math.floor(tank.volume * consumptionRate);
    tank.volume = Math.max(0, tank.volume); // Ensure it doesn't go below 0

    // Update dependent fields (optional)
    tank.level = Math.floor(tank.volume / 10); // Example: level = volume / 10
    tank.oilRatio = parseFloat((tank.volume / 100000).toFixed(4)); // Normalized ratio
    
    return tank;
};

// Get updated tank data
const getTankData = () => {
    const updatedData = initialData.map(tank => simulateConsumption({ ...tank }));
    return { data: updatedData };
};

// Log data every 2 seconds
setInterval(() => {
    const tankData = getTankData();
    console.log("Updated Tank Data:", tankData);
}, 2000);

module.exports = { getTankData };
