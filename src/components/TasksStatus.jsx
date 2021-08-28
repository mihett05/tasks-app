import React from 'react';
import { Center, Heading, Text } from 'native-base';

function TasksStatus() {
  return (
    <Center size={40} bg="white" rounded="lg" shadow={5}>
      <Heading>4/5</Heading>
      <Text
        style={{
          textAlign: 'center',
        }}
      >
        задач выполнено
      </Text>
    </Center>
  );
}

export default TasksStatus;
