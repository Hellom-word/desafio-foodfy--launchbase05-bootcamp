const express = require ('express')
const routes = express.Router()
const recipes = require('./app/controllers/recipes')
const admin = require('./app/controllers/admin')


routes.get("/", recipes.index)
routes.get("/receitas", recipes.recipes)
routes.get("/sobre", recipes.about) 
routes.get("/recipes/:index", recipes.show)


routes.get("/admin", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita */


module.exports = routes