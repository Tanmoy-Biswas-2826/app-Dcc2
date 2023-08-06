import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent  implements OnInit {

  urlShare = '..\assets\img\photo-1575936123452-b67c3203c357.jpeg';
  textShare = 'Check out this image';


  constructor(private socialSharing:SocialSharing, private popoverController:PopoverController) { }

  ngOnInit() {}

  shareOnFacebook() {
    const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(this.urlShare)}&quote=${encodeURIComponent(this.textShare)}`;

    window.open(facebookUrl, '_blank');
    console.log("successfull");
    

    // this.popoverController.dismiss();
  }

  shareOnTwitter() {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.urlShare)}&text=${encodeURIComponent(this.textShare)}`;
  
    window.open(twitterUrl, '_blank');

    // this.popoverController.dismiss();
  }
  shareOnWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.textShare, this.urlShare)
    .then(() => {
      console.log('Image shared successfully');
      this.popoverController.dismiss();
    })
    .catch((error) => {
      console.error('Failed', error);
      this.popoverController.dismiss();
    });

  }

}




// const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(this.textShare)}&url=${encodeURIComponent(this.urlShare)}`;
  
// window.open(whatsappUrl, '_blank');

// this.popoverController.dismiss();
