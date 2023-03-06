import OrehaCalc from './OrehaCalc';

it('하급 오레하 계산 정상', () => {
  expect(
    OrehaCalc(
      '하급 오레하 융화 재료',
      9,
      {
        PageNo: 1,
        PageSize: 10,
        TotalCount: 4,
        Items: [
          {
            Id: 6882701,
            Name: '고대 유물',
            Grade: '일반',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_3.png',
            BundleCount: 100,
            TradeRemainCount: null,
            YDayAvgPrice: 51.4,
            RecentPrice: 52,
            CurrentMinPrice: 52,
          },
          {
            Id: 6882704,
            Name: '희귀한 유물',
            Grade: '고급',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_4.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 10.3,
            RecentPrice: 11,
            CurrentMinPrice: 10,
          },
          {
            Id: 6884707,
            Name: '칼다르 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_10.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 1,
            RecentPrice: 1,
            CurrentMinPrice: 1,
          },
          {
            Id: 6885708,
            Name: '오레하 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_11.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 66.9,
            RecentPrice: 68,
            CurrentMinPrice: 67,
          },
        ],
      },
      10
    )
  ).toBe('-0.58');
});

it('중급 오레하 계산 확인', () => {
  expect(
    OrehaCalc(
      '중급 오레하 융화 재료',
      11,
      {
        PageNo: 1,
        PageSize: 10,
        TotalCount: 4,
        Items: [
          {
            Id: 6882701,
            Name: '고대 유물',
            Grade: '일반',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_3.png',
            BundleCount: 100,
            TradeRemainCount: null,
            YDayAvgPrice: 51.4,
            RecentPrice: 52,
            CurrentMinPrice: 52,
          },
          {
            Id: 6882704,
            Name: '희귀한 유물',
            Grade: '고급',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_4.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 10.3,
            RecentPrice: 11,
            CurrentMinPrice: 10,
          },
          {
            Id: 6884707,
            Name: '칼다르 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_10.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 1,
            RecentPrice: 1,
            CurrentMinPrice: 1,
          },
          {
            Id: 6885708,
            Name: '오레하 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_11.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 66.9,
            RecentPrice: 68,
            CurrentMinPrice: 67,
          },
        ],
      },
      10
    )
  ).toBe('1.12');
});

it('상급 오레하 계산 확인', () => {
  expect(
    OrehaCalc(
      '상급 오레하 융화 재료',
      23,
      {
        PageNo: 1,
        PageSize: 10,
        TotalCount: 4,
        Items: [
          {
            Id: 6882701,
            Name: '고대 유물',
            Grade: '일반',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_3.png',
            BundleCount: 100,
            TradeRemainCount: null,
            YDayAvgPrice: 51.4,
            RecentPrice: 48,
            CurrentMinPrice: 52,
          },
          {
            Id: 6882704,
            Name: '희귀한 유물',
            Grade: '고급',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_4.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 10.3,
            RecentPrice: 9,
            CurrentMinPrice: 10,
          },
          {
            Id: 6884707,
            Name: '칼다르 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_10.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 1,
            RecentPrice: 1,
            CurrentMinPrice: 1,
          },
          {
            Id: 6885708,
            Name: '오레하 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_11.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 66.9,
            RecentPrice: 62,
            CurrentMinPrice: 67,
          },
        ],
      },
      0
    )
  ).toBe('1.98');
});

it('최상급 오레하 계산 확인', () => {
  expect(
    OrehaCalc(
      '최상급 오레하 융화 재료',
      49,
      {
        PageNo: 1,
        PageSize: 10,
        TotalCount: 4,
        Items: [
          {
            Id: 6882701,
            Name: '고대 유물',
            Grade: '일반',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_3.png',
            BundleCount: 100,
            TradeRemainCount: null,
            YDayAvgPrice: 51.4,
            RecentPrice: 48,
            CurrentMinPrice: 52,
          },
          {
            Id: 6882704,
            Name: '희귀한 유물',
            Grade: '고급',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_4.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 10.3,
            RecentPrice: 9,
            CurrentMinPrice: 10,
          },
          {
            Id: 6884707,
            Name: '칼다르 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_10.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 1,
            RecentPrice: 1,
            CurrentMinPrice: 1,
          },
          {
            Id: 6885708,
            Name: '오레하 유물',
            Grade: '희귀',
            Icon: 'https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_11.png',
            BundleCount: 10,
            TradeRemainCount: null,
            YDayAvgPrice: 66.9,
            RecentPrice: 62,
            CurrentMinPrice: 67,
          },
        ],
      },
      0
    )
  ).toBe('1.02');
});
