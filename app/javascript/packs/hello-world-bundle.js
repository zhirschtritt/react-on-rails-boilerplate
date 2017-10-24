import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

// Loads all Semantic javascripts
//= require semantic-ui

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld, 
});
