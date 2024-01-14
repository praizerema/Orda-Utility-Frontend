import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	prefix?: string;
	inputClass?: string;
	errorMessage?:string

}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, label, prefix, inputClass, errorMessage, type = 'text', ...rest }, ref) => {
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
						} ${prefix && `border-l-0 rounded-l-none`} ${errorMessage?.length ? 'border-red-500': ''} ${inputClass}`}
					/>
				</div>
				<p className="text-red-500 text-[0.8rem] text-left capitalize">
                  {errorMessage}
                </p>
			</div>
		);
	}
);
