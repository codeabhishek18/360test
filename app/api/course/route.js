import { NextResponse } from "next/server";
import courseService from "@/services/course.service";
import dbConnect from "@/dbConfig/dbConnect";
const courseInstance = new courseService();

export async function GET() 
{
    try
    {
        await dbConnect();

        const courses = await courseInstance.findAll();
        return NextResponse.json(courses);
    }    
    catch(error)
    {
        return NextResponse.json({error})
    }
}