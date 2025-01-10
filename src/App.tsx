import { FormProvider } from '@formily/react'
import { SchemaField } from './formily/SchemaField'
import React, { useMemo } from 'react';
import { createForm } from '@formily/core';
// import { View, Button } from '@tarojs/components';
import schemaJson from './schema.json'
// import { Editor } from './components/Editor'
import { Editor } from '@kokoro/designable-editor/components/Editor/index.tsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('error: ', error)
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// console.log('Taro: ', Taro)

function App() {
  const form = useMemo(
    () => createForm(), []
  );

  return (
    <>
      <ErrorBoundary>
        <FormProvider form={form}>
          {/* <SchemaField schema={schemaJson} scope={{ $i18n: { t: () => '', changeLanguage: () => 1, language: 'cn' }, $campaign: {} }} /> */}
          <Editor value={schemaJson} />
        </FormProvider>
      </ErrorBoundary>
      {/* <Button style={{ background: 'red' }} onClick={() => console.log(123)}>测试</Button> */}
    </>
  )
}

export default App
