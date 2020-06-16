import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service.service';
import { ModalInfoPage } from '../../modal/modal-info/modal-info.page';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  provincias: any[];
  nombreProvincias: any[];
  provincia = '';

  constructor(private dataService: DataService, private modalController: ModalController, private authService: AuthService) {}

  ngOnInit () {
    this.obtenerLista()
  }

  logout() {
    this.authService.usuarioLogeado();
  }

  obtenerLista() {
    this.dataService.obtenerListado().subscribe((data: any[]) => {
      this.provincias = data;
      this.getProvincias(data);
    })  
  }

  getProvincias(data){
    this.nombreProvincias = data.provincias;
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
