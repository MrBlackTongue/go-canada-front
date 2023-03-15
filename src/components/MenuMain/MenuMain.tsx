import React, {useState} from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Link} from "react-router-dom";

const items = [
  {
    label: 'Главная',
    key: 'main',
    icon: <Link to="/"><MailOutlined/></Link>,
    link: '/',
  },
  {
    label: 'Все статьи',
    key: 'all-article',
    icon: <Link to="/all-article"><MailOutlined/></Link>,
    link: '/all-article',
  },
  {
    label: 'Добавление статьи',
    key: 'add-article',
    icon: <Link to="/add-article"><AppstoreOutlined/></Link>,
    link: '/add-article',
  },
  // {
  //   label: (
  //     <a href="https://in-ca.ru/express-entry/16-immigration-to-canada-express-entry.html" target="_blank"
  //        rel="noopener noreferrer">
  //       Ссылка на источник
  //     </a>
  //   ),
  //   key: 'alipay',
  // },
];

const MenuMain: React.FC = () => {
  const [current, setCurrent] = useState('main');

  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark"/>
};

export default MenuMain;