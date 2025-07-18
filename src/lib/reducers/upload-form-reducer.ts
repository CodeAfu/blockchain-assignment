export type UploadFormState = {
  title: string;
  description: string;
  royaltyFee: string;
  price: string;
  tags: string;
};

export type UploadFormAction =
  | { type: "SET_FIELD"; field: keyof UploadFormState; value: string }
  | { type: "RESET" };

export const initialUploadFormState: UploadFormState = {
  title: "",
  description: "",
  royaltyFee: "",
  price: "",
  tags: "",
};

export function uploadFormReducer(
  state: UploadFormState,
  action: UploadFormAction
): UploadFormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialUploadFormState;
    default:
      return state;
  }
}
