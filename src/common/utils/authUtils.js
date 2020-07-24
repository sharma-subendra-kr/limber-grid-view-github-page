export const isAccessGranted = () => {
  if (localStorage.getItem("access_token")) {
    return true;
  }
  return false;
};
