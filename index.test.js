import { calculate } from './app.js'

describe('Calculate function', () => {
    it('adds 1 and 2', () => {
        expect(calculate(1, 2, 'add')).toBe(3)
    })
})









// Async UNIT TEST
// const fetchData = require('./index')

// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//         expect(data).toBe('Peanut Butter');
//     });
// });

// //using async await

// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('Peanut Butter');
// }
// );


// //testing for error
// test('the fetch fails with an error', async() => {
//     expect.assertions(1);
//     try {
//         await fetchData(true);
//     } catch (error) {
//         expect(error).toMatch('error');
//     }
    
// });