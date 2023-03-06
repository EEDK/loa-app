import React from 'react';
import { OrehaCalc } from '../../functions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// 얼마 이득인지 나올 부분
function Befefit({ name, value, discountRate, relicData }) {
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
          <ListItemText
            primary={`${name}제작시 볼 수 있는 이득은 ${OrehaCalc(
              name,
              value,
              relicData,
              discountRate
            )}입니다.`}
          />
        </ListItem>
        <Divider component="li" />
      </List>
    </div>
  );
}

export default Befefit;
