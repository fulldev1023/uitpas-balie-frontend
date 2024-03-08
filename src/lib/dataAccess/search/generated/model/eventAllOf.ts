/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Search API
 * With UiTdatabank's Search API you can search events, places and organizers.
 * OpenAPI spec version: 3.0
 */
import type { EventId } from './eventId';
import type { EventAttendanceMode } from './eventAttendanceMode';
import type { EventAudience } from './eventAudience';
import type { EventAvailableFrom } from './eventAvailableFrom';
import type { EventAvailableTo } from './eventAvailableTo';
import type { EventBookingAvailability } from './eventBookingAvailability';
import type { EventBookingInfo } from './eventBookingInfo';
import type { EventCalendarSummary } from './eventCalendarSummary';
import type { EventCalendarType } from './eventCalendarType';
import type { EventCompletedLanguages } from './eventCompletedLanguages';
import type { CommonCompleteness } from './commonCompleteness';
import type { EventContactPoint } from './eventContactPoint';
import type { EventContributors } from './eventContributors';
import type { EventCreated } from './eventCreated';
import type { EventCreator } from './eventCreator';
import type { EventDescription } from './eventDescription';
import type { EventEndDate } from './eventEndDate';
import type { EventHiddenLabels } from './eventHiddenLabels';
import type { EventImage } from './eventImage';
import type { EventLabels } from './eventLabels';
import type { EventLanguages } from './eventLanguages';
import type { EventLocation } from './eventLocation';
import type { EventMainLanguage } from './eventMainLanguage';
import type { EventMediaObject } from './eventMediaObject';
import type { EventModified } from './eventModified';
import type { EventName } from './eventName';
import type { EventOnlineUrl } from './eventOnlineUrl';
import type { EventOpeningHours } from './eventOpeningHours';
import type { EventOrganizer } from './eventOrganizer';
import type { EventPriceInfo } from './eventPriceInfo';
import type { EventProduction } from './eventProduction';
import type { EventSameAs } from './eventSameAs';
import type { EventStartDate } from './eventStartDate';
import type { EventStatus } from './eventStatus';
import type { EventSubEvent } from './eventSubEvent';
import type { EventTerms } from './eventTerms';
import type { EventTypicalAgeRange } from './eventTypicalAgeRange';
import type { EventVideos } from './eventVideos';
import type { EventWorkflowStatus } from './eventWorkflowStatus';

export type EventAllOf = {
  '@id'?: EventId;
  attendanceMode?: EventAttendanceMode;
  audience?: EventAudience;
  availableFrom?: EventAvailableFrom;
  availableTo?: EventAvailableTo;
  bookingAvailability?: EventBookingAvailability;
  bookingInfo?: EventBookingInfo;
  calendarSummary?: EventCalendarSummary;
  calendarType: EventCalendarType;
  completedLanguages?: EventCompletedLanguages;
  completeness?: CommonCompleteness;
  contactPoint?: EventContactPoint;
  contributors?: EventContributors;
  created?: EventCreated;
  creator?: EventCreator;
  description?: EventDescription;
  endDate?: EventEndDate;
  hiddenLabels?: EventHiddenLabels;
  image?: EventImage;
  labels?: EventLabels;
  languages?: EventLanguages;
  location: EventLocation;
  mainLanguage: EventMainLanguage;
  mediaObject?: EventMediaObject;
  modified?: EventModified;
  name: EventName;
  onlineUrl?: EventOnlineUrl;
  openingHours?: EventOpeningHours;
  organizer?: EventOrganizer;
  priceInfo?: EventPriceInfo;
  production?: EventProduction;
  sameAs?: EventSameAs;
  startDate?: EventStartDate;
  status?: EventStatus;
  subEvent?: EventSubEvent;
  terms: EventTerms;
  typicalAgeRange?: EventTypicalAgeRange;
  videos?: EventVideos;
  workflowStatus?: EventWorkflowStatus;
};
