const db = require('../models')

const AboutModel = db.about;

exports.AddAbout = async (req, res) =>{
    try{
        const about = await AboutModel({
            name: req.body.name,
            lastname: req.body.lastname,
            dateBirth: req.body.dateBirth,
            description: req.body.description,
            adress: req.body.adress,
            city: req.body.city,
            country: req.body.country,
        })

        const aboutme = await about.save()
        res.status(200).json(aboutme)
    }catch(err){
        console.log(err)
    }
}

exports.getAllAbout = async (req, res) => {
    try{
        await AboutModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement")
            res.status(200).json(data)
        })
    }catch(err){
       res.status(500).json("Erreur de chargement de donnee")
    }
}

exports.getOneAbout = async (req, res) =>{
    try{
        const about = await AboutModel.findById(req.params.id)
        res.status(200).json(about)
    }catch(err){
        res.status(500).json("Erreur de chargement de donnee")
    }
}

exports.UpdateAbout = async (req, res) => {
    try{
        await AboutModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json("A propos de moi modifier avec succes")
    }catch(err){
        res.status(500).json("Erreur de modification")
    }
}

exports.DeleteAbout = async (req, res) => {
    try{
        const ab = await AboutModel.findById(req.params.id);
        try{
            await AboutModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Apropos bien supprimer")
        }catch(err){
            res.status(400).json("Erreu de suppression")
        }
    }catch(err){
        res.status(500).json("Erreur de modification")
    }
}