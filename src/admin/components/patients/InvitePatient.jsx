import React from "react";
import FeatherIcon from "feather-icons-react";
import { sendInvite } from "../../../api/apiClass/woundmend.class";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InvitePatient = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const Invite = async () => {
    try {
      setLoading(true);
      const response = await sendInvite({ email: value, type: "patient" });
      // console.log("response", response?.data);
      toast.success(response?.data?.message);
      if (response?.data?.message === "Invited successfully") {
        history.push("/admin/patient/listing");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className="modal fade contentmodal"
        id="addModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header">
              <h3 className="mb-0">Invite Patient</h3>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <div className="del-icon">
                  <i>
                    <FeatherIcon icon="x-circle" />
                  </i>
                </div>
              </button>
            </div>
            <div className="modal-body">
              {/* <form> */}
              <div className="add-wrap">
                <div className="form-group form-focus">
                  <input
                    type="email"
                    className="form-control floating"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label className="focus-label">
                    Enter Email<span className="text-danger">*</span>
                  </label>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary btn-save" onClick={Invite}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm me-2"></span>
                    )}
                    Send
                  </button>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitePatient;
