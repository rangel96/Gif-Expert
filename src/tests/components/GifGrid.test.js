import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock( '../../hooks/useFetchGifs' );

describe( 'Probando el componente <GifGrid />', function () {

    const imgs = [{
        id: '123',
        title: 't7u40V',
        url: 'https://www.googleapis.com/hola',
    }];
    const category = 'Goffy';

    test( 'Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue( {
            data: [],
            loading: true,
        } );
        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe de mostrar items cuando se muestran imágenes useFetchGifs', () => {

        useFetchGifs.mockReturnValue( {
            data: imgs,
            loading: false,
        } );
        const wrapper = shallow( <GifGrid category={ category }/> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(imgs.length);
    } );

} );