import data from './eventlist.json';
import EventListingContainer from './EventListingContainer';


function EventListingLocal() {


return (
<div>
  <EventListingContainer data={data} />
</div>

)


}

export default EventListingLocal
