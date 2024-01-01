export interface ErrorValidatorOptions {
    empty?: boolean;
    email?: boolean;
}
export declare const validator: (value: string, errorOptions: ErrorValidatorOptions) => (string | null)[];
