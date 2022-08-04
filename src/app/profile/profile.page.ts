import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  handlerMessage = '';
  roleMessage = '';
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  constructor(private alertController: AlertController,
    private router: Router ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to DELETE it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { this.handlerMessage = ''; }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.handlerMessage = ''; }
      
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
   
  }

 async logoutApart() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to LOGOUT?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { this.handlerMessage = ''; }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.handlerMessage = '', this.router.navigate(['/login']); }
      
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
   
  }

  editDetails() {
    this.router.navigate(['/add']);
  }

 
}