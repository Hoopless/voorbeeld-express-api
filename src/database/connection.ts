import Mongoose from "mongoose";

Mongoose.connect(process.env.DB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err))

export default Mongoose