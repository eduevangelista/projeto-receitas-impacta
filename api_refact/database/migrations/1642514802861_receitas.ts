import mongoose from 'mongoose';

const Receitaschema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Moment = mongoose.model('Moment', Receitaschema);

export default Moment;
