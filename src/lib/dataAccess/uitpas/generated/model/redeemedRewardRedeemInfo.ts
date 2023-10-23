/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * UiTPAS API
 * With UiTPAS API 4.0 you can retrieve ticket prices and register ticket sales for passholders. You can also save UiTPAS points and exchange them for rewards for a passholder, and much more.
 * OpenAPI spec version: 4.0
 */

/**
 * Information about the redeem action.
 */
export type RedeemedRewardRedeemInfo = {
  /** Text to show to the user who redeemed this reward. */
  text?: string;
  /** Link for a call-to-action for the redeemed reward. */
  link?: string;
  /** Label for the call-to-action of the redeemed reward. */
  label?: string;
};