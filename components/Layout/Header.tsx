import { Container, createStyles, Group, useMantineColorScheme } from "@mantine/core";
import Logo from "./Logo";
import { Button } from "./Button";
import { LoginIcon, LogoutIcon, MoonIcon, SunIcon, UserIcon } from "@heroicons/react/outline";
import { useStore } from "store/store";
import { useRouter } from "next/router";
import { logout } from "utils/requests";

const useStyles = createStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[3]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },
}));

export default function Header() {
  const router = useRouter();
  const { isSignedIn, setSignIn } = useStore();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Logo />
      <Group spacing="sm">
        <Button hide onClick={() => toggleColorScheme()} tooltip={`${colorScheme === "dark" ? "Light" : "Dark"} mode`}>
          {colorScheme === "dark" ? <SunIcon width={22} height={22} /> : <MoonIcon width={22} height={22} />}
        </Button>
        <Button
          link={isSignedIn ? undefined : "/login"}
          tooltip={isSignedIn ? "Logout" : "Login"}
          onClick={async () => {
            if (!isSignedIn) return;
            await logout();
            setSignIn(false);
          }}
        >
          {isSignedIn ? <LogoutIcon width={22} height={22} /> : <LoginIcon width={22} height={22} />}
        </Button>
      </Group>
    </header>
  );
}