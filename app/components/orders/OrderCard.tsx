"use client"

import { FC } from "react";

interface IOrderCardProps {
    order: any
    children?: any
}

const OrderCard: FC<IOrderCardProps> = ({ order, children }) => {

    return (
        <div className="card card-side bg-base-200 shadow-xl mb-5">
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="font-semibold">Order ID: {order?._id}
                        <h4 className={`badge ml-2
                            ${order.orderStatus === "Delivered" ? "badge-secondary" : "badge-warning"}
                        `}>
                            {order?.orderStatus}
                        </h4>
                    </div>
                    <div className="font-semibold">{order?.createdAt?.split("T")[0]}</div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-3">
                    <div className="">
                        <h4 className="font-bold">Customer Info</h4>
                        <p>{order?.user?.name}</p>
                        <p>{order?.deliveryInfo?.phone}</p>
                        <p>{order?.user?.email}</p>
                    </div>

                    <div className="">
                        <h4 className="font-bold">Payment Info</h4>
                        <p className="badge badge-success">{order?.paymentInfo?.paymentStatus}</p>
                        <p>Tax: {order?.paymentInfo?.paidTax}</p>
                        <p>Total: {order?.paymentInfo?.paidAmount}</p>
                    </div>

                    <div className="">
                        <h4 className="font-bold">Delivery info</h4>
                        <p>{order?.deliveryInfo?.street} </p>
                        <p>{order?.deliveryInfo?.postalCode}, {order?.deliveryInfo?.city}</p>
                        <p>{order?.deliveryInfo?.country}</p>
                    </div>
                </div>
                <hr className="my-2" />
                <h3 className="font-bold">Purchased Items</h3>
                <hr className="my-2" />
                {order?.orderItems?.map((oi: any) => (
                    <div className="flex items-center" key={oi._id}>
                        <img src="/placeholder.jpg" height={50} width={50} />
                        <div className="ml-2">
                            <h5 className="font-semibold">{oi?.name}</h5>
                            <p className="text-sm">€{oi?.price} x {oi?.quantity}</p>
                        </div>
                    </div>
                ))}
                {children}
            </div>
        </div>
    )
}

export default OrderCard