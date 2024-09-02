export interface Product {
  id: number;
  title: string;
  price: string;
  installments: string;
  buttonLabel: string;
}

export const productData: Product[] = [
  {
    id: 1,
    title: "Frigobar Brastemp Retrô 76 Litros Rose Quartz - BRA08HO 110V",
    price: "R$ 1.299,00",
    installments: "10x de R$ 129,90 sem juros",
    buttonLabel: "Comprar",
  },

];
