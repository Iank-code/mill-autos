import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";
import { faq_info } from "../../helpers/faq.helpers";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        {faq_info &&
          faq_info.map((faq, index) => {
            return (
              <Accordion.Item
                key={index}
                className={classes.item}
                value={faq.value}
              >
                <Accordion.Control>{faq.info}</Accordion.Control>
                <Accordion.Panel>{faq.placeholder}</Accordion.Panel>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </Container>
  );
}
