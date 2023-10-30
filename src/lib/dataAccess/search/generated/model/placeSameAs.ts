/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */
import type { CommonStringUri } from './commonStringUri';

/**
 * One or more URIs that represent the same [place](./models/place.json) on another API or website, not necessarily in JSON-LD format.

Added automatically by UiTdatabank based on info from other systems.

For example `http://www.uitinvlaanderen.be/agenda/p/test-place/85b04295-479c-40f5-b3dd-469dfb4387b3`.
 */
export type PlaceSameAs = CommonStringUri[];
