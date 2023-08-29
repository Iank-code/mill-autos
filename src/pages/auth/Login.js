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

export default function Login() {
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
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
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
