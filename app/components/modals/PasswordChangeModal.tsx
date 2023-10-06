"use client"

import { FC, useState } from "react"
import TextInput from "../inputs/TextInput"
import Modal from "./Modal";
import { BsSend, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"
import axios from "axios";
import toast from "react-hot-toast";
import { ProfileType } from "./ProfileModal";
import { signOut } from "next-auth/react";

interface IPasswordChangeModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    profile?: ProfileType
}

const PasswordChangeModal: FC<IPasswordChangeModalProps> = ({ title, isOpen, onClose, profile }) => {

    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword1, setShowPassword1] = useState(false)

    const samePassword = password === password1

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (!samePassword) {
            toast.error("Passwords do not match.")
            return
        }

        if (samePassword) {
            const updatePasswordChange = axios.put(`/api/passwordChange`, { id: profile?._id, password })

            toast.promise(updatePasswordChange, {
                loading: "Submitting password",
                success: () => {
                    onClose();
                    signOut({ callbackUrl: "/signin" });
                    return "New password saved"
                },
                error: "Error while saving Password"
            })
        }
    }

    const modalPasswordChangeForm = (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="relative">
                <TextInput label="New Password"
                    placeHolder="Enter new password"
                    type={ showPassword ? "text" : "password"}
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                />
                <div className="absolute right-3 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                    {!showPassword ? <BsFillEyeFill size={24} /> : <BsFillEyeSlashFill size={24} />}
                </div>
            </div>
            <div className="relative">
                <TextInput label="Retype new password"
                    placeHolder="Re-enter new password"
                    type={ showPassword1 ? "text" : "password"}
                    required={true}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    minLength={8}
                />
                <div className="absolute right-3 bottom-3" onClick={() => setShowPassword1(!showPassword1)}>
                    {!showPassword1 ? <BsFillEyeFill size={24} /> : <BsFillEyeSlashFill size={24} />}
                </div>
            </div>

            <button className="btn btn-primary mt-3" type="submit" disabled={!(password.length > 0 && password1.length > 0)}>
                <BsSend />
                Submit
            </button>
        </form>
    )

    return (
        <Modal isOpen={isOpen} title={title} modalBody={modalPasswordChangeForm} onClose={onClose} />
    )
}

export default PasswordChangeModal