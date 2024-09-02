import React from 'react';
import { Product, productData } from '../../data';
import './global.css';  // Importa o arquivo CSS

const ProductSummary: React.FC = () => {
  if (!productData || productData.length === 0) {
    return <div>Nenhum produto disponível.</div>;
  }

  const product: Product = productData[0];

  return (
    <section className="brastemp-purchase">
      <div className="brastemp-purchase-description">

      </div>
      <div className="brastemp-purchase-box">
        <h4 className="brastemp-purchase-title">{product.title}</h4>
        <p className="brastemp-purchase-description">{product.description}</p>
        <p className="brastemp-purchase-price">{product.price}</p>
        <p className="brastemp-purchase-installments">{product.installments}</p>
        <button className="brastemp-purchase-button">{product.buttonLabel}</button>
      </div>
    </section>
  );
};

export default ProductSummary;
