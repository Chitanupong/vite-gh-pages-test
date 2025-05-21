export function yupToFormError(err,refs) {
    const errorObj = {}
      err.inner.forEach((error)=> {
        errorObj[error.path] = error.message;
      })
      const firstErrorFeild = err.inner[0]?.path
      if(firstErrorFeild && refs[firstErrorFeild]?.current){
        refs[firstErrorFeild].current.focus();
      }

    return errorObj
}