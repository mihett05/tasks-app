import React from 'react';
import { Box, Heading } from 'native-base';
import { SectionList } from 'react-native';
import TaskPreview from './TaskPreview';

function Tasks() {
  const tasks = [
    {
      title: '30 августа',
      data: Array.from(Array(10).keys()).map((i) => ({
        id: i + 1,
        name: `Задача ${i + 1}`,
        description:
          'Описание задачи описание задачи описание задачи описание задачи описание задачи описание задачи',
      })),
    },
    {
      title: '31 августа',
      data: Array.from(Array(10).keys()).map((i) => ({
        id: i + 1,
        name: `Задача ${i + 1}`,
        description:
          'Описание задачи описание задачи описание задачи описание задачи описание задачи описание задачи',
      })),
    },
  ];

  return (
    <SectionList
      sections={tasks}
      keyExtractor={(v) => v.id}
      legacyImplementation
      renderItem={({ item }) => (
        <TaskPreview
          id={item.id}
          name={item.name}
          description={item.description}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Heading fontSize="xl" px={4} color="dark.400">
          {title}
        </Heading>
      )}
      style={{
        marginLeft: 4,
        marginRight: 4,
      }}
    />
  );
}

export default Tasks;
