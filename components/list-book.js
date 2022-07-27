import { Button, DatePicker, Layout, Menu, Tabs, Row, Col } from 'antd';
import Box from './Box'
import { useState, useEffect } from 'react';

const ListBook = ({data, showFavorite}) => {

  return (
    <Row gutter={[16,16]}>
        {
          data ? (
            data.map((row, i) => {
  					  return <Col lg={6} key={i}>
	  					  <Box item={row} showFavorite={showFavorite} />
              </Col>
  				  })
          ):(
            <center>data not found</center>
          )
        }
    </Row>
  )

}

export default ListBook