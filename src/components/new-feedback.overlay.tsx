import { h, Component } from 'preact';
import { PublisherComponent } from '../management/registry';
import { Overlay } from './overlay';

/**
 *
 */
class FeedbackOption extends Component<any, any> {

  constructor(props) {
    super();

    this.state.id = props.id || '';
  }

  render(props, state) {
    return (
      <li id={`option-${this.state.id}`} class={state.selected === state.id ? 'selected' : ''}
        onClick={e => props.handleClick(e, state.id)}>
          <a>{props.children}</a>
      </li>
    );
  }
}

/**
 *
 */
export class NewFeedbackOverlay extends PublisherComponent {

  constructor(props) {
    super(props);
    this.state.selected = 'elem-feedback';
    this.state.id = 'new-feedback';
  }

  handleClickOnElemFeedback(e: MouseEvent, id: string) {
    this.publish('NEW_FEEDBACK_SIG_ELEM');
    // this.publish('OVERLAY_SIG_HIDE', this.state.id);
  }

  handleClickOnPageFeedback(e: MouseEvent) {
    this.publish('NEW_FEEDBACK_SIG_PAGE', 'foo', 'bar');
    // this.publish('OVERLAY_SIG_HIDE', this.state.id);
  }

  handleClickOnSettings(e: MouseEvent) {
    this.publish('SETTINGS_SIG_DISPLAY');
  }

  render(props?: any, state?: any, context?: any): JSX.Element {
    return (
      <Overlay id={state.id}>
        <div>
          <style>{`
          .list-new-feedback {
            position: absolute;
            top: 1em;
            right: 1em;
            list-style-type: none;
          }

          .list-new-feedback > li {
            padding: 2em;
            margin: .5em;
            background: rgba(0, 0, 0, .6);
            text-align: center;
            cursor: pointer;
          }

          .list-new-feedback > li:hover {
            background: rgba(0, 0, 0, .9);
          }

          .list-new-feedback > li > a {
            color: rgba(255, 255, 255, .6);
            font-weight: bold;
          }


        `}</style>
          <ul class="list-new-feedback">
          <FeedbackOption id="elem-feedback"
            selected={this.state.selected}
            handleClick={this.handleClickOnElemFeedback.bind(this)}
          >+</FeedbackOption>
          <FeedbackOption id="page-feedback"
            selected={this.state.selected}
            handleClick={this.handleClickOnPageFeedback.bind(this)}
          >[+]</FeedbackOption>
          <FeedbackOption id="settings"
            selected={this.state.selected}
            handleClick={this.handleClickOnSettings.bind(this)}
          ><span class="fas fa-cogs"></span></FeedbackOption>
          </ul>
        </div>
      </Overlay>
    );
  }
}

/*

<li onClick={this.handleClickOnElemFeedback.bind(this)}><a>+</a></li>
            <li onClick={this.handleClickOnPageFeedback.bind(this)}><a>[+]</a></li>
*/
