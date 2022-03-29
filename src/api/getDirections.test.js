import getDirections from './getDirections';
import mockAxios from 'axios';

// Mock axios for our api call tests
jest.mock('axios');
mockAxios.get.mockResolvedValue([ { Text: "MOCK", Value: "MOCK" } ]);

describe("getDirections", () => {
    // Test for array with direction object returned and called only once
    test("Should return a direction object and be called only once", async () => {
        const response = await getDirections();
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