import bcryp from 'bcrypt'

export const hashPassword = async (password:string) =>{ 
    const salt = await bcryp.genSalt(10)
    const hash = await bcryp.hash(password, salt)
    return hash
}
