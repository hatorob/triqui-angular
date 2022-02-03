import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

   /* matrizOne: number[] = [0,0,0];
   matrizDos: number[] = [0,0,0];
   matrizTres: number[] = [0,0,0]; */
  
   matrizTriqui: any[] = [ 
     [0,0,0], 
     [0,0,0], 
     [0,0,0] 
   ];
  
   turnoJugador: number = 0;
   turnoMaquina: number = 0;
   copiaArreglo: any[] = [];

  constructor( ) { 
      
  }



  ngOnInit(): void {
  }

  jugador( termino: any) {
  
  console.log(termino);
  this.turnoJugador =  this.turnoJugador + 1;
  console.log("turno",this.turnoJugador);
  this.matrizTriqui[termino[0]].splice(termino[1],1,1);
  console.log("matriz turno 1", this.matrizTriqui);
  this.juego();

 }

 maquinaAleatoriamente() {


  let aleatorioUno;
  let aleatorioDos;
  let copia;
  aleatorioUno = Math.floor((Math.random() * (2 - 0 + 1)) + 0);
  aleatorioDos = Math.floor((Math.random() * (2 - 0 + 1)) + 0);

  /* let posicionAleatoria = [
    aleatorioUno,
    aleatorioDos
  ]; */

  
  this.copiaArreglo = this.matrizTriqui.slice();
  console.log("copia Arr", this.copiaArreglo);
  this.ingresarAleatorio( aleatorioUno, aleatorioDos);
  /* this.copiaArreglo[aleatorioUno].splice(aleatorioDos,1,4); */
 
  
 }

 ingresarAleatorio( aleatorioUno: number, aleatorioDos: number ) {
  let number1;
  let number2;
  console.log("ale1",aleatorioUno);
  console.log("ale2",aleatorioDos);

      switch(aleatorioUno) { 
        case 0: { 
                        for(let i = 0; i < this.copiaArreglo.length ; i++){
                          console.log(i);
                          
                           if( i === aleatorioUno ) {
                            console.log("si entro");
                            if(aleatorioDos === 0) {
                              number1 = this.copiaArreglo[0][1];
                              number2 = this.copiaArreglo[0][2];
                              this.copiaArreglo[aleatorioUno] = [1,number1,number2];
                              this.sonIguales(aleatorioUno,aleatorioDos);
                              
                            } else if(aleatorioDos === 1 ) {
                               number1 = this.copiaArreglo[0][0];
                               number2 = this.copiaArreglo[0][2];
                               this.copiaArreglo[aleatorioUno] = [number1,1,number2];
                               this.sonIguales(aleatorioUno,aleatorioDos);
                               
                            } else if ( aleatorioDos === 2 ) {
                              number1 = this.copiaArreglo[0][0];
                              number2 = this.copiaArreglo[0][1];
                              this.copiaArreglo[aleatorioUno] = [number1,number2,1];
                              this.sonIguales(aleatorioUno,aleatorioDos);
                              
                            } else {
                              console.log("nada");
                            }
                          }
                        }
           break; 
        } 
        case 1: { 
                        for(let i = 0; i < this.copiaArreglo.length ; i++){
                          console.log(i);
                          
                           if( i === aleatorioUno ) {
                            console.log("si entro");
                            if(aleatorioDos === 0) {
                              number1 = this.copiaArreglo[1][1];
                              number2 = this.copiaArreglo[1][2];
                              this.copiaArreglo[aleatorioUno] = [1,number1,number2];
                              this.sonIguales(aleatorioUno,aleatorioDos);
                              
                            } else if(aleatorioDos === 1 ) {
                               number1 = this.copiaArreglo[1][0];
                               number2 = this.copiaArreglo[1][2];
                               this.copiaArreglo[aleatorioUno] = [number1,1,number2];
                               this.sonIguales(aleatorioUno,aleatorioDos);
                               
                            } else if ( aleatorioDos === 2 ) {
                              number1 = this.copiaArreglo[1][0];
                              number2 = this.copiaArreglo[1][1];
                              this.copiaArreglo[aleatorioUno] = [number1,number2,1];
                              this.sonIguales(aleatorioUno,aleatorioDos);
                              
                            } else {
                              console.log("nada");
                            }
                          }
                        }
           break; 
        } 
        case 2: { 
                          for(let i = 0; i < this.copiaArreglo.length ; i++){
                            console.log(i);
                            
                             if( i === aleatorioUno ) {
                              console.log("si entro");
                              if(aleatorioDos === 0) {
                                number1 = this.copiaArreglo[2][1];
                                number2 = this.copiaArreglo[2][2];
                                this.copiaArreglo[aleatorioUno] = [1,number1,number2];
                                this.sonIguales(aleatorioUno,aleatorioDos);
                                
                              } else if(aleatorioDos === 1 ) {
                                 number1 = this.copiaArreglo[2][0];
                                 number2 = this.copiaArreglo[2][2];
                                 this.copiaArreglo[aleatorioUno] = [number1,1,number2];
                                 this.sonIguales(aleatorioUno,aleatorioDos);
                                 
                              } else if ( aleatorioDos === 2 ) {
                                number1 = this.copiaArreglo[2][0];
                                number2 = this.copiaArreglo[2][1];
                                this.copiaArreglo[aleatorioUno] = [number1,number2,1];
                                this.sonIguales(aleatorioUno,aleatorioDos);
                                
                              } else {
                                console.log("nada");
                              }
                            }
                          }
          break; 
       } 
        default: { 
           //statements; 
           break; 
        } 
     } 
 
  }

 sonIguales(aleatorioUno: number, aleatorioDos: number) {
  
  console.log("triqui",this.matrizTriqui);
  console.log("copia",this.copiaArreglo);

  if(this.copiaArreglo.toString() === this.matrizTriqui.toString()) {
    console.log("son iguales");
    this.turnoMaquina = 0;
    this.copiaArreglo = [];
    this.maquinaAleatoriamente();
  } else {
    console.log("No son iguales");
    this.matrizTriqui[aleatorioUno].splice(aleatorioDos,1,4);
    this.copiaArreglo = [];
  }

 }

 juego() {

      if( this.turnoJugador == 1 ) {
        console.log("después del turno uno del jugador");
        this.maquinaAleatoriamente();
        console.log("la maquina tiro su primer turno");
      } 
      if (this.turnoJugador == 2) {
        console.log("Entramos aquí"); //Aquí vamos
      }
 }
  
}
