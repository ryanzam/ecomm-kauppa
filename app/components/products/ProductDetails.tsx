"use client"

import { IProduct } from "@/models/product"
import dynamic from "next/dynamic";
import { FC } from "react"

const StarRatings = dynamic(() => import("react-star-ratings"), {
    ssr: false,
});

interface IProductDetailsProps {
    product: IProduct
}

const ProductDetails: FC<IProductDetailsProps> = ({ product }: IProductDetailsProps) => {

    return (
        <div className="card card-side bg-base-100 shadow-md">
            <figure className="flex flex-col w-2/6">
                <img src={product.images.length > 0 ? product.images[0].url : "/placeholder.jpg"} alt="product" />

                <div className="flex items-center justify-center p-3">
                    {product.images.map(i => (
                        <a className="inline-block border border-gray-100 p-1 rounded-lg hover:border-blue-400 cursor-pointer">
                            <img className="h-16 w-16" src={i.url} alt="product" />
                        </a>
                    ))}
                </div>
            </figure>
            <div className="card-body gap-7">
                <div className="flex flex-col gap-2">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>

                    <h3 className="font-semibold">€{product.price}</h3>
                </div>

                <div className="flex">
                    <StarRatings rating={product?.ratings}
                        numberOfStars={5}
                        starRatedColor="#ffab04"
                        starSpacing="1px"
                        starDimension="20px"
                        name="ratings"
                    />
                    <div className="text-xs font-medium m-1">{product?.ratings}</div>
                </div>

                <div className="flex flex-col gap-2">
                    <h5 className="font-medium">Category: <span className="font-normal text-neutral-500 text-sm">{product.category}</span></h5>
                    <h5 className="font-medium">On Stock:
                        <span className={`badge font-normal px-2 ml-1
                            ${product.stock > 3 ? 'bg-green-600 text-neutral-100' : "badge-ghost"}
                        `}>
                            {product.stock > 3 ? "Availabel" : "Out of stoc"}
                        </span>
                    </h5>
                    <h5 className="font-medium">Brand/Seller: <span className="font-normal text-neutral-500 text-sm">{product.seller}</span></h5>
                </div>

                <div className="card-actions">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;