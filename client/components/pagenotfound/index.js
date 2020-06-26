import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../assets/images/ic_404.png';

import classes from './style.scss';

const pageNotFound = () => {
	return (
		<div className={classes.pageNotFoundContainer}>
			<img src={PageNotFoundImage} classNam={classes.notFoundImage}/>
			<h3 className={classes.notFoundMessage}>Oops, The Page you were looking for doesn’t exist</h3>
		</div>
	);
};

export default pageNotFound;