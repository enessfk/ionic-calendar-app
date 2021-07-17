import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverController.dismiss();
  }
  doc(){
    window.open('https://www.google.com.tr','_blank');
    this.popoverController.dismiss();
  }
  
}
