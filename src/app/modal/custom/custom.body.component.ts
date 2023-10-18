import { Component } from '@angular/core';
import {ModalContent} from "../modal-content";
import {JsonPipe} from "@angular/common";

@Component({
  standalone: true,
  selector: 'modal-confirm',
  templateUrl: 'custom.body.component.html',
  imports: [
    JsonPipe
  ],
})
export class CustomBodyComponent implements ModalContent {
  contentData: object;

  isSubmitBtnDisabled(): boolean {
    return false;
  }

}
