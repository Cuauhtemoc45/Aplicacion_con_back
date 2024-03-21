const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

var cors = require( 'cors' );
app.use(cors({origin: true, credentials: true}));


mongoose.connect('mongodb://localhost:27017/bd_car', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Creacion de modelo de esquema.
const Schema = mongoose.Schema;
const miSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});
const MiModelo = mongoose.model('Modelo', miSchema);


app.get('/datos', async (req, res) => {
  try {
    const datos = await MiModelo.find();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});