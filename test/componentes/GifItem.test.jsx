import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => { 
const title = 'trump foto'
        const url = 'https://media0.giphy.com/media/l2JhIUyUs8KDCCf3W/giphy.gif?cid=41f37cafudkv0fnfq1lg7mi6c6bwic4xnlq8ujpaiqi74cjz&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    test('Debe de coincidir el snapshot', () => { 
        

        const { container } = render( <GifItem title= { title } url={ url }/>);

          expect( container ).toMatchSnapshot();

     });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title= { title } url={ url }/>);
        //screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('Debe de mostrar el título en el componente', () => { 
        render( <GifItem title= { title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy();

     })

 });