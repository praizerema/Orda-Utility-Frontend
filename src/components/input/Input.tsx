import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	prefix?: string;
	inputClass?: string;

}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, label, prefix, inputClass, type = 'text', ...rest }, ref) => {
		return (
			<div className="w-full">
				<label htmlFor={name}>{label}</label>
				<div className="flex flex-row items-center">
					{prefix && (
						<span className="text-sm border rounded-l p-4 bg-gray-300 whitespace-no-wrap">
							{prefix}
						</span>
					)}

					<input
						{...rest}
						name={name}
						ref={ref}
						type={type}
						className={`border border-black rounded focus:outline-none p-3 ${
							type === 'search' && `border-r-0 rounded-r-none`
						} ${prefix && `border-l-0 rounded-l-none`} ${inputClass}`}
					/>
				</div>
			</div>
		);
	}
);
