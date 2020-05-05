/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaClassesProy;

/**
 *
 * @author SpartanCat7
 */
public class Equipo {
    private String nombreEquipo;
    private String categoria;
    private Jugador[] jugadores;

    public Equipo(String nombreEquipo, String categoria, Jugador[] jugadores) {
        this.nombreEquipo = nombreEquipo;
        this.categoria = categoria;
        this.jugadores = jugadores;
    }

    public String getNombreEquipo() {
        return nombreEquipo;
    }

    public void setNombreEquipo(String nombreEquipo) {
        this.nombreEquipo = nombreEquipo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Jugador[] getJugadores() {
        return jugadores;
    }

    public void setJugadores(Jugador[] jugadores) {
        this.jugadores = jugadores;
    }
    
    public void imprimir(){
        System.out.println("Equipo: " + nombreEquipo);
        System.out.println("Categoria: " + categoria);
        System.out.println("Jugadores:");
        for(int i = 0; i < jugadores.length; i++){
            jugadores[i].imprimir();
        }
        System.out.println();
    }
}
