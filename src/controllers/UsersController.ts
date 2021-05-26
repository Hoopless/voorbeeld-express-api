import { Request, Response } from "express";
import { body, validationResult } from 'express-validator'
import User from "../models/user";


export default class UsersController {


  static async index(_req: Request, res: Response) {
    let users = await new User().index()
    res.json({ success: true, data: users })
  }

  static create(req: Request, res: Response) {
    body('email').isEmail();
    body('password').isLength({ min: 7 })

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() })
    }

    new User().create(req.body.email, req.body.password)
      .then((user) => {
        res.json({ success: true, user: user._id })
      })
      .catch((err) => console.log(err))
  }
}