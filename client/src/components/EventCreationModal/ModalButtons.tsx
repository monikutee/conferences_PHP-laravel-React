import * as React from "react";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <div className="create-event_modal-close">
      <nav>
        <button
          type="button"
          className="create-event_modal-closeBtn"
          id="create-event-modal-close"
          onClick={props.onClick}
        >
          x
        </button>
      </nav>
    </div>
  );
};

export const SaveButton: React.FC = () => {
  return (
    <div className="create-event_modal-save">
      <nav>
        <button
          type="submit"
          className="create-event_modal-saveBtn"
          id="save-event"
        >
          Save
        </button>
      </nav>
    </div>
  );
};
