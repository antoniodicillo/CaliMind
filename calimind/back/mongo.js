// requires e negocados
const mongoose = require('mongoose');

main().catch(err => console.log(err));

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const nome = mongoose.model('Nome',schema)


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}