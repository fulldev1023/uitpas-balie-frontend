"use client";

import {
  Stack,
  ListItem,
  PageWithSideBarNew,
  SideBarTitle,
  SideBarSubTitle,
} from "@/web/lib/ui";
import { List } from "@mui/joy";
import { useTranslation } from "@/shared/lib/i18n/client";

const helpLinks = [
  {
    name: "Aarschot",
    email: "uitpas@aarschot.be",
  },
  {
    name: "Bornem",
    email: "uitpas@bornem.be",
  },
  {
    name: "Dender",
    email: "uitpas@(jouw-gemeente).be",
  },
  {
    name: "Hasselt",
    email: "uitpas@hasselt.be",
  },
  {
    name: "Haspengouw",
    email: "uitpas@sint-truiden.be",
  },
  {
    name: "Herk-de-stad/Lummen",
    email: "(Herk-de-stad)",
  },
  {
    name: "Herk-de-stad/Lummen",
    email: "(Lummen)",
  },
  {
    name: "Kempen",
    email: "info@uitpaskempen.be",
  },
  {
    name: "Lier",
    email: "uitpas@lier.be",
  },
  {
    name: "Mechelen",
    email: "uitpas@mechelen.be",
  },
  {
    name: "Maasland",
    email: "uitpas@maasmechelen.be",
  },
  {
    name: "Maldegem",
    email: "uit@maldegem.be",
  },
  {
    name: "Meetjesland",
    email: "uitpasmeetjesland@comeet.be",
  },
  {
    name: "Mortsel",
    email: "uitpas@mortsel.be",
  },
  {
    name: "Nijlen",
    email: "uitpas@nijlen.be",
  },
  {
    name: "Noordrand",
    email: "uitpas@asse.be",
  },
  {
    name: "Oostende",
    email: "uitpas@oostende.be",
  },
  {
    name: "Paspartoe",
    email: "paspartoe@vgc.be",
  },
  {
    name: "Pelt",
    email: "uitpas@gemeentepelt.be",
  },
  {
    name: "Regio",
    email: "Gent",
  },
  {
    name: "Regio",
    email: "Leuven",
  },
  {
    name: "Reynaert",
    email: "dienstcultuur@beveren.be",
  },
  {
    name: "Rupel",
    email: "info@uitpasrupel.be",
  },
  {
    name: "Sint-Pieters-Leeuw",
    email: "uitpas@sint-pieters-leeuw.be",
  },
  {
    name: "Zuidwest",
    email: "uitpas@zuidwest.be",
  },
  {
    name: "Westhoek",
    email: "info@uitpaswesthoek.be",
  },
];

const SidebarContent = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={2}>
      <SideBarTitle>{t("help.title")}</SideBarTitle>
      <SideBarSubTitle>{t("help.description")}</SideBarSubTitle>
      <SideBarSubTitle>{t("help.subDescription")}</SideBarSubTitle>
      <Stack>
        <List sx={{ border: 0 }}>
          {helpLinks.map(({ name, email }, index) => (
            <ListItem key={index}>
              <Stack display={"inline"} direction={"row"} gap={1}>
                {name} <a href={`mailto:${email}`}> {email}</a>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export const HelpPage = () => {
  return (
    <PageWithSideBarNew sideBarContent={<SidebarContent />} hasBackButton />
  );
};
