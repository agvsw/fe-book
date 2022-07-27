import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, DatePicker, Layout, Menu, Tabs, Row, Col } from 'antd';
import Box from '../components/Box'
import ListBook from '../components/list-book'
import SearchForm from '../components/form-search'
import { useState, useEffect } from 'react';

const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;


export default function Home() {

  const onSearch = (value) => {
    fetchData(value);
  }

  const [data, setData] = useState([]);
  const [dataFavorite, setDataFavorite] = useState([]);

  const fetchData = (key) => {
    return fetch('https://book-be.herokuapp.com/books?key='+key, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setData(data.data)
    })
    .catch(error => {
      return error.body
    });
  }
  const fetchDataFavorite = () => {
    return fetch('https://book-be.herokuapp.com/favorite', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setDataFavorite(data.data)
    })
    .catch(error => {
      return error.body
    });
  }

  useEffect(() => {
  	fetchDataFavorite();
  	fetchData('')

  }, [])

  return (
    <>
     <Header style={{backgroundColor: "#1890ff", color:'white'}}>
      Travellio Test
     </Header>
     <div className={styles.container}>
      
      <main className={styles.main}>
        <Content>
          <Tabs defaultActiveKey="1" tabPosition='left'>
            <TabPane tab="List Book" key="1">
              <Row>
                 <SearchForm finish={onSearch}/>
              </Row>
              <br/>
              <ListBook className="list-book" data={data} showFavorite={true} getFavorite={fetchDataFavorite}/>
            </TabPane>
            <TabPane tab="My Favorit" key="2">
              <ListBook className="list-book" data={dataFavorite} showFavorite={false} />
            </TabPane>
          </Tabs>
        </Content>
      </main>

      <footer className={styles.footer}>
        Agus Wibawa
      </footer>
    </div>

    <style global jsx>{`
						.list-book {
							margin-top: 20px;
						}
					`}</style>
    </>
    
  )
}
