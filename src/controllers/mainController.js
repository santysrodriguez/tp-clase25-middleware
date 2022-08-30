module.exports = {
    index : (req,res) => {
        return res.render('index')
    },
    about : (req,res) => {
        return res.render('about')
    },
    contact : (req,res) => {
        return res.render('contact')
    },
    services : (req,res) => {
        return res.render('services')
    },
    admin : (req,res) => {
        return res.render('admin',{
            user : req.query.user
        })
    },
    login : (req,res) => {
        return res.render('login',{
            msg : req.query.error ? 'No tienes permiso para entrar' : null
        })
    }
}