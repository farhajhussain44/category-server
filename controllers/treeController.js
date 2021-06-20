import categoryModel from '../models/category.js';

export const createRootCategory = async (req, res) => {
  try {
    const {
      body: { name },
    } = req;
    const createRootCat = await categoryModel.create({ name });
    res.status(200).send({ root: createRootCat });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const createSubCategory = async (req, res) => {
  try {
    const {
      body: { _id, name },
    } = req;

    const { _id: catId } = await categoryModel.create({ name, type: 'sub' });
    await categoryModel.updateOne({ _id }, { $push: { subs: catId } });
    res.status(200).send({ catId });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getAllCategory = async (req, res) => {
  try {
    const allCategory = await categoryModel.find({ type: 'root' }).lean();
    res.status(200).send({ allCategory });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getCurentCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const currentCategory = await categoryModel.findOne({ _id: id }).lean();
    res.status(200).send({ currentCategory });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editCategory = async (req, res) => {
  try {
    const {
      params: { id },
      body: { name },
    } = req;
    await categoryModel.updateOne({ _id: id }, { name });
    res.status(200).send({ msg: 'Edited successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteCategorySubCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const findCurrent = await categoryModel.findById(id);
    if (!findCurrent) {
      res.status(404).send({ msg: 'Data not found' });
      return;
    }
    const { subs, _id } = findCurrent;
    const ids = subs.map((el) => el._id);
    ids.push(_id);
    await categoryModel.deleteMany({ _id: { $in: ids } });
    res.status(200).send({ msg: 'Deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
