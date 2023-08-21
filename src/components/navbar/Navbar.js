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
import { Link, NavLink } from "react-router-dom";

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
      color: "red"
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
  const [active, setActive] = useState();
  const { classes, cx } = useStyles();

  const items = links && links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      //   close()
      // }}
    >
      {link.label}
    </Link>
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
