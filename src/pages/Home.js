import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector} from "react-redux";
import { loadUsers, deleteUser } from "../redux/action.js";

const Home = () => {
  let dispatch = useDispatch();
  const { users } = useSelector(state => state.data)
  
    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const handleDelete = (id) => {
      if(window.confirm("Are you sure, want to delete the user ?")) {
          dispatch(deleteUser(id))
      }
    };

    return (
    <>
      <Header />
      <Footer />
    </>
    );
}

export default Home;