import { isRequired, isValidEmail } from '../utils/validators';

it('test valid email', (): void => {
    expect(isValidEmail('tiagoangelods.dev@gmail.com')).toEqual(true);
});

it('test invalid email', (): void => {
    expect(isValidEmail('tiagoangelods.dev@gmail')).toEqual(false);
});

it('test required to be true', (): void => {
    expect(isRequired('tiago')).toEqual(true);
});

it('test required to be false with space char', (): void => {
    expect(isRequired(' ')).toEqual(false);
});

it('test required to be false with empty string', (): void => {
    expect(isRequired('')).toEqual(false);
});