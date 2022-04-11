import env from "react-dotenv";
import Axios from "axios";

export const clearNotifications = (email, callback, error) => {
  Axios({
    method: "POST",
    url: env.REACT_APP_API_URL + "/user/clearnotifications",
    data: {
      email
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then((response) => {
    if (response.status && response.status === 200) {
      callback && callback(response.data);
    }
  }).catch((err) => {
    error && error(err);
  });
};

export const userLogin = (email, password, callback, error) => {
  Axios({
    method: "POST",
    url: env.REACT_APP_API_URL + "/user/login",
    data: {
      email,
      password,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const saveUser = (payload, callback, error) => {
  console.log("payload", payload);
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/user/create",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const saveJobListing = (payload, callback, error) => {
  console.log("payload", payload);
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/create",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const retrieveJobListing = (payload, callback, error) => {
  Axios({
    method: "get",
    url: env.REACT_APP_API_URL + "/listing/",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const applyJob = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/" + payload.id + "/apply",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const searchJob = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/search",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const approveJob = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/" + payload.id + "/approve",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};

export const rejectJob = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/" + payload.id + "/reject",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload,
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
};