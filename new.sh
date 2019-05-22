#!/usr/bin/env bash

OUTPUT_FILE=src/app/app-routing.module.ts

NUM_ROUTES=`wc -l app-routing.module.ts.parts/3-routes | awk '{print $1}'`
N=`expr $NUM_ROUTES + 1`

npx ng generate component sandbox$n

echo "import { Sandbox${N}Component } from \"./sandbox${N}/sandbox${N}.component\";" >> app-routing.module.ts.parts/1-imports
echo "  { path: \"s/${N}\", component: Sandbox${N}Component }," >> app-routing.module.ts.parts/3-routes

# Is alphabetical order of glob guaranteed?
cat app-routing.module.ts.parts/* > $OUTPUT_FILE
