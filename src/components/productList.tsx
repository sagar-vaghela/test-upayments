import { Link } from "react-router-dom";
import { CREATE_PRODUCT, PRODUCT_ROUTE } from "../lib/constants/routes";

const products = [
  {
    id: 1,
    name: "Apple iPhone Xs Max",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description: "Facial Recognition, Fingerprint Scanner",
    brand: "Apple",
    price: 99000,
    type: "Mobile",
  },
  {
    id: 2,
    name: "Oppo F11 Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description: "48 MP Rear Camera, 4G LTE, Dual SIM",
    brand: "Oppo",
    price: 24990,
    type: "Mobile",
  },
  {
    id: 3,
    name: "BlackBerry Key2",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description: "22 hours battery life, 4.5 inches screen",
    brand: "BlackBerry",
    price: 29249,
    type: "Mobile",
  },
  {
    id: 4,
    name: "Nokia 6.1 Plus",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "16 MP Front Camera, 5 MP Rear Camera, Storage capacity 64 GB, Dual SIM",
    brand: "Nokia",
    price: 15270,
    type: "Mobile",
  },
  {
    id: 5,
    name: "SAMSUNG GALAXY A9 Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "Brand: Samsung, Operating system: Android, Screen size: 6.3 inches screen, Security features: Fingerprint Scanner, Rear camera resolution: 24 MP Rear Camera, Storage capacity: 128 GB",
    brand: "Samsung",
    price: 31000,
    type: "Mobile",
  },
  {
    id: 6,
    name: "Panasonic TH-43FX650D 108 cm (43 inches) Smart Ultra HD 4K LED TV (Grey)",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "Resolution: 3840 x 2160 Pixels, USB: 2, HDMI: 3, Speaker Output : 20 W (10 W x 2), Screen Size: 108 cm (43 inches)",
    brand: "Panasonic",
    price: 40950,
    type: "TV",
  },
  {
    id: 7,
    name: 'Samsung 138cm (55") NU6100 UHD TV',
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "sharp, crisp images with 4K UHD TV that has 4x more pixels than a FHD TV.",
    brand: "Samsung",
    price: 65990,
    type: "TV",
  },
  {
    id: 8,
    name: "Panasonic 1.5 Ton 3 Star Split Inverter AC",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "PM2.5 Twin Filter, Catechin Filter, Blue Fin Condenser, Three Star Energy Rating, 4 Way Swing",
    brand: "Panasonic",
    price: 36894,
    type: "AC",
  },
  {
    id: 9,
    name: "Samsung AR18NV5HETU Inverter Split AC",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "World's First^ 8 Pole Digital Inverter, Anti Corrosion by DURAFIN, Warranty: 10 year Compressor, 5 year Condenser, Pattern: Blooming Saffron",
    brand: "Samsung",
    price: 51800,
    type: "AC",
  },
  {
    id: 10,
    name: "Dell Inspiron 3477",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "CPU: 1.8GHz Intel Core i7-8565U (quad-core, 8MB cache, up to 4.6GHz) Graphics: Intel UHD Graphics 620. RAM: 16GB DDR3 (2,133MHz) Screen: 13.3-inch, Ultra HD (3,840 x 2,160) UltraSharp InfinityEdge touch display",
    brand: "Dell",
    price: 119990,
    type: "Laptop",
  },
  {
    id: 11,
    name: "HP Spectre x360 Laptop - 13t",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "8th Generation Intel® Core™ i5 processor, Intel® UHD Graphics 620; 8GB Memory(onboard), 8GB Memory(onboard); 256 GB SSD storage",
    brand: "HP",
    price: 132890,
    type: "Laptop",
  },
  {
    id: 12,
    name: "Dell Inspiron AIO 3477 ",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "Graphics processor: Intel GPU, Installed memory: 4 GB RAM, rive capacity: 1 TB Storage, Processor brand: Intel CPU",
    brand: "Dell",
    price: 68499,
    type: "Desktop",
  },
  {
    id: 13,
    name: "HP ENVY 34 Curved All-in-One",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "Windows 10, With a 7th generation Intel® Core™ processor, 21:9 aspect ratio, high resolution WQHD (3440x1440), An exceptionally rich audio experience by Bang & Olufsen",
    brand: "HP",
    price: 102835,
    type: "Desktop",
  },
  {
    id: 14,
    name: "TITAN Crystal by Raga I Am 95095WM01",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description: "Raga I Am Pink Dial Analog Watch for Women",
    brand: "Titan",
    price: 14495,
    type: "Watch",
  },
  {
    id: 15,
    name: "Fastrack REFLEX WAV GESTURE CONTROL SMART BAND SWD90064PP01",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "Fastrack Reflex Wav, world's slimmest gesture control smart band with activity tracker, OLED display and more",
    brand: "Fastrack",
    price: 4995,
    type: "Watch",
  },
  {
    id: 16,
    name: "Bose Quietcomfort 25",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      'Sound/audio: "Great sound very comfortable", Value: "Good value for a quality product", Battery: "Great noise cancellation (even without batteries).", Bass: "The noise cancelling is great and the bass is awesome!"',
    brand: "Bose",
    price: 25200,
    type: "Headphone",
  },
  {
    id: 17,
    name: "Apple EarPods with Lightning Connector (White)",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description: "Apple EarPods with Lightning Connector (White)",
    brand: "Apple",
    price: 2400,
    type: "Earphone",
  },
  {
    id: 18,
    name: "Samsung Earphone EG920 EO-EG920BBEG",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "Optimised for use with Samsung smartphones, the In-ear Fit delivers clearer and richer sounds. 12mm dynamic driver offers deeper bass and better balance. With microphone casing made from groundbreaking wind-sound reducing material, you can enjoy higher-quality voice calls than ever before with the In-ear Fit.",
    brand: "Samsung",
    price: 999,
    type: "Earphone",
  },
  {
    id: 19,
    name: "Bose SoundSport In-Ear Headphones",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_TR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1633657407000",
    description:
      "A sweat-resistant, earbud-style headphone that's ultracomfortable and stays in your ears",
    brand: "Bose",
    price: 10013,
    type: "Earphone",
  },
];

const ProductList = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex mb-4 ">
          <div className="grid justify-items-start pb-6 h-12 w-1/2">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              name="search"
              type="search"
              autoComplete="search"
              required
              className="appearance-none rounded-md  relative block w-80 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  shadow-md focus:z-10 sm:text-sm"
              placeholder="search"
            />
          </div>
          <div className="grid justify-items-end pb-6 h-12 w-1/2">
            <label htmlFor="categories" className="sr-only">
              Categories
            </label>
            <div>
              <select
                id="categories"
                name="categories"
                placeholder="Categories"
                autoComplete="categories"
                className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500  sm:text-sm"
              >
                <option>Mobile</option>
                <option>Watch</option>
                <option>Headphone</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`${PRODUCT_ROUTE}/${product.id}`} key={product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 decoration-4 text-gray-1000">
                {product.name}
              </h2>
              <p className="mt-1 decoration-4 text-center font-medium text-gray-900">{`$${product.price}`}</p>
            </Link>
          ))}
        </div>
        <div className="grid justify-items-end ">
          <Link to={CREATE_PRODUCT}>
          <button className="bg-black text-white py-5 px-5 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
