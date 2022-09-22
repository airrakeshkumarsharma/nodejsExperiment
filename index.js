const fs = require('fs');

const http = require('http');

const server = http.createServer()

server.on("request", (req, res) => {
    console.log("")
    const reStream = fs.createReadStream("data.txt")
    reStream.pipe(res)
    // reStream.on("data", chunk => {
    //     console.log(chunk)

    //     res.write(chunk)
    // })

    // reStream.on("end", () => res.end())
})

server.listen(8000, "localhost")