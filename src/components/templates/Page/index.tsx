import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
	children: ReactNode;
	className?: string;
	theme?: string;
	type?: string;
}

const Page: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'page');

	return <div className={componentClass}>{props.children}</div>;
};

export default Page;
