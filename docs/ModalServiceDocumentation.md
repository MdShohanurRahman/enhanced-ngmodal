# **ModalService Documentation**

## **Description**

The `ModalService` is a service in an Angular application that provides methods for creating and managing modal dialogs using the [ng-bootstrap](https://ng-bootstrap.github.io/) library. This service simplifies the process of displaying various types of modals (e.g., confirmation dialogs, information dialogs) and allows for customization of modal appearance and behavior.

## **Class Structure**

* **Name:** ModalService

* **Location:** `@angular/core`


## **Methods**

### **1\.** `confirm(title: string, message: string, configs?: ModalConfigs): Promise<boolean>`

* **Description:** Opens a confirmation modal dialog with a title, message, and optional configuration.

* **Parameters:**

  * `title` (string): The title of the confirmation dialog.

  * `message` (string): The message displayed in the dialog.

  * `configs` (optional, `ModalConfigs`): Additional configuration options for the modal.

* **Returns:** A Promise that resolves to `true` if the user confirms, and `false` if canceled.


### **2\.** `confirmWarning(title: string, message: string): Promise<boolean>`

* **Description:** Opens a confirmation modal with a warning style.

* **Parameters:**

  * `title` (string): The title of the confirmation dialog.

  * `message` (string): The message displayed in the dialog.

* **Returns:** A Promise that resolves to `true` if the user confirms, and `false` if canceled.


### **3\.** `confirmInfo(title: string, message: string): Promise<boolean>`

* **Description:** Opens a confirmation modal with an informational style.

* **Parameters:**

  * `title` (string): The title of the confirmation dialog.

  * `message` (string): The message displayed in the dialog.

* **Returns:** A Promise that resolves to `true` if the user confirms, and `false` if canceled.


### **4\.** `open(title: string, configs?: ModalConfigs, submitCallback?: (modalRef: NgbModalRef) => void, cancelCallback?: (modalRef: NgbModalRef) => void): void`

* **Description:** Opens a customizable modal dialog with various configuration options and callbacks.

* **Parameters:**

  * `title` (string): The title of the modal dialog.

  * `configs` (optional, `ModalConfigs`): Additional configuration options for the modal.

  * `submitCallback` (optional, function): A callback function that executes when the user submits the modal.

  * `cancelCallback` (optional, function): A callback function that executes when the user cancels the modal.


### **5\.** `openCenter(title: string, configs?: ModalConfigs, submitCallback?: (modalRef: NgbModalRef) => void, cancelCallback?: (modalRef: NgbModalRef) => void): void`

* **Description:** Opens a modal dialog centered on the screen with various configuration options and callbacks.

* **Parameters:**

  * `title` (string): The title of the modal dialog.

  * `configs` (optional, `ModalConfigs`): Additional configuration options for the modal.

  * `submitCallback` (optional, function): A callback function that executes when the user submits the modal.

  * `cancelCallback` (optional, function): A callback function that executes when the user cancels the modal.


### **6\.** `openRight(title: string, configs?: ModalConfigs, submitCallback?: (modalRef: NgbModalRef) => void, cancelCallback?: (modalRef: NgbModalRef) => void): void`

* **Description:** Opens a modal dialog on the right side of the screen with various configuration options and callbacks.

* **Parameters:**

  * `title` (string): The title of the modal dialog.

  * `configs` (optional, `ModalConfigs`): Additional configuration options for the modal.

  * `submitCallback` (optional, function): A callback function that executes when the user submits the modal.

  * `cancelCallback` (optional, function): A callback function that executes when the user cancels the modal.


## **Usage**

The `ModalService` allows you to easily create and manage modal dialogs in your Angular application. You can use the `confirm`, `confirmWarning`, `confirmInfo`, `open`, `openCenter`, and `openRight` methods to display modals with different styles and behavior.

Example usage of `confirm`:

```typescript
modalService.confirm("Confirmation", "Are you sure you want to proceed?").then(result => {
    if (result) {
        // User confirmed
    } else {
        // User canceled
    }
});
```

Example usage of `open`:

```typescript
modalService.open("Edit Profile", {
    btnSubmitText: "Save Changes",
    btnCancelText: "Cancel",
    contentData: { /* Additional data */ }
}, modalRef => {
    // Submit callback
    // Handle modal submission
}, modalRef => {
    // Cancel callback
    // Handle modal cancellation
});
```

### **ModalConfigs Interface**

#### Description

The `ModalConfigs` interface is used to configure custom modal dialogs in the Enhanced-ng-modal project. It extends `NgbModalOptions`, which are options provided by the [ng-bootstrap](https://ng-bootstrap.github.io/) library, and includes additional properties to customize the appearance and behavior of the modal.

#### Properties

* `btnSubmitText` (string, optional): Specifies the text for the submit button in the custom modal. If not provided, a default value will be used.

* `btnCancelText` (string, optional): Specifies the text for the cancel button in the custom modal. If not provided, a default value will be used.

* `bodyContent` (Type&lt;ModalContent&gt;, optional): Specifies the component that should be used as the body content of the custom modal. The component should implement the `ModalContent` interface.

* `footerContent` (Type&lt;ModalContent&gt;, optional): Specifies the component that should be used as the footer content of the custom modal. The component should implement the `ModalContent` interface.

* `contentData` (object, optional): A generic object to pass additional data to the custom modal. This data can be used by the custom modal component.


### **ModalContent Interface**

#### Description

The `ModalContent` interface represents a contract that components should adhere to when implementing a custom dialog in the Enhanced-ng-modal project. It defines specific properties and methods that custom modal components must have.

#### Properties

* `contentData` (object): A property to store the content data associated with the custom dialog. This data can be used by the custom modal component to display dynamic content.


#### Methods

* `isSubmitBtnDisabled` (): A method that determines whether the submit button in the custom dialog should be disabled or not. This method returns a boolean value, where `true` means the submit button should be disabled, and `false` means it should be enabled. Custom modal components can implement this method to control the submit button's state based on their internal logic.


### **Usage**

To create a custom modal in your Enhanced-ng-modal project, you should:

1. Create a component that implements the `ModalContent` interface.

2. Use this component as the `bodyContent` or `footerContent` in the `ModalConfigs` when opening a custom modal.


For example:

```typescript
import { ModalContent } from './modal-content.interface';

@Component({
  selector: 'app-custom-modal',
  template: `
    <!-- Custom modal content here -->
  `
})
export class CustomModalComponent implements ModalContent {
  contentData: object;

  isSubmitBtnDisabled() {
    // Add your logic to determine if the submit button should be disabled.
    // Return `true` to disable and `false` to enable the submit button.
  }
}
```

When opening the custom modal, use the `CustomModalComponent` as `bodyContent` or `footerContent` in the `ModalConfigs`:

```typescript
modalService.open('Custom Modal', {
  bodyContent: CustomModalComponent,
  contentData: { /* Additional data for the custom modal */ }
});
```

This allows you to create and display custom modals with dynamic content and behavior.

## **Dependencies**

* [ng-bootstrap](https://ng-bootstrap.github.io/): This service relies on the ng-bootstrap library for creating and managing modal dialogs.


## **Note**

* This documentation is intended to provide an overview of the `ModalService` class and its methods. For more details on specific properties and behavior, please refer to the source code and ng-bootstrap documentation.
