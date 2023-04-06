import {useEffect,useState} from 'react';
import Admin from './Components/Admin/Admin';
import { getAccount } from './LocalStorage/Storage';
import Author from './Components/Author/Author';
import User from './Components/User/User';
import Login from './Components/Admin/Admin';

const RouterPage = () => {
  const [accountName, setaccountName] = useState(false);
  useEffect(()=>{
    setaccountName(getAccount());
  },[]);

  switch(accountName){
    case 'admin':
      return <Admin/>
    case 'author':
      return <Author/>
    case 'user':
      return <User/>
    default:
       return <Login/>    
  }
};

export default RouterPage;
