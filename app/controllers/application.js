import Controller from '@ember/controller';
import { recordIdentifierFor } from '@ember-data/store';
import { macroCondition } from '@embroider/macros';


export default class ApplicationController extends Controller {}

console.log(recordIdentifierFor);

if (macroCondition(true)) {
  console.log(true);
} else if (macroCondition(false)) {
  // this branch will never be hit and furthermore in production
  // builds it will be fully removed
}
