import { render } from "@testing-library/react";
import Input from "./Input";

describe('Input', () => {
    it('Snapshot tests Input', () => {
        const onChange = vi.fn()
        
        const view = render(<Input value="" onChange={onChange} />)
        expect(view).toMatchSnapshot()
    });
});