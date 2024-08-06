import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../features/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { map } from "underscore";
import "./users.scss";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../enum/app-routes.enum";

export const UsersPage = () => {
  const [usersList, setUsersList] = useState<Array<any>>([]);
  const dispatch = useAppDispatch();
  const { users }: any = useAppSelector((state: any) => state.users);

  useEffect(() => {
    setUsersList(users || []);
  }, [users]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div className="container-fluid px-5 mt-5">
      <div className="card bg-white">
        <div className="card-header bg-white">
          <h3 className="card-title m-0">Users </h3>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th> Id </th>
                <th> Name </th>
                <th> Email </th>
                <th> Phone </th>
                <th> City </th>
              </tr>
            </thead>
            <tbody>
              {map(usersList, ({ id, name, email, phone, address }, index) => {
                return (
                  <tr key={`${id}-${index}`}>
                    <td>{id}</td>
                    <td>
                      <NavLink
                        to={`${APP_ROUTES.DETAILS}/${id}`}
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
                        }
                      >
                        <span>{name}</span>
                        <span className="alpha-link ml-2"></span>{" "}
                      </NavLink>
                    </td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{address?.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
