import mongoose from 'mongoose';

const mongoConnect = async () => {
  try {
    mongoose.set('useCreateIndex', true);
    await mongoose.connect(process.env.MONGO_CONNECT_URL_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Connected to Mongo database');
  } catch (e) {
    console.log(`Error connecting to mongo database ${e}`);
  }
};
export default mongoConnect;
