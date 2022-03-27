const express = require("express"); 
const ytdl = require("ytdl-core");
const app = express();


app.get("/", function (req, res){
    const {url} = req.query;

    res.header("Content-Disposition", 'attachmentt; filename="Video.mp4"')
    return ytdl(url).pipe(res);
 
});


var handeleErros = (err,req,res, next) => {  
    console.log('Erro na aplicação')
    res.status(503).send('Erro de conecção')
}
app.use(handeleErros)


app.listen(process.env.PORT || 3000);

