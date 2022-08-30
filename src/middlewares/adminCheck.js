const admin = ['ada','vin','tim','greta'];


module.exports = (req,res,next) =>{
    if(admin.includes(req.query.user)){
        next()
    }else{
        res.redirect('/login?error=tru')
    }
}