import * as React from 'react';
import classNames from 'classnames';
import './_wizard.scss';

interface IProps {
	children?: React.ReactNode;
	className?: string;
	next?: number;
	prev?: number;
	step: number;
}

const Step: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'wizard__step');

	return (
		<div className={componentClass}>
			{props.children}
		</div>
	);
};

export default Step;
