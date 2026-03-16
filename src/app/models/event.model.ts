export interface Event {
  id: string;
  name: string;
  location: string;   // city + state
  venue: string;      // venue name
  date: string;       // local date
  time: string;       // local time
  imageUrl: string;   // for the list item image
  ticketUrl: string;  // link to buy tickets
  icon: string;       // icon of the vendor
}