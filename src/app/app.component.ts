import { Component } from '@angular/core';
import {ModalService} from "./modal/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enhanced-ngmodal';

  constructor(private modalService: ModalService) {}


  confirmWarning() {
    this.modalService.confirmWarning(
      "Modal Title",
      "Warning Message"
    ).then(confirm => {
      console.log(confirm);
    }).catch(() => console.log("dismissed"));
  }

  async confirmInfo() {
    const confirm = await this.modalService.confirmInfo(
      "Modal Title",
      "Warning Message"
    )
    console.log(confirm)
  }
}
