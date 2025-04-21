import {mockNanoid as nanoid} from '../mock-nanoid';

describe('mock nanoid', ()=>{
    afterEach(()=>{
        nanoid.resetMock();
    });

    it('produces sequencive output', ()=>{
        expect(nanoid()).toBe('0'.repeat(21));

        expect(nanoid()).toBe('1'.padStart(21, '0'));

        expect(nanoid()).toBe('2'.padStart(21, '0'));

        expect(nanoid()).toBe('3'.padStart(21, '0'));

        expect(nanoid()).toBe('4'.padStart(21, '0'));
    });

    it('produces output matching the provided length', ()=>{
        expect(nanoid()).toHaveLength(21);

        expect(nanoid(5)).toHaveLength(5);

        expect(nanoid(30)).toHaveLength(30);

        expect(nanoid(1)).toHaveLength(1);

        expect(nanoid(0)).toBe('');
    });

    it('returns an empty string when number is negative', ()=>{
        expect(nanoid(-100)).toBe('');
    });

    it('should allow different sequences per length', ()=>{
        expect(Number(nanoid(5))).toBe(0);

        expect(Number(nanoid(300))).toBe(0);

        expect(Number(nanoid(5))).toBe(1);

        expect(Number(nanoid(300))).toBe(1);
    });

    it('should support resetMock for all', ()=>{
        Array.from({length: 10}).forEach(()=>{
            nanoid();
            nanoid(7);
        });

        expect(Number(nanoid())).toBe(10);
        expect(Number(nanoid(7))).toBe(10);

        nanoid.resetMock(7);

        expect(Number(nanoid())).toBe(11);
        expect(Number(nanoid(7))).toBe(0);
    });

    it('should support resetMock for all', ()=>{
        Array.from({length: 10}).forEach(()=>{
            nanoid();
            nanoid(7);
        });

        expect(Number(nanoid())).toBe(10);
        expect(Number(nanoid(7))).toBe(10);

        nanoid.resetMock();

        expect(Number(nanoid())).toBe(0);
        expect(Number(nanoid(7))).toBe(0);
    });
});
