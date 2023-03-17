import React from 'react';
import './App.css';
import {Breadcrumb, Layout} from 'antd';
import MenuMain from "./components/MenuMain/MenuMain";
import AppRoutes from "./components/AppRoutes/AppRoutes";

const {Header, Content, Footer} = Layout;

const App: React.FC = () => {

  return (
    <Layout>
      <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%', background: "white"}}>
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          style={{
            float: 'left',
            width: 160,
            height: 67,
          }}/>
        <MenuMain/>
      </Header>
      <Layout className="site-layout">
        <Content className="site-layout" style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            {/*<Breadcrumb.Item>Главная</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item>Все статьи</Breadcrumb.Item>*/}
          </Breadcrumb>
          <AppRoutes/>
        </Content>
      </Layout>
      <Footer style={{textAlign: 'center'}}>Если вы еще не в Канаде, тогда мы идем к вам!</Footer>
    </Layout>
  )
}

export default App;