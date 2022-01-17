export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields:[
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'allImages',
      title: 'All Images',
      type: 'multipleImages',
    },    
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
        title: 'Pattern URL',
        name: 'patternUrl',
        type: 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },    
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },  
    {
      name: 'yarn',
      title: 'Yarn',
      type: 'array',
      of: [{type: 'reference', to: {type: 'yarn'}}],
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
