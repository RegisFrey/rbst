import { getOptions } from 'loader-utils';
import { prepareOptions } from './options';

/**
 * Regis' Basic Style Tokens - Webpack Loader
 */
export default function tokensLoader (source) {
  const userOptions = getOptions(this);
  const options = prepareOptions(userOptions);

  // Apply some transformations to the source...

  // addDependency

  // determine if should return as text or module

  return `export default ${ JSON.stringify(source) }`;
}
