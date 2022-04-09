const CreateProduct = () => {
    return (
        <>
            <div className="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Product</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="product-name" className="sr-only">
                                    Product name
                                </label>
                                <input
                                    id="product-name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-md  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  shadow-md focus:z-10 sm:text-sm"
                                    placeholder="Product name"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="sr-only">
                                    Description
                                </label>
                                <div className="mt-5">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="shadow-md focus:border-none mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="  Description"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="product-name" className="sr-only">
                                    Image URL
                                </label>
                                <div className="mt-5">
                                    <input
                                        id="product-name"
                                        name="imagurl"
                                        type="url"
                                        required
                                        className="appearance-none shadow-md rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm"
                                        placeholder="image URL"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="categories" className="sr-only">
                                    Categories
                                </label>
                                <div className="mt-5">
                                    <select
                                        id="categories"
                                        name="categories"
                                        placeholder="Categories"
                                        autoComplete="categories"
                                        className="mt-1 shadow-md block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500  sm:text-sm"
                                    >
                                        <option>Mobile</option>
                                        <option>Watch</option>
                                        <option>Headphone</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="sr-only">
                                    Price
                                </label>
                                <div className="mt-5">
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        required
                                        className="appearance-none  shadow-md rounded-md  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm"
                                        placeholder="Price"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="submit" className="sr-only ">
                                SUBMIT
                            </label>
                            <div className="mt-8">
                                <input
                                    id="submit"
                                    name="SUBMIT"
                                    type="submit"
                                    className="appearance-none rounded-md shadow-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-000 text-gray-1000 rounded-t-md focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateProduct;