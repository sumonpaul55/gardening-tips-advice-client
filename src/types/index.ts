export interface IInputs {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  clasName?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status?: string;
  phoneNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
