module.exports = new peticion();
function peticion() {
    this.rutas;
    this.iniciar = (rutas, bd, ver) => {
        this.rutas = rutas;
        this.funciones(bd, ver);
    }

    this.funciones = (bd, ver) => {

        const multer = require('multer');
        var ruta = "./public/fotos/Membresia";
        var storage = multer.diskStorage({
            destination: ruta,
            filename: function (req, file, callback) {
                callback(null, file.fieldname + '-' + Date.now() + ".png");
            }
        });
        var upload = multer({ storage: storage }).fields(
            [
                {
                    name: 'imagen_membresia', maxCount:1
                },
                {
                    name: 'foto', maxCount:1
                }
            ]
        );

        this.rutas.post("/Registro/Solicitud", ver.verificarAdmin, (req, res) => {
            //ingresar los datos
            upload(req, res, function (err) {

                if (err) {
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error subiendo archivo' + err);
                }
                else {

                    var id_ci = req.body.id_ci;
                    var nombre = req.body.nombre;
                    var ap_paterno = req.body.ap_paterno;
                    var ap_materno = req.body.ap_materno;
                    var genero = req.body.genero;
                    var telefono = req.body.telefono;
                    var celular = req.body.celular;
                    var fecha_nac = req.body.fecha_nac;
                    var lugar = req.body.lugar;
                    var fecha_conversion = req.body.fecha_conversion;
                    var fecha_bautizo = req.body.fecha_bautizo;
                    var profesion = req.body.profesion;
                    var ocupacion = req.body.ocupacion;
                    var direccion = req.body.direccion;
                    var estado_civil = req.body.estado_civil;
                    
                    if (req.files.imagen_membresia!=null){
                        var imagen_membresia = req.files.imagen_membresia.filename;
                    }
                    else{
                        var imagen_membresia="";
                    }
                    
                    var email = req.body.email;
                    if (req.files.foto !=null){
                        var foto = req.files.foto.filename;
                    }
                    else{
                        var foto="";
                    }
                    var estado="";
                    var miembro_por='Solicitud';

                    var formulario=req.body.formulario;

                    bd.cruds.crudMembresia.leerCI(id_ci, (membresia) => {
                        //console.log(cliente);
                        if (membresia.length > 0) {
                            req.flash('error', 'La membresia ya fue registrada');
                            res.redirect('back');
                        }
                        else {
                            var datos = [
                                id_ci,
                                nombre,
                                ap_paterno,
                                ap_materno,
                                genero,
                                telefono,
                                celular,
                                fecha_nac,
                                lugar,
                                fecha_conversion,
                                fecha_bautizo,
                                profesion,
                                ocupacion,
                                direccion,
                                estado_civil,
                                imagen_membresia,
                                email,
                                foto,
                                estado,
                                miembro_por,
                                formulario
                            ];
                            bd.cruds.crudMembresiaSolicitud.ingresar(datos, () => {
                                req.flash('confirm', 'Membresia de: ' + nombre + ' ' + ap_paterno + ' ' + ap_materno + 'ingresada correctamente');
                                res.redirect('/registro/bautizo');
                            });
                        }
                    });
                }
            });
        });
        this.rutas.post("/Membresia/Modificar/Solicitud/:id", ver.verificarAdmin, (req, res) => {
            upload(req, res, function (err) {

                if (err) {
                    console.log(err, 'Im in post , inside upload' + ruta);
                    return res.end('Error uploading file.' + err);
                }
                else {
                    var id = req.params.id;

                    var nombre = req.body.nombre;
                    var ap_paterno = req.body.ap_paterno;
                    var ap_materno = req.body.ap_materno;
                    var genero = req.body.genero;
                    var telefono = req.body.telefono;
                    var celular = req.body.celular;
                    var fecha_nac = req.body.fecha_nac;
                    var lugar = req.body.lugar;
                    var fecha_conversion = req.body.fecha_conversion;
                    var fecha_bautizo = req.body.fecha_bautizo;
                    var profesion = req.body.profesion;
                    var ocupacion = req.body.ocupacion;
                    var direccion = req.body.direccion;
                    var estado_civil = req.body.estado_civil;
                    var imagen_membresia;
                    var email = req.body.email;
                    var formulario = req.body.formulario;
                    var foto;


                    if (imagen_membresia == "" || req.files.imagen_membresia == undefined) {
                        imagen_membresia = req.body.rutaoriginal;
                    }
                    else {
                        var imagen_membresia = req.files.imagen_membresia.filename;
                    }

                    if (foto == "" || req.files.foto == undefined) {
                        foto = req.body.rutaoriginal;
                    }
                    else {
                        var foto = req.files.foto.filename;
                    }
                    var datos = [
                        nombre,
                        ap_paterno,
                        ap_materno,
                        genero,
                        telefono,
                        celular,
                        fecha_nac,
                        lugar,
                        fecha_conversion,
                        fecha_bautizo,
                        profesion,
                        ocupacion,
                        direccion,
                        estado_civil,
                        imagen_membresia,
                        email,
                        foto,
                        formulario

                    ];
                    bd.cruds.crudMembresiaSolicitud.actualizar(datos, id, () => {
                        req.flash('confirm', 'Membresia modificada correctamente');
                        res.redirect('/registro/bautizo/' + id);
                    });
                }
            });


        });
    }
}
