import Mongoose, { now, Schema } from "mongoose";
import { hashSync } from 'bcrypt'


export default class User {
  static Schema = new Schema({
    email: String,
    password: { type: String, select: false },
    created_at: Date,
    updated_at: Date,
  })


  model: Mongoose.Model<any, any, any>;

  constructor() {
    this.model = Mongoose.model('User', User.Schema)
  }

  async index() {
    return this.model.find({})
  }

  create(email: string, password: string) {
    let hashedPassword = hashSync(password, 10)
    let date = new Date;

    return this.model.create({
      email: email,
      password: hashedPassword,
      created_at: date,
      updated_at: date,
    })
  }



}