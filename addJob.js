const notificationQ = require("./queueList")
const data = require("./data.json")
require("./jobWorker")

const functionToAddJobInQueue = () => {
    /**
     * This process can also achieve by bulk add function in bull. But to understand queue code I added job one by one
     */
    for(let i = 0; i < data.length; i++) {
        notificationQ.add(data[i])
    }
}

functionToAddJobInQueue()