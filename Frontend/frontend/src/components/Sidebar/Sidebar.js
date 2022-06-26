import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiOutlineTransaction, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsFillEyeFill, BsFillFileDiffFill, BsFillPersonPlusFill, BsGenderTrans } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: <FaHome />,
  },
 
  {
    path: "/admin",
    name: "Admin",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/admin/addaccount",
        name: "Add Account",
        icon: <BsFillPersonPlusFill/>,
      },
      {
        path: "/admin/addcustomer",
        name: "addcustomer",
        icon: <BsFillEyeFill/>,
      },
      {
        path: "/admin/searchCustomer",
        name: "search Customers",
        icon: <BiSearch />,
      },
      {
        path: "/admin/showaccount",
        name: "show Account",
        icon: <BsFillEyeFill/>,
      },
      
    ]
    },
    {
      path: "/account",
      name: "Account",
      icon: <AiTwotoneFileExclamation />,
      subRoutes: [
        {
          path: "/account/update",
          name: "Update Account",
          icon: <BsFillPersonPlusFill/>,
        },
        
      ]
      },
    //Trnsactions sidebar operations
    {
      path: "/transaction",
      name: "Transaction",
      icon: <AiTwotoneFileExclamation />,
      subRoutes: [
        {
          path: "/transaction/addtransaction",
          name: "Add Transaction",
          icon: <AiOutlineTransaction/>,
        },
      
        {
          path: "/transaction/showtransaction",
          name: "showtransaction",
          icon: <BsFillEyeFill/>,
        },
      ]
    }
   
  //     {
  //       path: "/customer/regform",
  //       name: "Registration",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },

  //   {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  E-banking
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
      
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
