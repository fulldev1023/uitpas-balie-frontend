import { forwardRef } from "react";
import { styled, IconButton, Stack } from "@mui/joy";
import ReactDatePicker from "react-datepicker";
import { ReactDatePickerProps } from "@types/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@emotion/react";

const StyledInputContainer = styled(Stack)(({ theme }) => ({
  boxSizing: 'border-box',
  border: `${theme.vars.palette.neutral[400]} 1px solid`,
  padding: "0 0 0 8px",
  height: "40px",
  width:"100%",
}));
const StyledDateInput = styled("input")(({ theme }) => ({
  height: "100%",
  flexGrow: 1,
  border: "none",
  outline: "none",
  color: theme.vars.palette.neutral[700],
  [":focus-visible"]: {
    border: "none",
    outline: "none",
  },
}));

const StyledDateInputEndDecorator = styled(IconButton)(({ theme }) => ({
  height: "100%",
  borderRadius: 0,
  margin: 0,
  border: "none",
  borderLeft: `${theme.vars.palette.neutral[400]} 1px solid`,
}));

const DateInputWithRef = forwardRef<HTMLInputElement>((props, ref) => {
  const theme = useTheme();
  const openDatePicker = () => {
    props?.onClick?.();
  };
  return (
    <StyledInputContainer direction="row">
      <StyledDateInput ref={ref} {...props} />
      <StyledDateInputEndDecorator variant="outlined" onClick={openDatePicker}>
        <FontAwesomeIcon
          color={theme.vars.palette.neutral[700]}
          fontSize={"xs"}
          icon={faCalendarDays}
        />
      </StyledDateInputEndDecorator>
    </StyledInputContainer>
  );
});

export const DateInput = (props: ReactDatePickerProps) => {
  return <ReactDatePicker customInput={<DateInputWithRef />} {...props} />;
};
