import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Center, Text, useTheme } from 'native-base';

function TaskProgress() {
  const { colors } = useTheme();
  return (
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
  );
}

export default TaskProgress;
