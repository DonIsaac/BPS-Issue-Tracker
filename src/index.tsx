import { render, h } from 'preact';
import * as ulog from 'ulog';
import { CentralRegistry } from './management/registry';
import { Sidebar } from './components/sidebar';
import { NewFeedbackOverlay } from './components/new-feedback.overlay';

let tracker: IssueTracker = window._tracker = {
  registry: new CentralRegistry(),
  logger: ulog('issue-tracker'),
  enableDebug: () => tracker.logger.level = tracker.logger.DEBUG,
  disableDebug: () => tracker.logger.level = tracker.logger.WARN
};

/* For development only. Remove during production. */
tracker.enableDebug();

/* Root element for sidebar element */
let sidebarWrapper = document.createElement('div');
sidebarWrapper.setAttribute('id', 'tracker-ui-wrapper');
sidebarWrapper.setAttribute('style', 'position: absolute; right: 2rem; bottom: 1rem;');
document.body.appendChild(sidebarWrapper);

/* New Feedback Overlay sidebar element */
let overlayWrapper = document.createElement('div');
overlayWrapper.setAttribute('id', 'tracker-ui-overlay');
overlayWrapper.setAttribute('style', ' padding: 2.5em; margin: 0 auto; width: 80%;');
document.body.appendChild(overlayWrapper);

/* Close all overlays when the Escape key is pressed */
window.addEventListener('keydown', e => {
  if (e.code === 'Escape')
    window._tracker.registry.notify(this, 'OVERLAY_SIG_HIDE');
});

let sidebar = render(
  <Sidebar />,
  sidebarWrapper
);

let dimmer = render(
  <NewFeedbackOverlay />,
  overlayWrapper
);
