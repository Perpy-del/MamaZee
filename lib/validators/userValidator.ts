import Joi from "joi";

const userValidator = Joi.object({
    email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({
        "string.pattern.base": "Not a valid email address. Please enter a valid email address",
    }),
    password: Joi.string().regex(/^(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).*(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/).messages({"string.pattern.base": "Password must be at least 8 characters long with at least a number, a special character, an uppercase letter and a lowercase letter"})
}).strict()

export {userValidator}