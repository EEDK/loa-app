/*  
    오레하 계산기 정보
    오레하 가격을 출력하는 컨테이너
    중급 오레하 :30개 제작, 고대 유물 64, 희귀한 유물 26, 오레하 유물 8개 제작 비용 205 골드
    상급 오레하 : 20개 제작, 고대 유물 94, 희귀한 유물 29, 오레하 유물 16개 제작 비용 250 골드
    최상급 오레하 : 15개 제작, 고대 유물 107, 희귀한 유물 51, 오레하 유물 52개 제작 비용 300 골드
*/

import React, { useState, useEffect } from 'react';
import './Oreha.scss';
import axios from 'axios';
import { Value, Befefit, Header } from '../../component';
import indexStore from '../../modules/IndexStore';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// 테스트용 목업 데이터.
import { MockDataOreHa, MockDataRelic } from './mockData';

function Oreha() {
  const [orehaDatas, setOreha] = useState([]);
  const [orehaRelic, setRelic] = useState([]);

  const [isLoadingOreha, setLoadingOreha] = useState(false);
  const [isLoadingRelic, setLoadingRelic] = useState(false);

  const { keyStore, valueStore } = indexStore();
  const navigate = useNavigate();

  // APIKEY가 없을경우 home화면으로 이동
  const isSetAPIKEY = () => {
    if (keyStore.apiKey === '') {
      navigate('/');
    }
  };

  const getDataOreha = async () => {
    const url = 'https://developer-lostark.game.onstove.com';
    // const API_KEY = process.env.REACT_APP_LOA_API_KEY;
    const API_KEY = keyStore.apiKey;

    // 오레하 정보를 입력 받을 내용
    const optionsOreha = {
      method: 'POST',
      url: `${url}/markets/items`,
      headers: {
        accept: 'application/json',
        authorization: `bearer ${API_KEY}`,
        'content-Type': 'application/json',
      },
      data: JSON.stringify({
        CategoryCode: 50000,
        ItemName: '오레하',
      }),
    };

    await axios
      .request(optionsOreha)
      .then(function (response) {
        setOreha(response.data);
        setLoadingOreha(true);
      })
      .catch(function (error) {
        navigate('/');
        alert('유효한 APIKEY를 입력해 주세요');
      });
  };

  const getDataRelics = async () => {
    const url = 'https://developer-lostark.game.onstove.com';
    // const API_KEY = process.env.REACT_APP_LOA_API_KEY;
    const API_KEY = keyStore.apiKey;

    // 유물 정보를 입력 받을 내용
    const optionsRelics = {
      method: 'POST',
      url: `${url}/markets/items`,
      headers: {
        accept: 'application/json',
        authorization: `bearer ${API_KEY}`,
        'content-Type': 'application/json',
      },
      data: JSON.stringify({
        CategoryCode: 90000,
        ItemName: '유물',
      }),
    };

    await axios
      .request(optionsRelics)
      .then(function (response) {
        setRelic(response.data);
        setLoadingRelic(true);
      })
      .catch(function (error) {
        navigate('/');
      });
  };

  useEffect(() => {
    isSetAPIKEY();
    setLoadingOreha(true);
    setLoadingRelic(true);
    // getDataOreha();
    // getDataRelics();
  }, []);

  return (
    <div className="Oreha">
      <div>
        {isLoadingRelic && isLoadingOreha ? (
          <div>
            {' '}
            <Header></Header>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className="Oreha__main">
                <div className="Oreha__main__ingredientValue">
                  <Typography gutterBottom variant="h4" component="div">
                    재료 가격
                  </Typography>
                  {MockDataOreHa.Items.map((item) => (
                    <Value
                      key={item.Id}
                      name={item.Name}
                      value={item.CurrentMinPrice}
                    />
                  ))}
                  {MockDataRelic.Items.map((item) => (
                    <Value
                      key={item.Id}
                      name={item.Name}
                      value={item.CurrentMinPrice}
                    />
                  ))}
                </div>
                <div className="Oreha__main__benefitValue">
                  <Typography gutterBottom variant="h4" component="div">
                    이득 가격
                  </Typography>
                  <div>
                    {MockDataOreHa.Items.map((item) => (
                      <Befefit
                        key={item.Id}
                        name={item.Name}
                        value={item.CurrentMinPrice}
                        discountRate={valueStore.discountValue}
                        relicData={MockDataRelic}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Box>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
}

export default Oreha;
