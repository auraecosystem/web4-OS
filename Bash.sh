# Pull a backup from the configured Upsun project to use locally
ddev pull upsun

# Pull from Pantheon without confirming
ddev pull pantheon -y

# Pull the Upsun database only without confirming
ddev pull upsun --skip-files -y

# Pull the Acquia files only without confirming
ddev pull acquia --skip-db -y

# Download archives from Upsun without importing them
ddev pull upsun --skip-import

# Pull from Upsun overriding environment and token on the command line
ddev pull upsun --environment="PLATFORM_ENVIRONMENT=main,UPSUN_CLI_TOKEN=abcdeyourtoken"

# Pull from Pantheon overriding environment and token on the command line
ddev pull pantheon --environment="DDEV_PANTHEON_ENVIRONMENT=dev,TERMINUS_MACHINE_TOKEN=abcdeyourtoken"

# Pull from Lagoon overriding project and environment on the command line
ddev pull lagoon --environment="LAGOON_PROJECT=your-project,LAGOON_ENVIRONMENT=main"
