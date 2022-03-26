const express = require("express"); 
const ytdl = require("ytdl-core");
const app = express();

app.get("/", function (req, res){
    const {url} = req.query;

    res.header("Content-Disposition", 'attachmentt; filename="Video.mp4"')
    return ytdl(url).pipe(res);
 
});
process.env.url
app.listen(process.env.PORT || 3000);
console.info(process.env.PORT || 3000)
console.info(process.env.url)