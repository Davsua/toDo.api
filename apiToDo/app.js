const express = require('express');
const cors = require('cors');
const { sequelize } = require('./utils/database');
const { todosRouter } = require('./routes/toDos.route');

const app = express();
app.use(express.json());
app.use(cors());

//http://localhost:4000/api/v1/toDos
app.use('/api/v1/toDos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('DB authenticate'))
  .catch((err) => console.log(error));

sequelize
  .sync()
  .then(() => console.log('DB sync'))
  .catch((error) => console.log(error));

app.listen(4000, () => {
  console.log('connecting to express...');
});
