import Koa from 'koa'
const app = new Koa()
const port = 3000
app.use(async (ctx) => {
  ctx.body = 'hello koa2'
})

app.listen(port)
console.log(`🎉🎉 server mylife start at ${port}`)
