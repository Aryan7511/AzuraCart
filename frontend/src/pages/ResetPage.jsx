import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../server';
import { toast } from 'react-toastify';
import images from '../Assests';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ResetPage = () => {
  const { reset_token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters long';
    }
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword.length < 8) {
      newErrors.confirmPassword = 'Confirm Password should be at least 8 characters long';
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      //does not Matched
      return toast.error('password and confirm Password  not matching');
    }

    if (validateForm()) {
      await axios
        .post(`${server}/auth/change-password`, {
          token: reset_token,
          password
        })
        .then((res) => {
          toast.success(res.data.message);
          setErrors({});
          navigate('/');
        })
        .catch((err) => {
          setPassword('');
          setConfirmPassword('');
          toast.error(err.response.data.message);
        });
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    // Clear the error for password when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    // Clear the error for password when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: undefined }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white pb-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex items-center justify-center">
            <Link to="/">
              <img
                className="h-[90px] w-[100px] scale-75 "
                src={images.Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            Enter New Password
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handleChangePassword}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {showPassword ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <div className="text-red-500 text-sm mt-2">
                {errors.password && errors.password}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  autoComplete="current-password"
                  required
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  className="appearance-none block w-full px-3  py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {showConfirmPassword ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
              <div className="text-red-500 text-sm mt-2">
                {errors.confirmPassword && errors.confirmPassword}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group mb-2 relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
