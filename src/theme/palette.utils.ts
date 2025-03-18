import { tint, shade } from 'polished';

/**
 * Generates a set of color shades and tints based on a given base color.
 *
 * @param {string} baseColor - The base hex color code.
 * @returns {object} An object containing 10 shades and tints of the base color,
 * where:
 * - Keys 1-5 represent progressively lighter tints of the color.
 * - Key 6 is the original base color.
 * - Keys 7-10 represent progressively darker shades of the color.
 */
export const generateColorShades = (baseColor: string) => {
  return {
    1: tint(0.9, baseColor),
    2: tint(0.7, baseColor),
    3: tint(0.6, baseColor),
    4: tint(0.4, baseColor),
    5: tint(0.2, baseColor),
    6: baseColor,
    7: shade(0.2, baseColor),
    8: shade(0.4, baseColor),
    9: shade(0.6, baseColor),
    10: shade(0.8, baseColor),
  };
};

/**
 * Converts a hex color code to its RGBA equivalent.
 *
 * @param {string} hex - The hex color code (e.g. '#FFFFFF').
 * @param {number} opacity - The opacity value (0 to 1) to be applied to the color.
 * @returns {string} The RGBA color string (e.g. 'rgba(255,255,255,1)').
 */
export const convertHexToRGBA = (hex: string, opacity: number) => {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};
