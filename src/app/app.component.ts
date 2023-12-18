import { Component, OnInit} from '@angular/core';
import { IFicha } from './interfaces/ficha';
import { ITablero } from './interfaces/tablero';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'puzzlegame';

  haswin:boolean = false;

  tablero: ITablero={
    filas:5,
    columnas:4,
  }

  fichavacia:IFicha = {
    id:0,
    filas:0,
    columnas:0,
    color:"",
    posx:0,
    posy:0
  }

  fichaprincipal: IFicha = this.fichavacia;

  fichalateral1: IFicha = this.fichavacia;
  fichalateral2: IFicha = this.fichavacia;
  fichalateral3: IFicha = this.fichavacia;
  fichalateral4: IFicha = this.fichavacia;

  fichahorizontal1: IFicha = this.fichavacia;

  fichacuadrado1: IFicha = this.fichavacia;
  fichacuadrado2: IFicha = this.fichavacia;
  fichacuadrado3: IFicha = this.fichavacia;
  fichacuadrado4: IFicha = this.fichavacia;

  contador:number = 0;
  

  fichas: IFicha[] = [];

  constructor() {}

  ngOnInit() {

    this.fichaprincipal={
      id: 1,
      filas:2,
      columnas:2,
      color: "rgba(159, 13, 50, 1)",
      posx:4,
      posy:2
    };
  
    this.fichalateral1 = {
      id:2,
      filas:2,
      columnas:1,
      color:"rgba(46, 46, 81, 1)",
      posx:4,
      posy:1
    }

    this.fichalateral2 = {
      id:3,
      filas:2,
      columnas:1,
      color:"rgba(46, 46, 81, 1)",
      posx:4,
      posy:4
    }

    this.fichalateral3 = {
      id:4,
      filas:2,
      columnas:1,
      color:"rgba(46, 46, 81, 1)",
      posx:2,
      posy:1
    }

    this.fichalateral4 = {
      id:5,
      filas:2,
      columnas:1,
      color:"rgba(46, 46, 81, 1)",
      posx:2,
      posy:4
    }

    this.fichahorizontal1 = {
      id:6,
      filas:1,
      columnas:2,
      color:"rgba(46, 46, 81, 1)",
      posx:3,
      posy:2
    }

    this.fichacuadrado1 = {
      id:7,
      filas:1,
      columnas:1,
      color:"rgba(247, 216, 179, 1)",
      posx:1,
      posy:1
    }

    this.fichacuadrado2 = {
      id:8,
      filas:1,
      columnas:1,
      color:"rgba(247, 216, 179, 1)",
      posx:1,
      posy:4
    }

    this.fichacuadrado3 = {
      id:9,
      filas:1,
      columnas:1,
      color:"rgba(247, 216, 179, 1)",
      posx:2,
      posy:2
    }

    this.fichacuadrado4 = {
      id:10,
      filas:1,
      columnas:1,
      color:"rgba(247, 216, 179, 1)",
      posx:2,
      posy:3
    }


    this.fichas = [
      this.fichaprincipal,
      this.fichalateral1,
      this.fichalateral2,
      this.fichalateral3,
      this.fichalateral4,
      this.fichahorizontal1,
      this.fichacuadrado1,
      this.fichacuadrado2,
      this.fichacuadrado3,
      this.fichacuadrado4
    ];

  }


// MOVER A LA IZQUIERDA 
private puedeMoverIzquierda(ficha: IFicha): boolean {

  const nuevaPosicionY = ficha.posy - 1;
  const nuevaPosicionX = ficha.posx;


  if ( ficha.posy > 1 && this.verificarColicion(ficha, nuevaPosicionX, nuevaPosicionY) ){
    return true
  }
  else{
    return false
  }
}

 moverIzq(ficha: IFicha) {

  if (this.puedeMoverIzquierda(ficha)) {
    ficha.posy--;
    this.contador++;
  } else {
    console.log("No se puede mover a la izquierda");
  }
}

//////////////////////

// MOVER A LA DERECHA
private puedeMoverDerecha(ficha: IFicha): boolean {

  const nuevaPosicionY = ficha.posy + 1;
  const nuevaPosicionX = ficha.posx;

  if (ficha.posy+ficha.columnas <= this.tablero.columnas && this.verificarColicion(ficha, nuevaPosicionX, nuevaPosicionY )){
    return true
  }
  else{
    return false
  }
}

moverDer(ficha: IFicha) {
  if (this.puedeMoverDerecha(ficha)) {
    ficha.posy++;
    this.contador++;
  } else {
    console.log("No se puede mover a la derecha");
  }
}
//////////////////////

// MOVER ARRIBA

private puedeMoverArriba(ficha: IFicha): boolean {

  const nuevaPosicionY = ficha.posy;
  const nuevaPosicionX = ficha.posx - 1 ;


  if (ficha.id === 1 && ficha.posx === 1 && ficha.posy === 2){
    console.log("ganaste");
    this.haswin = true;
  }
  else{
    
      if (ficha.posx > 1 && this.verificarColicion(ficha, nuevaPosicionX, nuevaPosicionY )){
        return true
      }
    }
  return false
    
}

moverArriba(ficha: IFicha){

  if (this.puedeMoverArriba(ficha)) {
    ficha.posx--;
    this.contador++;
  } else {
    console.log("No se puede mover hacia arriba");
  }
}
//////////////////////

// MOVER ABAJO

private puedeMoverAbajo(ficha: IFicha): boolean {

  const nuevaPosicionY = ficha.posy;
  const nuevaPosicionX = ficha.posx + 1;

  if (ficha.posx+ficha.filas <= this.tablero.filas && this.verificarColicion(ficha, nuevaPosicionX, nuevaPosicionY )){
    return true
  }
  else{
    return false
  }
}

  moverAbajo(ficha:IFicha){
     if (this.puedeMoverAbajo(ficha)) {
      ficha.posx++;
      this.contador++;
    } else {
      console.log("No se puede mover hacia abajo");
    }
  }
//////////////////////

verificarColicion(ficha: IFicha, nuevaPosicionX: number, nuevaPosicionY: number): boolean {
    // Verificar si hay alguna ficha en la nueva posición
    for (const otraFicha of this.fichas) {
      if (
        otraFicha !== ficha &&
        nuevaPosicionX < otraFicha.posx + otraFicha.filas &&
        nuevaPosicionX + ficha.filas > otraFicha.posx &&
        nuevaPosicionY < otraFicha.posy + otraFicha.columnas &&
        nuevaPosicionY + ficha.columnas > otraFicha.posy
      ) {
        console.log("Colisión con otra ficha");
        return false;
      }
    }
    return true;
  }

  reiniciarJuego(){

    this.contador = 0;
    this.haswin = false;
    this.ngOnInit();

  }

}