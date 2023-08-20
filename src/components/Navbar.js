// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// // import { resetUserData } from "../actions/userActions";
// import Signup from "./Signup";
// import Login from "./Login";
// import { useSelector } from "react-redux";

// function Navbar() {
//   const navigate = useNavigate();
//   const [selectRegister, setSelectRegister] = useState(false);
//   const [login, setLogin] = useState(false);
//   const [loggedOut, setLoggedOut] = useState(false);
//   const [selectLogin, setSelectLogin] = useState(false);
//   let name;
//   const user = useSelector((state) => state.user);
//   useEffect(() => {
//     if (user) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }, [user]);
//   const gotTOSignUp = (setLogin) => {
//     navigate("/register");
//     setSelectRegister(true);
//   };

//   const resetUserData = () => ({
//     type: "RESET_USER_DATA",
//   });

//   return (
//     <div>
//       <nav className="top-padding">
// <Link
//   to="/"
//   style={{
//     color: "red",
//   }}
// >
//   MILL AUTOS
// </Link>
//         <div>
//           <Link className="right-padding" to="/stock">
//             Our Stock
//           </Link>
//           <Link to="/about" className="right-padding">
//             About
//           </Link>
//           <Link to="/contact">Contacts</Link>
//         </div>

//         {/* {login ? (
//           <>
//             <button
//               style={{
//                 marginLeft: "2rem",
//               }}
//               onClick={() => navigate("/admin", { state: { carData: name } })}
//             >
//               Dashboard
//             </button>
//             <button
//               style={{
//                 marginLeft: "2rem",
//               }}
// onClick={() => {
//   fetch("http://127.0.0.1:3000/logout", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(res.status);
//       }
//       console.log(res.status);
//       navigate("/");
//       setLogin(false);
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }}
//               onClick={() => {
//                 setLoggedOut(true)
//                 setLogin(false);
//               }}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <div>
//             <button
//               className="right-padding"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//             <button onClick={() => gotTOSignUp(setLogin)}>Signup</button>
//           </div>
//         )} */}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Transition,
  Paper,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export default function Navbar({ links }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close()
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <NavLink
          to="/"
          style={{
            color: "red",
          }}
        >
          MILL AUTOS
        </NavLink>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

      </Container>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
    </Header>
  );
}
