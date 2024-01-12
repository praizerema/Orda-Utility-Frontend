import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
	it('renders without crashing and displays button text', () => {
		render(<Button text="Submit" />);

		const button = screen.getByRole('button', {
			name: /submit/i,
		});

		expect(button).toBeInTheDocument();
	});

	it('is not disabled when loading is false', () => {
		render(<Button text="Submit" loading={false} />);

		const button = screen.getByRole('button', {
			name: /submit/i,
		});

		expect(button).not.toBeDisabled();
	});

	it('is disabled when loading is true', () => {
		render(<Button text="Submit" loading={true} />);

		const button = screen.getByRole('button', {
			name: /submit/i,
		});

		expect(button).toBeDisabled();
	});

	it('calls onClick function when button is clicked', () => {
		const handleClick = jest.fn();
		render(<Button text="Submit" loading={false} onClick={handleClick} />);

		const button = screen.getByRole('button', {
			name: /submit/i,
		});

		fireEvent.click(button);
		expect(handleClick.mock.calls.length).toEqual(1);
	});
});
