import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import indexStore from '../../modules/IndexStore';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { keyStore, valueStore } = indexStore();
  const navigate = useNavigate();

  const setAPIKEY = (event) => {
    const APITEXT = document.getElementById('APIKEY');
    const DisCountTEXT = document.getElementById('discountValue');

    if (APITEXT != null && DisCountTEXT != null) {
      keyStore.setAPIKEY(APITEXT.value);
      valueStore.setDiscount(DisCountTEXT.value);
    } else {
      alert('적합한 값을 입력하세요');
    }
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            로아 계산기
          </Typography>
          <Button onClick={handleOpen} color="inherit">
            API-KEY 수정
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                API-KEY 수정 및 영지 설정 변경
              </Typography>
              <TextField
                fullWidth
                id="APIKEY"
                label="APIKEY"
                variant="outlined"
                defaultValue={keyStore.apiKey}
              />
              <TextField
                margin="normal"
                fullWidth
                label="영지 할인 퍼센트"
                id="discountValue"
                name="discountValue"
                defaultValue={valueStore.discountValue}
              />
              <Button onClick={setAPIKEY} variant="outlined">
                변경
              </Button>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
};
