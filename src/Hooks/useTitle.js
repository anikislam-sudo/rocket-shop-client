import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
      document.title =`${title}-Rocket Shop`;
    },[title])
};

export default useTitle;