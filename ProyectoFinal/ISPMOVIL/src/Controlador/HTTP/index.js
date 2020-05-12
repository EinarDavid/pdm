//module.exports = rutas;
//function rutas(bd)

var ret = (passport)=> {

    var bd = require('./../../Modelo/BD/bd.js');
    bd.iniciar();
  
    const express = require('express');
    const rutas = express.Router();
  
    var cargos;
    var datos={cargos};
    rutas.use((req, res,next)=>
    {
      bd.cruds.crudUsuario.leer((car)=>{
        cargos=car;
        console.log(cargos)
        datos={cargos};
        next();
      });
    });
   
   console.log(datos)
    var ver = require('./../../Modelo/Autenticacion/verificar.js')
    require('./get/usuario.js')(rutas,bd,ver);
    
  
  
    rutas.get("/",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'inicio',
          datos
        });
    });
    
    rutas.get("/administracion",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'admin',
          datos
        });
    });

    rutas.get("/filtro",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'filtro',
          datos
        });
    });
    rutas.get("/poa",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'poa',
          datos
        });
    });

    rutas.get("/registro/bautizo",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        console.log(cargos)
        res.render("Paginas/index",
        {
          pagina: 'reg_bautizo', 
          datos
        });
    });

    rutas.get("/ministerial",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'ministerial', 
          datos
        });
    });
    
    rutas.get("/ev_min",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'ev_min', 
          datos
        });
    });

    rutas.get("/accion_social",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'accion_social', 
          datos
        });
    });

    rutas.get("/edu_cris",(req,res)=>
    {
        req.flash("confirm",req.app.locals.confirm[0]);
        req.flash("error",req.app.locals.error[0]);
        res.render("Paginas/index",
        {
          pagina: 'edu_cris', 
          datos
        });
    });
    rutas.post("/iniciar/sesion",passport.authenticate("local-login",
    {
      //successRedirect: '/Usuarios/Cuenta',
      failureRedirect: '/',
      failureFlash: true
    }), (req,res)=>
    {
        res.redirect('/registro/bautizo')
    });

    rutas.get("/cerrar/sesion",ver.verificar,(req,res)=>
    {
      req.logout();
      req.session.destroy();
      res.redirect("/");
    });
/*
    rutas.get("*",(req,res)=>
    {
      res.render("Paginas/error"); //Pagina error
    });*/
    
    require('./post/Registro/peticiones_bautizo.js').iniciar(rutas,bd,ver);
    require('./post/Registro/peticiones_solicitud.js').iniciar(rutas,bd,ver);
    require('./post/Registro/peticiones_transferencia.js').iniciar(rutas,bd,ver);
    require('./post/miembro_transferido/peticiones.js').iniciar(rutas,bd,ver); 
    require('./post/miembro_disciplina/peticiones.js').iniciar(rutas,bd,ver);
    require('./post/santa_cena/peticiones.js').iniciar(rutas, bd, ver);
    require('./post/presentacion_niños/peticiones.js').iniciar(rutas,bd,ver);
    require('./post/matrimonio/peticiones.js').iniciar(rutas,bd,ver);
    require('./post/usuario/peticiones.js').iniciar(rutas,bd,ver);
    require('./post/filtro/peticiones.js').iniciar(rutas,bd,ver);
    require('./post/reportes/peticiones.js').iniciar(rutas,bd,ver);
    
    return rutas;
  }
  
    module.exports = ret;
  