import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import PageLayout from "examples/LayoutContainers/PageLayout";
import PinInput from 'react-pin-input'
import axios from "axios";
import { toast } from "react-toastify";

const MAX_STEP = 3
// const MAX_PIN_LENGTH = 6;

function Overview() {
    const [formStep, setFormStep] = useState(0);
    const [pin, setPin] = useState("")

    const navigate = useNavigate()
    const { watch, register, handleSubmit, getValues, setValue,
        formState: { errors, isValid } } = useForm({ mode: "all" });

    const nextForm = () => {
        setFormStep((cur) => cur + 1);
    };
    const SubmitForm = (values) => {
        const payload = {
            username: values.username,
            password: values.password,
            pin: values.pin
        }
        console.log(payload);
        try {
            axios.post('http://localhost:8080/admin/create', payload)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        navigate('/admin-settings')
                    } else {
                        toast.error(response.error)
                        // console.error(response.status);
                    };
                })

        } catch (data) {
            toast.error(data.error);
        }
    }
    const prevStep = () => {
        setFormStep((cur) => cur - 1)
    }
    const handlePinChange = (value) => {
        setPin(value);
        setValue("pin", value);
    };
    const validatePasswordMatch = () => {
        const { password, CPassword } = getValues(["password", "CPassword"]);
        return password === CPassword;
    };



    return (
        <PageLayout>
            <div className="flex justify-center items-center align-middle my-[5rem]">
                <div className="w-[90%] xs:w-[70%] md:w-[50%] justify-center items-center bg-white rounded-lg p-5 shadow-2xl">
                    <form onSubmit={handleSubmit(SubmitForm)}>
                        <div className="flex">
                            {formStep > 0 && <button onClick={prevStep} type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>

                            </button>}
                            <p className=" text-xs ml-2">steps {formStep + 1} of {MAX_STEP}</p>
                        </div>
                        {formStep === 0 && (
                            <SoftBox>
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        username
                                    </SoftTypography>
                                </SoftBox>
                                <input
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600
                                     focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    style={{
                                        border: errors.username
                                            ? "1px solid red"
                                            : "1px solid #ccc",
                                    }}
                                    type="text"
                                    placeholder="Enter Your username"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "username is Required"
                                        }
                                    })}

                                />
                                {errors.username && <p className="text-sm text-pink-500">{errors.username.message}</p>}

                            </SoftBox>
                        )}
                        {formStep === 0 && (
                            <SoftBox>
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Password
                                    </SoftTypography>
                                </SoftBox>
                                <input
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    style={{
                                        border: errors.Password
                                            ? "1px solid red"
                                            : "1px solid #ccc",
                                    }}
                                    type="password"
                                    placeholder="password"
                                    {...register("password")}
                                />
                            </SoftBox>
                        )}
                        {formStep === 0 && (
                            <SoftBox>
                                <SoftBox mb={1} ml={0.5}>
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Confirm Password
                                    </SoftTypography>
                                </SoftBox>
                                <input
                                    className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md 
                                    sm:text-sm focus:ring-1 ${validatePasswordMatch() ? "" : "invalid:border-pink-500 invalid:text-pink-600  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                        }`}
                                    style={{
                                        border: errors.CPassword
                                            ? "1px solid red"
                                            : "1px solid #ccc",
                                    }}
                                    type="password"
                                    placeholder="Confirm Password"
                                    {...register("CPassword", {
                                        validate: (value) =>
                                            value === watch("password") ||
                                            "Passwords do not match",
                                    })}
                                />
                                {errors.CPassword && (
                                    <p className="text-sm text-pink-500">
                                        {errors.CPassword.message}
                                    </p>
                                )}
                            </SoftBox>
                        )}
                        {formStep === 0 && (
                            <SoftBox mt={4} mb={1}>
                                <button disabled={!isValid} onClick={nextForm} className="flex items-end ml-auto" type="button">
                                    <SoftButton variant="gradient" color="info" fullWidth>
                                        Next
                                    </SoftButton>
                                </button>

                                <SoftBox mt={3} textAlign="center">
                                    <SoftTypography variant="button" color="text" fontWeight="regular">
                                        Don&apos;t have an account?{" "}
                                        <SoftTypography
                                            component={Link}
                                            to="/authentication/sign-in"
                                            variant="button"
                                            color="info"
                                            fontWeight="medium"
                                            textGradient
                                        >
                                            Sign In
                                        </SoftTypography>
                                    </SoftTypography>
                                </SoftBox>
                            </SoftBox>
                        )}

                        {formStep === 1 && (
                            <div className="flex items-center justify-center align-middle m-auto">
                                <PinInput
                                    length={6}
                                    initialValue=""
                                    secret
                                    secretDelay={100}
                                    onChange={(value) => {
                                        handlePinChange(value);
                                    }}
                                    type="numeric"
                                    inputMode="number"
                                    style={{ padding: '10px', }}
                                    inputFocusStyle={{ borderColor: 'blue' }}
                                    onComplete={(value, index) => { }}
                                    autoSelect={true}
                                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                />
                            </div>

                        )}
                        {formStep === 1 && (
                            <SoftBox mt={4} mb={1}>
                                <button type="submit" className="flex items-center m-auto">
                                    <SoftButton variant="gradient" color="info" fullWidth>
                                        Create Admin
                                    </SoftButton>
                                </button>
                            </SoftBox>
                        )}

                        {formStep === 2 && (
                            <div className="h-[50vh]">
                                <p>Admin Created</p>
                                <button type="button" className="flex items-end ml-auto">
                                    <Link to="/">

                                        <SoftButton variant="gradient" color="info" fullWidth>
                                            Dashboard
                                        </SoftButton>
                                    </Link>
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}

export default Overview;

