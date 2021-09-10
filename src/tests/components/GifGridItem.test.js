import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe( 'Pruebas en el <GifGridItem />', function () {


    const title = 'Esto es una prueba';
    const url = 'https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=1830c7d6l32r66mz5576n7we5gzs0p2jdos639m81a9k9knn&rid=giphy.gif&ct=g';

    let wrapper = shallow( <GifGridItem title={title} url={url} />);

    beforeEach( () =>
        wrapper = shallow( <GifGridItem title={title} url={url} /> )
    );

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('El card debe tener un párrafo', () => {
        const p = wrapper.find('p').text().trim();
        expect( p ).toBe( title );
    });

    test('La img debe de tener asignada la url como src y el title como alt', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Debe tener la className: animate__backInUp', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__backInUp') ).toEqual(true);
    });

} );