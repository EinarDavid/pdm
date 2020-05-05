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
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Jugador jugador1 = new Jugador("Pepito1", "Huiy Ter1", "4553422 cbba", 20);
        Jugador jugador2 = new Jugador("Pepito2", "Huiy Ter2", "4553422 cbba", 24);
        Jugador jugador3 = new Jugador("Pepito3", "Huiy Ter3", "4553422 cbba", 25);
        Jugador jugador4 = new Jugador("Pepito4", "Huiy Ter4", "4553422 cbba", 18);
        Jugador jugador5 = new Jugador("Pepito5", "Huiy Ter5", "4553422 cbba", 22);
        
        Jugador[] jugadores = new Jugador[5];
        jugadores[0] = jugador1;
        jugadores[1] = jugador2;
        jugadores[2] = jugador3;
        jugadores[3] = jugador4;
        jugadores[4] = jugador5;
        
        Equipo equipo = new Equipo("Not Found", "Varones", jugadores);
        Equipo[] equipos = new Equipo[1];
        equipos[0] = equipo;
        
        Campeonato campeonato = new Campeonato("Campeonato Unifranz", equipos);
        campeonato.imprimir();
    }
    
}
