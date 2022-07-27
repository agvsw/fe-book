
import { Row, Col, Card, Button, Rate, message } from 'antd'
import Img from '../utils/Img'

const { Meta } = Card;



const Box = ({ item, showFavorite, getFavorite }) => {
	const addFavorite = () => {
		fetch('https://book-be.herokuapp.com/favorite', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    }).then(response => {
			getFavorite()
			message.success('Success add to favorite');
    })
    .catch(error => {
			console.log(error)
    });
	}
	
	return (
				<Card
					bordered={false}
					className="project-card"
			    	cover={
			      		<Img src={`${item.image}`} style={{ padding: '0px', margin: '-1px 0px', height: '100%' }}/>
			    	}>
					<Row className="project-box">
						<div className="project-summary">
							{item.title}
						</div>
					</Row>

					<Row>
						<Col>
							<Rate disabled defaultValue={item.rating} />
						</Col>
					</Row>
				
					<Row>
						<Col lg={10} style={{ color:'#fff', lineHeight:'30px' }}>
              {item.author.length > 11 ? item.author.slice(0, 10) + '...' : item.author}
						</Col>
						
						{
							showFavorite ? (
													<Col lg={14} xs={24}>
														<Button type="primary" block onClick={addFavorite}>Add Favorite</Button>
													</Col>
												) : null
						}
					</Row>

					<style global jsx>{`
						.project-card {
							border: 0;
						}
						.ant-card-bordered .ant-card-cover {
							margin: 0;
						}
						.project-card .ant-card-body{
							position: absolute;
							bottom: 0px;
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							padding: 15px 20px;
	
						}
						.project-card:hover .ant-card-body{
							background-color: rgba(0,0,0,0.8);
						}
						.project-card .project-box {
							flex-grow: 1;
						}
						.project-card .project-title,
						.project-card .project-summary,
						.project-card .ant-card-body {
							transition: 300ms;
						}
						.project-card .project-box {
							position: relative;
						}
						.project-card .project-title {
							position: absolute;
							bottom: 0;
						}
						.project-card:hover .project-title {
							opacity: 0;
						}
						.project-card .project-summary {
							color: #fff;
							margin-bottom: 5px;
							width: calc(100% - 40px);
							height: 0;
							background-color: rgba(0,0,0,0.6);
							opacity: 0;
							position: absolute;
						}
						.project-card:hover .project-summary {
							opacity: 1;
						}
					`}</style>
			  </Card>
	)
}

export default Box