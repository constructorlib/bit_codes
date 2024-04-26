#!/bin/bash

# Clone the repository
git clone https://github.com/tiann/eadb

# Clone assets
git clone https://github/eadb/assets

# Push debianfs-amd64-full.tar.gz
adb push debianfs-amd64-full.tar.gz /data/local/tmp/deb.tar.gz

# Push assets directory
adb push assets /data/local/tmp/assets

