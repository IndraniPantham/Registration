import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  regNo;
  constructor(private http: HttpClient, private _router: Router, public dataService: DataService, public alertController: AlertController) { }
  apiCall;
  loading = false;
  message;
  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.apiCall = new HttpService(this.http);
    this.apiCall.getHttpData(this.regNo.slice(this.regNo.length - 4), this.regNo.slice(0, this.regNo.length - 4)).subscribe(
      (data) => {
        this.loading = false;
        console.log(data);
        if (data.owner_name) {
          this._router.navigate(['/details']);
          let dataItem = {
            "name": data.owner_name,
            "insurance": data.insurance_upto,
            "fuel-type": data.fuel_type,
            "make": data.maker___model.split("/")[0],
            "model": data.maker___model.split("/")[1],
          }
          this.dataService.addItem(dataItem);
        }
        else {
          this.message = "No data available under this registration number.";
          this.errorAlert();
        }
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.message = "Something went wrong. Please try again."
        this.errorAlert();
      }
    );
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Uh oh!',
      message: this.message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
