var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults : {
    "id": 520140,
    "user_token": "548b742e359b51f0509b81e9c1578d6c",
    "email": "ernesto.arteaga@nearshoretechnology.com",
    "fullname": "Ernesto Arteaga",
    "timezone": "America/Guatemala",
    "clients": [
      {
        "id": 1227093,
        "name": "ModernMeal"
      },
      {
        "id": 1218698,
        "name": "NearShore Technology"
      },
      {
        "id": 1218700,
        "name": "Protech"
      }
    ],
    "projects": [
      {
        "id": 2999735,
        "client_id": 1218698,
        "name": "Time Tracker",
        "at": "2013-06-26T14:24:32+00:00",
        "created_at": "2013-06-26T14:24:32+00:00",
        "color": "10"
      },
      {
        "id": 4820427,
        "client_id": 1218698,
        "name": "Invoice Generator",
        "at": "2014-05-26T15:49:31+00:00",
        "created_at": "2014-05-26T15:49:31+00:00",
        "color": "2"
      },
      {
        "id": 3009520,
        "client_id": 1227093,
        "name": "Parser",
        "at": "2013-06-28T16:52:41+00:00",
        "created_at": "2013-06-28T16:52:41+00:00",
        "color": "21"
      },
      {
        "id": 2999398,
        "client_id": 1227093,
        "name": "Web",
        "at": "2013-06-26T13:22:42+00:00",
        "created_at": "2013-06-26T13:22:42+00:00",
        "color": "5"
      },
      {
        "id": 3209398,
        "client_id": 1227093,
        "name": "iOS App",
        "at": "2013-06-26T13:22:42+00:00",
        "created_at": "2013-06-26T13:22:42+00:00",
        "color": "5"
      },
      {
        "id": 2999712,
        "client_id": 1218700,
        "name": "VendorStat",
        "at": "2013-06-26T14:22:00+00:00",
        "created_at": "2013-06-26T14:21:32+00:00",
        "color": "21"
      }
    ],
    "time_entries": [
      {
        "id": 136533211,
        "guid": "e1dca5d5-27ae-792b-e15b-c2436f38e262",
        "wid": 396425,
        "billable": false,
        "start": "2014-05-26T15:43:18+00:00",
        "stop": "2014-05-26T15:43:29+00:00",
        "duration": 11,
        "description": "ddd",
        "at": "2014-05-26T15:43:28+00:00"
      },
      {
        "id": 136533319,
        "guid": "efa02edb-c0cb-66fb-d7dc-eb124c0154ec",
        "wid": 396425,
        "billable": false,
        "start": "2014-05-26T15:44:05+00:00",
        "stop": "2014-05-26T15:44:16+00:00",
        "duration": 11,
        "description": "qwqw",
        "tags": [
          ""
        ],
        "duronly": false,
        "at": "2014-05-26T15:44:14+00:00"
      },
      {
        "id": 136533360,
        "guid": "b500ae8b-e222-4d8c-7519-631854bee99f",
        "wid": 396425,
        "billable": false,
        "start": "2014-05-26T15:44:22+00:00",
        "stop": "2014-05-26T15:44:23+00:00",
        "duration": 1,
        "description": "qwqw",
        "tags": [
          ""
        ],
        "duronly": false,
        "at": "2014-05-26T15:44:22+00:00"
      },
      {
        "id": 136533362,
        "guid": "d648655a-98d9-357b-8b39-9e8244133c65",
        "wid": 396425,
        "billable": false,
        "start": "2014-05-26T15:44:23+00:00",
        "stop": "2014-05-26T15:44:25+00:00",
        "duration": 2,
        "description": "ddd",
        "tags": [
          ""
        ],
        "duronly": false,
        "at": "2014-05-26T15:44:24+00:00"
      },
      {
        "id": 136533387,
        "guid": "1b67f5fd-6780-fc16-bb31-cada86cb987a",
        "wid": 396425,
        "billable": false,
        "start": "2014-05-26T15:44:35+00:00",
        "stop": "2014-05-26T15:45:16+00:00",
        "duration": 41,
        "description": "ddd",
        "tags": [
          ""
        ],
        "duronly": false,
        "at": "2014-05-26T15:45:15+00:00"
      }
    ]
  }
});