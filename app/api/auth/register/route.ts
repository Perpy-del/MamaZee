import { userValidator } from '@/lib/validators/userValidator';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import userModel from '@/models/userModel';
import connectToDatabase from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // Validation with joi
    const { error } = userValidator.validate(request.body);
    if (error) {
      console.error('ERROR: ', error.message);
      console.error('STACK: ', error.stack);
      throw new Error(error.message);
    }
    if (!email || !password) {
      console.error("Invalid email or password");
      throw new Error("Please enter a valid email address and password before you can login");
    }
    console.log({ email, password });

    await connectToDatabase();
    const existingEmail = await userModel.findOne({ email: email })
    // const saltRounds: string | number = process.env.BCRYPT_ROUND || 10;
    if (existingEmail) {
      console.log("Email already exists");
      return NextResponse.json({message: "An account with this email already exists", status: 500, error: true})
      // throw new Error("Email already exists");
    }
    
    const hashedPassword = await hash(password, 10);
    const newUser = await userModel.create({
      email,
      password: hashedPassword,
    })

    console.log("New user: ", newUser);
    const {_id, createdAt, updatedAt} = newUser;
    const userEmail = newUser.email;
    const data = {
      userId: _id,
      createdAt,
      updatedAt,
      email: userEmail,
    }
    console.log(data);
    return NextResponse.json({message: "Success", status: 200, data: data, error: false});
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ message: error || 'An error occurred', status: 500, error: true });
  }
}
