import {invoker, compose} from 'ramda';

export const info = console.info.bind(console);
export const error = console.error.bind(console);
export const val = compose(info, invoker(0, 'val'));
