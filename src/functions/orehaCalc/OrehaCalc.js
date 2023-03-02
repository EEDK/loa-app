/*  오레하 계산기 정보
    normal -> 고대유물(100개)
    common(희귀유물 10개)
    oreha(오레하 유물 10)
    discountRate -> 제작비용 할인률

    하급 오레하 : 30개 제작, 고대 유물 : 56, 희귀 유물 : 28, 오레하 유물 : 7개 제작 비용 200골드
    중급 오레하 :30개 제작, 고대 유물 64, 희귀한 유물 26, 오레하 유물 8개 제작 비용 200 골드
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

  switch (name) {
    case '하급 오레하 융화 재료':
      result =
        (nowValue * 30 -
          (normal * 0.56 +
            common * 2.8 +
            oreha * 0.7 +
            200 * ((100 - discountRate) / 100))) /
        30;

      result = result.toFixed(2);
      break;
    case '중급 오레하 융화 재료':
      result =
        (nowValue * 30 -
          (normal * 0.64 +
            common * 2.6 +
            oreha * 0.8 +
            200 * ((100 - discountRate) / 100))) /
        30;

      result = result.toFixed(2);
      break;
    case '상급 오레하 융화 재료':
      result =
        (nowValue * 20 -
          (normal * 0.94 +
            common * 2.9 +
            oreha * 1.6 +
            250 * ((100 - discountRate) / 100))) /
        20;

      result = result.toFixed(2);
      break;
    case '최상급 오레하 융화 재료':
      result =
        (nowValue * 15 -
          (normal * 1.07 +
            common * 5.1 +
            oreha * 5.2 +
            300 * ((100 - discountRate) / 100))) /
        15;

      result = result.toFixed(2);
      break;

    default:
      result = 0;
  }

  return result;
}

export default OrehaCalc;
