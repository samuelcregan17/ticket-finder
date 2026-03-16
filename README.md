# Overview

Compile a list of all tickets for sale across websites in one place!

Ticketmaster api key: 6bzENdYHS4F0ex692fiIlx2rrSoVGv8o

Search for events on ticketmaster:

https://app.ticketmaster.com/discovery/v2/events.json?apikey=6bzENdYHS4F0ex692fiIlx2rrSoVGv8o&keyword=Avalanche&city=Denver

get event details:

https://app.ticketmaster.com/discovery/v2/events/{id}.json?apikey=YOUR_KEY

# TODO

Stubhub seems like the next plausible idea for buying tickets, they have a developer api I can use. This should be the next step to scaling for other websites. AXS and Stubhub are dorks and aren't very dev friendly...

## Notes

Statically serves files from public, so you can reach them via localhost:4200/<file>