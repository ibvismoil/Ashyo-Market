
export const formatPrice = (input: string | number) => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export default formatPrice