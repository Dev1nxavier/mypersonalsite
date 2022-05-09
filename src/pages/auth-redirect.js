import React, { useEffect } from "react";
import qs from "query-string";

const AuthRedirect = ({ location }) => {
  //get token from url query string
  const query = qs.parse(location?.search);

  useEffect(() => {
    //check that there is a location object
    if (typeof window !== `undefined`) {
      window.localStorage.setItem(`google:tokens`, query.token);
    }

    //redirect to app homepage
    setTimeout(() => {
      window.location.assign("/app/");
    }, 1000);
  });

  return <p>Logging in...</p>;
};

export default AuthRedirect;
