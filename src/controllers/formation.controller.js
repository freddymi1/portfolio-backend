const { formation } = require("../models");
const db = require("../models")

const FormationModel = db.formation;

exports.addFormation = async (req, res)=>{
    try{
        const exp = await FormationModel({
            title: req.body.title,
            school: req.body.school,
            filiere: req.body.filiere,
            description: req.body.description,
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
 * get All formations data
*/

exports.getAllFormations = async (req, res) => {
    try{
        await FormationModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement")
            res.status(200).json(data)
        })
    }catch{
        res.status(500).json("Erreur de chargement de donnee")
    }
}

/**
 * get One formation data
 * @param {*} req 
 * @param {*} res 
 */

 exports.getOneFormation = async (req, res) =>{
    try{
        const formation = await FormationModel.findById(req.params.id)
        res.status(200).json(formation)
    }catch(err){
        res.status(500).json("Erreur de chargement de donnee")
    }
}

/**
 * Update formation
 * @param {*} req 
 * @param {*} res 
 */

 exports.UpdateFormation = async (req, res) => {
    try{
        await FormationModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json("Formation modifier avec succes")
    }catch(err){
        res.status(500).json("Erreur de modification")
    }
}

/**
 * Delete one formation data
 * @param {*} req 
 * @param {*} res 
 */


 exports.DeleteFormation = async (req, res) => {
    try{
        const formation = await FormationModel.findById(req.params.id);
        try{
            await FormationModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Formation supprimee avec succes")
        }catch(err){
            res.status(400).json("Erreu de la suppression")
        }
    }catch(err){
        res.status(500).json("Erreur de la suppression")
    }
}