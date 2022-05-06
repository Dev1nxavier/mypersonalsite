import React, { useEffect } from "react";
import qs from "query-string";
import {} from "@mui/material";

const AuthRedirect = ({ location }) => {
  //get token from url query string
  const query = qs.parse(location?.search);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem(`google:tokens`, query.token);
    }

    //redirect to app homepage
    setTimeout(() => {
      window.location.assign("/app/");
    }, 1000);
  });

  return <p>Saving Google token in local storage...</p>;
};

export default AuthRedirect;
