import { TextSummaryPipe } from "./text-summary.pipe";

describe('TextSummaryPipe', () => {

    let pipe: TextSummaryPipe;

    beforeEach(()=>{
        pipe = new TextSummaryPipe();
    })

    it('with null sent as argument in function, should return empty string', () => {
        expect(pipe.transform(null)).toBe('');
    })

    it('with undefined sent as argument in function, should return empty string', () => {
        expect(pipe.transform(undefined)).toBe('');
    })

    it('with empty string sent as argument in function, should return empty string', () => {
        expect(pipe.transform('')).toBe('');
    })

    it('no args sent, value sent with less or equal than 10chars, should print whole value', () => {
        expect(pipe.transform("endava")).toBe("endava");
    })

    it('no args sent, value sent with more than 10chars, should print first 10chars of value than (...)', () => {
        expect(pipe.transform("endavafilip99")).toBe("endavafili...");
    })

    it('args sent, value sent with less or equal than allowed number of chars, should return whole value', () => {
        expect(pipe.transform("endava", 8)).toBe("endava");
    })

    it('args sent, value sent with more than allowed number of chars, should return first #(args) than (...)', () => {
        expect(pipe.transform("endava", 3)).toBe("end...");
    })

})