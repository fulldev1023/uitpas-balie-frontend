/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * UiTPAS API
 * With UiTPAS API 4.0 you can retrieve ticket prices and register ticket sales for passholders. You can also save UiTPAS points and exchange them for rewards for a passholder, and much more.
 * OpenAPI spec version: 4.0
 */

/**
 * The `FamilyMember` entity including basic information about the `Passholder` family member.
 */
export interface FamilyMember {
  /** ID of the family member passholder. This field is always available in responses. */
  readonly passholderId?: string;
  /** Creationdate of the family member in its family. This field is always available in responses. */
  readonly creationDate?: string;
  /** UiTPAS number of the family member passholder. This field is always available in responses, mandatory in POST requests and ignored in PUT requests. */
  uitpasNumber?: string;
  /** First name of the family member passholder. This field is always available in responses. */
  readonly firstName?: string;
  /** Name of the family member passholder. This field is always available in responses. */
  readonly name?: string;
  /** Number of points of the family member passholder. This field is always available in responses. */
  readonly points?: number;
  /** Icon of the family member */
  icon?: string;
  /** Indicates whether this is the main family member (= the passholder that created this list of family members) */
  readonly mainFamilyMember?: boolean;
}
