const cors = require('cors');
const express = require('express');
const app = express();

//const indexRoutes = require('./routes/index'); 
const Vehiculos = require('./routes/vehiculosRoutes'); 
const Paises = require('./routes/PaisesRouter'); 
// settings
app.set('port', process.env.PORT || 3000);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
//app.use(indexRoutes);
app.use('/api',Vehiculos);
app.use('/api',Paises);

//Static Files





//Start Server
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
