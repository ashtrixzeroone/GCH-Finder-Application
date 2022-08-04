import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private router: Router,
    private actionSheetController: ActionSheetController)  { }

    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Import from Gallery',
          role: '',
          icon: 'cloud-upload-outline',
          id: 'delete-button',
          data: {
            type: 'import'
          },
          handler: () => {
            console.log('Delete clicked');
          }
        },  {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  
      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    }

  ngOnInit() {
  }
  added(){
    this.router.navigate(['/profile']);
  }
}
