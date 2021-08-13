import { render, screen, cleanup } from '@testing-library/react';
import Todo from "../todo"; //we will need this file inorder to test it

afterEach(()=>{
    cleanup();
});

test('should render completed todo', () => {
    const todo = { id:1, title: "bring grocery", status: false};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    //expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('bring grocery');
})
test('should render not=completed todo', () => {
    const todo = { id:2, title: "Wash dishes", status: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');
    //expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Wash dishes');
})
