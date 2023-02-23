import "./user.css";
import {
  CalendarToday,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Rehan Qazi</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <div className="userShowInfoTitle">rehanqazi69</div>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <div className="userShowInfoTitle">05/04/2002</div>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <div className="userShowInfoTitle">+91 7569696969</div>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <div className="userShowInfoTitle">rehanqazi69@gmail.com</div>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <div className="userShowInfoTitle">Pune | India</div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="rehanqazi69"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="05/04/2002"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone no.</label>
                <input
                  type="text"
                  placeholder="+91 7569696969"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="rehanqazi69@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Pune | India"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
