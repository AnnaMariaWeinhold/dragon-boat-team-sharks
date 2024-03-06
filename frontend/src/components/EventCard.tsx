
import { useEffect, useState, Fragment } from "react";
import { readOnlySanityClient, type Event } from "../lib/read-only-sanity-client";
import { LoadingSpinner } from './LoadingSpinner.tsx';
import './EventCard.css';

export function EventCards() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const sanityEvents: Event[] = await readOnlySanityClient.fetch(`*[_type == "event"] | order(date asc)`);
                setEvents(sanityEvents.filter((event) => typeof event.type === "string" && new Date()  <= new Date(event.date)));

            } catch (e) {
                console.log("Error fetching events from Sanity", e.message || e);
            }
        })();
    }, []);

    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <Fragment>
            {events.length === 0 ? <LoadingSpinner /> : events.map((event) => (
                <div key={event._id} className={`event__container ${event.type.toLowerCase()}-color`}>
                    <div className="event__calendar">
                        <p className="event__month">
                            {months[new Date(event.date).getMonth()]}
                        </p>
                        <div>
                            <div>
                                <div>
                                    <h2>
                                        {new Date(event.date).getDate()}
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <p>
                                    {daysOfTheWeek[new Date(event.date).getDay()]}
                                </p>
                                <p>
                                    {`${new Date(event.from).toLocaleTimeString("en-US", { hour12: true, hour: "2-digit", minute: "numeric", timeZone: "Asia/Nicosia" })} to ${new Date(event.to).toLocaleTimeString("en-US", { hour12: true, hour: "2-digit", minute: "2-digit" })}`.toLowerCase()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>
                        {event.name}
                    </h3>
                </div>
            ))}
        </Fragment>
    )
}