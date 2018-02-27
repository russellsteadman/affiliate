#!/bin/bash

SAUCEPASS=$(cat ~/.sauce-auth)

curl https://saucelabs.com/rest/v1/teamtofu/js-tests -X POST -u teamtofu:$SAUCEPASS -H 'Content-Type: application/json' -d "{\"platforms\":[[\"Windows 7\", \"internet explorer\", \"9\"], [\"Mac 10.9\", \"safari\", \"7\"], [\"Mac 10.11\", \"safari\", \"10\"], [\"Windows 10\", \"microsoft edge\", \"13\"]], \"url\":\"https://affiliate.js.org/test/\", \"framework\": \"jasmine\", \"name\": \"affiliate-compat\"}"