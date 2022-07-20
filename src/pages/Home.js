//NEW 

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../redux/action';
import Header from "./Header";
import Footer from "./Footer";

function Home () {
        let dispatch = useDispatch();
        useEffect(() => {
            dispatch(loadUsers())
        }, [])

        return (
            <>
             <Header />
             <Footer />
            </>
        );
}

export default Home;



//OLD

// import React, { useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { useDispatch, useSelector} from "react-redux";
// import { loadUsers  } from "../redux/action.js";
// import NavBar from "./NavBar";

// const Home = () => {
//   let dispatch = useDispatch();
//  // const { users } = useSelector(state => state.data)
  
//     useEffect(() => {
//         dispatch(loadUsers());
//     }, []);

//     return (
//     <>
//       <NavBar />
//       <Header />
//       <Footer />
//     </>
//     );
// }

// export default Home;