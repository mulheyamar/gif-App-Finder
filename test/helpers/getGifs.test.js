import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', () => { 

    test('Debe de retornar un arreglo de gifs', async() => { 

         const gifs = await getGifs('One Punch');
         expect( gifs.length ).toBeGreaterThan( 0 );// que tenga más de 0 elementos
         expect( gifs[0] ).toEqual( {
            id: expect.any( String ) ,
            title: expect.any( String ),
            url: expect.any( String ),
         })
     })
 })