import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe( 'Probando el componente <GifExpertApp />', function () {

    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['R7', 'Tortuga', 'Spagueti'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    });

} );