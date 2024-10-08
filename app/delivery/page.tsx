"use client"

import { useContext, useEffect, useState } from "react";
import { AddressType } from "../components/modals/AddressModal";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getGrossTotal } from "@/utils/getProductsCalc";
import { CartItemsContext } from "@/context/CartContext";
import Link from "next/link";
import Breadcrums from "../components/Breadcrums";

const DeliveryPage = () => {

    const [address, setDAddress] = useState<AddressType>({} as AddressType);

    const router = useRouter()
    const { cartItems } = useContext(CartItemsContext)

    useEffect(() => {
        axios.get(`/api/address`)
            .then((res: any) => {
                setDAddress({ ...res.data[0] })
            }).catch(err => toast.error("Error fetching address :", err.nessage))
    }, [])

    const emptyAddress = Object.keys(address).length === 0;

    const grossTotal = +(getGrossTotal(cartItems))
    const tax = +(grossTotal * .15).toFixed(2)
    const netTotal = (grossTotal + tax).toFixed(2)

    const handleCheckout = async () => {
        try {
            const { data } = await axios.post(`/api/checkout`, {
                deliveryInfomation: address, items: cartItems
            })
            window.location.href = data
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Cart", path: "/cart" },
        { name: "Order", path: "/order" }
    ]

    return (
        <div>
            <Breadcrums breadcrums={breadcrumbs} />
            <div className="grid grid-cols-[1.3fr_.7fr] gap-5">
                <div className="card bg-base-100 shadow-xl mb-1">
                    <div className="card-body">
                        <h2 className="card-title">Delivery Information</h2>
                        <hr className="mb-4" />

                        <div className="flex items-center">
                            {emptyAddress ?
                                <p className="italic">No address found</p> :
                                <div>
                                    <h6 className="font-medium">{address?.phone}</h6>
                                    <h6 className="font-medium">{address?.street}</h6>
                                    <h6 className="font-medium">{address?.city}, {address?.postalCode}, {address?.country}</h6>
                                </div>
                            }
                            {emptyAddress &&
                                <button className="btn ml-auto btn-outline"
                                    onClick={() => router.push("/user")}
                                >
                                    Add your address
                                </button>}
                        </div>
                        <div className="mt-auto">
                            <Link className="btn mr-2" href={"/cart"}>Back</Link>
                            <button className="btn btn-primary" onClick={handleCheckout} disabled={cartItems.length === 0 && emptyAddress}>Checkout</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl p-5 flex flex-col gap-3">
                    <h3 className="font-bold">Summary</h3>
                    <hr />
                    <div className="grid grid-cols-2 gap-3">
                        <h3>Gross Total</h3><h3 className="text-end">{grossTotal}</h3>
                        <h3>Tax (15%)</h3><h3 className="text-end">{tax}</h3>
                        <h3 className="font-bold">Total</h3><h3 className="text-end font-bold">{netTotal}</h3>
                    </div>

                    <hr />
                    <h3 className="font-bold">Items in your cart</h3>
                    <hr />

                    {cartItems?.map(ci => (
                        <div key={ci.id} className="flex items-center my-3">
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary">{ci.quantity}</span>
                                <div className="grid w-12 h-12 bg-base-300 place-items-center">
                                    <img
                                        width="50"
                                        height="50"
                                        src={ci.image}
                                        alt="Title"
                                    />
                                </div>
                            </div>

                            <div className="ml-5">
                                <p>{ci.name.substring(0, 50)}</p>
                                <p className="mt-1 text-gray-400">
                                    Total: ${ci.quantity * ci.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DeliveryPage