import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe( 'Pruebas en el <AddCategory />', function () {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('input').prop('value') ).toBe( value );
    });

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );
        expect( setCategories ).not.toBeCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Luis Miguel';

        input.simulate( 'change', { target: { value } } );
        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();
        expect( input.prop('value') ).toBe('');

        // setCategories sea llamado con una función cualquiera
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    });

} );