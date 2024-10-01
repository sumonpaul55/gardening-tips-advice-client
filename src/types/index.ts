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
