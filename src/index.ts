import { Hono } from 'hono'
const app = new Hono()
app.get('/', ({ text }) => text('Hello Hono!'))
export default app
