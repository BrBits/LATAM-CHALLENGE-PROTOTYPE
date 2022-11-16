const path = require("path");

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "Interfaces"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "Interfaces")));


// exibição da página inicial
app.get("/", function(req, res){
    res.render("areaCentral");
});

app.get("/areaCentral", function(req, res){
    res.render("areaCentral");
});

app.get("/cadastroEmpresa", function(req, res){
    res.render("cadastroEmpresa");
});

app.get("/cadastroEstudante", function(req, res){
    res.render("cadastroEstudante");
});

app.get("/empresas", function(req, res){
    res.render("empresas");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/perfil", function(req, res){
    res.render("perfil");
});

app.get("/pesquisadores", function(req, res){
    res.render("pesquisadores");
});

app.get("/processos_bu", function(req, res){
    res.render("processos_bu");
});

app.get("/processos", function(req, res){
    res.render("processos");
});

app.get("/processos2", function(req, res){
    res.render("processos2");
});

app.get("/tipo_cad", function(req, res){
    res.render("tipo_cad");
});

// conexão com banco de dados
app.get("/", function(req, res){
    var sql = require('mysql');
    var config = {
        user: 'root',
        password: '#Minecraft123',
        server: '119.8.153.15',
        database: 'Scili_DB',
    }
    sql.connect(config, function(err){
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('SELECT * FROM UsersLoginInfo', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
});

app.listen(8081, function(){
    console.log("O app está rodando na porta 8081!");
});



