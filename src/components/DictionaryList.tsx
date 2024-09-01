import React, { useEffect, useState } from 'react';
import { Button, List, Modal, Skeleton, Avatar } from 'antd';
import { SoundOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';

type WordData = {
  word: string;
  definition: string;
  partOfSpeech: string;
};

const dummyData: WordData[] = [
  { word: "Example", definition: "A representative form or pattern", partOfSpeech: "noun" },
  { word: "Coding", definition: "The process of creating computer programming code", partOfSpeech: "verb" },
  { word: "Efficient", definition: "Achieving maximum productivity with minimum wasted effort", partOfSpeech: "adjective" },
];

const DictionaryList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<WordData[]>([]);
  const [list, setList] = useState<WordData[]>([]);

  useEffect(() => {
    // Simulate loading with setTimeout
    setTimeout(() => {
      setData(dummyData);
      setList(dummyData);
      setInitLoading(false);
    }, 1500); // 1.5 seconds delay
  }, []);

  const loadMore = !initLoading && !loading ? (
    <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
      <Button onClick={() => console.log('Load more')}>Load more</Button>
    </div>
  ) : null;

  const handleDelete = (wordToDelete: string) => {
    const newList = list.filter(w => w.word !== wordToDelete);
    setList(newList);
    setData(newList);
  };

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button key="sound" onClick={() => console.log(`Play sound for ${item.word}`)}>Sound</Button>,
            <Button key="info" onClick={() => console.log(`Show info for ${item.word}`)}>Info</Button>,
            <Button key="delete" danger onClick={() => handleDelete(item.word)}>Remove</Button>,
          ]}
        >
          <Skeleton title={false} loading={initLoading} active>
            <List.Item.Meta
              title={<a href="#">{item.word}</a>}
              description={
                <>
                  <div>{item.partOfSpeech}</div>
                  <div>{item.definition}</div>
                </>
              }
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default DictionaryList;
