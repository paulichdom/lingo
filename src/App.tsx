import React from 'react';
import { Input, Layout, Menu, theme, Typography } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';
import SearchResult from './components/SearchResult';
import WordCard from './components/WordCard';
import DictionaryList from './components/DictionaryList';
import BottomNavigation from './components/BottomNavigation';

const { Content, Footer } = Layout;<s></s>
const { Title } = Typography;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    { key: '1', icon: <HomeOutlined />, label: 'Home' },
    { key: '2', icon: <AppstoreOutlined />, label: 'Apps' },
    { key: '3', icon: <SettingOutlined />, label: 'Settings' },
  ];

  return (
    <Layout style={{ minHeight: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', background: 'white' }}>
      <Content style={{ flex: '1 0 auto', padding: '16px', maxWidth: '560px' }}>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: '100%',
          }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>Lingo</Title>
          <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
          {/* <SearchResult /> */}
          {/* <WordCard /> */}
          <DictionaryList />
        </div>
      </Content>
      <Footer style={{ padding: 0, flexShrink: 0 }}>
        <BottomNavigation />
      </Footer>
    </Layout>
  );
};

export default App;