import { getGifs } from '../../helpers/getGifs';

describe( 'Pruebas en el helpers `getGifs`', function () {

    test('Debe de regresar 10 elementos', async () => {
        const gifts = await getGifs('Spiderman');
        expect( gifts.length ).toBe(10);
    });

    test('Debe de retornar un arreglo vacío', async () => {
        const gifts = await getGifs('');
        expect( gifts.length ).toBe(0);
    });

} );