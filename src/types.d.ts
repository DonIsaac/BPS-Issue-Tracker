import { CentralRegistry } from "./management/registry";

declare global {
  interface Window {
    /** Global issue tracker object */
    _tracker: IssueTracker;
  }

  /**
   * Stores the state and utilities required for the Issue Tracker.
   */
  interface IssueTracker {
    /**
    * Issue Tracker global event registry singleton. Do not directly interface
    * with this object.
    *
    * @see CentralRegistry
    */
    registry: CentralRegistry;

    /** Logger used by the Issue Tracker */
    logger: any;

    /** Enables debugging messages */
    enableDebug: VoidFunction;

    /** Disables debugging messages */
    disableDebug: VoidFunction;
  }

  /**
   * Stores properties of a Subscription to a published Event.
   */
  interface Subscription {
    /** The object or class subscribing to an Event */
    subscriber: any;

    /** The callback to invoke when an event is published */
    callback: Function;
  }
}