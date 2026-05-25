import CourseCard from "@/components/CourseCard";
import React from "react";

const CoursesPage = async () => {
  const response = await fetch("https://a8-skill-sphere.vercel.app/data.json");
  const data = await response.json();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-4 py-6">Our All Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {data.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
