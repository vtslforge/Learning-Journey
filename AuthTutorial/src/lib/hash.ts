import bycrypt from 'bcryptjs'

export async function hashPassword(password:string) {
    const salt = await bycrypt.getSalt("10");
    const hash = await bycrypt.hash(password,salt);

    return hash;
}