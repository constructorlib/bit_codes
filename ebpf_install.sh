mkdir -p /data/eadb

mv /data/local/tmp/assets/* /data/eadb

mv /data/local/tmp/deb.tar.gz /data/eadb/deb.tar.gz

rm -r /data/local/tmp/assets

chmod +x /data/eadb/device-*

/data/eadb/device-unpack

# Run Debian
/data/eadb/run /data/eadb/debian