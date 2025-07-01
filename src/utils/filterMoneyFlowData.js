export async function filterMoneyFlowData(data, category) {
    return data.filter(x=> x.category == category)
}