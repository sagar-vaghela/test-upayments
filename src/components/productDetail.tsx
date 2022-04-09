/* eslint-disable jsx-a11y/alt-text */
const ProductDetail = () => {
    return (
        <div className='flex justify-center'>
            <div className='box-border '>
                <div className='flex justify-center right-2.5' >
                    <div className = "w-60 pt-10 mr-7 mt-28">
                        <img   
                        src={'https://apollo-singapore.akamaized.net/v1/files/vidbd53ml54m-IN/image'} 
                        />
                    </div>
                    <div>
                        <div className='text-4xl font-bold mt-48 mr-64'>Apple Watch</div>
                        <div className='font-bold mt-28'>$ 529.99</div>
                    </div>
                </div>
                <div className='justify-center'>
                    <div className="border-t-4 border-gray-300"/>
                    <div className="text-2xl font-Zinc-400 mt-4 text-Blacks" >Description</div>
                    <p className="max-w-2xl">To function, the Apple Watch must be connected to an iPhone 5 or later running iOS 8.2 or higher, and within a range of about 33 feet. In addition to using a Bluetooth connection, the watch can also connect with an iPhone if it is on the same Wi-Fi network. The Apple Watch iPhone app allows users to change settings, rearrange apps, choose notifications and download new apps from their iPhone. The Apple Watch interface was designed specifically for the wrist, and navigation relies on swiping and tapping. Its Digital Crown is a physical navigation dial located on the side of the watch that magnifies content, scrolls and inputs data</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;  