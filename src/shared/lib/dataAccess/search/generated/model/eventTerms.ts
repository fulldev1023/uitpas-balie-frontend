/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */
import type { EventTermsItem } from './eventTermsItem';

/**
 * A list of taxonomy terms used to categorize the [event](./models/event.json).

Terms are pre-defined and can be found using our [guide about taxonomy terms](../docs/taxonomy-api/terms.md).

An event requires at least one term, to define its type. (For example a concert, theater show, ...)
 */
export type EventTerms = EventTermsItem[];