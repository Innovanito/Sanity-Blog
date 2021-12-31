import codeInput from "../components/codeInput";

export default {
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string'
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      inputComponent: codeInput
    },
  ]
}