const recData = require('./data')

exports.index = function(req, res){
    return res.render('ux/index.njk', {itens: recData})
}

exports.receitas = function(req, res){
    return res.render("ux/receitas.njk", {itens: recData})
}