import {useMemo} from "react";

export function useSortedCandles(candles, category) {
    const sortedCandles = useMemo(() => {
        if (category) {
            return candles.filter(candle => candle.category.includes(category))
        }
    }, [candles, category])

    return sortedCandles;
}

export function useCandles(candles, category, query) {
    const sortedCandles = useSortedCandles(candles, category)
    const searchedCategoryCandles = useMemo(() => {
        return sortedCandles.filter(candle => candle.title.toLowerCase()
            .includes(query.toLowerCase()))
    })
    return searchedCategoryCandles
}


