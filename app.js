let express = require('express');
let app = express();
let port = 8001;

app.set('view engine', 'html');
app.get('/', function(req, res) {
    res.sendfile('./index.html');
});
app.listen(port, function() {
    console.log(`app is listening ${port}`);
});