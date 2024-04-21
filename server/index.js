const { urlencoded, json } = require('express');
const cors = require('cors'); 
const app = require('express')(); 
app.use(cors()); 
// app.get('/', (req, res) => { 
//     return res.status(200).json({message: 'docker is easy'}); 
// }); 
const port = process.env.PORT || 8080; 
app.use(json());
app.post('/', (req, res) => { 
    res.status(200).json({charCount:req.body.str.length})
})

app.listen(port, () => { 
    console.log(`server is running on http://localhost:${port}`); 
});
