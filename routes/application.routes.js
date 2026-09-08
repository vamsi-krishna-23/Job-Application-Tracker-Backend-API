import express from "express";
import {createApplication,
     getAllApplications,
     getApplicationById,
     updateApplication,
     ApplicationCount,
    } from "../controllers/application.controller.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Application route working" });

});

router.post("/createapplication" , createApplication)

router.get("/getallapplications", getAllApplications)

router.get("/count", ApplicationCount)

router.get("/:id", getApplicationById)

router.put("/:id", updateApplication)

export default router;