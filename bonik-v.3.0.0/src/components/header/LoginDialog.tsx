import { cloneElement, Fragment, ReactElement, useState } from "react";
import Modal from "@component/Modal";

// ============================================================
type Props = { handle: ReactElement; children: ReactElement };
// ============================================================

export default function LoginDialog({ handle, children }: Props) {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => setOpen(!open);

  return (
    <Fragment>
      {cloneElement(handle, { onClick: toggleDialog })}

      <Modal open={open} onClose={toggleDialog}>
        {children}
      </Modal>
    </Fragment>
  );
}
