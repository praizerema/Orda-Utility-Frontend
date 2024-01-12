import { FC, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	loading?: boolean;
	children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
	text,
	loading,
	children,
	...rest
}) => {
	return (
			<button {...rest} disabled={loading || rest.disabled}>
				{text || children}
			</button>
	);
};
