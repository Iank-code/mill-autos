// import { useDispatch } from "react-redux";
// import { navbar_links, footer_links } from "../../helpers/links.helpers";
// function Signup(props) {
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//   });

//   const navigate = useNavigate();

//   function handleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formData);
//     fetch("https://mill-auto-api.onrender.com/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           console.log(res.status);
//         }
//         dispatch({ type: "ADD_NAME", payload: formData.username });
//         navigate("/");
//         console.log(res.status);
//         return res.json();
//       })
//       .then((data) => console.log(data));
//   }

//   return (
//     <>
//       <Navbar links={navbar_links} />
//       <div className="signUpContainer active">
//         <h1>Sign Up</h1>

//         <form onSubmit={handleSubmit}>
//           {/* Username */}
//           <div>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               id="username"
//               onChange={handleChange}
//               value={formData.username}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               id="email"
//               onChange={handleChange}
//               value={formData.email}
//             />
//           </div>

//           {/* Password */}
//           <div className="form-group4">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               id="password"
//               onChange={handleChange}
//               value={formData.password}
//             />
//           </div>

//           {/* Confirm password */}
//           <div className="form-group4">
//             <input
//               type="password"
//               placeholder="password_confirmation"
//               name="password_confirmation"
//               id="password_confirmation"
//               onChange={handleChange}
//               value={formData.password_confirmation}
//             />
//           </div>
//           <button type="submit" className="loginNav">
//             Submit
//           </button>
//           <p>Have an account? Click here to Login</p>
//         </form>

//         <button className="loginNav" onClick={() => navigate("/login")}>
//           Login
//         </button>
//       </div>
//       <Footer data={footer_links} />
//     </>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { navbar_links, footer_links } from "../../helpers/links.helpers";

import {
  rem,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export default function Signup() {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  //   fetch("https://mill-auto-api.onrender.com/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         console.log(res.status);
  //       }
  //       console.log(res.status);
  //       dispatch({ type: "name", payload: formData.username });
  //       navigate("/");
  //       return res.json();
  //     })
  //     .then((data) => console.log(data));
  // }
  return (
    <>
      <Navbar links={navbar_links} />

      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Have an account yet?{" "}
          <Anchor size="sm" component="button">
            <NavLink to="/login">Login</NavLink>
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              <NavLink to="/reset">Forgot password?</NavLink>
            </Anchor>
          </Group>

          <Button
            className={classes.control}
            style={{
              margin: "1rem 0",
              backgroundColor: "blue",
            }}
          >
            Sign in
          </Button>
        </Paper>
      </Container>

      <Footer data={footer_links} />
    </>
  );
}
