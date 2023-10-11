import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf9qnaA4r8aaCoQ8ifZNvvq3OwO6cSdf0OA&usqp=CAU"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Baris" />
          <label>Email</label>
          <input type="email" placeholder="baris@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
