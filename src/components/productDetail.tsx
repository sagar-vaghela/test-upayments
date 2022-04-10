import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions';
import { initialStateType, productType } from '../interfaces';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector<initialStateType, productType>((state) => state.productData.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="box-border ">
        <div className="flex justify-center right-2.5">
          <div className="w-60 pt-10 mr-7 mt-28">
            <img alt={product?.avatar} src={product?.avatar} />
          </div>
          <div>
            <div className="text-4xl font-bold mt-48 mr-64">{product?.name}</div>
            <div className="font-bold mt-28">$ {product?.price}</div>
          </div>
        </div>
        <div className="justify-center">
          <div className="border-t-4 border-gray-300" />
          <div className="text-2xl font-Zinc-400 mt-4 text-Blacks">Description</div>
          <p className="max-w-2xl">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
