import jwt from 'jsonwebtoken'
import {environments} from '../environments'
import {User} from '../models/users'

export const generateToken = (user:User) => {
    return jwt.sign({id:user.id}, environments.JWT.SECRET_KEY)
}
