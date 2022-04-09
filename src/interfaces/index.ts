
export type initialStateType = {
    categoriesData: categoriesDataType,
    produdctData: productDataType,
}

export type categoryType = {
    createdAt: string,
    name: string,
    id: string
}

export type productType = {
    createdAt: string,
    name: string,
    avatar: string,
    id: string,
    price: string,
    category: string,
    description: string,
    developerEmail: string,
}

export type categoriesDataType = {
    categories: Array<categoryType>,
    category: object,
    isLoading: boolean,
    error: any | undefined | null,
}

export type productDataType = {
    products: Array<productType>,
    product: object,
    isLoading: boolean,
    error: any | undefined | null,
}