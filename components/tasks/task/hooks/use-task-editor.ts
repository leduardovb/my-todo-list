import { useReducer } from "react";

type Action =
  | { type: "EDIT"; title: string }
  | { type: "UPDATE"; title: string }
  | { type: "SAVE"; saveTask: (title: string) => void }
  | { type: "CANCEL" };

interface State {
  isEditing: boolean;
  editedTitle: string;
  initialTitle: string;
}

const initialState: State = {
  isEditing: false,
  editedTitle: "",
  initialTitle: "",
};

function taskEditorReducer(state: State, action: Action): State {
  switch (action.type) {
    case "EDIT":
      return {
        ...state,
        isEditing: true,
        editedTitle: action.title,
        initialTitle: action.title,
      };
    case "UPDATE":
      return {
        ...state,
        editedTitle: action.title,
      };
    case "SAVE":
      const normalizedTitle = state.editedTitle.trim();

      if (!normalizedTitle) {
        return state;
      }

      const isTitleChanged = state.initialTitle !== normalizedTitle;

      if (isTitleChanged) {
        action.saveTask(normalizedTitle);
      }

      return {
        ...state,
        isEditing: false,
      };
    case "CANCEL":
      return {
        ...state,
        isEditing: false,
        editedTitle: "",
      };
    default:
      return state;
  }
}

export function useTaskEditor(
  initialTitle: string,
  saveTask: (title: string) => void,
) {
  const [state, dispatch] = useReducer(taskEditorReducer, {
    ...initialState,
    editedTitle: initialTitle,
  });

  const startEditing = () => dispatch({ type: "EDIT", title: initialTitle });
  const updateEditing = (title: string) => dispatch({ type: "UPDATE", title });
  const saveEditing = () => dispatch({ type: "SAVE", saveTask });
  const cancelEditing = () => dispatch({ type: "CANCEL" });

  return {
    ...state,
    startEditing,
    updateEditing,
    saveEditing,
    cancelEditing,
  };
}
