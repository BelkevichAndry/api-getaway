#!/bin/bash

npm install

ssh ubuntu@ec2-54-159-91-101.compute-1.amazonaws.com <<EOF
 cd /home/ubuntu/api-getaway/
 npm run dev
EOF