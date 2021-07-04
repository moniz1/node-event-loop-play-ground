#!/bin/bash#

node --prof $1

profFile=$(ls isolate*.log)
echo generated profile $profFile

node --prof-process $profFile > profile.txt

echo complete profiling

rm -rf $profFile