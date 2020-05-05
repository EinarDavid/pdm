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
public class Campeonato {
    private String campeonato;
    private Equipo[] equipos;

    public Campeonato(String campeonato, Equipo[] equipos) {
        this.campeonato = campeonato;
        this.equipos = equipos;
    }

    public String getCampeonato() {
        return campeonato;
    }

    public void setCampeonato(String campeonato) {
        this.campeonato = campeonato;
    }

    public Equipo[] getEquipos() {
        return equipos;
    }

    public void setEquipos(Equipo[] equipos) {
        this.equipos = equipos;
    }
    
    public void imprimir(){
        System.out.println("Campeonato: " + campeonato);
        System.out.println("Equipos:");
        for(int i = 0; i < equipos.length; i++){
            equipos[i].imprimir();
        }
    }
}
