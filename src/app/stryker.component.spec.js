import { isNumber, sum, mul2 } from './stryker.component';

describe('Stryker demo:', () => {

    it('isNumber ', () => {
        let result = isNumber(1);
        expect(result).toBeTruthy();
    });

    it('sum 1 and 2', () => {
        let result = sum(1, 2);
        expect(result).toBe(3);
    });

    it('mul2', () => {
        let result = mul2(2, 2);
        expect(result).toBeDefined();
    });

});
