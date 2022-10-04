import express from 'express'
import cors from 'cors'
import router  from './routes/index.js'
import expressWs from 'express-ws';
import bodyParser from 'body-parser';

const app = express()
import config from './config.js'

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 配置跨域
app.use(cors())
expressWs(app)

app.use(bodyParser.json())
app.use('/api', router)

// init(app)

app.listen(config.port, config.address, ()=> {
  console.log(`App start at ${config.address}:${config.port}`);
});

