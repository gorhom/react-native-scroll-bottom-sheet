export interface BottomSheetModalPrivateMethods {
  dismiss: (force?: boolean) => void;
  minimize: () => void;
  restore: () => void;
}

export interface BottomSheetModalProps
  extends Omit<BottomSheetProps, 'animateOnMount' | 'containerHeight'> {
  /**
   * Modal name to help identify the modal for later on.
   * @type string
   * @default nanoid generated unique key.
   */
  name?: string;
  /**
   * Mount the bottom sheet at the `BottomSheetModalProvider`.
   * @type boolean
   * @default false
   */
  mount?: boolean;
  /**
   * Dismiss modal when panning down.
   * @type boolean
   * @default true
   */
  dismissOnPanDown?: boolean;

  // callbacks
  /**
   * Callback when the modal dismissed.
   * @type () => void;
   */
  onDismiss?: () => void;
}
