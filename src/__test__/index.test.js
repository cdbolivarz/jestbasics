const randomString = require('../index');


// Suite de pruebas
describe('Probar funcionalidades de randomString', ()=>{
    test('Probar la funcionalidad', () => {
        expect(typeof (randomString())).toBe('string')
    })

    test('Comprobar si no existe una ciudad', ()=>{
        expect(randomString()).not.toMatch(/Cordova/)
    })
})