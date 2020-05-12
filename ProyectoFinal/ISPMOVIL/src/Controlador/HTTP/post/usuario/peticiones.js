module.exports = new peticion();

function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        this.rutas.post("/Registro/Usuario", ver.verificarAdmin, (req, res) => {
            const bcryptjs = require('bcryptjs');
            var id_ci = req.body.id_ci;
            var password = req.body.password;
            var id_cargo = req.body.id_cargo;
            var actividad=0;
            bd.cruds.crudMembresia.leerCI(id_ci, (reg) => {
                if (reg.length > 0) {
                    bd.cruds.crudUsuario.leerCI(id_ci, (registro) => {
                        //console.log(cliente);
                        if (registro.length > 0) {
                            req.flash('error', 'Usuario ya fue registrado');
                            res.redirect('back');
                        }
                        else {
                            bcryptjs.genSalt(10, function (err, salt) {
                                bcryptjs.hash(password, salt, function (err, hash) {
                                    var datos = [
                                        id_ci,
                                        reg[0].nombre+reg[0].ap_paterno+reg[0].ap_materno,
                                        hash,
                                        id_cargo,
                                        actividad
                                    ];
                                    bd.cruds.crudUsuario.ingresar(datos, () => {
                                        req.flash('confirm', 'Usuario registrado correctamente');
                                        res.redirect('/registro/bautizo');
                                    });
                                });
                            });

                        }
                    });
                } else {
                    req.flash('error', 'Membresia no existe');
                    res.redirect('back');
                }
            });

        });
        this.rutas.post("/Usuario/Modificar/:id", ver.verificarAdmin, (req, res) => {

            var id = req.params.id;

            var id_ci = req.body.id_ci;
            var password = req.body.password;
            var id_cargo = req.body.id_cargo;

            var datos = {
                id_ci,
                password,
                id_cargo

            };
            bd.cruds.crudUsuario.actualizar(datos, id, () => {
                req.flash('confirm', 'Usuario modificado correctamente');
                res.redirect('/Usuario/Ver/' + id);
            });


        });
    }
}
