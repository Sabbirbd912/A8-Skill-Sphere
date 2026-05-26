import CourseCard from "./CourseCard";
import data from "../../public/data.json";

const PopularCourses = () => {
  const popularCourses = data.slice(0, 3);
  return (
    <div>
      <h2 className="bg-linear-to-tr from-black via-blue-800 to-blue-500 bg-clip-text text-transparent text-4xl font-extrabold py-4 text-center mt-10">
        Our Popular Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6 justify-items-center sm:justify-items-stretch">
        {popularCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
