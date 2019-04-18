import { PublisherComponent } from './registry';
import { Adapter } from '../adapters/adapter';

export class FeedbackService extends PublisherComponent {

  protected adapter: Adapter;

  render(props?: any, state?: any, context?: any): JSX.Element {
    throw new Error('Method not implemented.');
  }
}
