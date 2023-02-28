import React, {useState} from 'react';
import './App.css';
import {Breadcrumb, Card, Layout, theme, Dropdown, Space, Menu, MenuProps} from 'antd';
import {Routes, Route, Link} from "react-router-dom";
import AddArticle from "./layout/modules/addArticle/addArticle";
import Home from "../src/layout/modules/home/home";
import MenuMain from "./layout/modules/menu/menu";
import {AppstoreOutlined, MailOutlined, SettingOutlined, TeamOutlined} from "@ant-design/icons";

const {Header, Content, Footer} = Layout;

const items = [
  {
    label: 'Главная',
    key: 'mail',
    icon: <Link to="/"><MailOutlined/></Link>,
    link: '/',
  },

  {
    label: 'Иммиграция',
    key: 'app',
    icon: <Link to="/add-article"><AppstoreOutlined/></Link>,
    link: '/add-article',
  },
  {
    label: 'Виза',
    key: 'SubMenu',
    icon: <SettingOutlined/>,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Работа',
    key: 'SubMenu2',
    icon: <TeamOutlined/>,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:5',
          },
          {
            label: 'Option 2',
            key: 'setting:6',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://in-ca.ru/express-entry/16-immigration-to-canada-express-entry.html" target="_blank"
         rel="noopener noreferrer">
        Ссылка на источник
      </a>
    ),
    key: 'alipay',
  },
];

const App: React.FC = () => {

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

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
        {/*<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark"/>*/}

      </Header>
      <Layout className="site-layout">

        <Content className="site-layout" style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
            <Breadcrumb.Item>Express entry</Breadcrumb.Item>
            <Breadcrumb.Item>Пошаговая инструкция</Breadcrumb.Item>
          </Breadcrumb>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add-article' element={<AddArticle/>}/>
          </Routes>
          {/*<div style={{padding: 24, minHeight: 380,}}>Content</div>*/}
        </Content>
      </Layout>
      <Footer style={{textAlign: 'center'}}>Если вы еще не в Канаде, тогда мы идем к вам!</Footer>
    </Layout>
  )
}

export default App;
