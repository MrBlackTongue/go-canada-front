import React from 'react';
import './App.css';
import {Breadcrumb, Card, Layout, Menu, theme, Dropdown, Space} from 'antd';
import {Routes, Route, Link} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  TrophyOutlined,
  UnorderedListOutlined,
  PicLeftOutlined,
  FormOutlined,
  TeamOutlined,
  CopyOutlined,
  FunctionOutlined,
  DollarCircleOutlined,
  AccountBookOutlined,
  DatabaseOutlined,
  DownOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import AddArticle from "./layout/modules/addArticle/addArticle";
import Home from "../src/layout/modules/home/home";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <TeamOutlined/>,
      // icon: <Link to='/add-article'><TeamOutlined/></Link>,
      label: 'Главная',
    },
    {
      key: '2',
      icon: <UnorderedListOutlined/>,
      label: 'Иммиграция',
    },
    {
      key: '3',
      icon: <PicLeftOutlined/>,
      label: 'Виза',
    },
    {
      key: '4',
      icon: <FormOutlined/>,
      label: 'Работа',
    },
    {
      key: '5',
      icon: <CopyOutlined/>,
      label: 'Вопрос-ответ',
    },
  ];

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <div className="logo"  />
        {/*<img src="/public/img.png" alt="Go Canada"/>*/}
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} style={{color: '#a5adb5', padding: 16}}>
            <Space>
              Главная
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} style={{color: '#a5adb5', padding: 16}}>
            <Space>
              Иммиграция
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} style={{color: '#a5adb5', padding: 16}}>
            <Space>
              Виза
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} style={{color: '#a5adb5', padding: 16}}>
            <Space>
              Работа
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} style={{color: '#a5adb5', padding: 16}}>
            <Space>
              Вопрос-ответ
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/*<Menu*/}
        {/*  theme="dark"*/}
        {/*  mode="horizontal"*/}
        {/*  // defaultSelectedKeys={['2']}*/}
        {/*  items={[*/}
        {/*    {*/}
        {/*      key: '1',*/}
        {/*      icon: <TeamOutlined/>,*/}
        {/*      label: 'Главная',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      key: '2',*/}
        {/*      icon: <UnorderedListOutlined/>,*/}
        {/*      label: 'Иммиграция',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      key: '3',*/}
        {/*      icon: <PicLeftOutlined/>,*/}
        {/*      label: 'Виза',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      key: '4',*/}
        {/*      icon: <FormOutlined/>,*/}
        {/*      label: 'Работа',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      key: '5',*/}
        {/*      icon: <CopyOutlined/>,*/}
        {/*      label: 'Вопрос-ответ',*/}
        {/*    },*/}
        {/*  ]}*/}

        {/*  // items={new Array(3).fill(null).map((_, index) => ({*/}
        {/*  //   key: String(index + 1),*/}
        {/*  //   label: `nav ${index + 1}`,*/}
        {/*  // }))}*/}
        {/*/>*/}
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Express entry</Breadcrumb.Item>
          <Breadcrumb.Item>Пошаговая инструкция</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>Content</div>
        </Card>
      </Content>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-article' element={<AddArticle/>}/>
      </Routes>
      <Footer style={{ textAlign: 'center' }}>Go Canada</Footer>
    </Layout>
  );
};

export default App;
