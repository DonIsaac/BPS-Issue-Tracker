/**
 * This component is the sidebar. The sidebar contains the button that creates
 * a new issue. When this button is clicked, the overlay component is displayed.
 * If the user's connection config has not been apropriately set up, they are
 * taken to a form that let them modify that instead.
 */

import { h } from 'preact';
import Shadow from 'preact-shadow-root';
import { PublisherComponent } from '../management/registry';

export class Sidebar extends PublisherComponent {

  constructor(props) {
    super(props);
  }

  handleIssueClick(e) {
    this.publish('OVERLAY_SIG_SHOW');
  }

  render({ }, { }) {
    return (
      <Shadow>
        <div>
          <style>{`
          .sidebar {
            background-color: #DDD;
            padding: .5em;
            height: 100%;
            border-radius: .5em;
          }

          .btn-new-issue {
            background-color: #06ce05;
            border-radius: .5em;
            border: 1px solid #0b0;
            padding: 1em;
            cursor: pointer;
          }

          .btn-new-issue:hover {
            background-color: #0B0;
          }
        `}</style>
          <div class="tracker sidebar">
            <div class="tracker btn-new-issue" onClick={e => void this.publish('OVERLAY_SIG_SHOW')}>
              <strong>+</strong>
            </div>
          </div>
        </div>
      </Shadow>
    );
  }
}
