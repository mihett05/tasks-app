import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Flex, HStack, Text, VStack } from 'native-base';

const monthToName = {
  1: 'янв',
  2: 'фев',
  3: 'мар',
  4: 'апр',
  5: 'май',
  6: 'июн',
  7: 'июл',
  8: 'авг',
  9: 'сен',
  10: 'окт',
  11: 'ноя',
  12: 'дек',
};

function Calendar({ start, end, marked }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const result = [];
    for (let i = 0; i < (end - start) / (1000 * 60 * 60 * 24); i++) {
      const date = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + i
      );
      result.push({
        day: date.getDate(),
        month: monthToName[date.getMonth() + 1],
        isMarked: marked.includes(date),
      });
    }
    // for (let day = start; day !== end; day.setDate(day.getDate() + 1)) {
    //   result.push({
    //     day: day.getDate(),
    //     month: monthToName[day.getMonth() + 1],
    //     isMarked: marked.includes(day),
    //   });
    // }
    console.log(result);
    setDates(result);
  }, [start, end, marked]);

  return (
    <Box rounded="lg" shadow={5} bg="primary.400">
      <Text>Календарь</Text>
      <Center>
        <Flex direction="row">
          {dates.map((v) => (
            <VStack
              key={`${v.day}${v.month}`}
              style={{
                margin: 6,
              }}
            >
              <Center
                size={8}
                bg="primary.100"
                style={{
                  borderRadius: 50,
                }}
              >
                <Text fontSize="sm">{v.day}</Text>
              </Center>
              <Text
                fontSize="xs"
                style={{
                  textAlign: 'center',
                }}
              >
                {v.month}
              </Text>
            </VStack>
          ))}
        </Flex>
      </Center>
    </Box>
  );
}

Calendar.propTypes = {
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  marked: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
};

export default Calendar;
