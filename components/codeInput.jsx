import React from "react"
import { Stack, Label, TextInput } from '@sanity/ui'


const codeInput = ((props, ref) => {
  return (
    <Stack space={2} >
      <Label>{props.type.title}</Label>
      <TextInput value={props.value} />
    </Stack>
  )
});


export default codeInput;