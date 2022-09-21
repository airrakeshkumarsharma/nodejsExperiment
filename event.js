const EventEmitter = require("events")

const event = new EventEmitter()

event.on("message", (status, data) => {
    console.log(data)
})

event.emit("message", 200, {data: "I am okay"})