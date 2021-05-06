import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledButton = styled.button `
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #1ea7fd;
`;
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    return (_jsx(StyledButton, Object.assign({ type: "button", style: { backgroundColor } }, props, { children: label }), void 0));
};
