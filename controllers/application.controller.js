import mongoose from "mongoose"

import {Application} from "../models/application.model.js"


const createApplication = async(req, res)=>{
    try{
        const{companyName, jobTitle, location, jobType, jobUrl, appliedDate, salary, status, notes} = req.body;

      if(!companyName || !jobTitle || !appliedDate ||!status ){
        return res.status(400).json({
            message: "All Feilds are required"
        })
      }

      const application = await Application.create({
        companyName,
        jobTitle,
        location,
        jobType,
        jobUrl,
        appliedDate,
        salary,
        status,
        notes
      });

      return res.status(201).json({
        message:"Application created successfully",
        application
      })
      

    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}


const getAllApplications = async (req, res) => {
  try {
    const { search, status, jobType } = req.query;

    let filter = {};

    
    if (search) {
      filter.$or = [
        { companyName: { $regex: search, $options: "i" } },
        { jobTitle: { $regex: search, $options: "i" } }
      ];
    }

    if (status) {
      filter.status = status;
    }

   
    if (jobType) {
      filter.jobType = jobType;
    }

    const applications = await Application.find(filter);

    return res.status(200).json({
      message: "Applications fetched successfully",
      applications
    });

  } catch (error) {
    console.error("Get Applications Error:", error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};



const getApplicationById = async(req, res)=>{
    try{
        const application = await Application.findById(req.params.id)

        if(!application){
            return res.status(200).json({
                message:"no application found",
                
            })
        }

        return res.status(200).json({
            message:"Single Application Fetched Successfully",
            application
        })
    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

const updateApplication = async(req, res)=>{
    try{
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, {new:true});
     if(!application){
        return res.status(404).json({
            message:"application not found"
        })

     }
     return res.status(200).json({
        message:"updatded successfully",
        application
     })
    }catch(error){
        return res.status(500).json({
            message:"something went wrong"
        })
    }
}

const deleteApplication = async (req, res) => {
  try {
    const application = await Product.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    return res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};


const ApplicationCount = async(req, res)=>{
    
try{
     const total = await Application.countDocuments()
     const saved = await Application.countDocuments({status:"Saved"})
     const applied = await Application.countDocuments({status:"Applied"})
     const screening = await Application.countDocuments({status:"Screening"})
     const interview = await Application.countDocuments({status:"Interview"})
     const offer = await Application.countDocuments({status:"Offer"})
     const rejected = await Application.countDocuments({status:"Rejected"})
     const withdrawn = await Application.countDocuments({status:"Withdrawn"})

      
      
    return res.status(200).json({
        message:"Count fetched Successfully",
        total,
        applied,
        saved,
        screening,
        interview,
        offer,
        rejected,
        withdrawn
    });
}catch(error){
    console.error("ApplicationCount Error:", error);
    return res.status(500).json({
        message:"Internal Server Error",
         error: error.message
    })
}
}

export {createApplication,
    getAllApplications ,
    getApplicationById,
    updateApplication,
    deleteApplication,
    ApplicationCount 
}