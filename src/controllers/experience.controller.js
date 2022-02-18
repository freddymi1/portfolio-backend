const { experience } = require("../models");
const db = require("../models")

const ExperienceModel = db.experience

/**
 * Add experience function
 * @param {*} req 
 * @param {*} res 
 */
exports.AddExperience = async (req, res) => {
    try{
        const exp = await ExperienceModel({
            poste: req.body.poste,
            societe: req.body.societe,
            descPost: req.body.descPost,
            descMission: req.body.descMission,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
        const l = await exp.save();
        res.status(200).json(l)
    }catch(err){
        console.log(err)
    }
}

/** 
 * get All experiences data
*/

exports.getAllExperiences = async (req, res) => {
    try{
        await ExperienceModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement")
            res.status(200).json(data)
        })
    }catch{
        res.status(500).json("Erreur de chargement de donnee")
    }
}

/**
 * get One experience data
 * @param {*} req 
 * @param {*} res 
 */

exports.getOneExperience = async (req, res) =>{
    try{
        const experience = await ExperienceModel.findById(req.params.id)
        res.status(200).json(experience)
    }catch(err){
        res.status(500).json("Erreur de chargement de donnee")
    }
}

/**
 * Update experience
 * @param {*} req 
 * @param {*} res 
 */

exports.UpdateExperience = async (req, res) => {
    try{
        await ExperienceModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json("Experience modifier avec succes")
    }catch(err){
        res.status(500).json("Erreur de modification")
    }
}

/**
 * Delete one experience data
 * @param {*} req 
 * @param {*} res 
 */


exports.DeleteExperience = async (req, res) => {
    try{
        const ab = await ExperienceModel.findById(req.params.id);
        try{
            await ExperienceModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Experience supprimee avec succes")
        }catch(err){
            res.status(400).json("Erreu de la suppression")
        }
    }catch(err){
        res.status(500).json("Erreur de la suppression")
    }
}