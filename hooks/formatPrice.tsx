export const formatPrice = (input?: string | number) => {
    if (input === undefined || input === null) return "0"
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export default formatPrice
