const express = require('express');
const app = express();
// import get from './services/redis-service'
import * as cors from "cors";


app.get('/:search', (req, res) => {
    // get(req.params.search, data => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    //     res.send(data)
    // });
    res.send("test")
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));