import {
  AfterViewInit,
  Component, ComponentRef, EventEmitter,
  Input,
  OnInit,
  Output, Type,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalContent} from "./modal-content";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-modal',
  imports: [
    CommonModule
  ],
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @Output() submitEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();

  @Input() title: string;
  @Input() btnSubmitText: string;
  @Input() btnCancelText: string;
  @Input() disableSubmitBtn: boolean;
  @Input() bodyContent: Type<ModalContent>;
  @Input() footerContent: Type<ModalContent>;
  @Input() contentData: object;

  @ViewChild('bodyContainer', { read: ViewContainerRef }) bodyContainer: ViewContainerRef;
  @ViewChild('footerContainer', { read: ViewContainerRef }) footerContainer: ViewContainerRef;

  private bodyContentRef: ComponentRef<ModalContent>;
  private footerContentRef: ComponentRef<ModalContent>;

  constructor(
    private activeModal: NgbActiveModal,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.createContentRef();
  }

  ngAfterViewInit(): void {
    if (this.bodyContentRef) {
      this.bodyContainer.clear();
      this.bodyContainer.insert(this.bodyContentRef.hostView);
    }
    if (this.footerContentRef) {
      this.footerContainer.clear();
      this.footerContainer.insert(this.footerContentRef.hostView);
    }
  }

  public submit() {
    this.submitEvent.emit();
  }

  public cancel() {
    this.activeModal.close(false);
    this.cancelEvent.emit();
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

  private createContentRef() {
    if (this.bodyContent) {
      this.bodyContentRef = this.viewContainerRef.createComponent(this.bodyContent);
      this.bodyContentRef.instance.contentData = this.contentData;
    }
    if (this.footerContent) {
      this.footerContentRef = this.viewContainerRef.createComponent(this.footerContent);
      this.footerContentRef.instance.contentData = this.contentData;
    }
  }

  public get submitBtnDisabled(): boolean {
    if (!this.bodyContentRef) return false;
    return this.bodyContentRef.instance.isSubmitBtnDisabled();
  }

}
