import { Injectable } from '@angular/core';

import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfigs} from "./modal-configs";
import {ModalComponent} from "./modal.component";
import {ModalConfirmComponent} from "./confirm/modal.confirm.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    configs?: ModalConfigs): Promise<boolean> {
    const modalRef: NgbModalRef = this.modalService.open(ModalConfirmComponent, {
      size: 'md',
      modalDialogClass: 'app-modal-confirm',
      backdropClass: 'app-modal-confirm-backdrop',
      centered: true,
      ...configs
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnSubmitText = configs?.btnSubmitText ?? 'Confirm';
    modalRef.componentInstance.btnCancelText = configs?.btnCancelText ?? 'Cancel';

    return modalRef.result;
  }

  public confirmWarning(title: string, message: string): Promise<boolean> {
    return this.confirm(title, message, {
        modalDialogClass: 'app-modal-confirm-warning'
      }
    )
  }

  public confirmInfo(title: string, message: string): Promise<boolean> {
    return this.confirm(title, message, {
        modalDialogClass: 'app-modal-confirm-info'
      }
    )
  }

  public open(
    title: string,
    configs?: ModalConfigs,
    submitCallback?: (modalRef: NgbModalRef) => void,
    cancelCallback?: (modalRef: NgbModalRef) => void): void {
    const modalRef: NgbModalRef = this.modalService.open(
      ModalComponent,
      {
        size: 'lg',
        modalDialogClass: 'app-modal',
        backdropClass: 'app-modal-backdrop',
        ...configs
      });

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.btnSubmitText = configs?.btnSubmitText ?? 'Save';
    modalRef.componentInstance.btnCancelText = configs?.btnCancelText ?? 'Cancel';
    modalRef.componentInstance.bodyContent = configs?.bodyContent;
    modalRef.componentInstance.footerContent = configs?.footerContent;
    modalRef.componentInstance.contentData = configs?.contentData ?? {}

    if (submitCallback) {
      modalRef.componentInstance.submitEvent.subscribe(() => {
        submitCallback(modalRef);
      });
    }

    if (cancelCallback) {
      modalRef.componentInstance.cancelEvent.subscribe(() => {
        cancelCallback(modalRef);
      });
    }
  }

  public openCenter(
    title: string,
    configs?: ModalConfigs,
    submitCallback?: (modalRef: NgbModalRef) => void,
    cancelCallback?: (modalRef: NgbModalRef) => void): void {
    this.open(
      title,
      {
        ...configs,
        centered: true,
        modalDialogClass: 'app-modal-center',
        backdropClass: 'app-modal-center-backdrop',
      },
      submitCallback,
      cancelCallback
    )
  }

  public openRight(
    title: string,
    configs?: ModalConfigs,
    submitCallback?: (modalRef: NgbModalRef) => void,
    cancelCallback?: (modalRef: NgbModalRef) => void): void {
    this.open(
      title,
      {
        ...configs,
        centered: true,
        modalDialogClass: 'qr-modal-right',
        backdropClass: 'qr-modal-right-backdrop',
      },
      submitCallback,
      cancelCallback
    )
  }

}
