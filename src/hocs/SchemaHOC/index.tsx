import { RecursionField, useFieldSchema } from "@formily/react"

export const SchemaHOC = (Component) => (props) => {
  const schema = useFieldSchema()
  if (!schema) throw new Error('can not found schema object')

  const kComponentProps = schema['k-component-props']
  const calcProps = {}
  if (kComponentProps) {
    for (const key of Object.keys(kComponentProps)) {
      calcProps[key] = <RecursionField schema={kComponentProps[key]} name={key} />
    }
  }

  return <Component {...props} {...calcProps} />
}
