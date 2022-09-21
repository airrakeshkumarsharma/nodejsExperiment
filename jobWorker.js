const notificationQ = require("./queueList")

/** CPU intensive work */
async function processImage(imageUrl) {
    // Image Processing convert image into different formats
    console.log(imageUrl)
}

// A bull process which always running
notificationQ.process(async (job , done) => {
    const { id, url } = job.data

    try {
        // Your custom function or logic
        const processedImage = await processImage(url)

        // If image processing is successful
        done(null,processedImage)
    } catch(error) {
        // If Image processing is not successful
        done(error, null)
    }

})