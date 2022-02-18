const { contact } = require("../models");
const db = require("../models")

const ContactModel = db.contact;

exports.AddContact = async (req, res)=>{
    try{
        const contact = await ContactModel({
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            email: req.body.email,
            linkedinProfile: req.body.linkedinProfile,
            githubUrl: req.body.githubUrl
        })
        const l = await contact.save();
        res.status(200).json(l)
    }catch(err){
        console.log(err)
    }
}

/** 
 * get All contact data
*/

exports.getAllContacts = async (req, res) => {
    try{
        await ContactModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement")
            res.status(200).json(data)
        })
    }catch{
        res.status(500).json("Erreur de chargement de donnee")
    }
}

/**
 * get One contact data
 * @param {*} req 
 * @param {*} res 
 */

 exports.getOneContact = async (req, res) =>{
    try{
        const contact = await ContactModel.findById(req.params.id)
        res.status(200).json(contact)
    }catch(err){
        res.status(500).json("Erreur de chargement de donnee")
    }
}

/**
 * Update contact
 * @param {*} req 
 * @param {*} res 
 */

 exports.UpdateContact = async (req, res) => {
    try{
        await ContactModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json("Contact modifier avec succes")
    }catch(err){
        res.status(500).json("Erreur de modification")
    }
}

/**
 * Delete one contact data
 * @param {*} req 
 * @param {*} res 
 */


 exports.DeleteContact = async (req, res) => {
    try{
        const contact = await ContactModel.findById(req.params.id);
        try{
            await ContactModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Contact supprimee avec succes")
        }catch(err){
            res.status(400).json("Erreu de la suppression")
        }
    }catch(err){
        res.status(500).json("Erreur de la suppression")
    }
}