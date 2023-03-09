export type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  styles?: {
    backdrop?: React.CSSProperties;
    modal?: React.CSSProperties;
  };
};
