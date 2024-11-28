import { Course } from "@/models/course.model.js";

class courseService
{
    async findAll()
    {
        try
        {
            const courses = await Course.find();
            return courses
        }
        catch(error)
        {
            throw error
        }
    }

    
}

export default courseService