import { ErrorValidatorOptions } from "../functions/validator";

export interface InputTypes {
	name: string;
	type: "text";
	onBlur?: (e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void;
	label: string;
	placeholder?: string;
	readonly?: boolean;
	onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
	errorOptions?: ErrorValidatorOptions;
	defaultValue?: string;
	innerRef?: React.RefObject<HTMLInputElement>;
}
