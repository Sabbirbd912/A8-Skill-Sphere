import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://a8-skill-sphere.vercel.app/data.json");
  const data = await res.json();
  const popularCourses = data.slice(0, 3);
  return (
    <div>
      <h2 className="bg-gradient-to-tr from-black via-blue-800 to-blue-500 bg-clip-text text-transparent text-4xl font-extrabold py-4 text-center mt-10">
        Our Popular Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {popularCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
