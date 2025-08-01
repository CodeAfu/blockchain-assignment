export type UploadFormState = {
  title: string;
  description: string;
  royaltyFee: string;
  price: string;
  tags: string;
  listForSale: boolean;
};

export type UploadFormAction =
  | { type: "RESET" }
  | {
      [K in keyof UploadFormState]: {
        type: "SET_FIELD";
        field: K;
        value: UploadFormState[K];
      };
    }[keyof UploadFormState];

export const initialUploadFormState: UploadFormState = {
  title: "",
  description: "",
  royaltyFee: "",
  price: "",
  tags: "",
  listForSale: false,
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
