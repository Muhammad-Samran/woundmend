import EndPoints from "../endpoints/endpoints";
import axios from "../axiosConfig/axios";
import axiosFile from "../axiosConfig/axiosFileUpload";

// Image Upload
export const ImageUpload = async (payload) => {
  try {
    return await axiosFile.post(EndPoints.imageUpload, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const RefreshAuth = async () => {
  try {
    const auth = await axiosFile.post(EndPoints.RefreshAuth);
    return { user: auth?.data?.results };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// forget password
export const ForgetPasswords = async (payload) => {
  try {
    return await axios.post(EndPoints.forget, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const OTP = async (payload) => {
  try {
    return await axios.post(EndPoints.OTP, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

//  update Password
export const Update_password = async (payload) => {
  try {
    return await axios.post(EndPoints.updatepassword, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const change_password = async (payload) => {
  try {
    return await axios.post(EndPoints.changepassword, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

//  Clinic verify email

export const userverify = async (payload, token) => {
  try {
    return await axios.post(
      `${EndPoints.useremailverification}/${token}`,
      payload
    );
  } catch (error) {
    return { success: false, message: error.message };
  }
};
// patient invite listing

export const getPatient = async () => {
  try {
    return await axios.post(EndPoints.getpatientlist);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// doctor invite listing

export const getDoctor = async () => {
  try {
    return await axios.post(EndPoints.getdoctorlist);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

//   invite
export const sendInvite = async (payload) => {
  try {
    return await axios.post(EndPoints.invite, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const ChangeStatus = async (payload) => {
  try {
    return await axios.post(EndPoints.status, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const inActiveDoctor = async () => {
  try {
    return await axios.post(EndPoints.inActiveDoctor);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const inActivePatient = async () => {
  try {
    return await axios.post(EndPoints.inActivePatient);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const assignDoctor = async (payload) => {
  try {
    return await axios.post(EndPoints.assignDoctor, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const UpdateProfile = async (payload) => {
  try {
    return await axios.post(EndPoints.UpdateProfile, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const AddDoctorApi = async (payload) => {
  try {
    return await axiosFile.post(EndPoints.AddDoctorApi, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getdoctordetails = async (payload) => {
  try {
    return await axiosFile.post(EndPoints.getdoctordetails, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const UpdateProfileApi = async (payload) => {
  try {
    return await axiosFile.post(EndPoints.UpdateProfileApi, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getpatientdetails = async (payload) => {
  try {
    return await axiosFile.post(EndPoints.getpatientdetails, payload);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

