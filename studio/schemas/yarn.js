export default {
  name: "yarn",
  title: "Yarn",
  type: "document",
  fields: [
    {
      name: "yarnDesc",
      title: "Yarn Description",
      type: 'array',
      of: [{type: 'reference', to: {type: 'yarnDescription'}}],
    },
    {
      name: "weight",
      title: "Yarn weight",
      type: "string",
    },
    {
      name: "colorway",
      title: "Colorway",
      type: "string",
    },
    {
      name: "image",
      title: "Yarn name",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
