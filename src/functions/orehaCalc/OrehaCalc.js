/*  오레하 계산기 정보
    normal -> 고대유물(100개)
    common(희귀유물 10개)
    oreha(오레하 유뭂 10)
    selector -> 어느 오레하의 제작비용인지 알아내는 구분자 0 -> 중급 1-> 상급 2-> 최상급
    discountRate -> 제작비용 할인률


    중급 오레하 :30개 제작, 고대 유물 64, 희귀한 유물 26, 오레하 유물 8개 제작 비용 205 골드
    상급 오레하 : 20개 제작, 고대 유물 94, 희귀한 유물 29, 오레하 유물 16개 제작 비용 250 골드
    최상급 오레하 : 15개 제작, 고대 유물 107, 희귀한 유물 51, 오레하 유물 52개 제작 비용 300 골드

*/

function OrehaCalc(name, nowValue, RelicData, discountRate) {
  var result = -1;

  var normal = 0,
    common = 0,
    oreha = 0;

  RelicData.Items.forEach((element) => {
    if (element.Name === '고대 유물') {
      normal = element.RecentPrice;
    } else if (element.Name === '희귀한 유물') {
      common = element.RecentPrice;
    } else if (element.Name === '오레하 유물') {
      oreha = element.RecentPrice;
    }
  });

  console.log(name, nowValue, RelicData, discountRate);

  switch (name) {
    case '하급 오레하 융화 재료':
      result = 1;
      break;
    case '중급 오레하 융화 재료':
      result = 2;
      break;
    case '상급 오레하 융화 재료':
      result = 3;
      break;
    case '최상급 오레하 융화 재료':
      result = 4;
      break;

    default:
      result = 0;
  }

  return result;
}

export default OrehaCalc;
