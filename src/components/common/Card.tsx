import React, { useContext } from "react"
import { Link } from "gatsby"
import cn from "classnames";
import { useTranslation } from "react-i18next";

import GlobalContext from "../../context/globalState";
import { getConvertedPrice, getConvertedSalePrice, getDecimalFromString } from "../../utils/functions";
export default function Card({ image, title, slug, price, salePrice, onSale, metaData }: Props) {
  const { t } = useTranslation();
  const { currency } = useContext(GlobalContext);

  const decimalPrice = getDecimalFromString(price) + "";
  const decimalSalePrice = getDecimalFromString(salePrice) + "";
  
  return (
    <div className="card m-4">
      <Link to={"/product/" + slug}>
        <div className="overflow-hidden relative">
          { onSale && <span className="absolute top-2 left-2 py-1 px-4 bg-red-700 text-white z-10 text-xs"> {t("SALE")} </span> }
          <img
            className={cn(
              "card-image max-h-[500px]",
              "transform transition duration-500 hover:scale-110",
            )}
            alt={title}
            src={image}
          />
        </div>
        <h3 className="text-gray-800 uppercase my-2">{title}</h3>
        <div>
          {salePrice && <span className="font-bold">{getConvertedSalePrice(currency, decimalSalePrice, metaData)}</span>}
          <span className={`${salePrice ? "text-gray-400 line-through mx-2" : "font-bold "}`}>{getConvertedPrice(currency, decimalPrice, metaData)}</span>
        </div>
      </Link>
    </div >
  );
}



Card.defaultProps = {
  image: {},
  title: "",
  slug: "",
  price: "0",
  salePrice: "",
  onSale: false,
  metaData: [],
}

type Props = {
  image: any
  title: string
  slug: string
  price: string
  salePrice: string
  onSale: boolean
  metaData: any[

  ]
}