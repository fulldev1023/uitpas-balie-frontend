"use client";

import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";

import MenuUnstyled from "@mui/base/MenuUnstyled";
import { useMenu } from "@/shared/lib/utils";
import {
  NavLinkMobile,
  Popper,
  StyledLink,
  StyledListbox,
  StyledMenuItem,
  TriggerButton,
} from "@/layouts/components/Navbar.styles";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "@/shared/lib/i18n/client";

const menuItems = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "activities",
    link: "/activities",
  },
  {
    label: "counterMemberships",
    link: "/counter-memberships",
  },
  {
    label: "checkindevices",
    link: "/checkindevices",
  },
  {
    label: "expenseReport",
    link: "/expense-report",
  },
  {
    label: "counterStatistics",
    link: "/counter-statistics",
  },
];

type Props = {
  name?: string;
  isMobile: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const CounterMenu = ({ name, isMobile, setOpen }: Props) => {
  const { t } = useTranslation();
  const {
    menuActions,
    isOpen,
    menuAnchorEl,
    buttonRef,
    onButtonKeyDown,
    onButtonClick,
    onClose,
  } = useMenu();

  const handleClose = () => {
    onClose(true);
    setOpen(false);
  };

  return (
    <>
      <TriggerButton
        type="button"
        onClick={onButtonClick}
        onKeyDown={onButtonKeyDown}
        ref={buttonRef}
        active={isOpen}
      >
        <span>{name}</span>
        <Icon path={mdiMenuDown} size={1} />
      </TriggerButton>

      {!isMobile ? (
        <MenuUnstyled
          actions={menuActions}
          open={isOpen}
          onClose={() => onClose(false)}
          anchorEl={menuAnchorEl}
          slots={{
            root: Popper,
            listbox: StyledListbox,
          }}
          slotProps={{
            root: { placement: "bottom-start" },
            listbox: { id: "simple-menu" },
          }}
        >
          {menuItems.map((menuItem) => (
            <StyledMenuItem key={menuItem.link}>
              <StyledLink href={menuItem.link} onClick={handleClose}>
                {t(`nav.${menuItem.label}`)}
              </StyledLink>
            </StyledMenuItem>
          ))}
        </MenuUnstyled>
      ) : (
        isOpen &&
        menuItems.map((menuItem, i) => (
          <NavLinkMobile
            key={menuItem.link}
            href={menuItem.link}
            onClick={handleClose}
            sx={{ mb: i === menuItems.length - 1 ? 1 : 0 }}
          >
            {t(`nav.${menuItem.label}`)}
          </NavLinkMobile>
        ))
      )}
    </>
  );
};
