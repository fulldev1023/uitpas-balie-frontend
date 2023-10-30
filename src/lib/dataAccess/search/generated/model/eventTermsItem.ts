/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */
import type { EventTermsItemDomain } from './eventTermsItemDomain';

/**
 * A taxonomy term used to categorize events.

All events require exactly one term of the `eventtype` domain, and can optionally contain other terms.

When reading events, all properties will be available. When creating or updating events only the `id` is required to be included.
 */
export type EventTermsItem = {
  /** The domain of the term. Can be one of `eventtype`, `theme`, or `facility`. */
  domain?: EventTermsItemDomain;
  /** Unique id of the term. For example `0.50.4.0.0`. */
  id: string;
  /** Human-readable label of the term. Currently only available in Dutch. For example `Concert`. */
  label?: string;
};
