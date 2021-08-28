import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'native-base';

function TaskPreview({ id, name, description }) {
  return (
    <Box
      bg="white"
      rounded="lg"
      shadow={5}
      style={{
        marginBottom: 6,
      }}
    >
      <Heading fontSize="xl" color="dark.300" mx={4}>
        {name}
      </Heading>
      <Text isTruncated numberOfLines={2} mx={1}>
        {description}
      </Text>
    </Box>
  );
}

TaskPreview.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default TaskPreview;
