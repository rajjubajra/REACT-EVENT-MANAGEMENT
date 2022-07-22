import React from 'react';
import {Link} from 'react-router-dom';
import BookingButton  from './BookingButton';

function ListingCard({event}) {

  console.log(event);
  
  const monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  /** Title Month */
  const titleMonth = (date_time) => {
    const dt = new Date(date_time);
    return monthArr[dt.getMonth()];
  }

  /** Day and Month */
  const dateFromTo = (datefrom, dateto) => {
    const from = Date?.parse(datefrom);
    const to = Date?.parse(dateto);
    const dateFrom = new Date(from)
    const dateTo = new Date(to)

    return `${dateFrom.getDate()} ${monthArr[dateFrom?.getDate()]} 
            - ${dateTo.getDate()} ${monthArr[dateTo.getDate()]}`
  }


  return (
    <div>
    {
      event?.map((item,i)=>{
        return (
          <div className="my-10 p-10 border" key={i}>

              <div>
                <div>{titleMonth(item.date_time_from)}</div>
              </div>

              <div>
                <div>
                    {dateFromTo(item.date_time_from, item.date_time_to)}
                </div>
                <div className="text-xl">{item.title}</div> 

                <div className="text-sm mx-10">
                  <div>Venue:</div>
                  <ul className="text-sm">
                    <li>{item.location[0].address_1}</li>
                    <li>{item.location[0].address_2}</li>
                    <li>{item.location[0].address_3}</li>
                    <li>{item.location[0].address_4}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <Link className="btn-primary" to={`/event-details/${item.nid}`}>View Details</Link>
                <BookingButton nid={item.nid} />
              </div>
          </div>)
      })
    }
    </div>
  )
}

export default ListingCard