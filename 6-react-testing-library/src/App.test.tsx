import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App', () => {
    it('renders and displays content', async () => {
        const view = render(<App />)

        const mainTitle = view.getByRole('heading', {level: 1})
        expect(mainTitle).toBeInTheDocument()
        expect(view.getByText('Vite + React')).toBeInTheDocument()
        expect(view.getByText(/vite \+ react/i)).toBeInTheDocument()

        const button = view.getByRole('button', {name: /count is 0/i})
        expect(button).toBeInTheDocument()

        fireEvent.click(button)
        expect(button).toHaveTextContent(/count is 1/i)

        await userEvent.click(button)
        expect(view.getByText(/count is 2/i)).toBeInTheDocument()
    });
});