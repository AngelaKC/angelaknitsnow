export default {
    type: 'object',
    name: 'multipleImages',
    title: 'multipleImages',
    fields: [
      {
        type: 'array',
        name: 'image',
        title: 'Gallery Image',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid',
        },
      },
    ],
  };