import React, { useState } from 'react';
import { Card, Typography, Button, Modal } from 'antd';
import { SoundOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

type WordCardProps = {
  word: string;
  definition: string;
  partOfSpeech: string;
  onRemove: () => void;
};

const dummyData: Omit<WordCardProps, 'onRemove'> = {
  word: "Ephemeral",
  definition: "Lasting for a very short time.",
  partOfSpeech: "adjective",
};

const WordCard: React.FC<WordCardProps> = ({ word, definition, partOfSpeech, onRemove }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onRemove();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        style={{ width: 300 }}
        actions={[
          <DeleteOutlined key="remove" onClick={showModal} />
        ]}
      >
        <Card.Meta
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: 4}}>
              <Title level={3} style={{ margin: 0 }}>{word}</Title>
              <Button
                type="text"
                shape='circle'
                icon={<SoundOutlined />}
                style={{ marginRight: 8, padding: 0 }}
              />
            </div>
          }
          description={
            <>
              <Text type="secondary" style={{ fontSize: '0.8em' }}>{partOfSpeech}</Text>
              <Paragraph style={{ marginTop: 6 }}>{definition}</Paragraph>
            </>
          }
        />
      </Card>
      <Modal
        title="Remove word"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to remove this word from your list?</p>
      </Modal>
    </>
  );
};

const DemoWordCard: React.FC = () => {
  const handleRemove = () => {
    console.log(`Removed ${dummyData.word} from the list`);
  };

  return <WordCard {...dummyData} onRemove={handleRemove} />;
};

export default DemoWordCard;
