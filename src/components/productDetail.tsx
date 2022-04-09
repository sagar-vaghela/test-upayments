const ProductDetail = () => {
    return (
        <div className='flex justify-center'>
            <div className='box-border' style={{ background:'#f8f8f9',padding:'10px',width:'60rem',border:'1px solid #f4f4f5' }}>

          <div className='flex justify-center' >
             <div style={{ width: '300px', height: '300px', marginBottom:'20px', marginTop:'7rem', justifyContent:'flex-start'}} >
                 <img src={'https://apollo-singapore.akamaized.net/v1/files/vidbd53ml54m-IN/image'} />
             </div>
              <div style={{ display : 'grid',marginBottom:'20px', marginTop:'7rem',marginLeft:'20px' }}>
             <div className='text-4xl font-bold'>Apple Watch</div>
             <div className='font-bold' style={{ marginTop:'230px',}}>$ 529.99</div>
             </div>
             </div>

             <div className='justify-center' style={{ display : 'grid' ,}}>
             <div style={{ width : '40rem',  border: '1px solid #C4C4C4', marginBottom:'10px'}} />
             <div className="text-2xl font-bold'" >Description</div>
             <p className="selection:bg-fuchsia-300 selection:text-fuchsia-900 " style={{  width: '40rem',marginTop:'5px' }}>To function, the Apple Watch must be connected to an iPhone 5 or later running iOS 8.2 or higher, and within a range of about 33 feet. In addition to using a Bluetooth connection, the watch can also connect with an iPhone if it is on the same Wi-Fi network. The Apple Watch iPhone app allows users to change settings, rearrange apps, choose notifications and download new apps from their iPhone. The Apple Watch interface was designed specifically for the wrist, and navigation relies on swiping and tapping. Its Digital Crown is a physical navigation dial located on the side of the watch that magnifies content, scrolls and inputs data</p>
             </div> 
         </div>
            </div>
    )
}

export default ProductDetail;  