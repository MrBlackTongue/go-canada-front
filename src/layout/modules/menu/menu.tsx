import React, {useState} from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Link} from "react-router-dom";

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


const MenuMain: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark"/>
};

export default MenuMain;