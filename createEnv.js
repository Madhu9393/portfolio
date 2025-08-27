const fs = require('fs');
fs.writeFileSync('.env', 'SKIP_PREFLIGHT_CHECK=true\nGENERATE_SOURCEMAP=false');
console.log('.env file created successfully!');
