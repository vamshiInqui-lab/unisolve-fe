export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem("current_user") != null
        ? JSON.parse(localStorage.getItem("current_user"))
        : null;
    // console.log(user, 'getCurrentUser---------------------------------------');
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getCurrentUser -> error", error);
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  console.log("===========user", user);
  try {
    if (user) {
      localStorage.setItem("current_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("current_user");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error", error);
  }
};

export const getNormalHeaders = (apiKey) => {
  // it receive api_key argument if not it will assign null to it.
  const loginUser = getCurrentUser();
  let axiosConfig = {};
  if (loginUser) {
    // eslint-disable-next-line no-return-await
    axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
        Authorization: `Bearer ${loginUser.refreshToken}`,
        cors: "*",
      },
    };
  } else {
    // eslint-disable-next-line no-return-await
    axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
      },
    };
  }
  return axiosConfig;
};
