// import { useState } from "react";
// import SignupLogin from "@/components/SignupLogin";

// const SignLogModal = ({ log, sign, burger }) => {
//   const [isOpen, setIsOpen] = useState(burger);
//   const [login, setLogin] = useState(log);
//   const [signup, setSignup] = useState(sign);
//   // const showLogin = () => {
//   //   setSignup(false);
//   //   setLogin(true);
//   // };

//   // const showSignup = () => {
//   //   setSignup(true);
//   //   setLogin(false);
//   // };
//   // const openModal = () => {
//   //   setIsOpen(true);
//   //   setLogin(true);
//   //   setSignup(false);
//   // };
//   // const openModalSignUp = () => {
//   //   setIsOpen(log);
//   //   setLogin(false);
//   //   setSignup(true);
//   // };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="p-0 ">
//           <div className="modal-overlay flex items-start md:center">
//             <div className="modal-content relative bg-white rounded-lg">
//               <div>{children}</div>
//               <SignupLogin log={login} sign={signup} />
//             </div>
//           </div>

//           <style jsx>{`
//             .modal-overlay {
//               position: fixed;
//               top: 0;
//               left: 0;
//               width: 100%;
//               height: 100%;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               background-color: rgba(0, 0, 0, 0.4);
//             }

//             .modal-content {
//               background-color: #fefefe;
//               border: 1px solid #888;
//               max-width: 500px;
//             }

//             .close {
//               color: #aaa;
//               float: right;
//               font-size: 28px;
//               font-weight: bold;
//               cursor: pointer;
//             }
//           `}</style>
//         </div>
//       )}
//     </>
//   );
// };

// export default SignLogModal;
