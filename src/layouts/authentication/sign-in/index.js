import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { useForm } from "react-hook-form";
import PinInput from "react-pin-input";

const MAX_STEP = 3

function SignIn() {
  // const [rememberMe, setRememberMe] = useState(true);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [formStep, setFormStep] = useState(0);
  const [pin, setPin] = useState("")

  const navigate = useNavigate()


  const { watch, register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "all" });

  const nextForm = () => {
    setFormStep((cur) => cur + 1);
  };

  console.log(JSON.stringify(watch(), null, 2));

  const SubmitForm = async (values) => {
    values.pin = pin;

    try {
      const apiUrl = 'https://documenter.getpostman.com/view/admin/auth/login';
      const response = await axios.post(apiUrl, values);
      if (response.status === 200) {
        console.log('Success:', response.data);
        // You can add any success handling logic here, such as redirection or displaying a success message
        // navigate('/admin-settings');
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };

  const prevStep = () => {
    setFormStep((cur) => cur - 1)
  }

  const handlePinChange = (value) => {
    setPin(value);

  };
  return (
    // <PageLayout
    //   title="Welcome back"
    //   description="Enter your username and password to sign in"
    //   image={curved9}
    // >
    <PageLayout
    >

      <SoftBox className="flex mt-0 xs:m-auto align-middle items-center justify-between">
        <div className=" w-[100%] p-0 xs:p-7">
          {formStep === 0 &&
            <div className="hidden xs:block text-center mb-7 align-middle m-auto">
              <p>Welcome back</p>
              <p>Enter your username and password to sign in</p>
            </div>}
          {formStep === 1 &&
            <div className="hidden xs:block text-center mb-7 align-middle m-auto">
              <p>Enter your Secured Pin</p>
            </div>}
          <div className=" w-[100%] h-full bg-white rounded-lg p-5 shadow-2xl">
            <div className="block xs:hidden text-center h-[20vh] my-7 align-middle m-auto">
              <p>Welcome back</p>
              <p>Enter your username and password to sign in</p>
            </div>
            <form onSubmit={handleSubmit(SubmitForm)}>
              <div className="flex">
                {formStep > 0 && <button onClick={prevStep} type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>

                </button>}
                <p className=" text-xs ml-2">steps {formStep + 1} of {MAX_STEP}</p>
              </div>
              {formStep === 0 && (
                <SoftBox>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      UserName
                    </SoftTypography>
                  </SoftBox>
                  <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600
                             focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    style={{
                      border: errors.UserName
                        ? "1px solid red"
                        : "1px solid #ccc",
                    }}
                    type="text"
                    placeholder="Enter Your UserName"
                    {...register("UserName", {
                      required: {
                        value: true,
                        message: "UserName is Required"
                      }
                    })}

                  />
                  {errors.UserName && <p className="text-sm text-pink-500">{errors.UserName.message}</p>}

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
                    placeholder="Password"
                    {...register("Password")}
                  />
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
                        to="/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign Up
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              )}

              {formStep === 1 && (
                <div className=" flex items-center justify-center align-middle m-auto">
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
                    style={{ padding: '10px' }}
                    inputFocusStyle={{ borderColor: 'blue' }}
                    onComplete={(value, index) => { }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </div>
              )}
              {formStep === 1 && (
                <SoftBox mt={4} mb={1}>
                  <button type="submit" className="flex items-end m-auto">
                    <SoftButton variant="gradient" color="info" fullWidth>
                      Log In
                    </SoftButton>
                  </button>
                </SoftBox>
              )}

              {formStep === 2 && (
                <div className="h-[50vh]">
                  <p>Loged In</p>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className=" w-[100%] hidden md:block ">
          <img className="h-[100vh] object-fill" src={curved9} />
        </div>
      </SoftBox>


    </PageLayout>
  );
}

export default SignIn;
