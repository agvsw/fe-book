import { useState, useEffect } from 'react'

const Img = (props) => {

	const [broken, setBroken] = useState(false);

	const handleErrorImg = (ev) => {
		setBroken(true)
	}

	if (broken) {
		return <div 
			style={{ 
				width:'100%', 
				height:'200px', 
				textAlign: 'center', 
				paddingTop: '15%',
				color: '#fff', 
				fontSize: '18px',
				backgroundColor: '#000'
		}}>Image not found</div>
	}

  return <img onError={handleErrorImg} {...props} />
}

export default Img