const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const {user} = req.headers;
        const {devId} = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: "Dev not exists"});
        }

        if(loggedDev.likes.includes(targetDev._id)){
            console.log("DEU MATCH");
        }

        targetDev.likes.push(loggedDev._id);

        await targetDev.save();

        return res.json({ targetDev });
    }
}