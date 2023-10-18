/**
 * The `ModalContent` interface represents the contract that components should adhere to
 * when implementing a custom dialog with specific properties and methods.
 */
export interface ModalContent {
  /**
   * A property to store the contentData associated with the custom dialog.
   */
  contentData: object;

  /**
   * A method that determines whether the submit button should be disabled or not.
   * This method returns a boolean value, where `true` means the submit button should
   * be disabled, and `false` means it should be enabled.
   */
  isSubmitBtnDisabled: () => boolean;
}
