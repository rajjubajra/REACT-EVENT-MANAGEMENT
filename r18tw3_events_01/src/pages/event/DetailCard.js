import React from 'react';
import {Link} from 'react-router-dom';

function DetailCard({event}) {

  console.log("event Card ",event);
  const monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


  const dateFromTo = (datefrom, dateto) => {
    const from = new Date(datefrom);
    const to = new Date(dateto);
    return `${from.getDate()} 
            ${monthArr[from.getDate()-1]} 
          - ${to.getDate()} 
            ${monthArr[to.getDate()-1]}`
  }

  
  const eventDate = (date) => {
    const dateparse = Date.parse(date);
    const dt = new Date(dateparse);
    return dt.getDate() + " - " + monthArr[dt.getMonth() - 1] + " - " + dt.getFullYear()
  }

  const eventTime = (date) => {
    const dateparse = Date.parse(date);
    const dt = new Date(dateparse);
    return `${dt.getHours()} : ${dt.getMinutes()}` ; 
  }

  return (
    <div>
    {
      event?.map((item,i)=>{
        return (
          <div className="my-10 grid grid-cols-12 p-10 border" key={i}>

 {/*** LEFT COLUMN */}
            <div className="col-span-8">
              <div>
                <div>
                    {dateFromTo(item.date_time_from, item.date_time_to)}
                </div>
                <div className="text-xl">{item.title}</div> 

                <div className="my-10 px-10  py-10 border mr-10">
                  <div className="p-4 grid gap-4" dangerouslySetInnerHTML={{__html: item.details}} />
                </div>
              </div>
              <div className="my-10">
                <h2 className="text-xl">Schedule</h2>
                <div className="border-l-4 my-10 relative">
                  <div className="h-10"></div>
                  <div>
                    {
                      item.schedule?.map((sch, i) => {
                        return <div className="my-5 grid grid-cols-12 border-t-4 h-28">
                          <div className="col-span-1"></div>
                          <div className="relative bottom-2 pl-2 col-span-11 bg-white">
                            <div className="font-light text-xs">{eventTime(sch.start)} - {eventTime(sch.end)}</div>
                            <div className="font-light text-sm tracking-wide my-2">{sch.brief}</div>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>  


{/** RIGHT COLUMN */}
            <div className="col-span-4">
              <div className="mt-2">
                <Link className="btn-primary" to="/page-one-n1">x</Link>
              </div>
              <div className="my-5 border p-4">
                <h3 className="uppercase tracking-wide">Date:</h3>
                <h3 className="text-sm font-light">{eventDate(item.date_time_from)}</h3>
              </div>
              <div  className="my-5 border p-4">
                <h3 className="uppercase tracking-wide">Time:</h3>
                <h3 className="text-sm font-light">{eventTime(item.date_time_from)}</h3>
              </div>
              <div  className="my-5 border p-4">
                <h3 className="uppercase tracking-wide">Local Time</h3>
                <div className="text-sm font-light">
                  <p>Timezone: Europe/London</p>
                  <p>Date: {eventDate(item.date_time_from)}</p>
                  <p>Time:  {eventTime(item.date_time_from)} to {eventTime(item.date_time_to)}</p>
                </div>
                
              </div>
              <div  className="my-5 border p-4">
                <h3 className="uppercase tracking-wide">Location:</h3>
                  <ul className="text-sm font-light">
                    <li>{item.location[0].address_1}</li>
                    <li>{item.location[0].address_2}</li>
                    <li>{item.location[0].address_3}</li>
                    <li>{item.location[0].address_4}</li>
                  </ul>
              </div>
              <div  className="my-5 border p-4">
                <h3 className="uppercase tracking-wide">Organiser:</h3>
                <div>
                  <div className="text-sm font-light" dangerouslySetInnerHTML={{__html: item.organiser}} />
                </div>
              </div>
            </div>
          </div>)
      })
    }
    </div>
  )
}

export default DetailCard