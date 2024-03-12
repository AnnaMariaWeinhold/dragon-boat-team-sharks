import {defineField, defineType} from 'sanity'

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            fields: [
              {
                name: 'altTag',
                title: 'Alt Tag',
                type: 'string',
              }
            ]
          }),
          defineField({
            name: 'secondImage',
            title: 'Second image',
            type: 'image',
            fields: [
              {
                name: 'altTag',
                title: 'Alt Tag',
                type: 'string',
              }
            ]
          }),
          defineField({
            name: 'thirdmage',
            title: 'Third image',
            type: 'image',
            fields: [
              {
                name: 'altTag',
                title: 'Alt Tag',
                type: 'string',
              }
            ]
          }),
          defineField({
            name: 'fourthImage',
            title: 'Fourth image',
            type: 'image',
            fields: [
              {
                name: 'altTag',
                title: 'Alt Tag',
                type: 'string',
              }
            ]
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
          }),
        defineField({
            title: "Price",
            name: "price",
            type: "string",
        }),
    ]
});