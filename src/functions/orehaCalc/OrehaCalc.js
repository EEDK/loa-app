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

function OrehaCalc(normal, common, oreha, selecter, discountRate) {
  switch (selecter) {
    case 0:
      //중급 계산
      break;
    case 1:
      // 상급계산
      break;
    case 2:
      // 최상급 계산
      break;
    default:
      alert("문제가 발생했습니다. 적합하지 못한 입력값입니다.");
  }
}

export default OrehaCalc;
