/**
 * Email3 Sift. Frontend controller entry point.
 */
import { SiftController, registerSiftController } from '@redsift/sift-sdk-web';

export default class MyController extends SiftController {
  constructor() {
    // You have to call the super() method to initialize the base class.
    super();
    this._suHandler = this.onStorageUpdate.bind(this);
  }

  // for more info: http://docs.redsift.com/docs/client-code-siftcontroller
  loadView(state) {
    console.log('emailUpdate: loadView', state);
    // Register for storage update events on the "x" bucket so we can update the UI
    this.storage.subscribe(['emailOutput'], this._suHandler);
    switch (state.type) {
      case 'email-thread':
        return {
          html: 'email-thread.html',
          data: {},
        };
      case 'summary':
        return {
          html: 'summary.html',
          data: this.getResults(), //this.getX()
        };
      default:
        console.error('emailUpdate: unknown Sift type: ', state.type);
    }
  }

  //Event: storage update
  onStorageUpdate(value) {
    console.log('emailUpdate: onStorageUpdate: ', value);
    return this.getResults().then(xe => {
      // Publish events from 'x' to view
      this.publish('outputs', xe);
    });
  }

  getResults() {
    return this.storage
      .get({
        bucket: 'emailOutput',
        keys: ['email_output'],
      })
      .then(values => {
        console.log('emailUpdate: getResults returned:', values);
        return values;
      });
  }
}

// Do not remove. The Sift is responsible for registering its views and controllers
registerSiftController(new MyController());
