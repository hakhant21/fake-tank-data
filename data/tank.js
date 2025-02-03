const generate = () => {
    return Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000;
}

const data = {
    data: [
        {
            stateInfo: "No alarm",
            oilType: "Petrol 92",
            weight: 0,
            level: 2222,
            oilRatio: 0.2222,
            waterRatio: 0,
            canAddOilWeight: 0,
            temperature: 32.33,
            volume: generate(),
            connect: 3,
            id: 1
        },
        {
            stateInfo: "No alarm",
            oilType: "95 Octane",
            weight: 0,
            level: 3333,
            oilRatio: 0.3333,
            waterRatio: 0,
            canAddOilWeight: 0,
            temperature: 32.33,
            volume: generate(),
            connect: 3,
            id: 2
        },
        {
            stateInfo: "No alarm",
            oilType: "Diesel",
            weight: 0,
            level: 4444,
            oilRatio: 0.4444,
            waterRatio: 0,
            canAddOilWeight: 0,
            temperature: 32.33,
            volume: generate(),
            connect: 3,
            id: 3
        },
        {
            stateInfo: "No alarm",
            oilType: "Super Diesel",
            weight: 0,
            level: 5555,
            oilRatio: 0.5555,
            waterRatio: 0,
            canAddOilWeight: 0,
            temperature: 32.33,
            volume: generate(),
            connect: 3,
            id: 4
        }
    ]
}

const getTankData = () => {
    return data;
}

module.exports = {
    getTankData
}