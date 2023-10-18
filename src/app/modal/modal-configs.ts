import {NgbModalOptions} from "@ng-bootstrap/ng-bootstrap/modal/modal-config";
import {ModalContent} from "./modal-content";
import {Type} from "@angular/core";

export interface ModalConfigs extends NgbModalOptions {
  btnSubmitText?: string,
  btnCancelText?: string,
  bodyContent?: Type<ModalContent>,
  footerContent?: Type<ModalContent>,
  contentData?: object,
}
