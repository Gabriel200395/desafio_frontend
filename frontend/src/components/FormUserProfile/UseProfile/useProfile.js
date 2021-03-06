import { useContext, useEffect } from "react";
import {useParams} from "react-router-dom"
import StoreContext from "Store/Context";
import Service from "../../../service/service";

function UseProfile() {
  const { setUser, fieldsGroup, user, setError } = useContext(StoreContext);
  
  useEffect(() => {
    setError({})
  },[])
  
  const { id } = useParams();


  useEffect(() => {
    async function reqUser() {
      try {
        const userData = await Service.get("users/" + id);
        const response = await userData.data;
        setUser({ ...user, ...response });
      } catch (error) {
        console.log(error);
      }
    }
    reqUser();
  }, [id]);

  return [fieldsGroup];
}

export default UseProfile;
