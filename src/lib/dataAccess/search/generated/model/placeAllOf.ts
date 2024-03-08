/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */
import type { PlaceId } from './placeId';
import type { PlaceAddress } from './placeAddress';
import type { PlaceAvailableFrom } from './placeAvailableFrom';
import type { PlaceAvailableTo } from './placeAvailableTo';
import type { PlaceBookingAvailability } from './placeBookingAvailability';
import type { PlaceBookingInfo } from './placeBookingInfo';
import type { PlaceCalendarSummary } from './placeCalendarSummary';
import type { PlaceCalendarType } from './placeCalendarType';
import type { PlaceCompletedLanguages } from './placeCompletedLanguages';
import type { CommonCompleteness } from './commonCompleteness';
import type { PlaceContactPoint } from './placeContactPoint';
import type { PlaceContributors } from './placeContributors';
import type { PlaceCreated } from './placeCreated';
import type { PlaceCreator } from './placeCreator';
import type { PlaceDescription } from './placeDescription';
import type { PlaceEndDate } from './placeEndDate';
import type { PlaceGeo } from './placeGeo';
import type { PlaceHiddenLabels } from './placeHiddenLabels';
import type { PlaceImage } from './placeImage';
import type { PlaceLabels } from './placeLabels';
import type { PlaceLanguages } from './placeLanguages';
import type { PlaceMainLanguage } from './placeMainLanguage';
import type { PlaceMediaObject } from './placeMediaObject';
import type { PlaceModified } from './placeModified';
import type { PlaceName } from './placeName';
import type { PlaceOpeningHours } from './placeOpeningHours';
import type { PlaceOrganizer } from './placeOrganizer';
import type { PlacePriceInfo } from './placePriceInfo';
import type { PlaceSameAs } from './placeSameAs';
import type { PlaceStartDate } from './placeStartDate';
import type { PlaceStatus } from './placeStatus';
import type { PlaceTerms } from './placeTerms';
import type { PlaceTypicalAgeRange } from './placeTypicalAgeRange';
import type { PlaceVideos } from './placeVideos';
import type { PlaceWorkflowStatus } from './placeWorkflowStatus';

export type PlaceAllOf = {
  '@id'?: PlaceId;
  address: PlaceAddress;
  availableFrom?: PlaceAvailableFrom;
  availableTo?: PlaceAvailableTo;
  bookingAvailability?: PlaceBookingAvailability;
  bookingInfo?: PlaceBookingInfo;
  calendarSummary?: PlaceCalendarSummary;
  calendarType: PlaceCalendarType;
  completedLanguages?: PlaceCompletedLanguages;
  completeness?: CommonCompleteness;
  contactPoint?: PlaceContactPoint;
  contributors?: PlaceContributors;
  created?: PlaceCreated;
  creator?: PlaceCreator;
  description?: PlaceDescription;
  endDate?: PlaceEndDate;
  geo?: PlaceGeo;
  hiddenLabels?: PlaceHiddenLabels;
  image?: PlaceImage;
  labels?: PlaceLabels;
  languages?: PlaceLanguages;
  mainLanguage: PlaceMainLanguage;
  mediaObject?: PlaceMediaObject;
  modified?: PlaceModified;
  name: PlaceName;
  openingHours?: PlaceOpeningHours;
  organizer?: PlaceOrganizer;
  priceInfo?: PlacePriceInfo;
  sameAs?: PlaceSameAs;
  startDate?: PlaceStartDate;
  status?: PlaceStatus;
  terms: PlaceTerms;
  typicalAgeRange?: PlaceTypicalAgeRange;
  videos?: PlaceVideos;
  workflowStatus?: PlaceWorkflowStatus;
};
