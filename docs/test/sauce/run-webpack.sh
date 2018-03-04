#!/bin/bash

SAUCEPASS=$(cat ~/.sauce-auth)

curl https://saucelabs.com/rest/v1/teamtofu/js-tests -X POST -u teamtofu:$SAUCEPASS -H 'Content-Type: application/json' -d "{\"platforms\":[[\"Windows 8\", \"internet explorer\", \"10\"], [\"Mac 10.10\", \"safari\", \"8\"], [\"Mac 10.11\", \"safari\", \"10\"], [\"Windows 10\", \"microsoft edge\", \"13\"], [\"Linux\", \"firefox\", \"15\"], [\"Linux\", \"chrome\", \"30\"], [\"Windows 10\", \"firefox\", \"beta\"], [\"Mac 10.12\", \"chrome\", \"beta\"], [\"Windows 7\", \"internet explorer\", \"9\"]], \"url\":\"https://affiliate.js.org/test/webpack.html\", \"framework\": \"jasmine\", \"name\": \"affiliate-compat-wp\"}"