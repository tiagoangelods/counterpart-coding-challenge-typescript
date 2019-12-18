//validate if is a valid email testing the regular expression
export const isValidEmail = (value: any): boolean => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value);
//validate if the value provided is a not empty string
export const isRequired = (value: any): boolean => value.replace(/\s/g, "").length > 0;