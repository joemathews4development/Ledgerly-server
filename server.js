
// load the env file. use try catch to detect and resolve problems while loading the env file.
try {
    process.loadEnvFile()
} catch (error) {
    console.log(".env file not found. Using defulat values for PORT")
}

const jsonServer = require("json-server")
const server = jsonServer.create()

// add the default configurations of the system
const middlewares = jsonServer.defaults()
server.use(middlewares)

// add the routes (defaults)
const router = jsonServer.router("db.json")
server.use(router)

// the channel we use for my computer to connect to the server (you can use any in 3000s, 5000s or 8000s. But most common is 5005)
const PORT = process.env.PORT || 5005
server.listen(PORT, () => {
    console.log(`JSON server running locally on port: http://localhost:${PORT}`)
})

