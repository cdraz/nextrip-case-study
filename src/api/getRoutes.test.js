import getRoutes from './getRoutes';
import mockAxios from 'axios';

// Mock axios for our api call tests
jest.mock('axios');

mockAxios.get.mockResolvedValue([ { Description: "MOCK", ProviderID: "MOCK", Route: "MOCK" } ]);

describe("getRoutes", () => {

    // Test for array with route object returned and called only once
    test("Should return a route object and be called only once", async () => {
        const response = await getRoutes();
        expect(response).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Description: 'MOCK',
                    ProviderID: 'MOCK',
                    Route: 'MOCK',
                })
            ])
        );
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});