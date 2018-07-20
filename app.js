const express = require('express');
const app = express();
import get from './services/redis-service'

app.get('/:search', (req, res) => {
   get(req.params.search,data=>{
       res.send(data)
   })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));