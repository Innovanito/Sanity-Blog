export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          hotstop: true,
          fields: [
            {
              name: 'alt',
              title: 'alt',
              type: 'string',
              options: {
                isHighlighted: true
              },
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ]
    },
  ]
}