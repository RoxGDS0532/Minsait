const cors = require('cors');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index'); 
const taks = require('./routes/vehiculosRoutes'); 
// settings
app.set('port', process.env.PORT || 3000);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);
app.use('/api',taks);
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
