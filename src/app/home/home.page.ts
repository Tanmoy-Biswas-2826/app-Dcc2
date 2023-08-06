import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { PopoverController } from '@ionic/angular';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socialSharing:SocialSharing, private popoverController:PopoverController ) {}
  share() {
    const image = '..\assets\img\photo-1575936123452-b67c3203c357.jpeg';
    this.socialSharing
      .share(image)
      .then(() => {
        console.log('Successfull');
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  }

  async showSocialMediaOptions(event: Event) {
    const popover = await this.popoverController.create({
      component: SocialMediaComponent,
      event: event,
      translucent: true,
    });
    return await popover.present();
  }

}
