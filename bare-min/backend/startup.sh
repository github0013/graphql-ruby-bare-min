#!/usr/bin/env ash
rm -f tmp/pids/server.pid
rails db:create
rails s -b 0.0.0.0
