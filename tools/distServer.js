let express = require('express');
let path = require('path');
let app = express();

let isProduction = process.env.NODE_ENV === 'production';
let port = isProduction ? process.env.PORT : 3000;
let publicPath = path.resolve(__dirname, '../dist');

app.use(express.static(publicPath));

app.listen(port, function () {
  // console.log('Server running on port ' + port);
});
