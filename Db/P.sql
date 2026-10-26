# List available databases
ddev psql -l

# List tables in the default 'db' database
echo "\dt;" | ddev psql
