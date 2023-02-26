import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import Header from './components/molecular/Header';
import { DETAIL_PAGE, HOME_PAGE } from './constants/path';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import './style/App.css';

export default function App() {
  // const [user, setUser] = useState({});

  // const handleCallbackResponse = (response) => {
  //   // console.log(`encoded JWT ${response.credential}`);
  //   const userObject = jwtDecode(response.credential);
  //   // console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById('signInDiv').hidden = true;
  // };

  // const handleSignOut = (event) => {
  //   setUser({});
  //   document.getElementById('signInDiv').hidden = false;
  // };
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: '467734937742-ebd3kr8s7824ma80bv7448ku9hpimk34.apps.googleusercontent.com',
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById('signInDiv'),
  //     { theme: 'outline', size: 'large' },
  //   );

  //   google.accounts.id.prompt();
  // }, []);

  // return (
  //   <div>
  //     <div>
  //       <div id="signInDiv" />
  //       {
  //         Object.keys(user).length !== 0
  //         && (
  //           <div>
  //             <div>
  //               <header>
  //                 <Header />
  // <img className="max-w-[4rem] max-h-[4rem] rounded-full
  // mx-auto" src={user?.picture} alt={user?.picture} />
  //                 <p className="text-center text-sm text-pink-500">{`Welcome ${user?.name}`}</p>
  //                 <button
  //                   type="button"
  //                   onClick={(e) => handleSignOut(e)}
  //                   className="text-pink-500 text-xs flex mx-auto mt"
  //                 >
  //                   Sign Out
  //                 </button>
  //               </header>
  //               <main>
  //                 <Routes>
  //                   <Route path={HOME_PAGE} element={<HomePage />} />
  //                   <Route path={DETAIL_PAGE} element={<DetailPage />} />
  //                 </Routes>
  //               </main>
  //             </div>
  //           </div>
  //         )
  //       }
  //       {
  //         user
  //         && (
  //           <div />
  //         )
  //       }
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={DETAIL_PAGE} element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
