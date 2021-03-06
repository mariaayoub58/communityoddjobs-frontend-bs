import env from "react-dotenv";
import Axios from "axios";

export const clearNotifications = (email, callback, error) => {
  Axios({
    method: "POST",
    url: env.REACT_APP_API_URL + "/user/clearnotifications",
    data: {
      email,
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

export const retrieveApplications = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/applications",
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

export const applyJob = (listingId, payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/" + listingId + "/apply",
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

export const approveJob = (listingId, payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/" + listingId + "/approve",
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

export const rejectJob = (listingId, payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/listing/" + listingId + "/reject",
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

export const deleteJob = (listingId, payload, callback, error) => {
  Axios({
    method: "delete",
    url: env.REACT_APP_API_URL + "/listing/" + listingId + "/delete",
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

export const retrieveJob = (listingId, callback, error) => {
  Axios({
    method: "get",
    url: env.REACT_APP_API_URL + "/listing/" + listingId,
    headers: {
      "Content-Type": "application/json",
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

export const retrieveUser = (userId, callback, error) => {
  Axios({
    method: "get",
    url: env.REACT_APP_API_URL + "/user/" + userId,
    headers: {
      "Content-Type": "application/json",
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

export const retrieveUsers = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/user/get",
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

export const deleteUser = (userId, payload, callback, error) => {
  Axios({
    method: "delete",
    url: env.REACT_APP_API_URL + "/user/" + userId + "/delete",
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
export const searchUser = (payload, callback, error) => {
  Axios({
    method: "post",
    url: env.REACT_APP_API_URL + "/user/search",
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

export const editJob = (listingId, payload, callback, error) => {
  Axios({
    method: "put",
    url: env.REACT_APP_API_URL + "/listing/" + listingId + "/edit",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
}

export const editUser = (userId, payload, callback, error) => {
  Axios({
    method: "put",
    url: env.REACT_APP_API_URL + "/user/" + userId + "/edit",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: payload
  })
    .then((response) => {
      if (response.status && response.status === 200) {
        callback && callback(response.data);
      }
    })
    .catch((err) => {
      error && error(err);
    });
}