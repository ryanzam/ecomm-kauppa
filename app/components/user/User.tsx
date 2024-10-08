"use client"

import { FC, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUserNinja } from "react-icons/fa"
import { GrMapLocation } from "react-icons/gr"
import { MdPassword } from "react-icons/md"
import AddressModal, { AddressType } from "../modals/AddressModal";
import ProfileModal, { UserType } from "../modals/ProfileModal";
import PasswordChangeModal from "../modals/PasswordChangeModal";
import { useRouter } from "next/navigation";

interface IUserPRops {
    user: UserType
}

const User:FC<IUserPRops> = ({ user }) => {

    const [showAddrModal, setShowAddrModal] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false)
    const [address, setDAddress] = useState<AddressType>({} as AddressType);

    const router = useRouter()

    useEffect(() => {
        axios.get(`/api/address`)
            .then((res: any) => {
                setDAddress({ ...res.data[0] })
            }).catch(err => toast.error("Error fetching address :", err.nessage))
    }, [address.city, address.country, address.phone, address.postalCode, address.street, showAddrModal, showProfileModal])

    const onAddrModalClose = () => {
        setShowAddrModal(!showAddrModal)
        router.refresh()
    }

    const onProfileModalClose = () => {
        setShowProfileModal(!showProfileModal)
        router.refresh()
    }

    const onPasswordChangeClose = () => {
        setShowPasswordChangeModal(!showPasswordChangeModal)
    }

    const emptyAddress = Object.keys(address).length === 0;

    return (
        <>
            <div className="card p-3 border">
                <div className="flex items-start sm:items-center p-3">
                    <img
                        className="w-20 h-20 rounded-full mb-auto"
                        src={user?.avatar ? user?.avatar?.url : "/profile.jpg"}
                        alt={user?.name}
                    />
                    <div className="w-full">
                        <div className="flex">
                            <div>
                                <h5 className="font-semibold text-lg">{user?.name}</h5>
                                <h5 className="font-semibold">Email: <span className="font-light">{user?.email}</span></h5>
                                <h5 className="font-semibold">Created on: <span className="font-light text-sm">{user?.createdAt.toISOString().split("T")[0]}</span></h5>
                            </div>
                            <div className="flex flex-col gap-2 ml-auto">
                                <button className="btn btn-outline btn-primary" onClick={() => setShowProfileModal(true)} >
                                    <FaUserNinja size={24} /> Update Profile
                                </button>
                                <button className="btn btn-outline" onClick={() => setShowPasswordChangeModal(true)} >
                                    <MdPassword size={24} /> Change Password
                                </button>
                            </div>
                        </div>


                        <hr className="my-4" />

                        <div className="flex items-center">
                            {emptyAddress ?
                                <p className="italic">No address found</p> :
                                <div>
                                    <h6 className="font-medium">{address?.phone}</h6>
                                    <h6 className="font-medium">{address?.street}</h6>
                                    <h6 className="font-medium">{address?.city}, {address?.postalCode}, {address?.country}</h6>
                                </div>
                            }
                            <button className={`btn ml-auto btn-outline`}
                                onClick={() => setShowAddrModal(true)}
                            >
                                <GrMapLocation size={24} />
                                {emptyAddress ? "Add new address" : "Update address"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showAddrModal &&
                <AddressModal isOpen={showAddrModal} title={emptyAddress ? "Add new contacts" : "Update contacts"} onClose={onAddrModalClose} address={address} />
            }
            {showProfileModal &&
                <ProfileModal isOpen={showProfileModal} title="Update profile" onClose={onProfileModalClose} profile={user} />
            }
            {
                showPasswordChangeModal &&
                <PasswordChangeModal isOpen={showPasswordChangeModal} title="Change password" onClose={onPasswordChangeClose} profile={user} />
            }
        </>
    )
}

export default User