import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';

  mostrarInfo: string = "";
  erDNI = '^[0-9]{8}[A-Za-z]{1}$';

  enviarDatos(nombre, dni){
    if(nombre.value == ""){
      alert("El nombre esta vacio");
    }

    if(dni.match(this.erDNI)){
      this.mostrarInfo = "DNI correcto";
    }else{
      this.mostrarInfo = "DNI incorrecto";
    }
  }



}

