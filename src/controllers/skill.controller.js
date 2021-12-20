const db = require("../models")

const TypeModel = db.type;
const SkillModel = db.skill

exports.AddSkill = (req, res) => {
    const skill = new SkillModel({
      title: req.body.title,
      level: req.body.level
    });
  
    skill.save((err, type) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
    
        if (req.body.types) {
            TypeModel.find(
                {
                    name: { $in: req.body.types }
                },
                (err, types) => {
                    if (err) {
                    res.status(500).send({ message: err });
                    return;
                    }
        
                    skill.types = types.map(t => t._id);
                    skill.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
        
                    res.send({ message: "Competence ajouter avec success!" });
                    });
                }
            );
        } 
        else {
            TypeModel.findOne({ name: "Autres" }, (err, type) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
        
                skill.types = [type._id];
                skill.save(err => {
                    if (err) {
                    res.status(500).send({ message: err });
                    return;
                    }
        
                    res.send({ message: "Competence creer avec success!" });
                });
            });
        }
    });
};

exports.getAllSkills = async (req, res) => {
    try{
        await SkillModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement");
            res.status(200).json(data)
        });
    }catch(err){
        res.send({status: 500, message: "Data vide"})
    }
}

exports.getOneSkill = async (req, res) => {
    try{
        const skill = await SkillModel.findById(req.params.id);
        res.status(200).json(skill)
    }catch(err){
        res.send({
            status: 500,
            message: "Skill introuvable"
        })
    }
}

exports.UpdateSkill = async (req, res) => {
    try{
        const skillUpdate = await SkillModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        console.log(skillUpdate)
        res.status(200).json("OK")
    }catch(err){
        res.status(500).json("Erreur de modification de competence")
    }
}

exports.deleteSkill = async (req, res) => {
    try{
        const ab = await SkillModel.findById(req.params.id);
        try{
            await SkillModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Skill bien supprimer")
        }catch(err){
            res.status(400).json("Erreu de suppression")
        }
    }catch(err){
        res.status(500).json("Pas de donne valable")
    }
}