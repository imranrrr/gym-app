const useHandleErrors = () => {

  const handleErrors = (err) => {
    console.log(err);
    err.response && alert(err.response.data.messages[0].message);
    if (err.response && err.response.status === 401) {
    }
  };

  return { handleErrors };
};

export default useHandleErrors;
