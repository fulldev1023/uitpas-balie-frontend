import { useTranslation } from "next-i18next";
import { Box, Stack, Typography } from "@/lib/ui";
import Image from "next/image";
import { CounterPicker } from "./CounterPicker";
import { useUserInfo } from "@/lib/user";

export const SelectCounterPage = () => {
  const { t } = useTranslation();
  const userInfo = useUserInfo();

  return (
    <Box sx={{ m: "40px auto;", pt: 12, maxWidth: 500 }}>
      <Stack>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            src={"/images/svg/logo-uitpas-full.svg"}
            alt={"UiTPAS Logo"}
            width={280}
            height={84}
          />
        </Box>

        <Box>
          <Typography variant="h1">
            {t("counter.welcome", { name: userInfo?.given_name })}
          </Typography>
          <Typography variant="h2" sx={{ mt: "-.5em" }}>
            {t("counter.selectCounter")}
          </Typography>
        </Box>

        <CounterPicker />
      </Stack>
    </Box>
  );
};
