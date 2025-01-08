import React from 'react'
import {
  transformToSchema,
  transformToTreeNode,
} from '@kokoro/designable-formily-transformer'
import { TreeNode, ITreeNode } from '@kokoro/designable-core'
import { MonacoInput } from '@kokoro/designable-react-settings-form'

export interface ISchemaEditorWidgetProps {
  tree: TreeNode
  onChange?: (tree: ITreeNode) => void
}

export const SchemaEditorWidget: React.FC<ISchemaEditorWidgetProps> = (
  props
) => {
  return (
    <MonacoInput
      {...props}
      value={JSON.stringify(transformToSchema(props.tree, { designableFormName: 'Form' }), null, 2)}
      onChange={(value) => {
        props.onChange?.(transformToTreeNode(JSON.parse(value), { designableFormName: 'Form' }))
      }}
      language="json"
    />
  )
}
