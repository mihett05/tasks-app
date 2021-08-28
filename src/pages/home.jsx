import React from 'react';
import { View } from 'react-native';
import { Center, Flex, Heading, Spacer, useTheme, Text } from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Calendar from '../components/Calendar';

function HomePage() {
  const { colors } = useTheme();

  const calendarStart = new Date();
  const calendarEnd = new Date();
  calendarEnd.setDate(calendarStart.getDate() + 7);

  return (
    <View>
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

        <Spacer />
        <Center size={40} bg="white" rounded="lg" shadow={5}>
          <AnimatedCircularProgress
            size={140}
            width={15}
            fill={90}
            tintColor={colors['primary']['400']}
            backgroundColor={colors['primary']['100']}
          >
            {(fill) => (
              <Text
                fontSize="sm"
                style={{
                  textAlign: 'center',
                }}
              >
                4 дня до ближайшей задачи
              </Text>
            )}
          </AnimatedCircularProgress>
        </Center>
      </Flex>
    </View>
  );
}

export default HomePage;
