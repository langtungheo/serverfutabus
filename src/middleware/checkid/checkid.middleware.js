
const checkIdMiddleware =  (Model, modelName) => {
    return async (req, res, next) =>{
        const {id} = req.params;
        const result = await Model.findOne({
            where : {
                id : id
            }
        })
        if(result){
            next()
        }
        else{
            res.status(404).send(`no ${modelName} found with id : ${id}`);
        }
    }
}    
module.exports = {
    checkIdMiddleware,

}