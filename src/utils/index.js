const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "HKD",
    minimumFractionDigits: 0,
    currencyDisplay: "symbol",
});

export const currencyFilter = value => {
    if (typeof value === "number") {
        return formatter.format(value);
    } else {
        return value;
    }
};
