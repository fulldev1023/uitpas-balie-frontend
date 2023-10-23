/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */
import type { Organizer } from './organizer';
import type { GetOrganizers200Facet } from './getOrganizers200Facet';

export type GetOrganizers200 = {
  /** The amount of results that is being returned per page. */
  itemsPerPage: number;
  /** Total amount of results for the given query parameters. */
  totalItems: number;
  /** Search results (paginated). Note that the complete search results details will only be returned if `?embed=true` is used. Otherwise only the `@id` will be returned. */
  member: Organizer[];
  /** Facet counts per possible filter & value. */
  facet?: GetOrganizers200Facet;
};