import express from "express";
import {
    
    getAllCourses,
    createCourse, getCourseLectures,addLecture,deleteCourse,deleteLecture

  } from "../controllers/courseController.js";
  import {
    authorizeAdmin,
   // authorizAdmin,
    isAuthenticated,
    authorizSubscribers,
  } from "../middlewares/auth.js";
  import singleUpload from "../middlewares/multer.js";
const router=express.Router();

//Get all course without lecturs
router.route("/courses").get(getAllCourses)
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// Add lecture, Delete Course, Get Course Details
router
  .route("/course/:id")
  .get(isAuthenticated,authorizSubscribers,  getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

// Delete Lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;
