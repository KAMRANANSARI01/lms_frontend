import React, { useEffect } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import CourseCard from "../../Component/CourseCard";

const CourseList = () => {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);
  
  async function loadCourses() {
     const response = await dispatch(getAllCourses());
     console.log(response);

  }

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] w-full pt-20 ox-3 flex flex-col items-center justify-center m-auto flex-wrap gap-10 text-white">
        <h1 className="text-center px-3 text-3xl font-semibold">
          Explore the courses made by{" "}
          <span className="font-bold text-yellow-500">Industry Experts</span>
        </h1>

        {/* wrapper for courses card */}
        <div className="mb-10 flex justify-center items-center flex-wrap gap-10">
          {courseData?.map((element) => {
            return <CourseCard key={element._id} data={element} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseList;
