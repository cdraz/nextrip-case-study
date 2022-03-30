import getStops from './getStops';
import mockAxios from 'axios';

// Mock axios for our api call tests
jest.mock('axios');
mockAxios.get.mockResolvedValue([ { Text: "MOCK", Value: "MOCK" } ]);

describe("getStops", () => {
    // Test for array with stop object returned and called only once
    test("Should return a stop object and be called only once", async () => {
        const response = await getStops('test1', 'test2');
        expect(response).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Text: 'MOCK',
                    Value: 'MOCK'
                })
            ])
        );
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});