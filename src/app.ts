/**
 * Copyright (c) evgeniy.logvinov.k
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import express from 'express';
import axios from 'axios';

const app = express();

app.get('/', (_, res) => res.send('Hello World!'));

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

setTimeout(() => {
  instance.get('/')
      .then(function(response) {
      // handle success
        console.log(response);
      })
      .catch(function(error) {
      // handle error
        console.log(error);
      })
      .then(function() {
      // always executed
      });
}, 2000);

console.log('Done');
export default app;
