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
  /* if(this.turnoJugador > this.turnoMaquina) {
    this.quienGana();
  } */
  this.turnoMaquina = this.turnoMaquina + 1;
  console.log("jugador",this.turnoJugador);
  console.log("maquina",this.turnoMaquina);
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
      console.log("jugador",this.turnoJugador);
      console.log("maquina",this.turnoMaquina);
      if( this.turnoJugador == 1 ) {
        console.log("después del turno uno del jugador");
        this.maquinaAleatoriamente();
        console.log("la maquina tiro su primer turno");
      } 
      if (this.turnoMaquina < this.turnoJugador) {
        console.log("Entramos aquí"); //Aquí vamos
        this.predicionMaquina();
      } 
      
      if (this.turnoJugador == this.turnoMaquina ) {
        console.log("jugador",this.turnoJugador);
        console.log("maquina", this.turnoMaquina)
        this.quienGana();
      }
 }
  
 predicionMaquina() {

  /* this.turnoJugador = this.turnoJugador + 1; */
  console.log("hola");
  //Parte de arriba
  let numArray_A00 = this.matrizTriqui[0][0];
  let numArray_A01 = this.matrizTriqui[0][1];
  let numArray_A02 = this.matrizTriqui[0][2];
  console.log("00",numArray_A00);
  console.log("01",numArray_A01);
  console.log("02",numArray_A02);
  
  // centro
  let numArray_A10 = this.matrizTriqui[1][0];
  let numArray_A11 = this.matrizTriqui[1][1];
  let numArray_A12 = this.matrizTriqui[1][2];;
  //Parte de abajo
  let numArray_A20 = this.matrizTriqui[2][0];;
  let numArray_A21 = this.matrizTriqui[2][1];;
  let numArray_A22 = this.matrizTriqui[2][2];;
  //Diagonal izquierda derecha
  let numArray_A00DiagoLadoIzquierdo = numArray_A00;
  let numArray_A11DiagoLadoIzquierdo = numArray_A11;
  let numArray_A22DiagoLadoIzquierdo = numArray_A22;
  // Diagonal derecha a izquierda
  let numArray_A02DiagoLadoDerecho = numArray_A02;
  let numArray_A11DiagoLadoDerecho = numArray_A11;
  let numArray_A20DiagoLadoDerecho = numArray_A20;
 

  // Sumar si da 2 esa suma debe imprimir en la posición donde debería ser
  let suma_Arriba = numArray_A00 + numArray_A01 + numArray_A02;
  let sumaCentro = numArray_A10 + numArray_A11 + numArray_A12;
  let sumaAbajo = numArray_A20 + numArray_A21 + numArray_A22;
  let sumaDIagonalIzDe = numArray_A22DiagoLadoIzquierdo + numArray_A00DiagoLadoIzquierdo + numArray_A11DiagoLadoIzquierdo;
  let sumaDiagonalDeIz = numArray_A20DiagoLadoDerecho + numArray_A02DiagoLadoDerecho + numArray_A11DiagoLadoDerecho;

  let sumaArribaIzquierda = numArray_A00 + numArray_A10 + numArray_A20;
  let sumaArribaCentro = numArray_A01 + numArray_A11 + numArray_A21;
  let sumaArribaDerecha = numArray_A02 + numArray_A12 + numArray_A22;
  
  if( suma_Arriba == 2 || sumaAbajo == 2 || sumaCentro == 2 || sumaDIagonalIzDe == 2 || sumaDiagonalDeIz == 2 || sumaArribaIzquierda || sumaArribaCentro || sumaArribaDerecha ) {
    console.log("aqui debe poner la maquina para no perder");
    console.log("turno Maquina", this.turnoMaquina);
    console.log("sumaArriba", suma_Arriba);
    console.log("sumaCentro", sumaCentro);
    console.log("sumaAbajo", sumaAbajo);
    console.log("sumaAbajo", sumaDIagonalIzDe);
    console.log("sumaAbajo", sumaDiagonalDeIz);

    /* switch (this.turnoMaquina) {
          case 1: { */
              console.log("la maquina va a ser su siguiente turno");
            if ( suma_Arriba == 2 )
              if( this.matrizTriqui[0][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[0].splice(0,1,4);
                console.log("matriz turno 2", this.matrizTriqui);
  
              } else if ( this.matrizTriqui[0][1] === 0 ) {
                this.quienGana();
                this.matrizTriqui[0].splice(1,1,4);
                console.log("matriz turno 2", this.matrizTriqui);
              } else if( this.matrizTriqui[0][2] === 0 ) {
                this.quienGana();
                this.matrizTriqui[0].splice(2,1,4);
                console.log("matriz turno 2", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo); //
              } else {
                console.log("Paso algo ...");
              }
            if ( sumaCentro == 2 )
              if ( this.matrizTriqui[1][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[1].splice(0,1,4);
                console.log("matriz centro", this.matrizTriqui);
              } else if( this.matrizTriqui[1][1] === 0 ) {
                this.quienGana();
                this.matrizTriqui[1].splice(1,1,4);
                console.log("matriz centro", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              } else if ( this.matrizTriqui[1][2] === 0 ) {
                this.quienGana();
                this.matrizTriqui[1].splice(2,1,4);
                console.log("matriz centro", this.matrizTriqui);
              } else {
                console.log("paso algo..");
              }
            if ( sumaAbajo == 2 )
              if( this.matrizTriqui[2][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[2].splice(0,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              } else if ( this.matrizTriqui[2][1] === 0 ) {
                this.quienGana();
                this.matrizTriqui[2].splice(1,1,4);
                console.log("matrix abajo", this.matrizTriqui);
              } else if( this.matrizTriqui[2][2] === 0 ) {
                this.quienGana();
                this.matrizTriqui[2].splice(2,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              }  else {
                console.log("paso algo malo....");
              }                                                     
            //this.matrizTriqui[termino[0]].splice(termino[1],1,4);
            if ( sumaDIagonalIzDe == 2 )
              if( this.matrizTriqui[0][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[0].splice(0,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              } else if ( this.matrizTriqui[1][1] === 0 ) {
                this.quienGana();
                this.matrizTriqui[1].splice(1,1,4);
                console.log("matrix abajo", this.matrizTriqui);
              } else if( this.matrizTriqui[2][2] === 0 ) {
                this.quienGana();
                this.matrizTriqui[2].splice(2,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              }  else {
                console.log("paso algo malo....");
              }
            
            if ( sumaDiagonalDeIz == 2 )
              if( this.matrizTriqui[2][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[2].splice(0,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              } else if ( this.matrizTriqui[1][1] === 0 ) {
                this.quienGana();
                this.matrizTriqui[1].splice(1,1,4);
                console.log("matrix abajo", this.matrizTriqui);
              } else if( this.matrizTriqui[0][2] === 0 ) {
                this.quienGana();
                this.matrizTriqui[0].splice(2,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              }  else {
                console.log("paso algo malo....");
              }  
//
              if ( sumaArribaIzquierda == 2 )
              if( this.matrizTriqui[0][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[0].splice(0,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              } else if ( this.matrizTriqui[1][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[1].splice(0,1,4);
                console.log("matrix abajo", this.matrizTriqui);
              } else if( this.matrizTriqui[2][0] === 0 ) {
                this.quienGana();
                this.matrizTriqui[2].splice(0,1,4);
                console.log("matrix abajo", this.matrizTriqui);
                console.log("copia arreglo", this.copiaArreglo);
              }  else {
                console.log("paso algo malo....");
              }  

              if ( sumaArribaCentro == 2 )
                if( this.matrizTriqui[0][1] === 0 ) {
                  this.quienGana();
                  this.matrizTriqui[0].splice(1,1,4);
                  console.log("matrix abajo", this.matrizTriqui);
                  console.log("copia arreglo", this.copiaArreglo);
                } else if ( this.matrizTriqui[1][1] === 0 ) {
                  this.quienGana();
                  this.matrizTriqui[1].splice(1,1,4);
                  console.log("matrix abajo", this.matrizTriqui);
                } else if( this.matrizTriqui[2][1] === 0 ) {
                  this.quienGana();
                  this.matrizTriqui[2].splice(1,1,4);
                  console.log("matrix abajo", this.matrizTriqui);
                  console.log("copia arreglo", this.copiaArreglo);
                }  else {
                  console.log("paso algo malo....");
                }  

              if ( sumaArribaDerecha == 2 )
                if( this.matrizTriqui[0][2] === 0 ) {
                  this.quienGana();
                  this.matrizTriqui[0].splice(2,1,4);
                  console.log("matrix abajo", this.matrizTriqui);
                  console.log("copia arreglo", this.copiaArreglo);
                } else if ( this.matrizTriqui[1][2] === 0 ) {
                  this.quienGana();
                  this.matrizTriqui[1].splice(2,1,4);
                  console.log("matrix abajo", this.matrizTriqui);
                } else if( this.matrizTriqui[2][2] === 0 ) {
                  this.quienGana();
                  this.matrizTriqui[2].splice(2,1,4);
                  console.log("matrix abajo", this.matrizTriqui);
                  console.log("copia arreglo", this.copiaArreglo);
                }  else {
                  console.log("paso algo malo....");
                }  

  
  console.log("turno Maquina", this.turnoMaquina);
                  
           /*  break;
          }
          default: { 
            statements; 
            break; 
         }  */
    }
  }

    quienGana() {
      let numArray_A00 = this.matrizTriqui[0][0];
      let numArray_A01 = this.matrizTriqui[0][1];
      let numArray_A02 = this.matrizTriqui[0][2];
      console.log("00",numArray_A00);
      console.log("01",numArray_A01);
      console.log("02",numArray_A02);
      
      // centro
      let numArray_A10 = this.matrizTriqui[1][0];
      let numArray_A11 = this.matrizTriqui[1][1];
      let numArray_A12 = this.matrizTriqui[1][2];;
      //Parte de abajo
      let numArray_A20 = this.matrizTriqui[2][0];;
      let numArray_A21 = this.matrizTriqui[2][1];;
      let numArray_A22 = this.matrizTriqui[2][2];;
      //Diagonal izquierda derecha
      let numArray_A00DiagoLadoIzquierdo = numArray_A00;
      let numArray_A11DiagoLadoIzquierdo = numArray_A11;
      let numArray_A22DiagoLadoIzquierdo = numArray_A22;
      // Diagonal derecha a izquierda
      let numArray_A02DiagoLadoDerecho = numArray_A02;
      let numArray_A11DiagoLadoDerecho = numArray_A11;
      let numArray_A20DiagoLadoDerecho = numArray_A20;
     
    
      // Sumar si da 2 esa suma debe imprimir en la posición donde debería ser
      let suma_Arriba = numArray_A00 + numArray_A01 + numArray_A02;
      let sumaCentro = numArray_A10 + numArray_A11 + numArray_A12;
      let sumaAbajo = numArray_A20 + numArray_A21 + numArray_A22;
      let sumaDIagonalIzDe = numArray_A22DiagoLadoIzquierdo + numArray_A00DiagoLadoIzquierdo + numArray_A11DiagoLadoIzquierdo;
      let sumaDiagonalDeIz = numArray_A20DiagoLadoDerecho + numArray_A02DiagoLadoDerecho + numArray_A11DiagoLadoDerecho;

      let sumaArribaIzquierda = numArray_A00 + numArray_A10 + numArray_A20;
      let sumaArribaCentro = numArray_A01 + numArray_A11 + numArray_A21;
      let sumaArribaDerecha = numArray_A02 + numArray_A12 + numArray_A22;
    
      
      if( suma_Arriba == 8 || sumaAbajo == 8 || sumaCentro == 8 || sumaDIagonalIzDe == 8 || sumaDiagonalDeIz == 8 || sumaArribaIzquierda || sumaArribaCentro || sumaArribaDerecha) {
        /* console.log("aqui debe poner la maquina para no perder");
        console.log("turno Maquina", this.turnoMaquina);
        console.log("sumaArriba", suma_Arriba);
        console.log("sumaCentro", sumaCentro);
        console.log("sumaAbajo", sumaAbajo);
        console.log("sumaAbajo", sumaDIagonalIzDe);
        console.log("sumaAbajo", sumaDiagonalDeIz); */
  
        if ( suma_Arriba == 8 )
        if( this.matrizTriqui[0][0] === 0 ) {
          this.matrizTriqui[0].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if ( this.matrizTriqui[0][1] === 0 ) {
          this.matrizTriqui[0].splice(1,1,4);
          console.log("GANO LA MAQUINA")
        } else if( this.matrizTriqui[0][2] === 0 ) {
          this.matrizTriqui[0].splice(2,1,4);
          console.log("GANO LA MAQUINA")
        } else {
          console.log("Paso algo ...");
        }
      if ( sumaCentro == 8 )
        if ( this.matrizTriqui[1][0] === 0 ) {
          this.matrizTriqui[1].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if( this.matrizTriqui[1][1] === 0 ) {
          this.matrizTriqui[1].splice(1,1,4);
          console.log("GANO LA MAQUINA")
        } else if ( this.matrizTriqui[1][2] === 0 ) {
          this.matrizTriqui[1].splice(2,1,4);
          console.log("GANO LA MAQUINA")
        } else {
          console.log("paso algo..");
        }
      if ( sumaAbajo == 8 )
        if( this.matrizTriqui[2][0] === 0 ) {
          this.matrizTriqui[2].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if ( this.matrizTriqui[2][1] === 0 ) {
          this.matrizTriqui[2].splice(1,1,4);
          console.log("matrix abajo", this.matrizTriqui);
        } else if( this.matrizTriqui[2][2] === 0 ) {
          this.matrizTriqui[2].splice(2,1,4);
          console.log("GANO LA MAQUINA")
        }  else {
          console.log("paso algo malo....");
        }                                                     
      //this.matrizTriqui[termino[0]].splice(termino[1],1,4);
      if ( sumaDIagonalIzDe == 8 )
        if( this.matrizTriqui[0][0] === 0 ) {
          this.matrizTriqui[0].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if ( this.matrizTriqui[1][1] === 0 ) {
          this.matrizTriqui[1].splice(1,1,4);
          console.log("GANO LA MAQUINA")
        } else if( this.matrizTriqui[2][2] === 0 ) {
          this.matrizTriqui[2].splice(2,1,4);
          console.log("GANO LA MAQUINA")
        }  else {
          console.log("paso algo malo....");
        }
      
      if ( sumaDiagonalDeIz == 8 )
        if( this.matrizTriqui[2][0] === 0 ) {
          this.matrizTriqui[2].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if ( this.matrizTriqui[1][1] === 0 ) {
          this.matrizTriqui[1].splice(1,1,4);
          console.log("GANO LA MAQUINA")
        } else if( this.matrizTriqui[0][2] === 0 ) {
          this.matrizTriqui[0].splice(2,1,4);
          console.log("GANO LA MAQUINA")
        }  else {
          console.log("paso algo malo....");
        } 
        
        if ( sumaArribaIzquierda == 8 )
        if( this.matrizTriqui[0][0] === 0 ) {
          this.matrizTriqui[0].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if ( this.matrizTriqui[1][0] === 0 ) {
          this.matrizTriqui[1].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        } else if( this.matrizTriqui[2][0] === 0 ) {
          this.matrizTriqui[2].splice(0,1,4);
          console.log("GANO LA MAQUINA")
        }  else {
          console.log("paso algo malo....");
        }  

        if ( sumaArribaCentro == 8 )
          if( this.matrizTriqui[0][1] === 0 ) {
            this.matrizTriqui[0].splice(1,1,4);
            console.log("GANO LA MAQUINA")
          } else if ( this.matrizTriqui[1][1] === 0 ) {
            this.matrizTriqui[1].splice(1,1,4);
            console.log("GANO LA MAQUINA")
          } else if( this.matrizTriqui[2][1] === 0 ) {
            this.matrizTriqui[2].splice(1,1,4);
            console.log("GANO LA MAQUINA")
          }  else {
            console.log("paso algo malo....");
          }  

        if ( sumaArribaDerecha == 8 )
          if( this.matrizTriqui[0][2] === 0 ) {
            this.matrizTriqui[0].splice(2,1,4);
            console.log("GANO LA MAQUINA")
          } else if ( this.matrizTriqui[1][2] === 0 ) {
            this.matrizTriqui[1].splice(2,1,4);
            console.log("GANO LA MAQUINA")
          } else if( this.matrizTriqui[2][2] === 0 ) {
            this.matrizTriqui[2].splice(2,1,4);
            console.log("GANO LA MAQUINA")
          }  else {
            console.log("paso algo malo....");
          }
      
  
      }
      
      /* console.log("turno Maquina", this.turnoMaquina); */
      /* this.turnoJugador = 0; */
  
    }
    
}

 




