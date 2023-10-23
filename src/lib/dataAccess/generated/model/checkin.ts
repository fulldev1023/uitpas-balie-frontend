/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * UiTPAS API
 * With UiTPAS API 4.0 you can retrieve ticket prices and register ticket sales for passholders. You can also save UiTPAS points and exchange them for rewards for a passholder, and much more.
 * OpenAPI spec version: 4.0
 */
import type { Passholder } from './passholder';

/**
 * Model used both for registering and searching checkins.

The `passholder` field is automatically included in responses if you have PASSHOLDERS_SEARCH permission. It is not required for check-in creation.
 */
export interface Checkin {
  /** Unique id of a check-in. Not required for check-in creation. */
  readonly id?: string;
  /** Id of the event where the passholder checked in */
  eventId: string;
  /** The passholder's UiTPAS number used to create the check-in. Note that the uitpasNumber of a passholder might change over time. This field will always contain the uitpasNumber used when creating the check-in. To identify the passholder, use the `passholder` field. */
  uitpasNumber: string;
  /** Points earned by the passholder as a result of this check-in. */
  readonly points?: number;
  /** Full passholder object of this check-in. */
  readonly passholder?: Passholder;
}
