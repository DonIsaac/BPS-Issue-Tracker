import { h } from 'preact';
import { PublisherComponent, Subscribe } from '../management/registry';
import Shadow from 'preact-shadow-root';

/**
 * Overlay component. Creates a div that covers the screen and contains a close
 * button in the top right. This component is used for a variety of other
 * components.
 */
export class Overlay extends PublisherComponent {

  constructor(props) {
    super();

    /* Initialize component state */
    this.state.hidden = true;
    this.state.id = props.id || -1;

    /* Register subscriptions */
    this.subscribe('OVERLAY_SIG_HIDE', this.hide);
    this.subscribe('OVERLAY_SIG_SHOW', this.show);
  }

  // @Subscribe('OVERLAY_SIG_HIDE')
  hide(id: string | number) {
    window._tracker.logger.info('OVERLAY: OVERLAY_SIG_HIDE event received');
    /* If an ID is provided and is not the ID of this overlay, don't hide */
    if (id && id !== this.state.id)
      return;

    this.setState({ hidden: true });
    this.forceUpdate();
  }

  // @Subscribe('OVERLAY_SIG_SHOW')
  show() {
    window._tracker.logger.info('OVERLAY: OVERLAY_SIG_SHOW event received');
    this.setState({ hidden: false });
    this.forceUpdate();
  }

  /**
   * NOTE: This has to be bound when called from render() because preact is
   * weird like that.
   *
   * @param e              The event passed when clicked
   */
  handleClick = (e: MouseEvent) => {
    this.publish('OVERLAY_SIG_HIDE', this.state.id);
  }

  render(props?: any, state?: any, context?: any): JSX.Element {
    props.opacity = props.opacity || .3;
    if (!this.state.hidden)
    return (
      <Shadow>
        <div id={`overlay-${state.id}`}>
          <style>{`

            .dimmer {
              background: rgba(0, 0, 0, ${props.opacity});
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 100;
            }

            .exit {
              font-size: 4em;
              color: red;
              position: absolute;
              font-weight: bold;
              top: 2px;
              left: 2px;
              opacity: 1;
              cursor: pointer;
            }
          `}</style>
          <div class="dimmer">
            <span class="exit" onClick={this.handleClick.bind(this)}>&times;</span>
            {props.children}
          </div>
        </div>
      </Shadow>
    );

    else
    return (<Shadow></Shadow>);

  }

}
