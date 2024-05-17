import {render, screen, fireEvent} from "@testing-library/react";
import App from './App.jsx';
import {userEvent} from "@testing-library/user-event";

test('renders learn react link', async () => {
    render(<App/>);
    // const helloWolrdElem = screen.queryByText(/hello2/i)
    // expect(helloWolrdElem).toBeNull()
    screen.debug();
    const helloWolrdElem = await screen.findByText(/data/i)
    expect(helloWolrdElem).toBeInTheDocument()
    expect(helloWolrdElem).toHaveStyle({color: 'rgb(255,0,0)'})
    screen.debug();
})

test('Click event', () => {
    render(<App/>) ;
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
})

test('input element', async () => {
    render(<App/>) ;
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // fireEvent.input(input, {
    //     target: {value: '123123'}
    // })
    userEvent.type(input, '123123')
    const input2 = await screen.findByText(/123123/i)
    expect(input2).toContainHTML('123123')
    screen.debug()
})