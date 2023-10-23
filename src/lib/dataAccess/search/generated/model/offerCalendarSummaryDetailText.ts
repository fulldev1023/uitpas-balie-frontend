/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */

/**
 * Textual represenation of the date of the event / place
 */
export type OfferCalendarSummaryDetailText = {
  /** Extra small date, example "28 nov" */
  xs?: string;
  /** Small date, example: Tot 28 nov 2022 */
  sm?: string;
  /** Medium date, example: Ma 28 november 2022 (uitverkocht) */
  md?: string;
  /** Large date, example: Maandag 28 november 2022 van 20:00 tot 21:00 (Volzet of uitverkocht) */
  lg?: string;
};