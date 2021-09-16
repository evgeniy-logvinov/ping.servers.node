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
const intervalTime = Number(process.env.INTERVAL_TIME) || 5000;

app.get('/', (_, res) => res.send('Hello World!'));

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

setInterval(() => {
  instance.get('/')
      .then(function(response) {
      // handle success
        console.log(response.data);
      })
      .catch(function(error) {
      // handle error
        console.log(error);
      })
      .then(function() {
      // always executed
      });
}, intervalTime);

if (process.env.BASE_URL_SECOND) {
  const instanceSecond = axios.create({
    baseURL: process.env.BASE_URL_SECOND,
  });

  setInterval(() => {
    instanceSecond.get('/')
        .then(function(response) {
          // handle success
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
  }, intervalTime);

}

console.log('Done');
export default app;
