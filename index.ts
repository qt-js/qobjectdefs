/**
 * This file is licensed under the MIT license.
 */

import {join} from 'path';
import {readFileSync} from 'fs';

export function getPath(): string {
  return join(__dirname, 'qobjectdefs.h');
}

export function getFileContents(): string {
  return readFileSync(getPath()).toString();
}
