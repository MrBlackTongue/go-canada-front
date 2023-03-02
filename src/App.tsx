import React from 'react';
import './App.css';
import {Breadcrumb, Layout} from 'antd';
import MenuMain from "./components/MenuMain/MenuMain";
import AppRoutes from "./components/AppRoutes/AppRoutes";

const {Header, Content, Footer} = Layout;

const App: React.FC = () => {

  return (
    <Layout>
      <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%'}}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <div className="logo"/>
        <MenuMain/>
      </Header>
      <Layout className="site-layout">
        <Content className="site-layout" style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
            <Breadcrumb.Item>Express entry</Breadcrumb.Item>
            <Breadcrumb.Item>Пошаговая инструкция</Breadcrumb.Item>
          </Breadcrumb>
          <AppRoutes/>
          {/*<div style={{padding: 24, minHeight: 380,}}>Content</div>*/}
        </Content>
      </Layout>
      <Footer style={{textAlign: 'center'}}>Если вы еще не в Канаде, тогда мы идем к вам!</Footer>
    </Layout>
  )
}

export default App;
