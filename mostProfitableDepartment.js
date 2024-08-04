export function mostProfitableDepartment(salesData) {
    if (salesData.length === 0) return undefined;

    const departmentSales = {};

    for (const sale of salesData) {
        const department = sale.department;
        const sales = sale.sales;

        if (departmentSales[department] === undefined) {
            departmentSales[department] = sales;
        } else {
            departmentSales[department] += sales;
        }
    }

    let maxSales = 0;
    let profitableDepartment = undefined;

    for (const department in departmentSales) {
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            profitableDepartment = department;
        }
    }

    return profitableDepartment;
}
