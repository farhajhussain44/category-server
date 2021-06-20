import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  subs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],
  type: {
    type: String,
    default: 'root',
  },
});

function autoPopulateSubs(next) {
  this.populate('subs');
  next();
}
categorySchema.pre('findOne', autoPopulateSubs).pre('find', autoPopulateSubs);

const categoryModel = mongoose.model('category', categorySchema);
export default categoryModel;
