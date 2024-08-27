import mongoose from 'mongoose';

// Definir o esquema para momentos
const Receitaschema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

Receitaschema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

const Moment = mongoose.model('Moment', Receitaschema);

export default Moment;
