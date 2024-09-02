import React from 'react';
import './global.css';  // Importa o arquivo CSS

interface ProductSummaryProps {
  title?: string;
  price?: string;
  description?: string;
  installments?: string;
  buttonLabel?: string;
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  title = "Frigobar Brastemp Retrô 76 Litros Rose Quartz - BRA08HO 110V",
  price = "R$ 1.299,00",
  description = "O Frigobar Brastemp Retrô 76 litros resgata uma lembrança vintage com os pés-palito cromados, o puxador e o logo originais. Além disso, ele também conta com o congelador, compartimento extra frio e o super freezer, que permite gelar as bebidas e fazer gelo mais rápido.",
  installments = "10x de R$ 129,90 sem juros",
  buttonLabel = "Comprar",
}) => {
  return (
    <section className="brastemp-purchase">
      <div className="brastemp-purchase-description"></div>
      <div className="brastemp-purchase-box">
        <h4 className="brastemp-purchase-title">{title}</h4>
        <p className="brastemp-purchase-description">{description}</p>
        <p className="brastemp-purchase-price">{price}</p>
        <p className="brastemp-purchase-installments">{installments}</p>
        <button className="brastemp-purchase-button">{buttonLabel}</button>
      </div>
    </section>
  );
};

// Adiciona o schema ao componente
const productSummarySchema = {
  title: "Product Summary",
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "Título",
      default: "Frigobar Brastemp Retrô 76 Litros Rose Quartz - BRA08HO 110V"
    },
    price: {
      type: "string",
      title: "Preço",
      default: "R$ 1.299,00"
    },
    description: {
      type: "string",
      title: "Descrição",
      default: "O Frigobar Brastemp Retrô 76 litros resgata uma lembrança vintage com os pés-palito cromados, o puxador e o logo originais."
    },
    installments: {
      type: "string",
      title: "Parcelas",
      default: "10x de R$ 129,90 sem juros"
    },
    buttonLabel: {
      type: "string",
      title: "Texto do Botão",
      default: "Comprar"
    }
  },
  required: ["title", "price", "description", "installments", "buttonLabel"],
};

const ProductSummaryWithSchema = Object.assign(ProductSummary, { schema: productSummarySchema });

export default ProductSummaryWithSchema;
