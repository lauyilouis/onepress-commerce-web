import merge from 'merge';

/**
 * Common props of all theme
 */
export interface ThemeCommonProps {
  /**
   * The defaut font family of the application
   */
  fontFamily: string;
  /**
   * The default maximum width of a container
   * @unit px
   */
  containerMaxWidth: string;
  /**
   * The default horizontal padding width of a container
   * @unit px
   */
  containerHorizontalPadding: string;
  /**
   * The default roundness of a container
   * @unit px
   */
  roundness: string;
  /**
   * The default font size of the application
   * @unit em
   */
  fontSize: string;
  /**
   * The default height of a form input
   * @unit px
   */
  inputHeight: string;
  /**
   * A list of colors settings
   */
  colors: {
    /**
     * The placeholder color of a form input
     */
    inputPlaceholder: string;
    /**
     * The border color of a form input
     */
    inputBorder: string;
    /**
     * The text color of a button
     */
    buttonText: string;
    /**
     * The color of an error text
     */
    error: string;
  }
}

/**
 * Specific props of a theme. Merge recursively with the theme common props.
 */
export interface ThemeProps {
  /**
   * Is it a dark theme?
   */
  dark: boolean
  /**
   * A list of color settings
   */
  colors: {
    /**
     * Default text color of the application
     */
    text: string;
    /**
     * Default background color of a container
     */
    background: string;
    /**
     * Primary color
     */
    primary: string;
    /**
     * Secondary color
     */
    secondary: string;
    /**
     * A lighter version of the secondary color
     */
    lighterSecondary: string;
    /**
     * A darker version of the secondary color
     */
    darkerSecondary: string;
  }
}

type MergedThemeProps = ThemeCommonProps & ThemeProps;

const themeCommonProps: ThemeCommonProps = {
  fontFamily: 'Graphik, sans-serif',
  containerMaxWidth: '1400px',
  containerHorizontalPadding: '30px',
  roundness: '4px',
  fontSize: '1.6em',
  inputHeight: '56px',
  colors: {
    inputPlaceholder: '#95979d',
    inputBorder: '#95979d',
    buttonText: '#FFFFFF',
    error: '#F44336',
  }
};

const lightThemeProps: ThemeProps = {
  dark: false,
  colors: {
    text: '#404145',
    background: '#FFFFFF',
    primary: '#0659fd',
    secondary: '#95979d',
    lighterSecondary: '#e4e5e7',
    darkerSecondary: '#7a7d85',
  },
};

const darkThemeProps: ThemeProps = {
  dark: true,
  colors: {
    text: '#FAFAFA',
    background: '#363537',
    primary: '#0659fd',
    secondary: '#95979d',
    lighterSecondary: '#555555',
    darkerSecondary: '#cccccc',
  },
};

export const lightTheme: MergedThemeProps = merge.recursive(true, themeCommonProps, lightThemeProps);

export const darkTheme: MergedThemeProps = merge.recursive(true, themeCommonProps, darkThemeProps);