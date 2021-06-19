import mongoose from 'mongoose';

const SubcategoryModelSchema = mongoose.Schema(
  {
    SubCategoryName: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  { timestamps: true },
);
const SubCategoryModel = mongoose.model('subcategory', SubcategoryModelSchema);
export default SubCategoryModel;
