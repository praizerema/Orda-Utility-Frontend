import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  it('renders input element with correct attributes', () => {
    const mockRef = React.createRef<HTMLInputElement>();
    const mockOnChange = jest.fn();
    const testName = 'testName';
    const testLabel = 'Test Label';
    const testPrefix = 'Prefix';

    render(
      <Input
        name={testName}
        label={testLabel}
        prefix={testPrefix}
        value=""
        onChange={mockOnChange}
        ref={mockRef}
      />
    );

    const inputElement = screen.getByLabelText(testLabel) as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.name).toBe(testName);
    expect(inputElement.value).toBe('');
    expect(inputElement.type).toBe('text');

    // Check if the prefix is rendered
    const prefixElement = screen.getByText(testPrefix);
    expect(prefixElement).toBeInTheDocument();
  });

  it('calls onChange prop when input value changes', () => {
    const mockRef = React.createRef<HTMLInputElement>();
    const mockOnChange = jest.fn();
    const testName = 'testName';

    render(
      <Input
        name={testName}
        label="Test Label"
        value=""
        onChange={mockOnChange}
        ref={mockRef}
      />
    );

    const inputElement = screen.getByLabelText('Test Label') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'newText' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('newText');
  });
});
