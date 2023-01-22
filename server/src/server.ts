import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then((url) => {
    console.log('HTTP Server running!')
})
// import Fastify from 'fastify'
// import cors from '@fastify/cors'
// import { prisma } from './lib/prisma'
// //import { PrismaClient } from '@prisma/client'
//
// const app = Fastify()
// //const prisma = new PrismaClient()
//
// app.register(cors)
//
// app.get('/hello', async () => {
//     // const habits = await prisma.habit.findMany({
//     //     where: {
//     //         title: {
//     //             startsWith: 'Beber'
//     //         }
//     //     }
//     // })
//
//     const habits = await prisma.habit.findMany()
//
//     //return 'Hello World'
//     return habits
//
//
// })
//
// app.listen({
//     port: 3333,
// }).then(() => {
//     console.log('HTTP Server running!')
// })