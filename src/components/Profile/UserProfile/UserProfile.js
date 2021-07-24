import "./UserProfile.css";
const UserProfile = (props) => {
  const currentUser = props.userData[0];
  return (
    <div className="d-md-flex">
      {currentUser !== undefined ? (
        <>
          <div className="p-3 text-center border">
            {/* Profile Image */}
            <div className="profiePic">
              <img
                lazy="true"
                width={150}
                src={currentUser.profile_image}
                alt="userProfileImage"
              />
            </div>
            <div className="py-3">
              <div className="text-center reputation">
                <span className="font-16">{currentUser.reputation} </span>
                <span className="text-gray font-12">REPUTATION</span>
              </div>

              {/* Badges */}
              <div className="d-flex m4 font-12 badges">
                {currentUser.badge_counts.gold > 0 ? (
                  <div className="flex-item m2">
                    {" "}
                    <div className="s-badge w-100 justify-content-between s-badge__gold">
                      <div>
                        <span className="flex-item badge1"></span>
                      </div>
                      <span className="d-flex flex__center fl1">24</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {currentUser.badge_counts.silver > 0 ? (
                  <div className="flex-item m2">
                    {" "}
                    <div className="s-badge w-100 justify-content-between s-badge__silver">
                      <div>
                        <span class="flex-item badge2"></span>
                      </div>
                      <span class="d-flex flex__center fl1">24</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {currentUser.badge_counts.bronze > 0 ? (
                  <div className="flex-item m2">
                    {" "}
                    <div className="s-badge w-100 justify-content-between s-badge__bronze">
                      <div>
                        <span class="flex-item badge3"></span>
                      </div>
                      <span class="d-flex flex__center fl1">24</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* User Info : Name,Location,Link */}
          <div className="col-md-8 col-sm-12 mx-auto mt-0">
            <div className="userNameDiv">
              <h3>{currentUser.display_name}</h3>
            </div>
            <div className="locationsDiv">
              {currentUser.location ||
                `Apparently, this user prefers to keep an air of mystery about them.`}
            </div>
            <div className="linkDiv">
              <a
                href={currentUser.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>{" "}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProfile;
