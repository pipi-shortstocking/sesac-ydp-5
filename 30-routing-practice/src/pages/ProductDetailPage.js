import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  const { productId } = useParams(); // {productId: '2'}
  // 숫자로 보내도 string으로 찍힘, 객체로 감싸서 전달됨
  // console.log(parameter);
  console.log(productId); // '2'
  console.log(productInfos);

  const navigate = useNavigate();

  const targetProduct = productInfos[Number(productId) - 1];
  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;

  return (
    <div className="Detail">
      <div>여기는 상품 디테일 페이지!</div>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세설명: {body}</li>
      </ul>
    </div>
  );
}
