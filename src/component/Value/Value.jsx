import React from 'react';
import './Value.scss';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// 값을 도출하는 각각의 컴포넌트
function Value({ name, value }) {
  return (
    <div>
      <List
        sx={{
          width: '100%',
          maxWidth: 500,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem>
          <ListItemText primary={`${name}의 현재 값은 ${value} 골드 입니다.`} />
        </ListItem>
        <Divider component="li" />
      </List>
    </div>
  );
}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Value;
