const accessControl = (req,res,next)=>{
    const acces = false;
    if(!acces){
        res.status(401).json({
            success: false,
            message: "you are not authorized"
        });
    }
    next();
    
};

module.exports={
    accessControl
};