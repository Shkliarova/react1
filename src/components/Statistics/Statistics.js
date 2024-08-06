import {
    StatisticsWrap,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    ItemTitle
 } from "./Statistics.styled"

export const Statistic = ({ title, stats }) => {
    return (
        <StatisticsWrap>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList>  
            {stats.map(item =>
                <StatisticsItem key={item.id}>
                    <ItemTitle>{item.label}</ItemTitle>
                    <span>{item.percentage}</span>
                </StatisticsItem>
            )}
            </StatisticsList>
        </StatisticsWrap>
    )
}