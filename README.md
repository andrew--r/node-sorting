# node-sorting

[![Build Status](https://travis-ci.org/andrew--r/node-sorting.svg?branch=master)](https://travis-ci.org/andrew--r/node-sorting)

Простой сервис для сортировки массивов.

Под капотом: Express для обработки запросов, Jade для шаблонизациию

Для тестирования используется Mocha и expect.js. Тесты можно запустить командой `npm test`.

Для статического анализа кода используется eslint, запускаемый командой `npm lint`.

Для мониторинга используется сервис uptimerobot. Сервис позволяет следить за состоянием приложения, если что-то случится и приложение упадёт, я получу уведомление по электронной почте:

![](https://habrastorage.org/files/61f/6b2/12d/61f6b212df7e48499805c2935144fdd7.png)

В логах можно посмотреть информацию о запросах к серверу и о состоянии сервера, кроме того я пишу в логи время, за которое был отсортирован массив:

```bash
$ heroku logs
2016-08-10T05:17:33.339560+00:00 app[web.1]: HEAD / 200 379.057 ms - 469
2016-08-10T05:52:56.417093+00:00 heroku[web.1]: Idling
2016-08-10T05:52:56.417829+00:00 heroku[web.1]: State changed from up to down
2016-08-10T05:52:59.866321+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2016-08-10T05:53:00.674970+00:00 app[web.1]: Error waiting for process to terminate: No child processes
2016-08-10T05:53:00.775800+00:00 heroku[web.1]: Process exited with status 22
2016-08-10T06:17:26.936340+00:00 heroku[web.1]: Unidling
2016-08-10T06:17:26.936785+00:00 heroku[web.1]: State changed from down to starting
2016-08-10T06:17:28.442875+00:00 heroku[web.1]: Starting process with command `npm start`
2016-08-10T06:17:30.916402+00:00 app[web.1]:
2016-08-10T06:17:30.916433+00:00 app[web.1]: > node-sorting@0.0.1 start /app
2016-08-10T06:17:30.916433+00:00 app[web.1]: > node ./bin/www
2016-08-10T06:17:30.916434+00:00 app[web.1]:
2016-08-10T06:17:31.221320+00:00 app[web.1]: Listening on port 42172
2016-08-10T11:01:56.841480+00:00 heroku[web.1]: State changed from starting to up
2016-08-10T11:01:58.306246+00:00 heroku[router]: at=info method=HEAD path="/" host=sheltered-journey-70111.herokuapp.com request_id=b2a89488-00b0-4647-8417-96fad8ba0457 fwd="69.162.124.237" dyno=web.1 connect=0ms service=575ms status=200 bytes=197
2016-08-10T11:01:58.274616+00:00 app[web.1]: HEAD / 200 551.542 ms - 469
2016-08-10T11:34:30.497714+00:00 heroku[router]: at=info method=GET path="/" host=sheltered-journey-70111.herokuapp.com request_id=b3fafa75-bd4d-4031-8456-1be230491f3f fwd="5.45.224.74" dyno=web.1 connect=1ms service=12ms status=200 bytes=666
2016-08-10T11:34:30.496101+00:00 app[web.1]: GET / 200 4.869 ms - 469
2016-08-10T11:34:30.921685+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=sheltered-journey-70111.herokuapp.com request_id=95fad563-3fb3-497e-b9cf-79423d806322 fwd="5.45.224.74" dyno=web.1 connect=1ms service=6ms status=200 bytes=145
2016-08-10T11:34:30.917515+00:00 app[web.1]: GET /favicon.ico 200 1.326 ms - -
2016-08-10T11:34:32.442608+00:00 heroku[router]: at=info method=GET path="/result?input=5%2C+4%2C+3%2C+2%2C+1" host=sheltered-journey-70111.herokuapp.com request_id=5e2b6c2c-2c31-4f07-8d65-5704e7cca26d fwd="5.45.224.74" dyno=web.1 connect=0ms service=23ms status=200 bytes=513
2016-08-10T11:34:32.422443+00:00 app[web.1]: cocktail sort: 0.276ms
2016-08-10T11:34:32.440541+00:00 app[web.1]: GET /result?input=5%2C+4%2C+3%2C+2%2C+1 200 18.550 ms - 316
2016-08-10T11:34:32.784234+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=sheltered-journey-70111.herokuapp.com request_id=98ce85aa-329c-4967-827e-36f3b2354190 fwd="5.45.224.74" dyno=web.1 connect=1ms service=2ms status=200 bytes=145
2016-08-10T11:34:32.781795+00:00 app[web.1]: GET /favicon.ico 200 0.488 ms - -
```
