import React from 'react';
import { SectionList, View } from 'react-native';
import {
  Box,
  FlatList,
  Flex,
  Heading,
  List,
  ScrollView,
  Spacer,
  Text,
} from 'native-base';

import Calendar from '../components/Calendar';
import TasksStatus from '../components/TasksStatus';
import TaskProgress from '../components/TaskProgress';
import TaskPreview from '../components/TaskPreview';
import Tasks from '../components/Tasks';
import ListItem from 'native-base/src/components/primitives/List/ListItem';

function HomePage() {
  const calendarStart = new Date();
  const calendarEnd = new Date();
  calendarEnd.setDate(calendarStart.getDate() + 7);

  return (
    <ScrollView>
      <Flex
        style={{
          margin: 16,
          marginBottom: 0,
        }}
      >
        <Calendar start={calendarStart} end={calendarEnd} marked={[]} />
      </Flex>
      <Flex
        direction="row"
        style={{
          margin: 16,
        }}
      >
        <TasksStatus />
        <Spacer />
        <TaskProgress />
      </Flex>
      <Tasks />
    </ScrollView>
  );
}

export default HomePage;
