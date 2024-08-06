import { useEffect, useState } from "react";
import { fetchAllUsers, fetchUserInfo } from "../../features/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import "./user-details.scss";
import { useNavigate, useParams } from "react-router-dom";
import { APP_ROUTES } from "../../enum/app-routes.enum";

export const UserDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState<any>(null);
  const userDetails: any = useAppSelector((state: any) => {
    return state.users.userInfo;
  });

  useEffect(() => {
    setUserInfo(userDetails || null);
    console.log(userDetails);
  }, [userDetails]);

  useEffect(() => {
    if (userId) dispatch(fetchUserInfo({ userId }));
  }, [userId]);

  const handleNavigation = () => {
    navigate(`${APP_ROUTES.HOME}`);
  };

  return (
    <div className="container-fluid px-5 mt-5">
      <div className="card bg-white">
        <div className="card-header bg-white d-flex align-items-center justify-content-between">
          <h3 className="card-title m-0">User Details </h3>
          <button className="btn btn-link" onClick={handleNavigation}>
            Back
          </button>
        </div>
        <div className="card-body">
          {userInfo && (
            <>
              <div className="row no-gutters">
                <div className="col-md">
                  <div className="mb-3">
                    <label className="label"> User Id</label>
                    <div>{userInfo.id}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Name</label>
                    <div>{userInfo.name}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Phone</label>
                    <div>{userInfo.phone}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Company Name</label>
                    <div>{userInfo?.company?.name}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Address</label>
                    <div>{userInfo?.address?.street}</div>
                    <div>{userInfo?.address?.suite}</div>
                    <div>{userInfo?.address?.city}</div>
                    <div>{userInfo?.address?.zipcode}</div>
                    <div>{userInfo?.address?.geo?.lat}</div>
                    <div>{userInfo?.address?.geo?.lng}</div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="mb-3">
                    <label className="label"> User Name</label>
                    <div>{userInfo.username}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Email</label>
                    <div>{userInfo.email}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Website</label>
                    <div>{userInfo.website}</div>
                  </div>
                  <div className="mb-3">
                    <label className="label"> Company Bs</label>
                    <div>{userInfo?.company?.bs}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleNavigation}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
