import styled, { useTheme } from "styled-components/native";
import React from "react";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const primary = (theme) => `
    color: ${theme.colors.text.primary};
`;

const secondary = (theme) => `
    color: ${theme.colors.text.secondary};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const success = (theme) => `
    color: ${theme.colors.text.success};
`;

const disabled = (theme) => `
    color: ${theme.colors.text.disabled};
`;

const inverse = (theme) => `
    color: ${theme.colors.text.inverse};
`;

const colors = {
	primary,
	secondary,
	error,
	success,
	disabled,
	inverse,
};

const subtitle = (theme) => `
    font-size: ${theme.fontSizes.body};
`;
const body = (theme) => `
    font-size: ${theme.fontSizes.caption};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
	subtitle,
	body,
	label,
	caption,
};

export const TextStyled = styled.Text`
	${({ textStyles }) => textStyles}
	${({ variantStyles }) => variantStyles}
	${({ colorStyles }) => colorStyles}
`;

export const Text = ({ variant, color, children }) => {
	const theme = useTheme();
	const textStyles = defaultTextStyles(theme);
	const variantStyles = variants[variant]?.(theme);
	const colorStyles = colors[color]?.(theme);

	return (
		<TextStyled
			textStyles={textStyles}
			colorStyles={colorStyles}
			variantStyles={variantStyles}
		>
			{children}
		</TextStyled>
	);
};

Text.defaultProps = {
	variant: "body",
	color: "primary",
};
