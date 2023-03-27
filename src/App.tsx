import React from 'react';
import './App.css';
import {Breadcrumb, Layout} from 'antd';
import MenuMain from "./components/MenuMain/MenuMain";
import AppRoutes from "./components/AppRoutes/AppRoutes";

const {Header, Content, Footer} = Layout;

const App: React.FC = () => {

  return (
    <Layout className='layout-page'>
      <Header className='header-page'>
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          className='logo-page'
          style={{
            float: 'left',
            width: 160,
            height: 67,
          }}
        />
        <MenuMain/>
      </Header>
      <Layout className="site-layout">
        <Content className="content-page">
          <Breadcrumb className='breadcrumb-page' style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
            <Breadcrumb.Item>Express Entry</Breadcrumb.Item>
            <Breadcrumb.Item>Educational credential assessment</Breadcrumb.Item>
          </Breadcrumb>
          <AppRoutes/>
        </Content>
      </Layout>
      <Footer className='footer-page'>© 2023 gocanada.pro</Footer>
    </Layout>
  )
}

export default App;