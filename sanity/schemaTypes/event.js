import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export default defineType({
    name: "event",
    title: "Event",
    type: "document",
    icon: CalendarIcon,
    fields: [
        defineField({
            title: "Name",
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "Date",
            name: "date",
            type: "date",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "Location",
            name: "location",
            type: "string",
        }),
        defineField({
            title: "Start Time",
            name: "from",
            type: "datetime",
            options: {
                timeStep: 15
            }
        }),
        defineField({
            title: "End Time",
            name: "to",
            type: "datetime",
            options: {
                timeStep: 15
            }
        })
    ]
});