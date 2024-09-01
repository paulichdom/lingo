import React from 'react';
import { Card, Typography, Button, Tooltip } from 'antd';
import { PlusCircleOutlined, PlusOutlined, SoundOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

type WordCardProps = {
  word: string;
  definition: string;
  partOfSpeech: string;
};

const dummyData: WordCardProps = {
  word: "Serendipity",
  definition: "The occurrence and development of events by chance in a happy or beneficial way.",
  partOfSpeech: "noun",
};

const SearchResult: React.FC<WordCardProps> = ({ word, definition, partOfSpeech }) => {
  const handleAddToList = () => {
    console.log(`Added ${word} to the list`);
  };

  return (
    <div style={{ padding: '0px 4px', background: 'white', marginTop: '16px' }}>
      <Title level={5} style={{ marginBottom: 4 }}>
        Dictionary
      </Title>
      <Paragraph style={{ marginBottom: 16 }}>
        Definitions from Oxford Languages · Learn more
      </Paragraph>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <Button
          type="primary"
          shape='circle'
          icon={<SoundOutlined />}
          style={{ marginRight: 8 }}
        />
        <Title level={2} style={{ margin: 0 }}>{word}</Title>
      </div>
      <Text type="secondary" style={{ fontSize: '0.8em' }}>{partOfSpeech}</Text>
      <Paragraph style={{ marginTop: 6 }}>{definition}</Paragraph>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
        <Button icon={<PlusOutlined />} shape='round' onClick={handleAddToList} >Add to List</Button>
      </div>
    </div>
  );
};

const DemoSearchResult: React.FC = () => <SearchResult {...dummyData} />;

export default DemoSearchResult;
