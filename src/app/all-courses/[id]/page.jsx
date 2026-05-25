import React from 'react';

const CourseDetailsPage = async ({params}) => {
    const { id } =await params;
    const response = await fetch(`https://a8-skill-sphere.vercel.app/data.json`);
    const courses = await response.json();
    const singleCourse = courses.find((course) => course.id == id);
    console.log(singleCourse);
    return (
        <div>
            <h1>{singleCourse?.title}</h1>
            <p>{singleCourse?.shortDescription}</p>
            <p>Instructor: {singleCourse?.instructor}</p>
            <p>Duration: {singleCourse?.duration}</p>
            <p>Rating: {singleCourse?.rating}</p>
            <p>Students: {singleCourse?.students}</p>
            <p>Price: ${singleCourse?.price}</p>
        </div>
    );
};

export default CourseDetailsPage;