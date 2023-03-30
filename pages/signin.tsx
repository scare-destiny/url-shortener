import { Button } from "@/components/Button";
import { IconGithub } from "@/components/icons";
import { Box, Center } from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { GetServerSideProps } from "next";
import type { Database } from "@/types/supabase";
import { useRouter } from "next/router";

export default function SignIn() {
  const supabase = useSupabaseClient<Database>();

  const { query } = useRouter();
  const redirectTo = typeof query.redirectTo === "string" ? query.redirectTo : "/";

  return (
    <Center w="100%" mih="100vh">
      <Box ta="center">
        <Button
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            paddingLeft: `calc(${theme.spacing.xl} * 2)`,
            paddingRight: `calc(${theme.spacing.xl} * 2)`,
            ":hover": {
              backgroundColor: "transparent",
            },
          })}
          mt="sm"
          mx="auto"
          color="gray.5"
          onClick={() =>
            supabase.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: new URL(redirectTo, window.location.href).toString(),
              },
            })
          }
        >
          <Center mr={4}>
            <IconGithub fill="#fff" size={30} />
          </Center>
          Continue With Github
        </Button>
      </Box>
    </Center>
  );
}

SignIn.layoutProps = {
  hidden: true,
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return { props: {} };
};