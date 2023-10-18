import { Component } from '@angular/core';
import {ModalService} from "./modal/modal.service";
import {CustomBodyComponent} from "./modal/custom/custom.body.component";

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
      "Confirm Warning Modal",
      "Your Message Goes Here"
    ).then(confirm => {
      console.log(confirm);
    }).catch(() => console.log("dismissed"));
  }

  async confirmInfo() {
    const confirm = await this.modalService.confirmInfo(
      "Confirm Info Modal",
      "Your Message Goes Here"
    )
    console.log(confirm)
  }

  openModalDefault() {
    this.modalService.open(
      "Modal Title",
      {
        size: "lg"
      },
      modalRef => {
        console.log("submit btn clicked callback")
      },
      modalRef => {
        console.log("cancel btn clicked callback")
      }
    )
  }

  openModalCenter() {
    this.modalService.openCenter(
      "Modal Title"
      // add configs
      // submit callback
      // cancel callback
    )
  }

  openModalRight() {
    this.modalService.openRight(
      "Modal Title"
      // add configs
      // submit callback
      // cancel callback
    )
  }

  openModalLeft() {
    this.modalService.openLeft(
      "Modal Title"
      // add configs
      // submit callback
      // cancel callback
    )
  }

  openCustomModal() {
    this.modalService.openCenter(
      "Modal Title",
      {
        btnSubmitText: "Submit",
        btnCancelText: "Cancel",
        bodyContent: CustomBodyComponent,
        contentData: {
          key1: 'value1',
          key2: 'value2'
          // so on
        }
      },
      modalRef => {
        // do submit callback task
        // after close the modal
        modalRef.close();
      },
      modalRef => {
        // do cancel callback task;
      }
    )
  }
}
