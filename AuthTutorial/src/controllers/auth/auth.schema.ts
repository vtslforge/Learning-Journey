import {z} from 'zod'


// this kind of data recieved from frontend
export const registerSchema = z.object({
    email:z.email(),
    password:z.string().min(6),
    name:z.string().min(6),
})