export const repeatTag = (tag, amount) => {
    return [...Array(amount)].map(() => tag);
}