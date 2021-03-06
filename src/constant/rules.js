const RulesItems = [
    {
        title: '新手练习',
        content: '如果您是新手，没有交易经验，建议您到模拟练习区进行模拟交易',
        show: false
    },
    {
        title: ' 什么是元模式 / 角模式',
        content: '选择“元模式”保证金将以元为单位交易，选择“角模式”保证金和手续费将在元的基础上缩小10倍进行交易',
        show: false
    },
    {
        title: ' 什么是买涨？',
        content: '当您买涨时，价格涨了你就赚钱，跌了亏钱。',
        show: false
    },
    {
        title: ' 什么是买跌？',
        content: '当您买跌时，价格跌了你就赚钱，涨了亏钱。',
        show: false
    },
    {
        title: ' 什么是止盈？',
        content: '当单笔交易盈利金额触发（多于等于）指定的止盈金额时，该笔交易会被强制平仓。'
            + '由于市场的价格实时都在变动，不保证平仓后最终盈利金额一定大于等于止盈金额，有可能会小于触发的止盈金额。',
        show: false
    },
    {
        title: ' 什么是止损？',
        content: '当单笔交易亏损金额触发（多于等于）指定的止损金额时，该笔交易会被强制平仓。'
            + '由于市场的价格实时都在变动，不保证卖出后最终亏损金额一定小于等于止损金额，有可能会大于止损金额。',
        show: false
    },
    {
        title: ' 什么是持仓时间？',
        content: '当持仓时间到点后，持仓中的交易会被强制平仓，不保证成交价格，请务必在到期前自己选择卖出。',
        show: false
    },
    {
        title: ' 盈利如何分配？',
        content: '盈利100%归操盘手所有，投资人不参与盈利分成。',
        show: false
    },
];

export default RulesItems;
