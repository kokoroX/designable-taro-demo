import { Editor } from './components/Editor'
// import Taro from '@tarojs/taro'
import { Button } from '@antmjs/vantui'
// import { View, Button } from '@tarojs/components';

// console.log('Taro: ', Taro)
// console.log('Button: ', Button)

function App() {
  return (
    <>
      <Button onClick={() => {console.log(123)}}>123</Button>
      {/* <Editor /> */}
    </>
  )
}

export default App
