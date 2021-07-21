import React , { memo } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const Images = memo (({item }) => {
	return ( 
		<li>
			{item ? <h1>{item.collection}</h1> : <Skeleton animation="wave"/> }	
			{item ? <h3>{item.display_sitename}</h3> : <Skeleton animation="wave"/> }
			<div className="img_wrap">
			{item ? <img referrerPolicy="no-referrer" src={item.thumbnail_url} alt = "kakao news"/> : <Skeleton animation="wave" width="100%" height="100%"/>} 
			</div> 
		</li>
	)
});


export default Images;