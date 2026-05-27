import InstructorCard from "./InstructorCard";
import data from "../../public/instructor.json";
const TopInstructor = () => {
    const topInstructor = data.instructors?.slice(0, 3) || [];
    return (
        <div>
            <h2 className="bg-linear-to-tr from-black via-blue-800 to-blue-500 bg-clip-text text-transparent text-3xl font-extrabold py-4 text-center">Our Popular Instructor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6 justify-items-center sm:justify-items-stretch">
                {topInstructor.map(instructor => (
                    <InstructorCard key={instructor.id} instructor={instructor} />
                ))}
            </div>
        </div>
    );
};

export default TopInstructor;