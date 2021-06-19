import mongoose from 'mongoose';

const categoryModelSchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    subCategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategory',
      },
    ],
  },
  { timestamps: true }
);
const categoryModel = mongoose.model('category', categoryModelSchema);
export default categoryModel;
