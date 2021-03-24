import { validate } from 'schema-utils';

const tokensLoaderOptionsSchema = {
    type: 'object',
    properties: {
      format: {
        type: 'string'
      }
    }
};

const defaultOptions = {
    format: 'common.js'
}

export function prepareOptions (userOptions) {
    const options = {...defaultOptions, ...userOptions};
    validate(tokensLoaderOptionsSchema, options, 'Style Tokens Loader');
    return options;
}