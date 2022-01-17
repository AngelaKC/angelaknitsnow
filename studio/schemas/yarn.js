export default {
  name: "yarn",
  title: "Yarn",
  type: "document",
  fields: [
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
        name: "name",
        title: "Yarn name",
        type: "string",
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
