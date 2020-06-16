import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { ModalInfoPage } from '../modal/modal-info/modal-info.page';
import { ModalController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  provincias: any[];
  nombreProvincias: any[];
  provincia = '';

  constructor(private dataService: DataService, private modalController: ModalController) {}

  ngOnInit () {
    this.obtenerLista()
  }

  obtenerLista() {
    this.dataService.obtenerListado().subscribe((data: any[]) => {
      this.provincias = data;
      this.getProvincias(data);
    })  
  }

  getProvincias(data){
    this.nombreProvincias = data.provincias;
    console.log(this);
  }

  buscarProvincia(event) {
    this.provincia = event.target.value;
  }

  async abrirModal(provincia) {
    const provinciaDetalle = provincia;
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: { provinciaDetalle }
    });
    await modal.present();
  }

}
