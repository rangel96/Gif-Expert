export const getGifs = async (search) => {
    const api_key = 'YDoJRwmN8uHLFRfj9H61nGiYxANI6NeO';
    const baseUrl = 'https://api.giphy.com/v1/gifs/search?';
    const url = `${baseUrl}api_key=${ api_key }&q=${ encodeURI(search) }&lang=es&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( object => ({
        id: object.id,
        title: object.title,
        url: object.images?.downsized_medium.url,
    }));

    return gifs;
}